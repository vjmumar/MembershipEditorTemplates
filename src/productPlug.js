// First we will retrieve the current script and its client identifier
var $currentScript = document.currentScript;
var client = $currentScript.getAttribute("data-client");

// Then we will define the version used by each membership component
var version = {
   editor: "v1",
   parser: "v1",
   previwer: "v1",
};

// Finally we will initialize the membership customizer
(async () => {
   // First we will prevent the customizer from initializing more than once
   if (!window.MEMBERSHIP_CUSTOMIZER_CLIENT_ID) {
      // Then we will store the current client identifier
      window.MEMBERSHIP_CUSTOMIZER_CLIENT_ID = client;

      // Then we will create the default variables
      const baseURL = "https://membershipeditor.netlify.app";
      const isPreview = location.href.includes("isEditorPreview=true");
      const isEdit = location.href.includes("membershipeditor=true");

      // First we will initialize the parser
      (async () => {
         // First we will create and insert the parser script
         const scriptTag = document.createElement("script");
         scriptTag.src = `${baseURL}/src/parser/${version.parser}.js`;
         document.head.append(scriptTag);

         // Then we will wait for the parser script to load
         await new Promise((res) => {
            scriptTag.onload(() => {
               // First we will resolve the promise
               res(true);

               // Then we will initialize the membership parser
               window.MembershipParser = new MembershipParser();

               // Finally we will mark the template as ready
               setTimeout(() => {
                  document.body.classList.add("template-ready");
               }, 1000);
            });
         });
      })();

      // Then we will initialize the previewer
      if (isPreview) {
         // First we will create and insert the previewer script
         const scriptTag = document.createElement("script");
         scriptTag.src = `${baseURL}/src/previewer/${version.previwer}.js`;
         document.head.append(scriptTag);

         // Then we will wait for the previewer script to load
         await new Promise((res) => {
            scriptTag.onload(() => {
               // First we will resolve the promise
               res(true);

               // Finally we will initialize the membership preview
               window.MembershipPreview = new MembershipPreview();
            });
         });
      }

      // Then we will initialize the editor
      if (isEdit) {
         // First we will retrieve the editor HTML
         fetch(`${baseURL}/src/editor/${version.editor}.html`, {
            priority: "high",
         })
            ?.then((r) => r.text())
            ?.then((h) => {
               // First we will create a temporary editor container
               let d = document.createElement("div");
               d.innerHTML = h;

               // Then we will insert the editor elements and styles
               d.querySelectorAll("style,link,div,section").forEach((e) =>
                  document.head.append(e),
               );

               // Finally we will create and insert the editor scripts
               d.querySelectorAll("script").forEach((s) => {
                  let sc = document.createElement("script");
                  sc.src =
                     s.src ||
                     URL.createObjectURL(
                        new Blob([s.textContent], { type: "text/javascript" }),
                     );
                  document.head.append(sc);
               });
            });
      }
   }
})();
