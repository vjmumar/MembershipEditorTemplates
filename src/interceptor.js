export default {
   async fetch(request) {
      const url = new URL(request.url);
      const ghlOrigin = "https://datkpik46teouarhlbpy.app.clientclub.net";
      const ghlResponse = await fetch(`${ghlOrigin}${url.pathname}${url.search}`, {
         method: request.method,
         headers: {
            ...Object.fromEntries(request.headers),
            host: "datkpik46teouarhlbpy.app.clientclub.net",
         },
      });
      const contentType = ghlResponse.headers.get("content-type") || "";
      if (contentType.includes("text/html")) {
         let html = await ghlResponse.text();
         let script = `
            <script>
               const getAuth = () => {
                  return new Promise((res) => {
                     const interval = setInterval(() => {
                        const acatToken = window?.$cookies?.get("acat");
                        const catToken = window?.$cookies?.get("cat");
                        if (acatToken || catToken) {
                           const data = JSON.parse(window.atob(catToken || acatToken) || "{}");
                           if (!("productId" in data)) {
                              const url = '${url}'
                                 ?.split("/products/")[1]
                                 .split("/")[0]
                                 .split("?")[0];
                              data.productId = url;
                           }
                           clearInterval(interval)
                           res(data);
                        }
                     }, 500);
                  });
               };
               const fetchProduct = async () => {
                     const auth = await getAuth();
                     const productId = auth?.productId;
                     const locationId = auth?.locationId;
                     const token = auth?.tokenId;
                     const contactId = auth?.contactId;
                     const userId = auth?.externalUserId;
                     return await new Promise((resolved, reject) => {
                        const url = \`https://services.leadconnectorhq.com/membership/locations/\${locationId}/products/\${productId}\`;
                        if (token) {
                           fetch(url, {
                              headers: {
                                 "accept": "application/json, text/plain, */*",
                                 "accept-language": "en-US,en;q=0.6",
                                 "authorization": \`Bearer \${token}\`,
                                 "channel": "APP",
                              },
                              body: null,
                              method: "GET",
                           })
                              .then((e) => e.json())
                              .then((e) => {
                                 resolved(e);
                              });
                        } else {
                           console.log("No Token Found! intercept");
                        }
                     });
                  };
               setTimeout(()=>document.body.classList.add("template-ready"),20000);
               fetchProduct().then((data) => {
                   const parser = new DOMParser();
                   const doc = parser.parseFromString(data.customHeader, 'text/html');
                   const parsed = doc.querySelector('script');
                   const $headerScript = document.createElement('script');
                   const $customJsScript = document.createElement('script');
                   $headerScript.innerHTML = parsed.innerHTML;
                   $customJsScript.innerHTML = data.customJs;
                   document.body.append($customJsScript,$headerScript);
               });
            </script>
         `;
         html = html.replace(
            "<body>",
            `<body><style>body:not(.template-ready){opacity:0!important}</style>${script}`,
         );
         return new Response(html, {
            status: ghlResponse.status,
            headers: { "content-type": "text/html" },
         });
      }
      return ghlResponse;
   },
};
