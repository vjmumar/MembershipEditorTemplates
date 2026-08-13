class MembershipParser {
   constructor() {
      // First, we define the available templates along with their metadata, such as IDs, preview images, and script sources.
      this.templates = [];
      this.originalTemplateCustomizationSchema = null;
      this.activeTemplate = null;
      this.activePageOnTemplate = null;
      this.isDesktop = window.matchMedia("(min-width: 768px)").matches;

      // Finally, we start the process of initializing the application and fetching the client's active templates.
      (async () => {
         // First, we retrieve the client's available templates from the remote source.
         await fetch(
            `https://membershipeditor.netlify.app/src/clientTemplates/${window.MEMBERSHIP_CUSTOMIZER_CLIENT_ID}/templates.json`,
            {
               priority: "high",
            },
         )
            ?.then((e) => e.json())
            ?.then((e) => {
               this.templates = e;
            });

         // Then, we retrieve any saved template changes from media storage and inject them into the document.
         if (window?.savedTemplatesFileInfo?.url) {
            await fetch(window?.savedTemplatesFileInfo?.url, {
               priority: "high",
            })
               ?.then((e) => e.text())
               ?.then((e) => {
                  const script = document.createElement("script");
                  script.innerHTML = e;
                  document.body.append(script);
                  return e;
               });
         }

         /**
          * Then, we determine the currently active template by searching through the saved configurations.
          * We dynamically load its corresponding script, falling back to the first available template
          * if no active configuration is found.
          */
         const savedTemplates = window?.activeTemplatesConfig || [];
         const activeTemplateFromSavedTemplates = savedTemplates.find(
            (tem) => tem.isActive,
         );
         const currentTemplate = this.templates.find(
            (tem) => tem.id === activeTemplateFromSavedTemplates?.id,
         );
         const script = document.createElement("script");
         script.src = (currentTemplate ? currentTemplate : this.templates[0])?.scriptLink;
         document.body.append(script);

         /**
          * Finally, once the template script has finished loading, we initialize the active template configuration,
          * resolve the default page editor state, and trigger the application initialization sequence.
          */
         script.onload = async () => {
            console.log("loaded")
            // First we will assign the this.originalTemplateCustomizationSchema to the current templates schema so that we have a clean copy of template schema
            await new Promise((res) => {
               const interval = setInterval(() => {
                  if (typeof window?._?.cloneDeep !== "undefined") {
                     res(true);
                     clearInterval(interval);
                  }
               }, 0);
            });
            this.originalTemplateCustomizationSchema = window._.cloneDeep(
               window?.templateCustomizationSchema,
            );

            // Then, we initialize the active template by merging saved data with the Master Schema where IDs match.
            this.activeTemplate = (() => {
               if (activeTemplateFromSavedTemplates?.id) {
                  if (
                     activeTemplateFromSavedTemplates?.id ===
                     window?.templateCustomizationSchema?.id
                  ) {
                     const savedMergeValueKeys = [
                        "value",
                        "isTurnedOn",
                        "customCss",
                        "placeholderThumbnail",
                     ];
                     const getArrayItemIdentity = (item = {}) => {
                        if (!item || typeof item !== "object") return "";
                        if (item.key) return `key:${item.key}`;
                        if (item.property) return `property:${item.property}`;
                        if (item.type && item.target) {
                           return `type-target:${item.type}:${item.target}`;
                        }
                        if (item.urlRegex) return `urlRegex:${item.urlRegex}`;
                        if (item.name) return `name:${item.name}`;
                        if (item.label) return `label:${item.label}`;
                        return "";
                     };
                     const findSavedArrayItem = (
                        masterItem,
                        savedItems = [],
                        index = 0,
                     ) => {
                        const identity = getArrayItemIdentity(masterItem);
                        if (!identity) return savedItems[index];
                        return savedItems.find(
                           (savedItem) => getArrayItemIdentity(savedItem) === identity,
                        );
                     };
                     const isPrimitiveArray = (items = []) => {
                        return items.every(
                           (item) => item === null || typeof item !== "object",
                        );
                     };

                     /**
                      * First we strip deprecated saved data against the current master schema.
                      * Arrays are aligned to the master schema order so _.mergeWith cannot
                      * merge old saved items back in by index. Empty schema arrays
                      * and primitive arrays are treated as user data arrays and kept as-is.
                      */
                     const stripDeprecated = (
                        masterValue,
                        savedValue,
                        allowUnknownKeys = false,
                     ) => {
                        if (Array.isArray(masterValue)) {
                           if (!Array.isArray(savedValue)) return undefined;
                           if (!masterValue.length || isPrimitiveArray(masterValue)) {
                              return window._.cloneDeep(savedValue);
                           }
                           return masterValue.map((masterItem, index) => {
                              const savedItem = findSavedArrayItem(
                                 masterItem,
                                 savedValue,
                                 index,
                              );
                              if (savedItem === undefined) {
                                 return window._.cloneDeep(masterItem);
                              }
                              return stripDeprecated(masterItem, savedItem);
                           });
                        }

                        if (
                           masterValue &&
                           savedValue &&
                           typeof masterValue === "object" &&
                           typeof savedValue === "object"
                        ) {
                           const result = window._.cloneDeep(savedValue);
                           Object.keys(result).forEach((key) => {
                              if (!(key in masterValue)) {
                                 if (!allowUnknownKeys) delete result[key];
                                 return;
                              }
                              result[key] = stripDeprecated(
                                 masterValue[key],
                                 result[key],
                              );
                           });
                           return result;
                        }

                        return savedValue;
                     };
                     const cleanedSaved = stripDeprecated(
                        window.templateCustomizationSchema,
                        activeTemplateFromSavedTemplates,
                        true,
                     );

                     /**
                      * Finally use _.mergeWith to ensure that structural fixes in our Master Schema
                      * are applied while preserving the specific values entered by the user.
                      */
                     return window?._?.mergeWith(
                        // We clone the schema to avoid mutating the "Master" object in memory.
                        window._.cloneDeep(window?.templateCustomizationSchema),
                        cleanedSaved,
                        (objectValue, srcValue, key) => {
                           // --- STEP 1: USER DATA OVERWRITES ---
                           // Prioritize saved user data for specific visual properties.
                           if (savedMergeValueKeys.includes(key)) {
                              return srcValue;
                           }

                           // Data arrays do not have schema items to align, so saved data should win automatically.
                           if (
                              Array.isArray(objectValue) &&
                              Array.isArray(srcValue) &&
                              (!objectValue.length || isPrimitiveArray(objectValue))
                           ) {
                              return srcValue;
                           }

                           // --- STEP 2: RECURSIVE DRILLING ---
                           // If the property is an Object or Array, we return undefined to continue merging deeper.
                           if (window._.isObject(objectValue)) {
                              return undefined;
                           }

                           // --- STEP 3: SCHEMA PROTECTION ---
                           // For structural properties, we prioritize the Master Schema to ensure code updates take effect.
                           return objectValue;
                        },
                     );
                  } else {
                     return window.templateCustomizationSchema;
                  }
               } else {
                  return window.templateCustomizationSchema;
               }
            })();

            // Then, we select the default page editor
            this.activePageOnTemplate = this.activeTemplate?.["pages"][0]?.editor;

            // Then we will sync the template customization schema to the global scope
            window.templateCustomizationSchema = this.activeTemplate;

            // Finally, we invoke the main application initializer.
            this.initializers.init();
         };
      })();
   }

   // Initializer module
   initializers = {
      // This method serves as the entry point for the application initialization
      init: () => {
        console.log("hit sync")
         this.initializers.initSyncConfig();
      },

      // This method is responsible for synchronizing the CSS, element, and feature customizations in a single execution
      initSyncConfig: (immediateSync = false) => {
         // First we will retrieve the current URL to determine which page configuration should be applied
         const url = window.location.href;

         // Then we will sync the template's custom CSS so base styles are applied before other customizations
         this.actions.syncTemplateCustomCss();

         // Then we will sync the template's used google fonts
         this.actions.syncTemplateGoogleFontsUsed();

         // Then we will sync the template's custom fonts
         this.actions.syncTemplateCustomFonts();

         // Then we will sync the template's branding styles
         this.actions.syncTemplateBrandingCss();

         // Finally we will iterate through the template pages to find the current view and process it
         this.activeTemplate?.["page"]?.forEach((page) => {
            /**
             * First we will create a RegExp instance using the page's URL pattern.
             * This allows us to support dynamic route matching instead of exact URL comparison.
             */
            const urlRegex = new RegExp(page?.urlRegex);

            /**
             * Finally we will check if the current URL matches the pattern.
             * If it does, we proceed with applying the corresponding page configuration.
             */
            if (urlRegex?.test(url)) {
               // First we will update the active page state with the editor configuration that matches the current URL
               this.activePageOnTemplate = page.editor;

               // Then we will invoke all synchronizers to apply CSS and element-level customizations for this page
               this.actions.syncTemplateCssCustomizations();
               this.actions.syncTemplateElementsCustomization();

               /**
                * Finally we will delay feature customizations to ensure the DOM
                * and previous customizations are fully applied before executing
                */
               setTimeout(
                  () => {
                     this.actions.syncTemplateFeatureCustomizations(null, null, true);
                  },
                  immediateSync ? 0 : 5500,
               );
            }
         });
      },
   };

   // Action module
   actions = {
      // This method applies the template's custom css
      syncTemplateCustomCss: () => {
         // First we will remove any previously rendered style tags
         document
            ?.querySelectorAll(".bm-template-custom-style")
            ?.forEach((e) => e.remove());

         // Then we will generate the Custom JS Style Tag
         const customCssStyleTagHTML = `
               <style class="bm-template-custom-style">${this.activeTemplate["customCss"]}</style>
            `;

         // Finally we will insert the fresh style tags with the updated CSS values
         document.body.insertAdjacentHTML("beforeend", `${customCssStyleTagHTML}`);
      },

      // This method applies the template's branding css
      syncTemplateBrandingCss: () => {
         // First we will remove any previously rendered style tags
         document
            ?.querySelectorAll(".bm-template-branding-style")
            ?.forEach((e) => e.remove());

         // Then we will generate the Custom JS Style Tag
         const brandingCssStyleTagHTML = (() => {
            const branding = this.activeTemplate.branding
               ?.flatMap((brandingItem) => brandingItem.customizations)
               ?.filter((customizationItem) => customizationItem.value)
               ?.map((customizationItem) => {
                  return `--${customizationItem.property}: ${customizationItem.value}`;
               });
            return `
               <style class="bm-template-branding-style">
                  :root {${branding.join(";")}}
               </style>`;
         })();

         // Finally we will insert the fresh style tags with the updated CSS values
         document.head.insertAdjacentHTML("beforeend", `${brandingCssStyleTagHTML}`);
      },

      // This method applies the template's Google Fonts used
      syncTemplateGoogleFontsUsed: () => {
         // First we will remove any previously rendered font style tags
         document
            ?.querySelectorAll(".bm-template-google-fonts-used")
            ?.forEach((e) => e.remove());

         // Then we will generate the Google Fonts used style HTML
         const googleFontsUsed = this.activeTemplate["googleFontsUsed"]
            ?.map(
               (f) =>
                  `${f.replace(/ /g, "+")}:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900`,
            )
            .join("&family=");
         const googleFontsUsedStyleHTML = `
               <style class="bm-template-google-fonts-used">
                  @import url('https://fonts.googleapis.com/css2?family=${googleFontsUsed}&display=swap');
               </style>
            `;

         // Finally we will insert the fresh style tag with the updated CSS values
         document.body.insertAdjacentHTML("beforeend", `${googleFontsUsedStyleHTML}`);
      },

      // This method applies the template's Custom Fonts
      syncTemplateCustomFonts: () => {
         // First we will remove any previously rendered font style tags
         document
            ?.querySelectorAll(".bm-template-custom-fonts")
            ?.forEach((e) => e.remove());

         // Then we will generate the Custom Fonts style tag HTML
         const customFontsStyleHTML = `
               <style class="bm-template-custom-fonts">
                  ${this.activeTemplate?.customFonts?.reduce((a, c) => {
                     a += `@font-face { font-family: '${c.name}'; src: url('${c.url}')}`;
                     return a;
                  }, "")}
               </style>
            `;

         // Finally we will insert the fresh style tag with the updated CSS values
         document.body.insertAdjacentHTML("beforeend", `${customFontsStyleHTML}`);
      },

      // This method applies all CSS customizations from the activePageOnTemplate into the page
      syncTemplateCssCustomizations: () => {
         // First we will remove any previously rendered style tags
         document?.querySelectorAll(".bm-template-style")?.forEach((e) => e.remove());

         // Then we will generate the HTML strings for both the active page and global styles
         const commonTemplateStyles = (() => {
            return `
                  <style class="bm-template-style">
                  ${this.activePageOnTemplate.reduce((a, c) => {
                     a += `
                      ${c.elementSelector} {
                      ${c.cssCustomizations.reduce((ac, cc) => {
                         const important = cc?.important ? "!important" : "";
                         if (cc.value) {
                            ac += `${cc.property}: ${cc.property === "background-image" ? `url(${cc.value})` : cc.value} ${important};`;
                         }
                         return ac;
                      }, "")}
                      }
                      `;
                     return a;
                  }, "")}
                  </style>
               `;
            return "";
         })();
         const globalTemplateStyles = (() => {
            return `
               <style class="bm-template-style">
                  ${this.activeTemplate.global?.reduce((a, c) => {
                     c.customizations?.forEach((gCustomizations) => {
                        a += `
                              ${gCustomizations?.elementSelector} {
                                  ${gCustomizations?.cssCustomizations?.reduce(
                                     (ac, cc) => {
                                        if (cc.value) {
                                           const important = cc?.important
                                              ? "!important"
                                              : "";
                                           ac += `${cc.property}: ${cc.property === "background-image" ? `url(${cc.value})` : cc.value} ${important};`;
                                        }
                                        return ac;
                                     },
                                     "",
                                  )}
                              }
                              `;
                     });
                     return a;
                  }, "")}
               </style>
               `;
         })();

         // Finally we will insert the fresh style tags with the updated CSS values
         document?.body?.insertAdjacentHTML(
            "beforeend",
            `${commonTemplateStyles}${globalTemplateStyles}`,
         );
      },

      // This method syncs all element customizations to the actual DOM elements
      syncTemplateElementsCustomization: () => {
         /**
          * First we will loop through the activePageOnTemplate because each template
          * element may have its own customizations that need to be applied.
          */
         this.activePageOnTemplate.forEach((item) => {
            if (item?.elementCustomizations?.length) {
               /**
                * We will apply each customization, either as an attribute update
                * or an HTML content update depending on its type.
                */
               item.elementCustomizations.forEach((elItem) => {
                  if (elItem?.type === "attribute") {
                     this.utils.whenElementReady(item.elementSelector, () => {
                        const currentAttributeValue = document
                           ?.querySelector(item.elementSelector)
                           ?.getAttribute(elItem.target);
                        const value = elItem.value || currentAttributeValue;
                        elItem.value = value;
                        document
                           ?.querySelector(item.elementSelector)
                           ?.setAttribute(elItem.target, value);
                     });
                  } else if (elItem.type === "html") {
                     this.utils.whenElementReady(item.elementSelector, () => {
                        const currentHTML = document.querySelector(
                           item.elementSelector,
                        ).innerHTML;
                        const value = elItem.value || currentHTML;
                        elItem.value = value;
                        document.querySelector(item.elementSelector).innerHTML = value;
                     });
                  }
               });
            }
         });

         /**
          * Finally we will iterate through the global template settings to apply
          * any shared element customizations to their respective targets.
          */
         this.activeTemplate.global.forEach((item) => {
            item.customizations.forEach((cItem) => {
               if (cItem?.elementCustomizations?.length) {
                  cItem.elementCustomizations.forEach((elementCustomizationI) => {
                     if (elementCustomizationI?.type === "attribute") {
                        this.utils.whenElementReady(cItem.elementSelector, () => {
                           const currentAttributeValue = document
                              ?.querySelector(cItem.elementSelector)
                              ?.getAttribute(elementCustomizationI.target);
                           const value =
                              elementCustomizationI.value || currentAttributeValue;
                           elementCustomizationI.value = value;
                           document
                              ?.querySelector(cItem.elementSelector)
                              ?.setAttribute(elementCustomizationI.target, value);
                        });
                     } else if (elementCustomizationI.type === "html") {
                        this.utils.whenElementReady(cItem.elementSelector, () => {
                           const currentHTML = document.querySelector(
                              cItem.elementSelector,
                           ).innerHTML;
                           const value = elementCustomizationI.value || currentHTML;
                           elementCustomizationI.value = value;
                           document.querySelector(cItem.elementSelector).innerHTML =
                              value;
                        });
                     }
                  });
               }
            });
         });
      },

      // This method re-syncs a feature by re-inserting its CSS and JS
      syncTemplateFeatureCustomizations: (
         normal = { templateItemKey: "", featureKey: "" },
         global = { name: "", templateItemKey: "", featureKey: "" },
         forceSync = false,
      ) => {
         // First we will initialize placeholders for the items we need to find
         let templateItem = null;
         let featureItem = null;

         // Then we will define a helper function to handle the actual DOM manipulation (Cleanup -> Removal -> Injection)
         const syncFeature = (templateItemKey = "", featureKey = "") => {
            // First we will run the cleanup script to reset any previous states before removing the feature
            const scriptTagCleanUp = document.createElement("script");
            scriptTagCleanUp.id = `${templateItemKey}-${featureKey}`;
            scriptTagCleanUp.innerHTML = featureItem.cleanUpJs(
               featureItem.customizations,
            );
            document.body.append(scriptTagCleanUp);
            setTimeout(() => {
               scriptTagCleanUp.remove();
            }, 500);

            // Then we will remove the existing feature style and script tags from the DOM
            document
               .querySelector(`style[id = '${templateItemKey}-${featureKey}']`)
               ?.remove();
            document
               .querySelector(`script[id = '${templateItemKey}-${featureKey}']`)
               ?.remove();

            // Then we will re-insert the fresh style tag with the updated CSS
            document.body.insertAdjacentHTML(
               "beforeend",
               `
                     <style id="${templateItemKey}-${featureKey}">
                         ${featureItem.css(featureItem.customizations)}
                     </style>
                  `,
            );

            // Finally we will re-insert the fresh script tag with the updated JavaScript
            const scriptTag = document.createElement("script");
            scriptTag.id = `${templateItemKey}-${featureKey}`;
            scriptTag.innerHTML = featureItem.js(featureItem.customizations);
            document.body.append(scriptTag);
         };

         // Then if a forced synchronization is requested, we will proceed to update all active features across the entire template
         if (forceSync) {
            // First we will iterate through the global configuration to identify and sync every feature found within the global customization settings
            this.activeTemplate.global.forEach((e) => {
               e.customizations.forEach((eC) => {
                  if (eC.features && eC.features?.length) {
                     eC.features.forEach((fI) => {
                        if (fI.isTurnedOn) {
                           featureItem = fI;
                           syncFeature(eC.key, fI.key);
                        }
                     });
                  }
               });
            });

            // Then we will also iterate through the currently active page's elements to sync their specific features, completing the full refresh
            this.activePageOnTemplate.forEach((e) => {
               if (e.features && e.features?.length) {
                  e.features.forEach((fI) => {
                     if (fI.isTurnedOn) {
                        featureItem = fI;
                        syncFeature(e.key, fI.key);
                     }
                  });
               }
            });

            // Finally we will return empty value to prevent the execution of the code below
            return;
         }

         // Finally, depending on whether it is a global or normal update, we will determine the correct context and process the feature sync
         if (!global.featureKey) {
            // First, if it is a normal update, we will retrieve the template item and the specific feature directly from the active page configuration
            templateItem = this.activePageOnTemplate.find(
               (item) => item.key === normal.templateItemKey,
            );
            featureItem = templateItem.features.find(
               (fI) => fI.key === normal.featureKey,
            );

            // Finally, we will invoke the helper to apply the changes to the DOM
            syncFeature(normal.templateItemKey, normal.featureKey);
         } else {
            // First, otherwise if this is a global update, we will retrieve the target items from the global settings configuration
            templateItem = this.activeTemplate.global
               .find((item) => item.name === global.name)
               .customizations.find((item) => item.key === global.templateItemKey);
            featureItem = templateItem.features.find(
               (fI) => fI.key === global.featureKey,
            );

            // Finally, we will invoke the helper to apply the global changes to the DOM
            syncFeature(global.templateItemKey, global.featureKey);
         }
      },
   };

   // Utils module
   utils = {
      whenElementReady: (
         selector,
         callback,
         { timeoutMs = 7000, root = document.documentElement, once = true } = {},
      ) => {
         // First we will initialize our state variables to track the observation status
         let done = false;
         let observer = null;
         let timeout = null;

         // Then we will define the check function that verifies if the element exists and executes the callback
         const apply = () => {
            if (done) return;
            const el = document.querySelector(selector);
            if (!el) return false;
            callback(el);
            if (once) {
               done = true;
               observer?.disconnect();
               clearTimeout(timeout);
            }
            return true;
         };

         // Then we will initialize the MutationObserver and start observing the root element for changes
         observer = new MutationObserver(apply);
         observer.observe(root, { childList: true, subtree: true });

         // Then we will also set a fallback timeout to stop observing if the element never appears
         timeout = setTimeout(() => {
            observer.disconnect();
         }, timeoutMs);

         // Then we will attempt an immediate check in case the element is already present in the DOM
         apply();

         // Finally return a cleanup function to allow the caller to cancel the observation manually
         return () => {
            done = true;
            observer.disconnect();
            clearTimeout(timeout);
         };
      },
   };
}
