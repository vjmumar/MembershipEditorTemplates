(async () => {
   // Others
   const locationId = location.pathname.split("/")[3];

   // First we will create a function that is responsible for returning the firebase auth storage
   const getFirebaseAuthManager = async () => {
      return await new Promise((res) => {
         // First, we open the IndexedDB database named "firebaseLocalStorageDb" with version 1
         const indexDbRequest = indexedDB.open("firebaseLocalStorageDb", 1);
         /**
          * Finally we will listen for a successful opening of the indexedDB database. Once successful, retrieve
          * the database connection and initiate a transaction to read from the "firebaseLocalStorage"
          * object store.
          */
         indexDbRequest.onsuccess = async (event) => {
            // First, we will retrieve the result of the successful IndexedDB request (the database instance)
            const db = event?.target?.result;
            // Then we will create a read-only transaction on the "firebaseLocalStorage" object store
            const transaction = db.transaction(["firebaseLocalStorage"], "readonly");
            // Then we will access the "firebaseLocalStorage" object store, where Firebase stores its authentication data
            const objectStore = transaction.objectStore("firebaseLocalStorage");
            /**
             * Then we will retrieve all records from the "firebaseLocalStorage" object store to find
             * Firebase auth-related data.
             */
            const getAllRequest = objectStore.getAll();
            /**
             * Finally, we listen for a successful retrieval of all records. Once successful,
             * retrieve all data from the "firebaseLocalStorage" object store by accessing the result
             * from the database request.
             */
            getAllRequest.onsuccess = async function (event) {
               // First we will access the result containing all data from the object store
               const allData = event.target?.result;
               /**
                * Then we will loop through the data to find the specific record that matches the pattern:
                * "firebase:authUser:" followed by a dynamic string, and ends with ":[DEFAULT]".
                */
               const matchingData = allData.find(
                  (item) =>
                     item.fbase_key.startsWith("firebase:authUser:") &&
                     item.fbase_key.endsWith(":[DEFAULT]"),
               );
               // Then we will retrieve the auth-related data (tokens, etc.) from the matching record.
               const authData = matchingData.value;
               // Then we will access the specific fields from the auth data (such as the access token)
               const accessToken = authData.stsTokenManager.accessToken;
               // Finally, we resolve the promise by returning the access token
               res({
                  manager: authData,
                  token: accessToken,
               });
            };
         };
      });
   };

   // Then we will retrieve the access token
   const accessToken = await (async () => {
      const firebaseManager = await getFirebaseAuthManager();
      return firebaseManager.token;
   })();

   // Then we will retrieve the auth manager
   const authManager = await (async () => {
      const firebaseManager = await getFirebaseAuthManager();
      return firebaseManager.manager;
   })();

   // Then we will create a function that is responsible for retrieving the current product
   const getProduct = async () => {
      const currentUrlProductId = new URL(location.href).searchParams.get("product_id");
      return await fetch(
         `https://backend.leadconnectorhq.com/membership/locations/${locationId}/products/${currentUrlProductId}`,
         {
            headers: {
               "accept": "application/json, text/plain, */*",
               "accept-language": "en-US,en;q=0.6",
               "authorization": `Bearer ${accessToken}`,
               "priority": "u=1, i",
               "source": "WEB_USER",
               "sourceid": locationId,
               "version": "2021-07-28",
               "Referer": "https://app.gohighlevel.com/",
            },
            body: null,
            method: "GET",
         },
      ).then((e) => e.json());
   };

   // Then we will create a function that is responsible for generating magic link
   const generateMagicLink = async () => {
      // First we will retrieve the portal settings
      const portalSettings = await fetch(
         `https://services.leadconnectorhq.com/clientclub/portal-settings/${locationId}`,
         {
            headers: {
               "accept": "application/json, text/plain, */*",
               "accept-language": "en-US,en;q=0.6",
               "channel": "APP",
               "source": "WEB_USER",
               "source-id": locationId,
               "token-id": accessToken,
               "Referer": "https://app.gohighlevel.com/",
               "version": "2021-07-28",
            },
            body: null,
            method: "GET",
         },
      ).then((e) => e.json());

      // Then we will retrieve the agency user contact
      const agencyUserContact = await fetch(
         `https://services.leadconnectorhq.com/clientclub/${portalSettings.locationId}/users/agency-user-contacts?agencyUserId=${authManager.uid}`,
         {
            headers: {
               "accept": "application/json, text/plain, */*",
               "accept-language": "en-US,en;q=0.6",
               "channel": "APP",
               "source": "WEB_USER",
               "source-id": portalSettings.locationId,
               "token-id": accessToken,
               "Referer": "https://app.gohighlevel.com/",
               "version": "2021-07-28",
            },
            body: null,
            method: "GET",
         },
      )
         .then((e) => e.json())
         .then((e) => e[0]);

      // Then we will retrieve the base url
      const baseUrl = await fetch(
         `https://backend.leadconnectorhq.com/membership/locations/${portalSettings.locationId}/settings/preview-base-url`,
         {
            headers: {
               "accept": "application/json, text/plain, */*",
               "accept-language": "en-US,en;q=0.6",
               "authorization": `Bearer ${accessToken}`,
               "channel": "APP",
               "source": "WEB_USER",
               "sourceid": location,
               "version": "2021-07-28",
               "Referer": "https://app.gohighlevel.com/",
            },
            body: null,
            method: "GET",
         },
      )
         .then((e) => e.json())
         .then((e) => e.baseUrl);

      // Then we will generate the magic link
      const magicLink = await fetch(
         `https://services.leadconnectorhq.com/clientclub/${portalSettings.locationId}/tokens/send-magic-link`,
         {
            headers: {
               "accept": "application/json, text/plain, */*",
               "accept-language": "en-US,en;q=0.6",
               "channel": "APP",
               "content-type": "application/json",
               "source": "WEB_USER",
               "source-id": portalSettings?.locationId,
               "token-id": accessToken,
               "Referer": "https://app.gohighlevel.com/",
               "version": "2021-07-28",
            },
            body: JSON.stringify({
               locationId: portalSettings?.locationId,
               email: [agencyUserContact?.email],
               sendEmail: false,
               showMagicLink: true,
               contactId: agencyUserContact?.contactId,
               source: "WEB_USER",
            }),
            method: "POST",
         },
      )
         .then((e) => e.json())
         .then((e) => e[0].magicLink);

      // Then we will retrieve v2 access token if available
      const v2AccessToken = await (async () => {
         const res = await cookieStore.get("access-token-v2").then((e) => e?.value);
         return res;
      })();

      const magicLinkUrl = new URL(magicLink);
      const magicLinkToken = magicLinkUrl.searchParams.get("token");
      const currentUrl = new URL(window.location.href);
      const currentUrlProductId = currentUrl.searchParams.get("product_id");
      const finalUrl = `${baseUrl}/courses/products/${currentUrlProductId}?token=${magicLinkToken || v2AccessToken}&adminToken=${accessToken}&membershipeditor=true&location_id=${portalSettings.locationId}&product_id=${currentUrlProductId}&agency_user_id=${authManager.uid}&agency_user_email=${encodeURIComponent(agencyUserContact?.email)}&is_preview=true`;
      return finalUrl;
   };

   // Then we will create a function that mounts the editor overlay (topbar + iframe) in the same tab
   const openEditor = (magicLink) => {
      // First we bail if an editor is already open so we never stack two overlays
      if (document.getElementById("bm-editor-overlay")) return;

      // Then we lock the underlying page scroll while the editor is open
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // Then we build the overlay markup: a fixed topbar with context + close, and a full-bleed iframe beneath it
      const wrapper = document.createElement("div");
      wrapper.id = "bm-editor-overlay";
      wrapper.innerHTML = `
        <style>
          /* Brand tokens — primary + white secondary */
          #bm-editor-overlay {
            --bm-primary: #10b981;
            --bm-primary-strong: #059669;
            --bm-secondary: #ffffff;
            position: fixed;
            inset: 0;
            z-index: 2147483647;
            display: flex;
            flex-direction: column;
            background: var(--bm-secondary);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            opacity: 0;
            transition: opacity 220ms ease;
          }
          #bm-editor-overlay.bm-visible { opacity: 1; }

          .bm-editor-topbar {
            flex: 0 0 auto;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            padding: 0 16px;
            background: var(--bm-secondary);
            border-bottom: 1px solid #e5e7eb;
            box-shadow: 0 1px 3px rgba(16, 24, 40, 0.06);
          }

          .bm-editor-topbar__left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
          }

          .bm-editor-topbar__badge {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            padding: 5px 11px;
            border-radius: 999px;
            background: color-mix(in srgb, var(--bm-primary) 12%, var(--bm-secondary));
            border: 1px solid color-mix(in srgb, var(--bm-primary) 35%, var(--bm-secondary));
            color: var(--bm-primary-strong);
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.01em;
            white-space: nowrap;
          }

          .bm-editor-topbar__dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--bm-primary);
            box-shadow: 0 0 0 0 color-mix(in srgb, var(--bm-primary) 70%, transparent);
            animation: bm-pulse 2s ease-out infinite;
          }
          @keyframes bm-pulse {
            0%   { box-shadow: 0 0 0 0 color-mix(in srgb, var(--bm-primary) 55%, transparent); }
            70%  { box-shadow: 0 0 0 6px color-mix(in srgb, var(--bm-primary) 0%, transparent); }
            100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--bm-primary) 0%, transparent); }
          }

          .bm-editor-topbar__title {
            display: flex;
            flex-direction: column;
            min-width: 0;
            line-height: 1.25;
          }
          .bm-editor-topbar__title strong {
            color: #111827;
            font-size: 13.5px;
            font-weight: 600;
          }
          .bm-editor-topbar__title span {
            color: #6b7280;
            font-size: 11.5px;
            font-weight: 400;
          }

          .bm-editor-topbar__right {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .bm-editor-topbar__hint {
            color: #9ca3af;
            font-size: 11.5px;
            font-weight: 400;
          }

          .bm-editor-close {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            height: 36px;
            padding: 0 14px;
            border: 1px solid #e5e7eb;
            border-radius: 9px;
            background: var(--bm-secondary);
            color: #374151;
            font-family: inherit;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            transition: background 140ms ease, border-color 140ms ease, color 140ms ease;
          }
          .bm-editor-close:hover {
            background: #fef2f2;
            border-color: #fecaca;
            color: #dc2626;
          }
          .bm-editor-close svg { width: 15px; height: 15px; }

          .bm-editor-body {
            flex: 1 1 auto;
            position: relative;
            min-height: 0;
            background: var(--bm-secondary);
          }
          .bm-editor-body iframe {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            border: 0;
            display: block;
          }

          .bm-editor-loader {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 14px;
            background: var(--bm-secondary);
            color: #6b7280;
            font-size: 13px;
          }
          .bm-editor-loader__spinner {
            width: 30px;
            height: 30px;
            border: 3px solid color-mix(in srgb, var(--bm-primary) 20%, var(--bm-secondary));
            border-top-color: var(--bm-primary);
            border-radius: 50%;
            animation: bm-spin 0.8s linear infinite;
          }
          @keyframes bm-spin { to { transform: rotate(360deg); } }
          .bm-editor-body.bm-loaded .bm-editor-loader { display: none; }

          @media (max-width: 640px) {
            .bm-editor-topbar__hint { display: none; }
          }
        </style>

        <div class="bm-editor-topbar">
          <div class="bm-editor-topbar__left">
            <span class="bm-editor-topbar__badge">
              <span class="bm-editor-topbar__dot"></span>
              Editing
            </span>
            <span class="bm-editor-topbar__title">
              <strong>Theme editor</strong>
              <span>Changes preview live — close when you're done</span>
            </span>
          </div>
          <div class="bm-editor-topbar__right">
            <span class="bm-editor-topbar__hint">Press Esc to exit</span>
            <button class="bm-editor-close" id="bm-editor-close" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              Close editor
            </button>
          </div>
        </div>

        <div class="bm-editor-body" id="bm-editor-body">
          <div class="bm-editor-loader">
            <div class="bm-editor-loader__spinner"></div>
            <div>Opening your theme editor…</div>
          </div>
          <iframe id="bm-editor-iframe" src="${magicLink}"
            allow="clipboard-read; clipboard-write"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation-by-user-activation allow-modals"></iframe>
        </div>
      `;
      document.body.appendChild(wrapper);

      // Then we fade the overlay in on the next frame for a smooth entrance
      requestAnimationFrame(() => wrapper.classList.add("bm-visible"));

      // Then we hide the loader once the iframe has loaded so the user sees the editor, not a blank frame
      const body = wrapper.querySelector("#bm-editor-body");
      wrapper.querySelector("#bm-editor-iframe").addEventListener("load", () => {
         body.classList.add("bm-loaded");
      });

      // Then we create a single close routine that fades out, restores scroll, and removes the overlay
      const closeEditor = () => {
         wrapper.classList.remove("bm-visible");
         document.body.style.overflow = previousOverflow;
         document.removeEventListener("keydown", onKey);
         setTimeout(() => wrapper.remove(), 220);
      };

      // Then we wire the close button
      wrapper.querySelector("#bm-editor-close").addEventListener("click", closeEditor);

      // Finally we let the Escape key close the editor as well
      const onKey = (e) => {
         if (e.key === "Escape") closeEditor();
      };
      document.addEventListener("keydown", onKey);
   };

   // This helper injects our button next to #preview-btn, once
   const injectButton = async (previewBtn) => {
      // First we will check if we are inside a course page
      const currentPageUrl = location.href;
      const isInsideProduct =
         currentPageUrl.includes("/memberships/courses") &&
         currentPageUrl.includes("product_id=");
      const currentProduct = await getProduct();

      // First we bail if our button is already there or we are not inside product page
      if (!isInsideProduct || document.getElementById(`bm-editor-launch-btn`)) return;

      // Then we will check if the product contains client id in it's header, if not then we will bail
      if (isInsideProduct && !currentProduct?.customHeader?.includes("data-client")) {
         return;
      }

      // Then we inject the button styles once (scoped to our button id so nothing else is affected)
      if (!document.getElementById("bm-edit-btn-styles")) {
         const style = document.createElement("style");
         style.id = "bm-edit-btn-styles";
         style.textContent = `
          /* Brand tokens — primary + white secondary */
          #bm-editor-launch-btn {
            --bm-primary: #10b981;
            --bm-primary-strong: #059669;
            --bm-secondary: #ffffff;
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-left: 10px;
            padding: 4px 14px 4px 14px;
            min-height: 32px;
            max-height: 32px;
            border: 0;
            border-radius: 5px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 0.01em;
            color: var(--bm-secondary);
            cursor: pointer;
            isolation: isolate;
            overflow: hidden;
            background: linear-gradient(135deg, var(--bm-primary) 0%, var(--bm-primary-strong) 100%);
            box-shadow:
              0 1px 2px color-mix(in srgb, var(--bm-primary-strong) 25%, transparent),
              0 6px 16px -6px color-mix(in srgb, var(--bm-primary) 55%, transparent),
              inset 0 1px 0 rgba(255, 255, 255, 0.18);
            transition:
              transform 140ms cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 140ms ease,
              filter 140ms ease;
          }

          /* the sheen that sweeps across on hover */
          #bm-editor-launch-btn::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: -1;
            background: linear-gradient(
              100deg,
              transparent 20%,
              rgba(255, 255, 255, 0.35) 50%,
              transparent 80%
            );
            transform: translateX(-120%);
            transition: transform 620ms ease;
          }

          #bm-editor-launch-btn:hover {
            filter: saturate(1.08);
            box-shadow:
              0 2px 4px color-mix(in srgb, var(--bm-primary-strong) 28%, transparent),
              0 10px 24px -6px color-mix(in srgb, var(--bm-primary) 70%, transparent),
              inset 0 1px 0 rgba(255, 255, 255, 0.22);
          }
          #bm-editor-launch-btn:hover::before { transform: translateX(120%); }

          #bm-editor-launch-btn:active { transform: translateY(0) scale(0.98); }

          #bm-editor-launch-btn:focus-visible {
            outline: none;
            box-shadow:
              0 0 0 3px color-mix(in srgb, var(--bm-primary) 35%, transparent),
              0 6px 16px -6px color-mix(in srgb, var(--bm-primary) 55%, transparent);
          }

          #bm-editor-launch-btn .bm-edit-btn__icon {
            width: 15px;
            height: 15px;
            flex: 0 0 15px;
            transition: transform 220ms ease;
          }

          /* loading state: swap icon for a spinner, dim slightly, block clicks */
          #bm-editor-launch-btn.bm-loading {
            pointer-events: none;
            filter: saturate(0.9);
          }
          #bm-editor-launch-btn.bm-loading .bm-edit-btn__icon { display: none; }
          #bm-editor-launch-btn.bm-loading::after {
            content: "";
            width: 14px;
            height: 14px;
            flex: 0 0 14px;
            border: 2px solid rgba(255, 255, 255, 0.4);
            border-top-color: var(--bm-secondary);
            border-radius: 50%;
            animation: bm-edit-spin 0.7s linear infinite;
          }
          @keyframes bm-edit-spin { to { transform: rotate(360deg); } }

          @media (prefers-reduced-motion: reduce) {
            #bm-editor-launch-btn, #bm-editor-launch-btn::before, #bm-editor-launch-btn .bm-edit-btn__icon { transition: none; }
          }
        `;
         document.head.appendChild(style);
      }

      // Then we build the button with a pencil icon + label
      const btn = document.createElement("button");
      btn.id = `bm-editor-launch-btn`;
      btn.type = "button";
      btn.innerHTML = `
        <svg class="bm-edit-btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 20h9"/>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/>
        </svg>
        <span class="bm-edit-btn__label">Edit Theme</span>
      `;
      btn.addEventListener("click", async () => {
         // First we grab the label and put the button into a loading state so the wait reads as intentional
         const label = btn.querySelector(".bm-edit-btn__label");
         const originalLabel = label.textContent;
         btn.classList.add("bm-loading");
         label.textContent = "Preparing…";

         // Then we generate the magic link and open the in-tab editor overlay
         try {
            const magicLink = await generateMagicLink();
            openEditor(magicLink);
         } catch (err) {
            // Then if something fails we surface it rather than leaving the button stuck
            console.error("Edit Theme failed:", err);
         } finally {
            // Finally we restore the button to its normal state
            btn.classList.remove("bm-loading");
            label.textContent = originalLabel;
         }
      });

      // Finally we place it right after #preview-btn
      previewBtn.insertAdjacentElement("afterend", btn);
   };

   // This checks the DOM right now, in case #preview-btn already exists before the observer starts
   const existing = document.getElementById("preview-btn");
   if (existing) injectButton(existing);

   // Then we watch document.body for #preview-btn appearing (SPA renders it late)
   const observer = new MutationObserver(() => {
      const previewBtn = document.getElementById("preview-btn");
      // We keep the observer alive (don't disconnect) because SPA navigation can
      // remove and re-add #preview-btn — if it comes back, our guard re-injects safely
      if (previewBtn) injectButton(previewBtn);
   });

   observer.observe(document.body, { childList: true, subtree: true });
})();
