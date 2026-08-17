(async () => {
   // First we will create a function that is responsible for fetching data
   const relayUrlFetch = async (urls, options) => {
      let lastError;

      for (const url of urls) {
         try {
            const response = await fetch(url, options);

            if (response.ok) {
               return response;
            }

            lastError = new Error(
               `Fetch failed: ${response.status} ${response.statusText}`,
            );

            console.warn(
               `Failed, trying next URL: ${url}`,
               lastError,
            );
         } catch (error) {
            lastError = error;
            console.warn(
               `Fetch error, trying next URL: ${url}`,
               error,
            );
         }
      }

      throw lastError;
   };

   // Then we will create a utility function to retrieve the cookie value
   const getCookie = (name = "") => {
      const cookie = document.cookie
         .split("; ")
         .find((cookie) => {
            return cookie.startsWith(
               `${encodeURIComponent(name)}=`,
            );
         });

      if (!cookie) {
         return null;
      }

      return decodeURIComponent(
         cookie.slice(cookie.indexOf("=") + 1),
      );
   };

   // Then we will create a function that is responsible for retrieving auth
   const getAuth = async () => {
      return new Promise((resolve) => {
         const data = (() => {
            let result = {};

            const acatToken = getCookie("acat");
            const acatTokenV2 = getCookie("acatv2");
            const acatTokenSessionStorage =
               window.sessionStorage.getItem("acat");
            const acatTokenSessionStorageV2 =
               window.sessionStorage.getItem("acatv2");
            const acatTokenLocalStorage =
               window.localStorage.getItem("acat");
            const acatTokenLocalStorageV2 =
               window.localStorage.getItem("acatv2");

            const catToken = getCookie("cat");
            const catTokenV2 = getCookie("catv2");
            const catTokenSessionStorage =
               window.sessionStorage.getItem("cat");
            const catTokenSessionStorageV2 =
               window.sessionStorage.getItem("catv2");
            const catTokenLocalStorage =
               window.localStorage.getItem("cat");
            const catTokenLocalStorageV2 =
               window.localStorage.getItem("catv2");

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

            for (
               let index = 0;
               index < possibleTokens.length;
               index++
            ) {
               const possibleCurrent =
                  possibleTokens[index];

               let decodedToken = "";

               try {
                  decodedToken =
                     window.atob(possibleCurrent);
               } catch (error) {
                  continue;
               }

               if (decodedToken.includes("token")) {
                  result = JSON.parse(decodedToken);
                  break;
               }
            }

            return result;
         })();

         if (!("productId" in data)) {
            data.productId = location.pathname
               .match(
                  /\/courses\/products\/([^/?#]+)/,
               )?.[1];
         }

         if (!("tokenId" in data)) {
            data.tokenId = data.token;
         }

         resolve(data);
      });
   };

   // Then we will create a function that retrieves the current product ID
   const getCurrentProductId = () => {
      return (
         location.pathname
            .match(
               /\/courses\/products\/([^/?#]+)/,
            )?.[1] || null
      );
   };

   // Then we will create a function that checks if the current route is the product dashboard
   const isProductDashboard = (
      productId = "",
   ) => {
      return (
         location.pathname.replace(/\/+$/, "") ===
         `/courses/products/${productId}`
      );
   };

   // Then we will create a function that hides the original application
   const hideOriginalApplication = () => {
      if (
         document.querySelector("#bm-course-cloak")
      ) {
         return;
      }

      document.head.insertAdjacentHTML(
         "beforeend",
         `<style id="bm-course-cloak">#__nuxt,#app{display:none!important;visibility:hidden!important}</style>`,
      );
   };

   // Then we will create a function that restores the original application
   const restoreOriginalApplication = () => {
      document
         .querySelector("#bm-course-cloak")
         ?.remove();

      const $nuxt =
         document.querySelector("#__nuxt");
      const $app =
         document.querySelector("#app");

      if ($nuxt) {
         $nuxt.style.display = "";
         $nuxt.style.visibility = "";
      }

      if ($app) {
         $app.style.display = "";
         $app.style.visibility = "";
      }
   };

   // Then we will create a function that is responsible for retrieving the product
   const fetchProduct = async (
      currentProductId = "",
   ) => {
      const auth = await getAuth();
      const productId =
         currentProductId || auth?.productId;
      const locationId = auth?.locationId;
      const token = auth?.tokenId;
      const storageName = `${productId}-product`;

      return await new Promise((resolve) => {
         const urls = [
            `https://services.leadconnectorhq.com/clientportal-middleware/memberships/locations/${locationId}/products/${productId}`,
            `https://services.leadconnectorhq.com/membership/locations/${locationId}/products/${productId}`,
         ];

         if (!token || !productId) {
            console.log(
               "No Token or Product Found!",
            );

            resolve({});
            return;
         }

         relayUrlFetch(urls, {
            headers: {
               accept:
                  "application/json, text/plain, */*",
               "accept-language":
                  "en-US,en;q=0.6",
               authorization: `Bearer ${token}`,
               channel: "APP",
               source: "PORTAL_USER",
               "x-product-id": productId,
               version: "2021-07-28",
            },
            body: null,
            method: "GET",
            priority: "high",
         })
            .then((response) => {
               return response.json();
            })
            .then((product) => {
               sessionStorage.setItem(
                  storageName,
                  JSON.stringify(product),
               );

               resolve(product);
            })
            .catch(() => {
               resolve(
                  JSON.parse(
                     sessionStorage.getItem(
                        storageName,
                     ) || "{}",
                  ),
               );
            });
      });
   };

   // Then we will create a function that removes the current theme
   const removeCourseTheme = () => {
      document
         .querySelector(".bm-theme-root")
         ?.remove();

      document
         .querySelector(".bm-editor-root")
         ?.remove();

      document
         .querySelectorAll(
            '[data-bm-product-plug="true"]',
         )
         .forEach((script) => {
            script.remove();
         });

      document
         .querySelectorAll(
            '[data-bm-product-custom-code="true"]',
         )
         .forEach((element) => {
            element.remove();
         });

      document.body.classList.remove(
         "theme-ready",
      );

      document.body.removeAttribute(
         "data-bm-theme-page",
      );

      restoreOriginalApplication();
   };

   // Then we will create a function that initializes the course theme
   const initializeCourseTheme = async () => {
      // First we will retrieve the product ID
      const productId =
         getCurrentProductId();

      // Then we will stop if the current page is not a product
      if (!productId) {
         removeCourseTheme();
         return;
      }

      // Then we will check if the theme should not load
      if (
         location.href.includes(
            "bm_theme_not_load=true",
         )
      ) {
         removeCourseTheme();
         return;
      }

      // Then we will check if the theme is already initialized
      if (
         document.querySelector(
            ".bm-theme-root",
         ) ||
         document.querySelector(
            ".bm-editor-root",
         )
      ) {
         return;
      }

      // Then we will immediately hide the original application
      hideOriginalApplication();

      // Then we will continuously prevent lesson media from playing
      const stopNativeMediaInterval =
         setInterval(() => {
            document
               .querySelectorAll(
                  "video, audio",
               )
               .forEach((media) => {
                  media.muted = true;
                  media.volume = 0;
                  media.pause();
                  media.plyr?.pause();
               });
         }, 0);

      // Then we will retrieve the product
      const product =
         await fetchProduct(productId);

      // Then we will check if the route changed while fetching
      if (
         getCurrentProductId() !== productId
      ) {
         clearInterval(
            stopNativeMediaInterval,
         );

         restoreOriginalApplication();
         return;
      }

      // Then we will retrieve the client
      // const client = product?.customHeader
      //    ?.match(
      //       /data-client=["']([^"']+)["']/i,
      //    )?.[1];
      const client = "meg-burrage";

      // Then we will restore the original application if there is no client
      if (!client) {
         clearInterval(
            stopNativeMediaInterval,
         );

         restoreOriginalApplication();
         return;
      }

      // Then we will redirect nested product routes to the product dashboard
      if (!isProductDashboard(productId)) {
         clearInterval(
            stopNativeMediaInterval,
         );

         const productURL = new URL(
            `/courses/products/${productId}`,
            location.origin,
         );

         if (
            location.href.includes(
               "membershipeditor=true",
            )
         ) {
            productURL.searchParams.set(
               "membershipeditor",
               "true",
            );
         }

         location.replace(productURL.href);
         return;
      }

      // Then we will check if it is a new client portal
      const isNewClientPortal =
         document.querySelector(
            ".cp-root-shell",
         );

      // Then we will create the product script
      const script =
         document.createElement("script");

      script.src =
         "https://membershipeditor.netlify.app/src/productPlug.js";

      script.setAttribute(
         "data-client",
         client,
      );

      script.setAttribute(
         "data-bm-product-plug",
         "true",
      );

      // Then we will check if the membership editor is enabled
      if (
         location.href.includes(
            "membershipeditor=true",
         )
      ) {
         // First we will create the editor root
         document.body.insertAdjacentHTML(
            "afterbegin",
            `<div class="bm-editor-root"></div>`,
         );

         // Finally we will remove the original application
         if (isNewClientPortal) {
            document
               .querySelector("#__nuxt")
               ?.remove();
         } else {
            document
               .querySelector("#app")
               ?.remove();
         }
      } else {
         // Otherwise we will create the theme root
         document.body.insertAdjacentHTML(
            "afterbegin",
            `<div class="bm-theme-root loading">
               <div class="bm-theme-root__container">
                  <div class="bm-theme-root__container__page"></div>
               </div>
            </div>`,
         );

         // Then if it is a new client portal we will insert the CSS and JS
         if (isNewClientPortal) {
            if (product?.customCss) {
               const $styleTag =
                  document.createElement("style");

               $styleTag.setAttribute(
                  "data-bm-product-custom-code",
                  "true",
               );

               $styleTag.innerHTML =
                  product.customCss;

               document.head.append(
                  $styleTag,
               );
            }

            if (product?.customJs) {
               const $scriptTag =
                  document.createElement(
                     "script",
                  );

               $scriptTag.setAttribute(
                  "data-bm-product-custom-code",
                  "true",
               );

               $scriptTag.innerHTML =
                  product.customJs;

               document.body.append(
                  $scriptTag,
               );
            }

            // Then we will hide the original Nuxt application
            const $nuxt =
               document.querySelector(
                  "#__nuxt",
               );

            if ($nuxt) {
               $nuxt.style.display = "none";
               $nuxt.style.visibility =
                  "hidden";
            }
         } else {
            // Then we will hide the original application
            const $app =
               document.querySelector("#app");

            if ($app) {
               $app.style.display = "none";
               $app.style.visibility =
                  "hidden";
            }
         }
      }

      // Then we will stop monitoring the original media
      clearInterval(
         stopNativeMediaInterval,
      );

      // Then we will mark the theme as ready
      document.body.classList.add(
         "theme-ready",
      );

      // Finally we will load the client script
      document.head.append(script);
   };

   // Then we will initialize the current route
   await initializeCourseTheme();

   // Finally we will observe SPA URL changes
   let previousURL = location.href;

   const routeObserver =
      new MutationObserver(() => {
         if (
            previousURL === location.href
         ) {
            return;
         }

         previousURL = location.href;

         setTimeout(() => {
            initializeCourseTheme();
         }, 100);
      });

   routeObserver.observe(
      document.documentElement,
      {
         childList: true,
         subtree: true,
      },
   );

   window.addEventListener(
      "popstate",
      () => {
         if (
            previousURL === location.href
         ) {
            return;
         }

         previousURL = location.href;

         setTimeout(() => {
            initializeCourseTheme();
         }, 100);
      },
   );
})();