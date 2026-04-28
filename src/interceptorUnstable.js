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
         const acat = getCookie("acat");
         const cat = getCookie("cat");
         const token = getCookie("cat") || getCookie("acat");
         const productId = getCookie("productId");
         const locationId = getCookie("locationId");
         let script = "";
         if (token) {
            const product = await (async () => {
               const tokenJson = JSON.parse(atob(token));
               const url = `https://services.leadconnectorhq.com/membership/locations/${locationId}/products/${productId}`;
               const productRes = await fetch(url, {
                  headers: {
                     "accept": "application/json, text/plain, */*",
                     "accept-language": "en-US,en;q=0.6",
                     "authorization": `Bearer ${tokenJson?.tokenId}`,
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
            })();
            script = `
            <script>window.cookieStore.set("acat",'${acat}'); window.cookieStore.set("cat",'${cat}');</script>
            <script>${product.customJs}</script>
            ${product.customHeader}
            <script>
               const url = "${url.href}";
               if (url.includes('/products/')) {         
                  setTimeout(()=>document.body.classList.add("template-ready"),60000);
               }
            </script>
         `;
         }
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
