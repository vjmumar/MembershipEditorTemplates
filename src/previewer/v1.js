class MembershipPreview {
   constructor() {
      // First we will retrieve the theme root
      const $themeRoot = document.querySelector(".bm-theme-root");

      // Then we will create a function that initializes the previewer once the theme is no longer loading
      const initializeWhenThemeIsReady = () => {
         const interval = setInterval(() => {
            if ($themeRoot && !$themeRoot.classList.contains("loading")) {
               clearInterval(interval);
               setTimeout(() => {
                  this.initializers.init();
               }, 500);
            }
         }, 100);
      };

      // Then we will initialize the previewer
      setTimeout(() => {
         initializeWhenThemeIsReady();
      }, 3000);

      // Then we will reinitialize the previewer when the active page changes
      const pageObserver = new MutationObserver((mutations) => {
         const pageChanged = mutations.some((mutation) => {
            return (
               mutation.type === "attributes" &&
               mutation.attributeName === "data-bm-theme-page"
            );
         });

         if (pageChanged) {
            initializeWhenThemeIsReady();
         }
      });

      // Finally we will initialize the page observer
      pageObserver.observe($themeRoot, {
         attributes: true,
         attributeFilter: ["data-bm-theme-page"],
      });
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
         if (!document.head.querySelector("#bm-preview-style")) {
            document.head.insertAdjacentHTML(
               "afterbegin",
               `
                <style id="bm-preview-style">
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
         }

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

         // Then we will attach the main click listener to detect interactions with editable elements
         if (window.bmPreviewClickListener === "initialized") return;
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

         // Finally we will set window.bmPreviewClickListener to initialized
         window.bmPreviewClickListener = "initialized";
      },
   };

   // Data module
   data = {
      // This helper method retrieves the editable page names and URLs
      getListOfEditablePages: async () => {
         // First we will retrieve the template schema
         const templateSchema = window.templateCustomizationSchema;

         // Then we will retrieve the categories
         const categories =
            await window.CourseTemplate.coreMethods.data.fetchCategories();

         // Then we will retrieve a valid category
         const category = [...categories]
            .filter((category) => !category.parentCategory)
            .sort((a, b) => {
               const hasMedia = (category) => {
                  return category.posts?.some((post) => {
                     return (
                        post.video !== null || post.audio !== null || !!post.embedJson
                     );
                  });
               };

               if (hasMedia(a) && !hasMedia(b)) return -1;
               if (!hasMedia(a) && hasMedia(b)) return 1;

               return (a.sequenceNo || 0) - (b.sequenceNo || 0);
            })[0];

         // Then we will retrieve a valid post
         const post = [...(category?.posts || [])].sort((a, b) => {
            const aHasMedia = a.video !== null || a.audio !== null || !!a.embedJson;

            const bHasMedia = b.video !== null || b.audio !== null || !!b.embedJson;

            if (aHasMedia && !bHasMedia) return -1;
            if (!aHasMedia && bHasMedia) return 1;

            return (a.sequenceNo || 0) - (b.sequenceNo || 0);
         })[0];

         // Then we will create the shared page parameters
         const params = {
            categoryId: category?.id || "",
            postId: post?.id || "",
         };

         // Then we will retrieve the active page
         const activePage = document
            .querySelector(".bm-theme-root")
            .getAttribute("data-bm-theme-page");

         // Finally we will return the editable pages
         return (templateSchema?.pages || []).map((page) => {
            return {
               page: page.name,
               params,
               isActive: activePage === page.name,
            };
         });
      },
   };

   // Utils module
   utils = {};
}
