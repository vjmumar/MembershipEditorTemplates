class CourseTemplateCore {
   version = "v1";

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
            const postId =
               pId || location.href.split("/posts/")[1].split("?")[0].split("/")[0];
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
      fetchUserProductProgress: async (cId = "") => {
         const auth = await this.utils.getAuth();
         const productId = auth?.productId;
         const locationId = auth?.locationId;
         const token = auth?.tokenId;
         const contactId = auth?.contactId;
         const storageName = `${productId}-product-progress`;
         const previousData = JSON.parse(sessionStorage.getItem(storageName) || "{}");
         if (Object.keys(previousData).length > 0) return previousData;
         return await new Promise(async (resolved, reject) => {
            if (token) {
               this.utils
                  .relayUrlFetch(
                     [
                        `https://services.leadconnectorhq.com/clientportal-middleware/memberships/locations/${locationId}/products/user-activity/${cId || contactId}`,
                        `https://services.leadconnectorhq.com/membership/locations/${locationId}/products/user-activity/${cId || contactId}`,
                     ],
                     {
                        headers: {
                           "accept": "application/json, text/plain, */*",
                           "accept-language": "en-US,en;q=0.5",
                           "token-id": token,
                           "content-type": "application/json",
                        },
                        body: null,
                        method: "POST",
                        mode: "cors",
                        credentials: "omit",
                        priority: "high",
                     },
                  )
                  .then((e) => e.json())
                  .then((e) => {
                     e.progressPercentage = (
                        (e.completedPosts / e.totalPosts) *
                        100
                     ).toFixed(0);
                     sessionStorage.setItem(storageName, JSON.stringify(e || "{}"));
                     resolved(e);
                  })
                  .catch(() => {
                     resolved({});
                  });
            } else {
               console.log("No Token Found! Product Progress!");
            }
         });
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
         document.querySelector(".bm-theme-root__container__page").innerHTML = ``;
         await window.CourseTemplate?.pages[type](params);
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
      setPageClass: (page = "") => {
         const currentPageClass = Array.from(document.body.classList).find((e) =>
            e.includes("page-"),
         );
         document.body.classList.remove(currentPageClass);
         document.body.classList.add(`page-${page}`);
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
      getAuth: async () => {
         return new Promise((res) => {
            const interval = setInterval(() => {
               if (
                  (document.querySelector(".product-container, #app-container") &&
                     window?.$cookies) ||
                  document.body.classList.contains("theme-ready")
               ) {
                  const data = (() => {
                     let result = {};
                     const acatToken = window?.$cookies?.get("acat");
                     const acatTokenV2 = window?.$cookies?.get("acatv2");
                     const acatTokenSessionStorage =
                        window.sessionStorage.getItem("acat");
                     const acatTokenSessionStorageV2 =
                        window.sessionStorage.getItem("acatv2");
                     const acatTokenLocalStorage = window.localStorage.getItem("acat");
                     const acatTokenLocalStorageV2 =
                        window.localStorage.getItem("acatv2");

                     const catToken = window?.$cookies?.get("cat");
                     const catTokenV2 = window?.$cookies?.get("catv2");
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
   };
}

if (!window.CourseTemplateCore) {
   window.CourseTemplateCore = new CourseTemplateCore();
}
