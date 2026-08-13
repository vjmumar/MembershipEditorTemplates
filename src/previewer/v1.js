class MembershipPreview {
   constructor() {
      setTimeout(() => {
         this.initializers.init();
      }, 3000);
   }

   // Initializer module
   initializers = {
      // This method serves as the entry point for the application initialization
      init: () => {
         // First we will loop over all items from the activePageOnTemplate to prepare the DOM elements
         window.MembershipParser.activePageOnTemplate.forEach((item) => {
            document.querySelectorAll(item.elementSelector).forEach(($element) => {
               // First we will attach the required attributes so our editor can identify it
               $element?.setAttribute("data-editable", "true");
               $element?.setAttribute("data-editor-key", item.key);

               /**
                * Finally we will re-render the element by resetting its outerHTML.
                * This is needed because some SPA frameworks handle navigation without full page reloads.
                * By forcing a re-render, all existing event listeners on the element are removed,
                * preventing unintended navigation or stale event bindings.
                */
               if ($element) $element.outerHTML = $element.outerHTML;
            });
         });

         // Then we will insert the preview tooltip stylesheet
         document.head.insertAdjacentHTML(
            "afterbegin",
            `
            <style>
                [data-editable="true"] {
                  outline: 1.5px dashed rgba(16, 185, 129, 0.7);
                  outline-offset: -1px;
                  cursor: pointer;
                  transition:
                    outline-color 0.15s ease,
                    outline-width 0.15s ease;
                }

                [data-editable="true"] iframe {
                  pointer-events: none;
                }

                [data-editable="true"]:hover {
                  outline: 2px solid rgba(16, 185, 129, 0.7);
                  outline-offset: -2px;
                }
            </style>    
        `,
         );

         // Then we will disable all anchor tags to prevent accidental navigation while editing
         setTimeout(() => {
            document.querySelectorAll("a").forEach((a) => {
               a.href = "javascript:void(0)";
               a.removeAttribute("download");
            });
         }, 1500);

         // Then we will disable all navigation for spa
         setTimeout(() => {
            document
               .querySelectorAll(
                  `*[onclick *= "window.CourseTemplate.coreMethods.actions.navigate("]`,
               )
               .forEach((a) => {
                  a.removeAttribute("onclick");
               });
         }, 1500);

         /**
          * Then we will initialize the global editor from the parent window,
          * since this script is running inside an iframe and the editor lives outside of it
          */
         window.parent?.MembershipEditor?.initializers?.initializeGlobalContents();

         // Finally we will attach the main click listener to detect interactions with editable elements
         window.addEventListener("click", (e) => {
            /**
             * We will check if the clicked element or any of its parent elements
             * contains the data-editable attribute.
             * If it does, we will open the editor for that element.
             */
            const editableElement = e.target.closest("[data-editable]");
            if (editableElement) {
               const key = editableElement.getAttribute("data-editor-key");
               window.parent.MembershipEditor.initializers.initializeElementEditor(
                  key,
                  `[data-editor-key='${key}']`,
               );
            }
         });
      },
   };

   // Data module
   data = {
      // This helper method retrieves the editable page names and URLs
      getListOfEditablePages: async () => {
         // First, we will retrieve the template schema inside the preview iframe
         const templateSchema = window.templateCustomizationSchema;

         // Then, we will request to retrieve the categories inside the course template
         const categoriesWithPost = await window.CourseTemplate.data.fetchCategories();

         // Then, we will retrieve the productId, valid category ID, and valid post ID
         const categoryWithValidPosts = [...categoriesWithPost]
            .filter((cat) => !cat.parentCategory)
            .sort((a, b) => {
               const hasMedia = (cat) =>
                  cat.posts?.some(
                     (p) => p.video !== null || p.audio !== null || !!p.embedJson,
                  );
               if (hasMedia(a) && !hasMedia(b)) return -1;
               if (!hasMedia(a) && hasMedia(b)) return 1;
               return (a.sequenceNo || 0) - (b.sequenceNo || 0);
            })[0];
         const productId = categoryWithValidPosts?.["productId"];
         const categoryId = categoryWithValidPosts?.["id"];

         const postId = (() => {
            const rawPosts = categoryWithValidPosts?.posts || [];
            return [...rawPosts].sort((a, b) => {
               const aHasMedia = a.video !== null || a.audio !== null || !!a.embedJson;
               const bHasMedia = b.video !== null || b.audio !== null || !!b.embedJson;
               if (aHasMedia && !bHasMedia) return -1;
               if (!aHasMedia && bHasMedia) return 1;
               return (a.sequenceNo || 0) - (b.sequenceNo || 0);
            })[0]?.id;
         })();

         // Then, we will create a function that will hydrate the GHL URL regex
         const hydrateGhlUrl = (urlRegex, pId, cId = null, poId = null) => {
            const currentUrl = new URL(window.location.href);
            let path = urlRegex.replace(/\\/g, "").replace(/\(\?.*\)\?\$$/, "");
            if (pId) path = path.replace("[^/]+", pId);
            if (cId) path = path.replace("[^/]+", cId);
            if (poId) path = path.replace("[^/]+", poId);
            const finalUrl = new URL(path, window.location.origin);
            currentUrl.searchParams.forEach((value, key) => {
               finalUrl.searchParams.set(key, value);
            });
            return finalUrl.href;
         };

         // Then, we will retrieve the pages from the template schema based on the window size
         const isDesktop = window.matchMedia("(min-width: 768px)").matches;
         const pages = templateSchema[isDesktop ? "pages" : "mobilePages"];

         // Then, we will format the pages and return them
         const allPages = pages.map((page) => {
            const fullUrl = hydrateGhlUrl(page.urlRegex, productId, categoryId, postId);
            const isActive = (() => {
               const currentRegex = new RegExp(page.urlRegex);
               if (!currentRegex.test(location.pathname)) return false;
               const segmentCount = (regex) => (regex.match(/\//g) || []).length;
               const hasBetterMatch = pages.some((otherPage) => {
                  if (otherPage.name === page.name) return false;
                  const otherRegex = new RegExp(otherPage.urlRegex);
                  return (
                     otherRegex.test(location.pathname) &&
                     segmentCount(otherPage.urlRegex) > segmentCount(page.urlRegex)
                  );
               });
               return !hasBetterMatch;
            })();
            return { name: page.name, url: fullUrl, isActive };
         });
         return allPages;
      },
   };

   // Utils module
   utils = {};
}
