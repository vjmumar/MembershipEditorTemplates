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
      const getCookie = (name = "") => {
         const cookie = request.headers.get("Cookie");
         return cookie
            ?.split(";")
            ?.find((e) => e.includes(`${name}=`))
            ?.split("=")[1]
            ?.trim();
      };
      const token = getCookie("cat");
      const productId = url.href.split("/courses/products/")[1].split("?")[0];
      const locationId = getCookie("locationId");
      const contentType = ghlResponse.headers.get("content-type") || "";
      if (contentType.includes("text/html")) {
         let html = await ghlResponse.text();
         let parsedToken = JSON.parse(atob(token));
         let script = `
            <script>window.cookieStore.set("acat",'${token}')</script>
            <script>
               const url = '${url.href}';
               const fetchProduct = async () => {
                     return await new Promise((resolved, reject) => {
                        const url = 'https://services.leadconnectorhq.com/membership/locations/${locationId}/products/${productId}';
                        fetch(url, {
                              headers: {
                                 "accept": "application/json, text/plain, */*",
                                 "accept-language": "en-US,en;q=0.6",
                                 "authorization": 'Bearer ${parsedToken.tokenId}',
                                 "channel": "APP",
                                 "priority": 'high',
                              },
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
         const css = url.href.includes("/products/")
            ? `<style>body:not(.template-ready){opacity:0!important}</style>`
            : "";
         html = html.replace("<head>", `<head>${css}${script}`);
         return new Response(html, {
            status: ghlResponse.status,
            headers: { "content-type": "text/html" },
         });
      }
      return ghlResponse;
   },
};
