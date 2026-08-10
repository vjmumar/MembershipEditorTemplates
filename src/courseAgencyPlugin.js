// First we will create a function that is responsible for fetching data
const relayUrlFetch = async (urls, options) => {
   let lastError;
   for (const url of urls) {
      try {
         const response = await fetch(url, options);
         if (response.ok) {
            return response;
         }
         lastError = new Error(`Fetch failed: ${response.status} ${response.statusText}`);
         console.warn(`Failed, trying next URL: ${url}`, lastError);
      } catch (error) {
         lastError = error;
         console.warn(`Fetch error, trying next URL: ${url}`, error);
      }
   }
   throw null;
};

// Then we will create a function that is responsible for retrieving auth
const getAuth = async () => {
   return new Promise((res) => {
      const data = (() => {
         let result = {};
         const acatToken = window?.$cookies?.get("acat");
         const acatTokenV2 = window?.$cookies?.get("acatv2");
         const acatTokenSessionStorage = window.sessionStorage.getItem("acat");
         const acatTokenSessionStorageV2 = window.sessionStorage.getItem("acatv2");
         const acatTokenLocalStorage = window.localStorage.getItem("acat");
         const acatTokenLocalStorageV2 = window.localStorage.getItem("acatv2");
         const catToken = window?.$cookies?.get("cat");
         const catTokenV2 = window?.$cookies?.get("catv2");
         const catTokenSessionStorage = window.sessionStorage.getItem("cat");
         const catTokenSessionStorageV2 = window.sessionStorage.getItem("catv2");
         const catTokenLocalStorage = window.localStorage.getItem("cat");
         const catTokenLocalStorageV2 = window.localStorage.getItem("catv2");
         const possibleTokens = [
            catTokenV2,
            catToken,
            acatToken,
            acatTokenV2,
            catTokenSessionStorage,
            catTokenSessionStorageV2,
            acatTokenSessionStorage,
            acatTokenLocalStorage,
            acatTokenSessionStorageV2,
            acatTokenLocalStorageV2,
            catTokenLocalStorageV2,
            catTokenLocalStorage,
         ];
         for (let i = 0; i < possibleTokens.length; i++) {
            const possibleCurrent = possibleTokens[i];
            let atob = "";
            try {
               atob = window.atob(possibleCurrent);
            } catch (err) {
               continue;
            }
            if (atob.includes("token")) {
               result = JSON.parse(atob);
               break;
            }
         }
         return result;
      })();
      if (!("productId" in data)) {
         const url = location.href?.split("/products/")[1]?.split("/")[0]?.split("?")[0];
         data.productId = url;
      }
      if (!("tokenId" in data)) {
         data.tokenId = data.token;
      }
      res(data);
   });
};

// Then we will create a function that is responsible for retrieving the product
const fetchProduct = async () => {
   const auth = await getAuth();
   const productId = auth?.productId;
   const locationId = auth?.locationId;
   const token = auth?.tokenId;
   const contactId = auth?.contactId;
   const userId = auth?.externalUserId;
   const storageName = `${productId}-product`;
   const previousData = JSON.parse(sessionStorage.getItem(storageName) || "{}");
   return await new Promise((resolved, reject) => {
      const url = [
         `https://services.leadconnectorhq.com/clientportal-middleware/memberships/locations/${locationId}/products/${productId}`,
         `https://services.leadconnectorhq.com/membership/locations/${locationId}/products/${productId}`,
      ];
      if (token) {
         relayUrlFetch(url, {
            headers: {
               "accept": "application/json, text/plain, */*",
               "accept-language": "en-US,en;q=0.6",
               "authorization": `Bearer ${token}`,
               "channel": "APP",
               "source": "PORTAL_USER",
               "x-product-id": productId,
               "version": "2021-07-28",
            },
            body: null,
            method: "GET",
            priority: "high",
         })
            .then((e) => e.json())
            .then((e) => {
               resolved(e);
               sessionStorage.setItem(storageName, JSON.stringify(e));
            })
            .catch((e) => {
               resolved({});
            });
      } else {
         console.log("No Token Found! Product!");
      }
   });
};

// Finally we will create an initializer
(async () => {
    alert("cool");
   // First we will retrieve the product
   const product = await fetchProduct();

   // Then we will retrieve the client
   const client = product.customHeader?.match(/data-client=["']([^"']+)["']/i)?.[1];

   // Then we will check if it is an old theme
   const isOldTheme = document.querySelector(".cp-root-shell");

   // Finally we will process it if client is present
   if (client) {
      // First we will create the script tag
      const script = document.createElement("script");
      script.src = "https://membershipeditor.netlify.app/src/productPlug.js";
      script.setAttribute("data-client", client);

      // If the membership editor is enabled
      if (location.href.includes("membershipeditor=true")) {
         // First we will create the editor root
         document.body.insertAdjacentHTML(
            "afterbegin",
            `<div class="bm-editor-root"></div>`,
         );

         // Finally we will remove the original Nuxt application if it is an old theme, else remove the app
         if (isOldTheme) {
            const $nuxt = document.querySelector("#__nuxt");
            $nuxt.remove();
         } else {
            const $app = document.querySelector("#app");
            $app.remove();
         }
      } else {
         // Otherwise we will create the theme root
         document.body.insertAdjacentHTML(
            "afterbegin",
            `<div class="bm-theme-root">
                <div class="bm-theme-root__container"></div>
            </div>`,
         );

         // Then if it is an old theme then we will insert the css and js
         if (isOldTheme) {
            const $styleTag = document.querySelector("style")
            const $scriptTag = document.createElement("script");
            $scriptTag.innerHTML = product.customJs;
            $styleTag.innerHTML = product.customCss;
            document.body.append($scriptTag);
            document.body.append($styleTag)
            // Then we will hide the original Nuxt application
            const $nuxt = document.querySelector("#__nuxt");
            $nuxt.style.display = "none";
            $nuxt.style.visibility = "hidden";
         } else {
            const $app = document.querySelector("#app");
            $app.style.display = "none";
            $app.style.visibility = "hidden";
         }
         
      }

      // Then we will mark the theme as ready
      document.body.classList.add("theme-ready");

      // Finally we will load the client script
      document.head.append(script);
   }
})();
