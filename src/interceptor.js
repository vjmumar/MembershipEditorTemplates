class ProductProxy {
   constructor(request) {
      this.request = request;
      this.ghlPreviewId = "datkpik46teouarhlbpy";
      this.url = new URL(this.request.url);
      this.origin = `https://${this.ghlPreviewId}.app.clientclub.net`;
      this.isProduct = this.url.href.includes("/courses/products");
      this.defaultLoaderHTML = `<script src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.10/dist/dotlottie-wc.js" type="module"></script><style>.loading-overlay{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;opacity:1;visibility:visible;transition:opacity 250ms ease,visibility 250ms ease;}body.template-ready .loading-overlay{opacity:0;visibility:hidden;pointer-events:none;}.loading-overlay__container{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;background-color:#fefeff;}</style><div class="loading-overlay"><div class="loading-overlay__container"><dotlottie-wc src="https://lottie.host/1c2d9b25-9488-44b7-8bbb-a3c60c0b08d9/fafNfOpbeD.lottie" style="width:200px;height:200px" autoplay loop></dotlottie-wc></div></div>`;
   }

   // This object holds data related methods
   data = {
      retrieveGHL: async () => {
         return await fetch(`${this.origin}${this.url.pathname}${this.url.search}`, {
            method: this.request.method,
            headers: {
               ...Object.fromEntries(this.request.headers),
               host: this.origin,
            },
         });
      },
      retrieveGHLProduct: async () => {
         const auth = this.utils.getGhlAuth();
         const url = `https://services.leadconnectorhq.com/membership/locations/${auth.locationId}/products/${auth.productId}`;
         return await fetch(url, {
            headers: {
               "accept": "application/json, text/plain, */*",
               "accept-language": "en-US,en;q=0.6",
               "authorization": `Bearer ${auth?.tokenId}`,
               "channel": "APP",
            },
            body: null,
            method: "GET",
         }).then((e) => e.json());
      },
      getLoaderHTML: async () => {
         try {
            // First we will create the necessary variables
            const product = await this.data.retrieveGHLProduct();
            const clientId = (() => {
               const match = String(product?.customHeader || "").match(
                  /MEMBERSHIP_CUSTOMIZER_CLIENT_ID\s*=\s*["'`]([^"'`]+)["'`]/,
               );
               return match?.[1] || null;
            })();

            // Then we will check if the client id is valid or not, if not then we will return the default loader
            if (!clientId)
               return `<script>setTimeout(() => {document.body.classList.add('template-ready')}, 10000)</script>${this.defaultLoaderHTML}`;

            // Then we will create a variables that is responsible for retrieving the saved templates and the current active saved template
            const savedTemplates = await (async () => {
               let result = [];
               const match = String(product?.customJs || "").match(
                  /window\.savedTemplatesFileInfo\s*=\s*({[\s\S]*?})\s*;?/,
               );
               if (!match) return result;
               try {
                  const savedTemplateFilesInfo = JSON.parse(match?.[1] || "{}");
                  if (savedTemplateFilesInfo?.url) {
                     const templates = await fetch(savedTemplateFilesInfo.url, {
                        priority: "high",
                     })
                        .then((e) => e.text())
                        .then((e) =>
                           e
                              .replace(/^var\s+s\s*=\s*/, "")
                              .replace(/;\s*window\.activeTemplatesConfig[\s\S]*$/, ""),
                        );
                     result = JSON.parse(templates || "[]");
                  }
               } catch (error) {
                  result = [];
               }
               return result.map((e) => ({
                  ...e,
                  customCss: [],
                  customFonts: [],
                  googleFontsUsed: [],
                  placeholderThumbnail: [],
                  branding: [],
                  global: e?.global?.map((g) => (g.name === "Loading Overlay" ? g : [])),
                  pages: [],
                  mobilePages: [],
               }));
            })();
            const activeSavedTemplates = savedTemplates.find(
               (template) => template.isActive,
            );

            // Then we will create a variable the is responsbile for retrieving the client templates
            const clientTemplates = await fetch(
               `https://membershipeditor.netlify.app/src/clientTemplates/${clientId}/templates.json`,
            ).then((e) => e.json());

            // Then we will create a variable that is responsible for retrieving the active default template
            const activeDefaultTemplate = await (async () => {
               const activeSavedTemplate = savedTemplates.find((t) => t?.isActive) || {};
               const activeClientTemplate = clientTemplates.find(
                  (t) => t?.id === activeSavedTemplate?.id,
               );
               const defaultTemplateUrl =
                  (activeClientTemplate || clientTemplates?.[0])?.scriptLink || "";
               const safeJsonParse = (value, fallback = null) => {
                  try {
                     return JSON.parse(value);
                  } catch (err) {
                     console.error("JSON.parse failed for value:", value, err);
                     return fallback;
                  }
               };
               return await fetch(defaultTemplateUrl)
                  .then((res) => {
                     if (!res.ok)
                        throw new Error(
                           `Template fetch failed: ${res.status} ${res.statusText}`,
                        );
                     return res.text();
                  })
                  .then((e) => {
                     const config = e.match(
                        /window\.templateCustomizationSchema\s*=\s*([\s\S]*?);\s*class\s+CourseTemplate/,
                     )?.[1];
                     const getStringValue = (key) =>
                        config?.match(new RegExp(`${key}:\\s*\\n?\\s*"([^"]*)"`))?.[1] ||
                        "";
                     const getArrayValue = (key) =>
                        safeJsonParse(
                           config?.match(
                              new RegExp(`${key}:\\s*(\\[[\\s\\S]*?\\])`),
                           )?.[1] || "[]",
                           [],
                        );
                     const toJson = (value = "") =>
                        value
                           .replace(/([{,]\s*)([A-Za-z_$][\w$]*)\s*:/g, '$1"$2":')
                           .replace(/,\s*([}\]])/g, "$1");
                     const loadingOverlayConfig = config
                        ?.match(
                           /global:\s*\[\s*([\s\S]*?)\n\s*{\s*\n\s*name:\s*"Navbar"/,
                        )?.[1]
                        ?.replace(/,\s*$/, "");
                     const parsedGlobal = loadingOverlayConfig
                        ? safeJsonParse(toJson(loadingOverlayConfig))
                        : null;
                     return {
                        name: getStringValue("name"),
                        id: getStringValue("id"),
                        customCss: getStringValue("customCss"),
                        customFonts: getArrayValue("customFonts"),
                        googleFontsUsed: getArrayValue("googleFontsUsed"),
                        placeholderThumbnail: getStringValue("placeholderThumbnail"),
                        branding: [],
                        global: parsedGlobal ? [parsedGlobal] : [],
                        pages: [],
                        mobilePages: [],
                     };
                  })
                  .catch((err) => {
                     console.error("Template fetch/parse error:", err);
                     return [];
                  });
            })();

            // Finally we will process the configs and return the templates loader html
            const loadingConfig =
               activeSavedTemplates?.global?.find(
                  (item) => item?.name === "Loading Overlay",
               ) || activeDefaultTemplate?.global?.[0];
            const loadingHTML = (() => {
               const getCustomization = (selector = "") =>
                  loadingConfig?.customizations?.find(
                     (item) => item?.elementSelector === selector,
                  );
               const getCss = (customization = {}, property = "") =>
                  customization?.cssCustomizations?.find(
                     (item) => item?.property === property,
                  );
               const getElement = (customization = {}, target = "") =>
                  customization?.elementCustomizations?.find(
                     (item) => item?.target === target,
                  );
               const cssDecl = (property = "", c = {}) =>
                  c?.value
                     ? `${property}: ${c.value}${c.important ? " !important" : ""};`
                     : "";
               const containerConfig = getCustomization(".loading-overlay__container");
               const logoConfig = getCustomization(".loading-overlay__logo");
               const bottomTextConfig = getCustomization(".loading-overlay__bottom-text");
               const logoSrc = getElement(logoConfig, "src")?.value || "";
               const bottomTextHTML = getElement(bottomTextConfig, "")?.value || "";
               const containerStyles = cssDecl(
                  "background-color",
                  getCss(containerConfig, "background-color"),
               );
               const logoStyles = [
                  cssDecl("width", getCss(logoConfig, "width")),
                  cssDecl("height", getCss(logoConfig, "height")),
               ]
                  .filter(Boolean)
                  .join(" ");
               return `<style>@keyframes logo-pulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.4;transform:scale(0.95);}}.loading-overlay{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;opacity:1;visibility:visible;transition:opacity 250ms ease,visibility 250ms ease;}body.template-ready .loading-overlay{opacity:0;visibility:hidden;pointer-events:none;}.loading-overlay__container{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;background-color:#fefeff;${containerStyles}}.loading-overlay__logo{display:block;max-width:min(200px,80vw);height:auto;object-fit:contain;animation:logo-pulse 1.8s ease-in-out infinite;${logoStyles}}.loading-overlay__bottom-text{text-align:center;}</style>
                  <div class="loading-overlay">
                    <div class="loading-overlay__container">
                      ${logoSrc ? `<img class="loading-overlay__logo" src="${logoSrc}" alt="" />` : ""}
                      ${bottomTextHTML ? `<div class="loading-overlay__bottom-text">${bottomTextHTML}</div>` : ""}
                    </div>
                  </div>`;
            })();
            return loadingHTML;
         } catch (err) {
            return this.defaultLoaderHTML;
         }
      },
   };

   // This object holds utilit related methods
   utils = {
      getCookie: (name = "") => {
         const cookie = this.request.headers.get("Cookie");
         return cookie
            ?.split(";")
            ?.map((part) => part.trim())
            ?.find((part) => part.split("=")[0] === name)
            ?.split("=")
            ?.slice(1)
            ?.join("=")
            ?.trim();
      },
      decodeToken: (token = "") => {
         if (!token) return null;
         try {
            const decoded = atob(decodeURIComponent(token));
            return JSON.parse(decoded);
         } catch (error) {
            console.error("Invalid token cookie", error);
            return null;
         }
      },
      getGhlAuth: () => {
         const acat = this.utils.getCookie("acat");
         const cat = this.utils.getCookie("cat");
         const token = cat || acat;
         const tokenJson = this.utils.decodeToken(token);
         const productId =
            this.utils.getCookie("productId") ||
            this.url.pathname.split("/courses/products/")[1]?.split("/")[0];
         const locationId =
            tokenJson?.locationId ||
            this.utils.getCookie("locationId") ||
            this.ghlPreviewId;
         return { ...tokenJson, productId, locationId };
      },
      toScriptJson: (value) => {
         const json = JSON.stringify(value);
         return json === undefined ? "undefined" : json.replace(/</g, "\\u003c");
      },
   };
}

export default {
   async fetch(request) {
      const proxy = new ProductProxy(request);
      const ghlResponse = await proxy.data.retrieveGHL();
      const contentType = ghlResponse.headers.get("content-type") || "";
      if (contentType.includes("text/html")) {
         let html = await ghlResponse.text();
         let script = "";
         let loader = "";
         if (proxy.isProduct) {
            const auth = proxy.utils.getGhlAuth();
            loader = auth?.tokenId
               ? await proxy.data.getLoaderHTML()
               : proxy.defaultLoaderHTML;
            script = `
                  <script>
                     const url = "${proxy?.url?.href}";
                     const auth = ${proxy.utils.toScriptJson(auth)};
                     const fetchProduct = async () => {
                        return await new Promise((resolved, reject) => {
                           const url = 'https://services.leadconnectorhq.com/membership/locations/' + auth.locationId + '/products/' + auth.productId;
                           fetch(url, {
                              headers: {
                                 "accept": "application/json, text/plain, */*",
                                 "accept-language": "en-US,en;q=0.6",
                                 "authorization": 'Bearer ' + auth?.tokenId,
                                 "channel": "APP",
                              },
                              priority: 'high',
                              body: null,
                              method: "GET",
                           })
                           ?.then((e) => e.json())
                           ?.then((e) => resolved(e));
                        });
                     };
                     if (url.includes('/products/')) {
                        setTimeout(() => document.body.classList.add("template-ready"), 60000);
                        fetchProduct().then((data) => {
                           const parser = new DOMParser();
                           const doc = parser.parseFromString(data.customHeader, 'text/html');
                           const parsed = doc.querySelector('script');
                           const $headerScript = document.createElement('script');
                           const $customJsScript = document.createElement('script');
                           $headerScript.innerHTML = parsed?.innerHTML;
                           $customJsScript.innerHTML = data?.customJs;
                           document.body.append($customJsScript, $headerScript);
                        });
                     }
                  </script>
               `;
         } else {
            loader = `<script>setTimeout(() => {document.body.classList.add('template-ready')}, 1000)</script>${proxy.defaultLoaderHTML}`;
         }
         html = html
            .replace("<head>", `<head>${script}`)
            .replace("<body>", `<body>${loader}`);
         return new Response(html, {
            status: ghlResponse.status,
            headers: { "content-type": "text/html" },
         });
      }
      return ghlResponse;
   },
};
