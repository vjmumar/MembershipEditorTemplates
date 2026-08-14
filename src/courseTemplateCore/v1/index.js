class CourseTemplateCore {
   constructor(pages = {}, globalWidgets) {
      this.version = "v1";
      this.pages = pages;
      this.globalWidgets = globalWidgets;
   }

   // This object holds data fetching and state management logic
   data = {
      fetchProduct: async () => {
         const auth = await this.utils.getAuth();
         const productId = auth?.productId;
         const locationId = auth?.locationId;
         const token = auth?.tokenId;
         const contactId = auth?.contactId;
         const userId = auth?.externalUserId;
         const storageName = `${productId}-product`;
         const previousData = JSON.parse(sessionStorage.getItem(storageName) || "{}");
         if (Object.keys(previousData).length > 0 && previousData?.id === productId)
            return previousData;
         return await new Promise((resolved, reject) => {
            const url = [
               `https://services.leadconnectorhq.com/clientportal-middleware/memberships/locations/${locationId}/products/${productId}`,
               `https://services.leadconnectorhq.com/membership/locations/${locationId}/products/${productId}`,
            ];
            if (token) {
               this.utils
                  .relayUrlFetch(url, {
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
                  .catch(() => {
                     resolved({});
                  });
            } else {
               console.log("No Token Found! Product!");
            }
         });
      },
      fetchCategory: async (catId = "") => {
         const auth = await this.utils.getAuth();
         const productId = auth?.productId;
         const locationId = auth?.locationId;
         const token = auth?.tokenId;
         const contactId = auth?.contactId;
         const userId = auth?.externalUserId;
         const storageName = `${productId}-category`;
         const previousData = JSON.parse(sessionStorage.getItem(storageName) || "{}");
         if (Object.keys(previousData).length > 0 && previousData?.category?.id === catId)
            return previousData;
         return await new Promise((resolved, reject) => {
            const categoryId =
               catId ||
               location.href.split("/categories/")[1].split("?")[0].split("/")[0];
            const url = [
               `https://services.leadconnectorhq.com/clientportal-middleware/memberships/locations/${locationId}/user-purchase/categories/${categoryId}?product_id=${productId}&visibility=published&published_posts=true`,
               `https://services.leadconnectorhq.com/membership/locations/${locationId}/user-purchase/categories/${categoryId}?product_id=${productId}&visibility=published&published_posts=true`,
            ];
            if (token) {
               this.utils
                  .relayUrlFetch(url, {
                     headers: {
                        "accept": "application/json, text/plain, */*",
                        "accept-language": "en-US,en;q=0.6",
                        "authorization": `Bearer ${token}`,
                        "channel": "APP",
                        "source": "PORTAL_USER",
                        "x-product-id": productId,
                        "version": "2021-07-28",
                     },
                     priority: "high",
                     body: null,
                     method: "GET",
                  })
                  .then((e) => e.json())
                  .then(async (e) => {
                     // 1. Fetch all available categories and filter them to find only those
                     //    that specify the current categoryId as their parent (i.e., subcategories).
                     const subCategories = await (async () => {
                        const categories = await this.data.fetchCategories();
                        if (categories) {
                           return categories
                              ?.filter((sub) => sub.parentCategory === categoryId)
                              ?.sort((a, b) => (a.sequenceNo > b.sequenceNo ? 1 : -1));
                        }
                        return [];
                     })();

                     // 2. Assign the found subcategories directly to the current category's structure.
                     //    NOTE: This operation REPLACES any existing data in the 'subCategories'
                     //    array on the category object (e.category) with the newly filtered list.
                     e.category.subCategories = subCategories;

                     // 3. Sort the posts within the current category based on their sequence number.
                     e.category.posts = e?.category?.posts?.sort((a, b) =>
                        a.sequenceNo > b.sequenceNo ? 1 : -1,
                     );

                     // 4. Resolve the promise with the fully structured 'e' object,
                     //    which now contains posts and its aggregated subcategories.
                     resolved(e);
                     sessionStorage.setItem(storageName, JSON.stringify(e));
                  });
            } else {
               console.log("No Token Found! Category!");
            }
         });
      },
      fetchCategories: async () => {
         const auth = await this.utils.getAuth();
         const productId = auth?.productId;
         const locationId = auth?.locationId;
         const token = auth?.tokenId;
         const contactId = auth?.contactId;
         const userId = auth?.externalUserId;
         const storageName = `${productId}-categories`;
         const previousData = JSON.parse(sessionStorage.getItem(storageName) || "[]");
         if (previousData.length > 0) return previousData;
         return await new Promise((resolved, reject) => {
            const url = [
               `https://services.leadconnectorhq.com/clientportal-middleware/memberships/locations/${locationId}/user-purchase/categories?product_id=${productId}`,
               `https://services.leadconnectorhq.com/membership/locations/${locationId}/user-purchase/categories?product_id=${productId}`,
            ];
            if (token) {
               this.utils
                  .relayUrlFetch(url, {
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
                     resolved(e?.categories || []);
                     sessionStorage.setItem(
                        storageName,
                        JSON.stringify(e?.categories || []),
                     );
                  })
                  .catch((e) => {
                     console.log("error on categories");
                     resolved([]);
                  });
            } else {
               console.log("No Token Found! Categories!");
            }
         });
      },
      fetchPost: async (pId = "") => {
         const auth = await this.utils.getAuth();
         const productId = auth?.productId;
         const locationId = auth?.locationId;
         const token = auth?.tokenId;
         const contactId = auth?.contactId;
         const userId = auth?.externalUserId;
         return await new Promise((resolved, reject) => {
            const postId = pId;
            const url = [
               `https://services.leadconnectorhq.com/clientportal-middleware/memberships/locations/${locationId}/posts/${postId}`,
               `https://services.leadconnectorhq.com/membership/locations/${locationId}/posts/${postId}`,
            ];
            if (postId) {
               this.utils
                  .relayUrlFetch(url, {
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
                  })
                  .catch(() => {
                     resolved({});
                  });
            } else {
               console.log("No Token Found! Post!");
            }
         });
      },
      fetchCompletedPosts: async () => {
         const auth = await this.utils.getAuth();
         const productId = auth?.productId;
         const locationId = auth?.locationId;
         const token = auth?.tokenId;
         const contactId = auth?.contactId;
         const userId = auth?.externalUserId;
         const storageName = `${productId}-completed-post`;
         const previousData = JSON.parse(sessionStorage.getItem(storageName) || "[]");
         if (previousData.length > 0) return previousData;
         return await new Promise(async (resolved, reject) => {
            if (token) {
               const url = [
                  `https://services.leadconnectorhq.com/clientportal-middleware/memberships/locations/${locationId}/user-post-completion?product_id=${productId}&user_id=${userId}`,
                  `https://services.leadconnectorhq.com/membership/locations/${locationId}/user-post-completion?product_id=${productId}&user_id=${userId}`,
               ];
               this.utils
                  .relayUrlFetch(url, {
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
                     const isArray = Array.isArray(e);
                     resolved(isArray ? e : []);
                     sessionStorage.setItem(
                        storageName,
                        JSON.stringify(isArray ? e : []),
                     );
                  })
                  .catch(() => {
                     resolved([]);
                  });
            } else {
               console.log("No Token Found! Completed Posts!");
            }
         });
      },
      fetchUserProductProgress: async () => {
         const auth = await this.utils.getAuth();
         const productId = auth?.productId;
         const storageName = `${productId}-product-progress`;

         // First we will fetch the categories and completed posts
         const [categories, completedPosts] = await Promise.allSettled([
            this.data.fetchCategories(),
            this.data.fetchCompletedPosts(),
         ]).then((res) => res.map((e) => e.value || []));

         // Then we will retrieve all posts inside the categories
         const allPosts = categories.flatMap((category) => {
            return category?.posts || [];
         });

         // Then we will retrieve the completed post IDs
         const completedPostIds = new Set(completedPosts.map((post) => post.postId));

         // Then we will retrieve the total completed posts
         const totalCompletedPosts = allPosts.filter((post) => {
            return completedPostIds.has(post.id);
         }).length;

         // Then we will calculate the product progress
         const progress = allPosts.length
            ? Math.round((totalCompletedPosts / allPosts.length) * 100)
            : 0;

         // Then we will store the product progress
         sessionStorage.setItem(storageName, String(progress));

         // Finally we will return the product progress
         return progress;
      },
      fetchCategoryProgress: async () => {
         const auth = await this.utils.getAuth();
         const productId = auth?.productId;
         const locationId = auth?.locationId;
         const token = auth?.tokenId;
         const contactId = auth?.contactId;
         const storageName = `${productId}-category-progress`;
         const previousData = JSON.parse(sessionStorage.getItem(storageName) || "{}");
         if (Object.keys(previousData).length > 0) return previousData;
         return await new Promise(async (resolved, reject) => {
            if (token) {
               const categoryIds = await this.data.fetchCategories();
               this.utils
                  .relayUrlFetch(
                     [
                        `https://services.leadconnectorhq.com/clientportal-middleware/memberships/locations/${locationId}/categories/get-progress`,
                        `https://services.leadconnectorhq.com/membership/locations/${locationId}/categories/get-progress`,
                     ],
                     {
                        headers: {
                           "accept": "application/json, text/plain, */*",
                           "accept-language": "en-US,en;q=0.5",
                           "authorization": `Bearer ${token}`,
                           "content-type": "application/json",
                        },
                        body: JSON.stringify({
                           product_id: productId,
                           categories: categoryIds.map((e) => e.id),
                        }),
                        method: "POST",
                        priority: "high",
                     },
                  )
                  .then((e) => e.json())
                  .then((e) => {
                     sessionStorage.setItem(storageName, JSON.stringify(e));
                     resolved(e);
                  })
                  .catch(() => {
                     resolved({});
                  });
            } else {
               console.log("No Token Found! Category Progress!");
            }
         });
      },
      fetchUser: async () => {
         const auth = await this.utils.getAuth();
         const productId = auth?.productId;
         const locationId = auth?.locationId;
         const token = auth?.tokenId;
         const contactId = auth?.contactId;
         const userId = auth?.userId;
         const storageName = `${productId}-user`;
         const previousData = JSON.parse(sessionStorage.getItem(storageName) || "{}");
         if (Object.keys(previousData).length > 0) return previousData;
         return await new Promise(async (resolved, reject) => {
            if (token) {
               fetch(
                  `https://services.leadconnectorhq.com/clientclub/${locationId}/users/${contactId}`,
                  {
                     headers: {
                        "accept": "application/json, text/plain, */*",
                        "channel": "APP",
                        "source": "PORTAL_USER",
                        "x-product-id": productId,
                        "version": "2021-07-28",
                        "accept-language": "en-US,en;q=0.5",
                        "source": "PORTAL_USER",
                        "x-product-id": productId,
                        "version": "2021-07-28",
                        "token-id": token,
                     },
                     referrer: `https://${locationId}.app.clientclub.net/`,
                     referrerPolicy: "strict-origin-when-cross-origin",
                     body: null,
                     method: "GET",
                     mode: "cors",
                     credentials: "omit",
                     priority: "high",
                  },
               )
                  .then((e) => e.json())
                  .then((e) => {
                     resolved(e);
                     sessionStorage.setItem(storageName, JSON.stringify(e));
                  })
                  .catch(() => {
                     resolved({});
                  });
            } else {
               console.log("No Token Found! User!");
            }
         });
      },
   };

   // This object holds actions methods
   actions = {
      navigate: async (type = "", params = {}) => {
         // First we will retrieve the root and available pages
         const $root = document.querySelector(".bm-theme-root");
         const pages = Object.keys(this.pages);

         // Then we will start the page loader
         $root.classList.add("loading");

         // Then we will check if the page exists
         if (pages.includes(type)) {
            // First we will initialize the page
            await this.pages[type](params);

            // Finally we will smoothly scroll to the top
            window.scrollTo({
               top: 0,
               left: 0,
               behavior: "smooth",
            });
         } else {
            alert(`Sorry Page Not Found! Possible Pages - ${String(pages)}`);
         }

         // Finally we will stop the page loader
         $root.classList.remove("loading");
      },
      initializePage: () => {
         // First we will retrieve the root elements
         const root = {
            parent: document.querySelector(".bm-theme-root"),
            container: document.querySelector(".bm-theme-root__container"),
            page: document.querySelector(".bm-theme-root__container__page"),
         };

         // Then we will mark the root as rendering
         root.parent.classList.remove("bm-page-ready");
         root.parent.classList.add("bm-page-rendering");

         // Then we will create a function that updates the page
         const renderPage = (type = "", html = "") => {
            // First we will insert the page HTML
            root.page.innerHTML = html;

            // Then we will update the active page
            root.parent.setAttribute("data-bm-theme-page", type);

            // Finally we will mark the root as ready
            root.parent.classList.remove("bm-page-rendering");
            root.parent.classList.add("bm-page-ready");
         };

         // Finally we will return the root elements and page updater
         return [root, renderPage];
      },
      markPostAsCompleteOrIncomplete: async (postId = "", isComplete = true) => {
         const auth = await this.utils.getAuth();
         const productId = auth?.productId;
         const locationId = auth?.locationId;
         const token = auth?.tokenId;
         const contactId = auth?.contactId;
         const userId = auth?.externalUserId;
         let req = null;
         try {
            if (isComplete) {
               req = await this.utils.relayUrlFetch(
                  [
                     `https://services.leadconnectorhq.com/clientportal-middleware/memberships/locations/${locationId}/user-post-completion`,
                     `https://services.leadconnectorhq.com/membership/locations/${locationId}/user-post-completion`,
                  ],
                  {
                     method: "POST",
                     headers: {
                        "accept": "application/json, text/plain, */*",
                        "accept-language": "en-US,en;q=0.6",
                        "authorization": `Bearer ${token}`,
                        "content-type": "application/json",
                        "channel": "APP",
                        "source": "PORTAL_USER",
                        "x-product-id": productId,
                        "version": "2021-07-28",
                     },
                     priority: "high",
                     body: JSON.stringify({
                        percentage: 100,
                        postId: postId,
                        productId: productId,
                     }),
                  },
               );
            } else {
               req = await this.utils.relayUrlFetch(
                  [
                     `https://services.leadconnectorhq.com/clientportal-middleware/memberships/locations/${locationId}/user-post-completion/${postId}`,
                     `https://services.leadconnectorhq.com/membership/locations/${locationId}/user-post-completion/${postId}`,
                  ],
                  {
                     headers: {
                        "accept": "application/json, text/plain, */*",
                        "accept-language": "en-US,en;q=0.6",
                        "authorization": `Bearer ${token}`,
                        "channel": "APP",
                        "source": "PORTAL_USER",
                        "x-product-id": productId,
                        "version": "2021-07-28",
                     },
                     priority: "high",
                     method: "DELETE",
                  },
               );
            }
            const json = await req.json();
            return json;
         } catch (err) {
            console.log(err);
            alert("Something went wrong!");
         } finally {
            sessionStorage.removeItem(`${productId}-completed-post`);
            sessionStorage.removeItem(`${productId}-product-progress`);
            sessionStorage.removeItem(`${productId}-category-progress`);
         }
      },
   };

   // This object holds widgets
   widgets = {
      "Post Player": async (post = {}, $container = null) => {
         // First we will retrieve the assets
         const assets = post?.asset_urls || {};
         const assetType = assets?.assetType || post?.contentType;
         const assetURL =
            post?.asset_urls?.url ||
            (post?.audio?.url
               ? `https://cdn.courses.apisystem.tech${post.audio.url}`
               : "");
         const absoluteAssetURL = assetURL ? new URL(assetURL, location.origin).href : "";

         // Then we will check if asset is valid
         if (
            !$container ||
            !absoluteAssetURL ||
            !["video", "audio"].includes(assetType)
         ) {
            return null;
         }

         // Then we will create the video HTML
         const videoHTML = (() => {
            return `
               <video
                  class="template-post-player__media"
                  src="${absoluteAssetURL}"
                  poster="${assets?.thumbnailUrl || ""}"
                  preload="metadata"
                  playsinline
                  controls
               ></video>
            `;
         })();

         // Then we will create the audio HTML
         const audioHTML = (() => {
            return `
               <div class="template-post-player__audio-content">
                  ${
                     assets?.thumbnailUrl
                        ? `
                           <img
                              class="template-post-player__thumbnail"
                              src="${assets.thumbnailUrl}"
                              alt=""
                           >
                        `
                        : ""
                  }
               
                  <div class="template-post-player__audio-details">
                     <p class="template-post-player__title">
                        ${post?.title || "Audio"}
                     </p>
               
                     <audio
                        class="template-post-player__media"
                        src="${absoluteAssetURL}"
                        preload="metadata"
                        controls
                     ></audio>
                  </div>
               </div>
            `;
         })();

         // Then we will retrieve the correct media HTML
         const mediaHTML = assetType === "video" ? videoHTML : audioHTML;

         // Then we will render the player
         $container.innerHTML = `
            <div
               class="
                  template-post-player
                  template-post-player--${assetType}
               "
            >
               ${mediaHTML}
            </div>
         `;

         // Then we will retrieve the media element
         const $media = $container.querySelector(".template-post-player__media");

         // Then we will initialize Plyr
         const player = new Plyr($media, {
            controls:
               assetType === "video"
                  ? [
                       "play-large",
                       "play",
                       "rewind",
                       "fast-forward",
                       "progress",
                       "current-time",
                       "duration",
                       "mute",
                       "volume",
                       "settings",
                       "pip",
                       "fullscreen",
                    ]
                  : [
                       "play",
                       "rewind",
                       "fast-forward",
                       "progress",
                       "current-time",
                       "duration",
                       "mute",
                       "volume",
                       "settings",
                    ],
            seekTime: 10,
         });

         // Finally we will return the useful references
         return {
            player,
            media: $media,
            type: assetType,
            post,
         };
      },
   };

   // This object holds utility methods
   utils = {
      relayUrlFetch: async (urls, options) => {
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
               console.warn(`Failed, trying next URL: ${url}`, lastError);
            } catch (error) {
               lastError = error;
               console.warn(`Fetch error, trying next URL: ${url}`, error);
            }
         }
         throw null;
      },
      waitForElement: (elementSelector = "", resolveDelay = 1000, timeout = null) => {
         return new Promise((res) => {
            const interval = setInterval(() => {
               const $element = document.querySelector(elementSelector);
               if ($element) {
                  clearInterval(interval);
                  setTimeout(() => {
                     res($element);
                  }, resolveDelay);
               }
               console.log("waiting for ", elementSelector);
            }, 200);
            if (timeout) {
               setTimeout(() => {
                  clearInterval(interval);
                  res(null);
               }, timeout);
            }
         });
      },
      getCookie: (name = "") => {
         const cookie = document.cookie
            .split("; ")
            .find((cookie) => cookie.startsWith(`${encodeURIComponent(name)}=`));
         if (!cookie) {
            return null;
         }
         return decodeURIComponent(cookie.slice(cookie.indexOf("=") + 1));
      },
      getAuth: async () => {
         return new Promise((res) => {
            const interval = setInterval(() => {
               if (document.body.classList.contains("theme-ready")) {
                  const data = (() => {
                     let result = {};
                     const acatToken = this.utils.getCookie("acat");
                     const acatTokenV2 = this.utils.getCookie("acatv2");
                     const acatTokenSessionStorage =
                        window.sessionStorage.getItem("acat");
                     const acatTokenSessionStorageV2 =
                        window.sessionStorage.getItem("acatv2");
                     const acatTokenLocalStorage = window.localStorage.getItem("acat");
                     const acatTokenLocalStorageV2 =
                        window.localStorage.getItem("acatv2");

                     const catToken = this.utils.getCookie("cat");
                     const catTokenV2 = this.utils.getCookie("catv2");
                     const catTokenSessionStorage = window.sessionStorage.getItem("cat");
                     const catTokenSessionStorageV2 =
                        window.sessionStorage.getItem("catv2");
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
                     const url = location.href
                        ?.split("/products/")[1]
                        ?.split("/")[0]
                        ?.split("?")[0];
                     data.productId = url;
                  }
                  if (!("tokenId" in data)) {
                     data.tokenId = data.token;
                  }
                  clearInterval(interval);
                  res(data);
               }
            }, 100);
         });
      },
      getDeepSequencedPosts: (categories = []) => {
         return categories
            ?.sort((a, b) => a.sequenceNo - b.sequenceNo)
            ?.filter((e) => !e.parentCategory)
            ?.sort((a, b) => a.sequenceNo - b.sequenceNo)
            ?.map((e) => {
               const currentCategorySubFolders = categories
                  ?.map((e) => {
                     e.posts = e.posts?.sort((a, b) => a.sequenceNo - b.sequenceNo);
                     return e;
                  })
                  ?.filter((se) => se.parentCategory === e.id);
               e.posts.push(...currentCategorySubFolders);
               e.posts = e.posts?.sort((a, b) => a.sequenceNo - b.sequenceNo);
               return e;
            })
            ?.flatMap((e) => e.posts)
            ?.reduce((a, c) => {
               if (!c.parentCategory) {
                  a.push(c);
               } else {
                  const subCategoryPosts = c.posts.flatMap((e) => e);
                  a.push(...subCategoryPosts);
               }
               return a;
            }, [])
            ?.map((e, i) => {
               e.sequenceNo = i;
               return e;
            });
      },
      extractPostComments: async ({
         productId,
         categoryId,
         postId,
         locationId,
         iframeContainer,
         commentsTarget,
         timeout = 30000,
      } = {}) => {
         // First we will resolve the containers
         const resolveElement = (value) => {
            return typeof value === "string" ? document.querySelector(value) : value;
         };
         const $iframeContainer = resolveElement(iframeContainer);
         const $commentsTarget = resolveElement(commentsTarget);
         if (!$iframeContainer || !$commentsTarget) {
            throw new Error("The iframe container or comments target was not found.");
         }

         // Then we will insert the comments loader styles
         if (!document.querySelector("#template-comments-loader-styles")) {
            document.head.insertAdjacentHTML(
               "beforeend",
               `<style id="template-comments-loader-styles">.template-comments-loader{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;min-height:120px;color:#667085}.template-comments-loader__spinner{width:22px;height:22px;border:2px solid #e4e7ec;border-top-color:currentColor;border-radius:50%;animation:template-comments-spin .7s linear infinite !important}.template-comments-loader__text{margin:0}.template-comments-loader--error{color:#d92d20}@keyframes template-comments-spin{to{transform:rotate(360deg)}}</style>`,
            );
         }

         // Then we will add the comments loader
         $commentsTarget.innerHTML = `
            <div class="template-comments-loader">
               <div class="template-comments-loader__spinner"></div>
               <p class="template-comments-loader__text">Loading comments...</p>
            </div>
         `;

         // Then we will create the iframe
         const iframe = document.createElement("iframe");
         iframe.className = "bm-post-comments-iframe";
         iframe.width = "1440";
         iframe.height = "1000";
         iframe.style.cssText =
            "position:fixed;left:-10000px;top:0;width:1440px;height:1000px;opacity:0;pointer-events:none;border:0;";
         iframe.src = `${location.origin}/courses/products/${productId}/modules/${categoryId}/lessons/${postId}?location_id=${locationId}&bm_theme_not_load=true`;
         $iframeContainer.append(iframe);
         let stopSoundInterval;
         let stopSoundTimeout;
         let followerObserver;

         try {
            // Then we will wait for the iframe
            await new Promise((resolve, reject) => {
               const timer = setTimeout(() => {
                  reject(new Error("The comments iframe timed out."));
               }, timeout);
               iframe.onload = () => {
                  clearTimeout(timer);
                  resolve();
               };
               iframe.onerror = () => {
                  clearTimeout(timer);
                  reject(new Error("The comments iframe failed to load."));
               };
            });

            const iframeDocument = iframe.contentDocument;
            if (!iframeDocument) {
               throw new Error("Unable to access the comments iframe.");
            }

            // Then we will continuously stop the iframe media
            stopSoundInterval = setInterval(() => {
               iframeDocument.querySelectorAll("video, audio").forEach((media) => {
                  try {
                     media.muted = true;
                     media.volume = 0;
                     media.pause();
                     media.plyr?.pause();
                  } catch (error) {
                     console.warn("Unable to stop iframe media:", error);
                  }
               });
            }, 0);

            // Then we will move the follower containers to the parent
            const moveFollowerContainers = () => {
               iframeDocument
                  .querySelectorAll(".v-binder-follower-container")
                  .forEach((container) => {
                     container.dataset.ghlCommentFollower = "true";
                     document.body.append(container);
                  });
            };

            moveFollowerContainers();
            followerObserver = new MutationObserver(moveFollowerContainers);
            followerObserver.observe(iframeDocument.body, {
               childList: true,
               subtree: true,
            });

            // Then we will wait for the comments
            const comments = await new Promise((resolve, reject) => {
               const startedAt = Date.now();
               const interval = setInterval(() => {
                  const heading = Array.from(iframeDocument.querySelectorAll("div")).find(
                     (element) => {
                        return (
                           element.textContent?.trim() === "Comments" &&
                           element.children.length === 0
                        );
                     },
                  );
                  const wrapper =
                     heading?.closest(".w-full.bg-white.mt-5.px-10.pb-10") ||
                     heading?.closest(".w-full.bg-white");

                  if (wrapper) {
                     clearInterval(interval);
                     resolve(wrapper);
                     return;
                  }

                  if (Date.now() - startedAt >= timeout) {
                     clearInterval(interval);
                     reject(new Error("The comments were not found."));
                  }
               }, 100);
            });

            // Then we will copy the stylesheet links
            iframeDocument
               .querySelectorAll('link[rel="stylesheet"][href]')
               .forEach((source) => {
                  const exists = Array.from(
                     document.querySelectorAll('link[rel="stylesheet"][href]'),
                  ).some((link) => link.href === source.href);

                  if (exists) return;

                  const link = document.createElement("link");
                  link.rel = "stylesheet";
                  link.href = source.href;
                  link.dataset.ghlCommentsStyle = "true";
                  document.head.append(link);
               });

            // Then we will copy the inline styles
            iframeDocument.querySelectorAll("style").forEach((source) => {
               const content = source.textContent || "";
               if (!content.trim()) return;

               const exists = Array.from(
                  document.querySelectorAll("style[data-ghl-comments-style]"),
               ).some((style) => style.textContent === content);

               if (exists) return;

               const style = document.createElement("style");
               style.dataset.ghlCommentsStyle = "true";
               style.textContent = content;
               document.head.append(style);
            });

            // Then we will move the comments
            $commentsTarget.replaceChildren(comments);

            // Finally after one minute we will remove the iframe media
            stopSoundTimeout = setTimeout(() => {
               clearInterval(stopSoundInterval);
               iframeDocument.querySelectorAll("video, audio").forEach((media) => {
                  try {
                     media.pause();
                     media.remove();
                  } catch (error) {
                     console.warn("Unable to remove iframe media:", error);
                  }
               });
            }, 60000);

            return {
               iframe,
               comments,
               followerObserver,
               stopSoundInterval,
               stopSoundTimeout,
            };
         } catch (error) {
            clearInterval(stopSoundInterval);
            clearTimeout(stopSoundTimeout);
            followerObserver?.disconnect();
            iframe.remove();
            $commentsTarget.innerHTML = `
         <div class="template-comments-loader template-comments-loader--error">
            Unable to load comments.
         </div>
      `;
            throw error;
         }
      },
   };
}
