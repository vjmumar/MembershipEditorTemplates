(async () => {
   // First we will retrieve the product ID from the URL
   const getCurrentProductId = () => {
      return location.pathname
         .match(/\/courses\/products\/([^/?#]+)/)?.[1] || null;
   };

   // Then we will initialize the course theme
   const initializeCourseTheme = async () => {
      // First we will retrieve the product ID
      const productId = getCurrentProductId();

      // Then we will check if the current page is a product
      if (
         !productId ||
         location.href.includes("bm_theme_not_load=true")
      ) {
         return;
      }

      // Then we will check if the theme is already initialized
      if (
         document.querySelector(".bm-theme-root") ||
         document.querySelector(".bm-editor-root")
      ) {
         return;
      }

      // Then we will retrieve the product
      const product = await fetchProduct(productId);

      // Then we will retrieve the client
      const client = product?.customHeader
         ?.match(/data-client=["']([^"']+)["']/i)?.[1];

      // Then we will stop if the product does not use our theme
      if (!client) {
         return;
      }

      // Then we will check if the user is still viewing the same product
      if (getCurrentProductId() !== productId) {
         return;
      }

      // Then we will retrieve the current client portal
      const isNewClientPortal =
         document.querySelector(".cp-root-shell");

      // Then we will create the product script
      const script = document.createElement("script");
      script.src =
         "https://membershipeditor.netlify.app/src/productPlug.js";
      script.setAttribute("data-client", client);
      script.setAttribute("data-bm-product-plug", "true");

      // Then we will initialize the editor or theme
      if (location.href.includes("membershipeditor=true")) {
         document.body.insertAdjacentHTML(
            "afterbegin",
            `<div class="bm-editor-root"></div>`,
         );

         if (isNewClientPortal) {
            document.querySelector("#__nuxt")?.remove();
         } else {
            document.querySelector("#app")?.remove();
         }
      } else {
         document.body.insertAdjacentHTML(
            "afterbegin",
            `<div class="bm-theme-root loading">
               <div class="bm-theme-root__container">
                  <div class="bm-theme-root__container__page"></div>
               </div>
            </div>`,
         );

         const $originalApp = isNewClientPortal
            ? document.querySelector("#__nuxt")
            : document.querySelector("#app");

         if ($originalApp) {
            $originalApp.style.display = "none";
            $originalApp.style.visibility = "hidden";
         }
      }

      // Then we will mark the theme as ready
      document.body.classList.add("theme-ready");

      // Finally we will load the product script
      document.head.append(script);
   };

   // Then we will initialize the current route
   await initializeCourseTheme();

   // Finally we will observe SPA navigation
   let previousURL = location.href;

   const routeObserver = new MutationObserver(() => {
      if (previousURL === location.href) {
         return;
      }

      previousURL = location.href;

      setTimeout(() => {
         initializeCourseTheme();
      }, 100);
   });

   routeObserver.observe(document.documentElement, {
      childList: true,
      subtree: true,
   });

   window.addEventListener("popstate", () => {
      setTimeout(() => {
         initializeCourseTheme();
      }, 100);
   });
})();