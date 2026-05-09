class ProductProxy {
   constructor(request) {
      this.request = request;
      this.ghlPreviewId = "datkpik46teouarhlbpy";
      this.url = new URL(this.request.url);
      this.origin = `https://${this.ghlPreviewId}.app.clientclub.net`;
      this.isProduct = this.url.href.includes("/courses/products");
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
         const productRes = await fetch(url, {
            headers: {
               "accept": "application/json, text/plain, */*",
               "accept-language": "en-US,en;q=0.6",
               "authorization": `Bearer ${auth?.tokenId}`,
               "channel": "APP",
            },
            body: null,
            method: "GET",
         })
            .then((e) => e.json())
            .then((e) => {
               return e;
            });
         return productRes;
      },
      getLoaderHTML: async () => {
         try {
            const product = await this.data.retrieveGHLProduct();
            const clientId = (() => {
               const match = String(product?.customHeader || "").match(
                  /MEMBERSHIP_CUSTOMIZER_CLIENT_ID\s*=\s*["'`]([^"'`]+)["'`]/,
               );
               return match?.[1] || null;
            })();
            const savedTemplates = await (async () => {
               let result = [];
               const match = String(product?.customJs || "")?.match(
                  /window\.savedTemplatesFileInfo\s*=\s*({[\s\S]*?})\s*;?/,
               );
               if (!match) {
                  result = [];
               }
               try {
                  const savedTemplateFilesInfo = JSON?.parse(match?.[1] || "{}");
                  if (savedTemplateFilesInfo?.url) {
                     const templates = await fetch(savedTemplateFilesInfo?.url, {
                        priority: "high",
                     })
                        ?.then((e) => e?.text())
                        ?.then((e) => {
                           return e
                              ?.replace(/^var\s+s\s*=\s*/, "")
                              ?.replace(/;\s*window\.activeTemplatesConfig[\s\S]*$/, "");
                        });
                     result = JSON.parse(templates || "[]");
                  } else {
                     result = [];
                  }
               } catch (error) {
                  result = [];
               }
               result = result.map((e) => {
                  return {
                     ...e,
                     customCss: [],
                     customFonts: [],
                     googleFontsUsed: [],
                     placeholderThumbnail: [],
                     branding: [],
                     global: e?.global?.map((g) => {
                        if (g.name === "Loading Overlay") {
                           return g;
                        }
                        return [];
                     }),
                     pages: [],
                     mobilePages: [],
                  };
               });
               return result;
            })();
            const activeSavedTemplates = savedTemplates.find(
               (template) => template.isActive,
            );
            const clientTemplates = await fetch(
               `https://membershipeditor.netlify.app/src/clientTemplates/${clientId}/templates.json`,
            )
               ?.then((e) => e.json())
               ?.then((e) => {
                  return e;
               });
            const activeDefaultTemplate = await (async () => {
               const activeSavedTemplate =
                  savedTemplates?.find((template) => template?.isActive) || {};
               const defaultTemplateUrl = (() => {
                  const activeClientTemplate = clientTemplates.find(
                     (template) => template?.id === activeSavedTemplate?.id,
                  );
                  return (activeClientTemplate || clientTemplates?.[0])?.scriptLink || "";
               })();
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
                     if (!res.ok) {
                        throw new Error(
                           `Template fetch failed: ${res.status} ${res.statusText}`,
                        );
                     }
                     return res.text();
                  })
                  .then((e) => {
                     const config = e.match(
                        /window\.templateCustomizationSchema\s*=\s*([\s\S]*?);\s*class\s+CourseTemplate/,
                     )?.[1];
                     const getStringValue = (key) => {
                        return (
                           config?.match(
                              new RegExp(`${key}:\\s*\\n?\\s*"([^"]*)"`),
                           )?.[1] || ""
                        );
                     };
                     const getArrayValue = (key) => {
                        return safeJsonParse(
                           config?.match(
                              new RegExp(`${key}:\\s*(\\[[\\s\\S]*?\\])`),
                           )?.[1] || "[]",
                           [],
                        );
                     };
                     const toJson = (value = "") => {
                        return value
                           .replace(/([{,]\s*)([A-Za-z_$][\w$]*)\s*:/g, '$1"$2":')
                           .replace(/,\s*([}\]])/g, "$1");
                     };
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
            const loadingConfig = (() => {
               return (
                  activeSavedTemplates?.global?.find(
                     (item) => item?.name === "Loading Overlay",
                  ) || activeDefaultTemplate?.global?.[0]
               );
            })();
            const getCustomization = (selector = "") => {
               return loadingConfig?.customizations?.find(
                  (item) => item?.elementSelector === selector,
               );
            };
            const getCssCustomization = (customization = {}, property = "") => {
               return customization?.cssCustomizations?.find(
                  (item) => item?.property === property,
               );
            };
            const getElementCustomization = (customization = {}, target = "") => {
               return customization?.elementCustomizations?.find(
                  (item) => item?.target === target,
               );
            };
            const cssDeclaration = (property = "", customization = {}) => {
               const value = customization?.value || "";
               if (!property || !value) return "";
               return `${property}: ${value}${customization?.important ? " !important" : ""};`;
            };
            const escapeAttribute = (value = "") => {
               return String(value)
                  .replace(/&/g, "&amp;")
                  .replace(/"/g, "&quot;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;");
            };
            const containerConfig = getCustomization(".loading-overlay__container");
            const logoConfig = getCustomization(".loading-overlay__logo");
            const bottomTextConfig = getCustomization(".loading-overlay__bottom-text");
            const logoSrc = getElementCustomization(logoConfig, "src")?.value || "";
            const bottomTextHTML =
               getElementCustomization(bottomTextConfig, "")?.value || "";
            const containerStyles = [
               cssDeclaration(
                  "background-color",
                  getCssCustomization(containerConfig, "background-color"),
               ),
            ]
               .filter(Boolean)
               .join(" ");
            const logoStyles = [
               cssDeclaration("width", getCssCustomization(logoConfig, "width")),
               cssDeclaration("height", getCssCustomization(logoConfig, "height")),
            ]
               ?.filter(Boolean)
               ?.join(" ");
            return `
               <style>
                  .loading-overlay {
                     position: fixed;
                     inset: 0;
                     z-index: 2147483647;
                     display: flex;
                     align-items: center;
                     justify-content: center;
                     opacity: 1;
                     visibility: visible;
                     transition: opacity 250ms ease, visibility 250ms ease;
                  }
                  body.template-ready .loading-overlay {
                     opacity: 0;
                     visibility: hidden;
                     pointer-events: none;
                  }
                  .loading-overlay__container {
                     width: 100%;
                     height: 100%;
                     display: flex;
                     flex-direction: column;
                     align-items: center;
                     justify-content: center;
                     gap: 18px;
                     background-color: #FEFEFF;
                     ${containerStyles}
                  }
                  .loading-overlay__logo {
                     display: block;
                     max-width: min(220px, 80vw);
                     height: auto;
                     object-fit: contain;
                     ${logoStyles}
                  }
                  .loading-overlay__bottom-text {
                     text-align: center;
                  }
               </style>
               <div class="loading-overlay">
                  <div class="loading-overlay__container">
                     ${
                        logoSrc
                           ? `<img class="loading-overlay__logo" src="${escapeAttribute(logoSrc)}" alt="" />`
                           : ""
                     }
                     ${
                        bottomTextHTML
                           ? `<div class="loading-overlay__bottom-text">${bottomTextHTML}</div>`
                           : ""
                     }
                  </div>
               </div>
            `;
         } catch (err) {
            return "";
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
         const locationId = this.utils.getCookie("locationId");
         return {
            ...tokenJson,
            productId,
            locationId,
         };
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
            const coolLoader = await proxy.data.getLoaderHTML();
            loader = coolLoader || "";
            const ghlProduct = await proxy.data.retrieveGHLProduct();
            script = `
                  <script src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.10/dist/dotlottie-wc.js" type="module"></script>
                  <script>
                     const url = ${proxy.utils.toScriptJson(proxy.url.href)};
                     const auth = ${proxy.utils.toScriptJson(auth)};
                     var ghlProduct = ${proxy.utils.toScriptJson(ghlProduct)};
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
                                    "priority": 'high',
                                    body: null,
                                    method: "GET",
                                 })
                                 ?.then((e) => e.json())
                                 ?.then((e) => {
                                    resolved(e);
                                 });
                           });
                        };
                     if (url.includes('/products/')) {               
                        setTimeout(()=>document.body.classList.add("template-ready"),60000);
                        fetchProduct().then((data) => {
                           data = data || ghlProduct;
                           const parser = new DOMParser();
                           const doc = parser.parseFromString(data.customHeader, 'text/html');
                           const parsed = doc.querySelector('script');
                           const $headerScript = document.createElement('script');
                           const $customJsScript = document.createElement('script');
                           $headerScript.innerHTML = parsed?.innerHTML;
                           $customJsScript.innerHTML = data?.customJs;
                           document.body.append($customJsScript,$headerScript);
                           console.log('-');
                        });
                     }
                  </script>
               `;
         }
         const css = "";
         html = html
            .replace("<head>", `<head>${css}${script}`)
            .replace("<body>", `<body>${loader}`);
         return new Response(html, {
            status: ghlResponse.status,
            headers: { "content-type": "text/html" },
         });
      }
      return ghlResponse;
   },
};
