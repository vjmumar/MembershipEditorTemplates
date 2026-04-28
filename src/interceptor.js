export default {
   async fetch(request) {
      const url = new URL(request.url);
      const ghlOrigin = "https://datkpik46teouarhlbpy.app.clientclub.net";
      const ghlResponse = await fetch(`${ghlOrigin}${url.pathname}${url.search}`, {
         method: request.method,
         headers: {
            ...Object.fromEntries(request.headers),
            host: ghlOrigin,
         },
      });
      const contentType = ghlResponse.headers.get("content-type") || "";
      if (contentType.includes("text/html")) {
         let html = await ghlResponse.text();
         let script = "";
         if (url.href.includes("/courses/products")) {
            const getCookie = (name = "") => {
               const cookie = request.headers.get("Cookie");
               return cookie
                  ?.split(";")
                  ?.map((part) => part.trim())
                  ?.find((part) => part.split("=")[0] === name)
                  ?.split("=")
                  ?.slice(1)
                  ?.join("=")
                  ?.trim();
            };
            const decodeToken = (token) => {
               if (!token) return null;
               try {
                  const decoded = atob(decodeURIComponent(token));
                  return JSON.parse(decoded);
               } catch (error) {
                  console.error("Invalid token cookie", error);
                  return null;
               }
            };
            const acat = getCookie("acat");
            const cat = getCookie("cat");
            const locationId = getCookie("locationId");
            const productId = url.href.split("/courses/products/")[1].split("?")[0];
            const token = acat || cat;
            const parsedToken = decodeToken(token);
            script = `
            <script src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.10/dist/dotlottie-wc.js" type="module"></script>
            <script>
               const url = '${url.href}';
               const fetchProduct = async () => {
                     return await new Promise((resolved, reject) => {
                        const url = 'https://services.leadconnectorhq.com/membership/locations/${locationId}/products/${productId}?test=true';
                        fetch(url, {
                              headers: {
                                 "accept": "application/json, text/plain, */*",
                                 "accept-language": "en-US,en;q=0.6",
                                 "authorization": 'Bearer ${parsedToken?.tokenId}',
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
                      const parser = new DOMParser();
                      const doc = parser.parseFromString(data.customHeader, 'text/html');
                      const parsed = doc.querySelector('script');
                      const $headerScript = document.createElement('script');
                      const $customJsScript = document.createElement('script');
                      $headerScript.innerHTML = parsed.innerHTML;
                      $customJsScript.innerHTML = data.customJs;
                      document.body.append($customJsScript,$headerScript);
                      console.log('-');
                  });
               }
            </script>
         `;
         }
         const css = "";
         const loader = `
            <div
              class="template-loader"
              style="position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483647;display:grid;place-items:center;background:#fff;"
            >
              <dotlottie-wc
                src="https://lottie.host/5947091c-caae-4663-94b5-a68817f9e24e/Tkb1qTZsPV.lottie"
                style="width:150px;height:150px"
                autoplay
                loop
              ></dotlottie-wc>
            </div>

         `;
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
