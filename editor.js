<style id="editor">
    #app {
        display: flex;
    }


    #app-container {
        flex: 1;
    }

    /* Editor */
    .editor-customizer-sidebar input[type="text"],
    .editor-customizer-sidebar input[type="number"],
    .editor-customizer-sidebar input[type="color"],
    .editor-customizer-sidebar input[type="checkbox"] {
        font-size: 14px;
        padding: 6px 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
        width: 100%;
        outline: none;
        text-align: left;
        transition: border-color 0.2s, box-shadow 0.2s;
    }

    .editor-customizer-sidebar input::placeholder {
        color: #999;
        opacity: 1;
        font-size: 12px;
        text-align: left;
    }

    .editor-customizer-sidebar input[type="text"]:focus,
    .editor-customizer-sidebar input[type="number"]:focus,
    .editor-customizer-sidebar input[type="color"]:focus,
    .editor-customizer-sidebar input[type="checkbox"]:focus {
        border-color: #7c3aed;
        box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
    }

    .editor-customizer-sidebar input[type="checkbox"] {
        width: 16px;
        height: 16px;
        cursor: pointer;
        accent-color: #7c3aed;
    }

    .editor-customizer-sidebar input[type="color"] {
        padding: 0;
        width: 40px;
        height: 32px;
        cursor: pointer;
    }

    .editor-customizer-sidebar textarea {
        width: 100%;
        min-height: 140px;
        padding: 10px;
        font-size: 13px;
        font-family: monospace;
        line-height: 1.4;
        border: 1px solid #ccc;
        border-radius: 6px;
        background: #fafafa;
        overflow: auto;
        resize: vertical;
    }

    .editor-customizer-sidebar textarea::placeholder {
        font-family: monospace;
        opacity: .5;
    }

    [data-editable="true"] {
        outline: 1px dashed rgb(7 0 255);
        outline-offset: -1px;
        cursor: pointer;
    }

    [data-editable="true"] iframe {
        pointer-events: none;
    }

    [data-editable="true"]:hover {
        outline-width: 2px;
    }

    /* Customizer */
    .editor-customizer-sidebar {
        width: 320px;
        height: 100vh;
        position: sticky;
        display: none;
        top: 0;
        box-shadow: 1px 1px black;
    }

    .editor-customizer-sidebar.active {
        display: block;
    }

    .editor-customizer-header {
        display: flex;
        align-items: center;
        padding: 25px 15px;
        background-color: white;
        border-bottom: 1px solid #e5e7eb;
        justify-content: space-between;
        margin-bottom: 10px;
        height: 40px;
        position: sticky;
        z-index: 9999;
        top: 0;
    }

    .editor-customizer-header__global {
        font-size: 20px;
        color: black;
        cursor: pointer;
    }

    .editor-customizer-header__text {
        font-weight: 700;
        font-size: 14px;
        color: black;
    }

    .editor-customizer-sidebar__content {
        height: calc(100vh - 70px);
        overflow-y: auto;
    }

    .global-customizer-item__form__item {
        margin-bottom: 5px;
    }

    .global-customizer-item__form__item__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        font-size: 14px;
        background-color: #f0f0f0;
        padding: 5px;
        border-radius: 3px
    }

    .global-customizer-item__form__item.active .global-customizer-item__form__item__title {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .global-customizer-item__form__item__edit {
        display: none;
        padding: 10px 5px;
        border: 1px solid #8080801f;
        display: none;
        border-top: 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .global-customizer-item__form__item.active .global-customizer-item__form__item__edit {
        display: block;
    }

    .global-customizer-item__form__item__edit__title {
        font-size: 13px;
    }

    .global-customizer-item__form__item.active .global-customizer-item__form__item__title i {
        rotate: 90deg;
    }

    /* Form */
    .editor-customizer-form {
        height: calc(100% - 40px);
        overflow-y: auto;
    }

    .editor-customizer-item__form {
        padding-inline: 10px;
    }

    .editor-customizer-item__form__item {
        margin-bottom: 15px;
    }

    .editor-customizer-item__form__item__title {
        font-size: 13px;
        margin-bottom: 10px;
    }

    .editor-customizer-item__form__item__input__group {
        margin-bottom: 20px;
    }

    .editor-customizer-item__form__item__input__group__toggler {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-bottom: 10px;
        margin-top: 5px
    }

    /* Feature Toggler */
    .editor-customizer-item__form__item__input__group__name__toggler {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        font-size: 14px;
        background-color: #f0f0f0;
        padding: 5px;
        border-radius: 3px;
    }

    .editor-customizer-item__form__item__input__group__name__toggler i {
        font-size: 11px;
    }

    .editor-customizer-item__form__item__input__group.feature.active .editor-customizer-item__form__item__input__group__name__toggler i {
        rotate: 90deg !important;
    }

    .editor-customizer-item__form__item__input__group__content {
        display: none;
    }

    .editor-customizer-item__form__item__input__group.feature.active .editor-customizer-item__form__item__input__group__content {
        display: flex;
        flex-direction: column;
        padding-block: 10px;
    }

    /* Global Form */
    .global-customizer__header {
        display: flex;
        align-items: center;
        padding: 25px 15px;
        background-color: white;
        border-bottom: 1px solid #e5e7eb;
        justify-content: space-between;
        margin-bottom: 10px;
        position: sticky;
        top: 0;
        height: 40px;
        z-index: 9999;
    }

    .global-customizer__header__text {
        font-weight: 700;
        font-size: 14px;
        color: black;
    }

    .global-customizer__header__themes {
        font-size: 20px;
        color: violet;
        cursor: pointer;
    }

    .global-customizer-item {
        padding: 10px;
        margin-bottom: 0px;
        padding-bottom: 0;
    }

    .global-customizer-item__toggler {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #8080801f;
        padding: 10px;
        cursor: pointer;
        border-radius: 5px;
    }

    .global-customizer-item.active .global-customizer-item__toggler {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .global-customizer-item__toggler p {
        font-size: 15px;
    }

    .global-customizer-item__toggler i {
        font-size: 11px;
    }

    .global-customizer-item.active .global-customizer-item__toggler i {
        rotate: 90deg;
    }

    .global-customizer-item__wrapper {
        padding: 10px;
        border: 1px solid #8080801f;
        display: none;
        border-radius: 5px;
        border-top: 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .global-customizer-item.active .global-customizer-item__wrapper {
        display: block;
    }

    .global-customizer-item__form__item__edit__item {
        padding: 10px 5px;
        margin-bottom: 8px;
    }

    .global-customizer-item__form__item__edit__item__name {
        font-size: 14px;
        margin-bottom: 5px;
    }

    .global-customizer-item__form__item__edit__item__toggler {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-block: 5px;
    }

    .global-customizer-item__form__item__edit__item__customizations {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-height: 441px;
        overflow-y: auto;
        padding: 5px;
    }

    /* Feature Toggler */
    .global-customizer-item__form__item__edit__item__name__toggler {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        font-size: 14px;
        background-color: #f0f0f0;
        padding: 5px;
        border-radius: 3px;
    }

    .global-customizer-item__form__item__edit__item__name__toggler i {
        font-size: 11px;
    }

    .global-customizer-item__form__item__edit__item.feature.active .global-customizer-item__form__item__edit__item__name__toggler i {
        rotate: 90deg !important;
    }

    .global-customizer-item__form__item__edit__item__content {
        display: none;
    }

    .global-customizer-item__form__item__edit__item.feature.active .global-customizer-item__form__item__edit__item__content {
        display: flex;
        flex-direction: column;
        padding-block: 10px;
    }

    /* Sidebar Footer */
    .editor-customizer-sidebar__footer {
        display: flex;
        border-top: 1px solid #e5e7eb;
        padding: 16px;
        gap: 8px;
        flex-shrink: 0;
        align-items: center;
        height: 70px;
    }

    .editor-customizer-sidebar__footer__button {
        flex: 1;
        padding: 0 16px;
        cursor: pointer;
        font-size: 15px;
        font-weight: 500;
        min-height: 40px;
        border-radius: 6px;
    }

    .editor-customizer-hide {
        border: 1px solid #4b5563;
        color: #4b5563;
    }

    .editor-customizer-exit {
        border: 1px solid red;
        color: red;
    }

    .editor-customizer-save {
        background-color: #10b981;
        color: white;
    }

    .editor-customizer-save::before {
        content: "Save";
    }

    .editor-customizer-save.saving {
        opacity: .5;
        background-color: #10b981c0;
        pointer-events: none;
        cursor: none;
    }

    .editor-customizer-save::before.saving {
        content: "Saving..."
    }

    /* Theme Selector */
    .theme-selector__header {
        display: flex;
        align-items: center;
        padding: 25px 15px;
        background-color: white;
        border-bottom: 1px solid #e5e7eb;
        justify-content: space-between;
        margin-bottom: 10px;
        position: sticky;
        top: 0;
        height: 40px;
        z-index: 9999;
    }

    .theme-selector__header__text {
        font-weight: 700;
        font-size: 14px;
        color: black;
    }

    .theme-selector__header__icon {
        font-size: 20px;
        color: black;
        cursor: pointer;
    }

    .theme-selector__list {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 5px;
        padding-inline: 10px;
    }

    .theme-selector__list__item__image {
        width: 100%;
        height: fit-content;
        object-fit: contain;
        min-height: 150px;
    }

    .theme-selector__list__item__content {
        position: relative;
    }

    .theme-selector__list__item__title {
        text-align: center;
        font-size: 11px;
        background-color: #10b98166;
        padding-block: 5px;
        color: black;
        letter-spacing: .3px;
    }

    .theme-selector__list__item {
        border-radius: 0px;
        overflow: hidden;
    }

    .theme-selector__list__item__controller {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .theme-selector__list__item__controller__info {
        font-size: 14px;
        text-align: center;
        padding-block: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: #ededed;
    }

    .theme-selector__list__item__controller__button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        text-align: center;
        width: 50%;
        background-color: rgba(0, 0, 0, 0.07);
        cursor: pointer;
        flex: 1 1 0%;
        padding-block: 7px;
        text-decoration: none !important;
    }

    .theme-selector__list__item__controller__button.use {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        text-align: center;
        width: 50%;
        background-color: rgba(0, 0, 0, 0.07);
        cursor: pointer;
        flex: 1 1 0%;
        padding-block: 7px;
        text-decoration: none !important;
        color: black !important;
    }

    /* Widget */
    .widget-multi-input {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, auto);
        gap: 8px;
        width: 100%;
        margin-top: 5px;
        background: #fafafa;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #eee;
    }

    .widget-multi-input input[type="number"] {
        padding: 8px 4px;
        text-align: center !important;
        font-family: monospace;
        width: 100% !important;
    }


    .widget-multi-input input::placeholder {
        text-align: center !important;
    }

    .widget-multi-input input:focus::placeholder {
        color: transparent;
    }

    .widget-multi-input input[data-side="top"] {
        grid-area: 1 / 2 / 2 / 3;
    }

    .widget-multi-input input[data-side="left"] {
        grid-area: 2 / 1 / 3 / 2;
    }

    .widget-multi-input input[data-side="all"] {
        grid-area: 2 / 2 / 3 / 3;
        font-weight: bold;
        color: #7c3aed;
    }

    .widget-multi-input input[data-side="right"] {
        grid-area: 2 / 3 / 3 / 4;
    }

    .widget-multi-input input[data-side="bottom"] {
        grid-area: 3 / 2 / 4 / 3;
    }
</style>
<!-- CSS for features -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css">
<!-- JS for features -->
<script src="
https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.8.2/tinymce.min.js" referrerpolicy="origin"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.5.2/jscolor.min.js"
    integrity="sha512-qFhMEJrjI50TwLDGZ7Oi0ksTSWnFOqTNXhlqqUgWnE65S23rWUtQOv+tMNEybkMYSXKgAc3eg/SzkX+qrtJT/g=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script defer>
    class MembershipCustomization {

        constructor() {
            // First, we define the available templates along with their metadata such as IDs, preview images, and script sources
            this.templates = [
                {
                    id: "template-0",
                    imageUrl: "https://storage.googleapis.com/msgsndr/imyvHV2ppMPun9vEAcRz/media/69492d947614ce184f7e9b76.png",
                    title: "Template 1",
                    scriptLink: "https://cdn.jsdelivr.net/gh/vjmumar/MembershipEditorTemplates@main/template1.js",
                    previewLink: ""
                },
                {
                    id: "template-1",
                    imageUrl: "https://dummyimage.com/700x400/000/fff&text=Dummy+Template",
                    title: "Template 2",
                    scriptLink: "https://cdn.jsdelivr.net/gh/vjmumar/MembershipEditorTemplates@main/template2.js",
                    previewLink: ""
                },
            ];

            /**
            * Then we determine the currently active template based on the window configuration and dynamically load its script,
            * falling back to the first template as a safe default when none is explicitly active
            */
            const currentTemplate = this.templates.find((tem) => tem.id === window?.activeTemplateConfig?.id);
            const script = document.createElement("script");
            script.src = (currentTemplate ? currentTemplate : this.templates[0])?.scriptLink;
            script.type = "module";
            document.body.append(script);

            // Then we initialize runtime state placeholders for the active template and active page editor
            this.activeTemplate = null;
            this.activePageOnTemplate = null;

            /**
            * Then, once the template script has finished loading, we initialize the active template configuration,
            * resolve the default page editor state, and finally trigger the application initialization sequence
            */
            script.onload = () => {
                // First we will initialize the active template by merging runtime configuration with the customization schema when applicable
                this.activeTemplate = (() => {
                    if (window.activeTemplateConfig && window.activeTemplateConfig?.name) {
                        if (window.activeTemplateConfig?.name === window?.templateCustomizationSchema?.name) {
                            /**
                            * Merges the User's saved configuration into the Master Template Schema.
                            * * We use _.mergeWith to ensure that if we fix a CSS selector or property 
                            * in our code (the schema), those fixes are applied, while still 
                            * preserving the specific 'value' the user entered.
                            */
                            return window?._?.mergeWith(
                                // We clone the schema so we don't mutate the original "Master" object in memory
                                window._.cloneDeep(window?.templateCustomizationSchema),
                                window?.activeTemplateConfig,
                                (objectValue, srcValue, key) => {

                                    // --- STEP 1: USER DATA OVERWRITES ---
                                    // If the current property is 'value' (the actual color/text) 
                                    // or 'isTurnedOn' (the toggle state), we want the user's saved data.
                                    if (key === 'value' || key === 'isTurnedOn') {
                                        return srcValue;
                                    }

                                    // --- STEP 2: RECURSIVE DRILLING ---
                                    // If the current property is an Object or Array (a "branch"), 
                                    // we return 'undefined'. This tells Lodash: 
                                    // "Don't stop here. Go deeper into this object to find the nested values."
                                    if (window._.isObject(objectValue)) {
                                        return undefined;
                                    }

                                    // --- STEP 3: SCHEMA PROTECTION (THE LOCK) ---
                                    // For every other property (elementSelector, property, name, type, etc.),
                                    // we return 'objectValue' (the Schema version).
                                    // This ensures that even if the user has an old/broken selector saved,
                                    // our latest code fix will overwrite it.
                                    return objectValue;
                                }
                            );
                        } else {
                            return window.templateCustomizationSchema;
                        }
                    } else {
                        return window.templateCustomizationSchema;
                    }
                })();

                // Then we will select the default page editor configuration from the active template
                this.activePageOnTemplate = this.activeTemplate?.pages[0]?.editor;

                // Finally we will invoke the initialization sequence to start the application
                this.initializers.init();
            };

            // Finally we will retrieve the authentication token by parsing the product data from the cookies
            const productData = JSON.parse(window.atob($cookies.get("acat")));
            this.token = productData?.tokenId;
        }


        // Initializer module
        initializers = {
            // This method serves as the entry point for the application initialization
            init: () => {
                // First we will retrieve the preview status from session storage and check the URL for the editor flag
                const isPreview = sessionStorage?.is_preview === "true";
                const isEdit = ((new URLSearchParams(window.location.search)).get("membershipeditor")) === "true";

                // Then if we are in preview mode, we will determine which interface to show
                if (isPreview) {
                    // If the editor flag is present, we initialize the full editor, otherwise we show the floating toggle widget
                    if (isEdit) {
                        this.initializers.initShowEditor();
                    } else {
                        this.initializers.initFloatingWidgetToggler();
                    }
                }

                // Finally we will initialize the synchronization configuration to ensure all customizations are applied
                this.initializers.initSyncConfig();
            },


            // This method is responsible for synchronizing the CSS, element, and feature customizations in a single execution
            initSyncConfig: () => {
                // First we will retrieve the current URL
                const url = window.location.href;

                // Finally we will iterate through the template pages to find the current view and process it
                this.activeTemplate.pages.forEach((page) => {
                    // First we will create a new RegExp instance using the regex pattern from the current page configuration
                    const urlRegex = new RegExp(page?.urlRegex);

                    // Finally we will check if the current URL matches the regex pattern; if it does, we will proceed to process it
                    if (urlRegex?.test(url)) {
                        // First we will update the active page state with the specific editor configuration that matches the current URL
                        this.activePageOnTemplate = page.editor;

                        // Finally we will invoke all synchronizers to apply the configuration customizations
                        this.actions.syncTemplateCssCustomizations();
                        this.actions.syncTemplateElementsCustomization();
                        setTimeout(() => {
                            this.actions.syncTemplateFeatureCustomizations(null, null, true);
                        }, 5500);
                    }
                });
            },

            // This method is responsible for showing the floating widget that toggles the page into editing
            initFloatingWidgetToggler: () => {
                // First we will define the visual styles and HTML structure for the floating toggle button
                const html = `
                    <style>
                    .editor-floating-toggler {
                        position: fixed;
                        bottom: 30px;
                        right: 30px;
                        width: 60px;
                        height: 60px;
                        background-color: white;
                        border-radius: 50%;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        z-index: 2147483647;
                        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        border: 2px solid black;
                    }

                    .editor-floating-toggler:hover {
                        transform: scale(1.1) rotate(10deg);
                        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
                        background-color: black;
                        border-color: black;
                    }

                    .editor-floating-toggler svg {
                        width: 24px;
                        height: 24px;
                        color: black;
                        stroke-width: 2px;
                        pointer-events: none;
                        transition: color 0.3s ease;
                    }

                    .editor-floating-toggler:hover svg {
                        color: white;
                    }
                    </style>
                    <div class="editor-floating-toggler">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>
                    </div>
                `;

                // Then we will inject the floating widget into the document body
                document.body.insertAdjacentHTML("beforeend", html);

                // Finally we will attach a click listener to reload the page with the editor parameter enabled
                setTimeout(() => {
                    document.querySelector('.editor-floating-toggler').addEventListener("click", () => {
                        const u = new URL(window.location);
                        u.searchParams.set('membershipeditor', 'true');
                        location.href = u.toString();
                    })
                }, 500);
            },

            // This method will wait until the #app container exists before initializing the editor
            initShowEditor: () => {
                // First we will retrieve the editor styles from the DOM
                const editorStyle = document.querySelector("#editor").outerHTML;

                // Finally we will start an interval to wait for the application container and template to load
                const interval = setInterval(() => {
                    // First we will retrieve the ghl container and the template container from our premade templates
                    const $container = document.querySelector("#app");
                    const $template = document.querySelector(".template-container");

                    // Finally once the necessary elements are found, we will stop the interval
                    if ($container && $template) {
                        // First we will clear the interval
                        clearInterval(interval);

                        // Then we will retrieve the current url
                        const url = window.location.href;

                        // Finally we will iterate through the template pages to find the current view and initialize the editor logic
                        this.activeTemplate.pages.forEach((page) => {
                            const urlRegex = new RegExp(page?.urlRegex);
                            if (urlRegex?.test(url)) {
                                // First we will inject the editor styles into the document head to ensure they persist even if the app container is cleared during rendering
                                document.head.insertAdjacentHTML("beforeend", editorStyle);

                                // Then we will update the active page state with the specific editor configuration that matches the current URL
                                this.activePageOnTemplate = page.editor;

                                // Finally we will invoke the main editor initializer to render the sidebar and attach the necessary event listeners to the page
                                this.initializers.initializeEditor();
                            }
                        });
                    }
                }, 0);
            },

            // This method will initialize all editor components and attach tooltips + sidebar
            initializeEditor: () => {
                // First we will loop over all items from the activePageOnTemplate to prepare the DOM elements
                this.activePageOnTemplate.forEach((item) => {
                    // First we will retrieve the element based on its selector
                    let $element = document.querySelector(item.elementSelector);

                    // Then we will attach the required attributes so our editor can identify it
                    $element?.setAttribute("data-editable", "true");
                    $element?.setAttribute("data-editor-key", item.key);
                    $element?.setAttribute("data-editor-template", "template1");

                    /**
                     * Finally we will re-render the element by resetting its outerHTML.
                     * This is needed because some SPA frameworks handle navigation without anchor tags.
                     * By forcing a re-render, all existing event listeners on the element get removed,
                     * which prevents unintended navigation behavior.
                    */
                    if ($element) $element.outerHTML = $element.outerHTML;
                });

                // Then we will inject the customization sidebar HTML into the application container
                const sidebarHTML = `
                    <div class="editor-customizer-sidebar active">
                        <div class="editor-customizer-sidebar__content">
                            <p style="font-size: 20px; text-align:center; padding-block: 30px; margin-inline: 10px;">👋 Click any editable element to start customizing</p>
                        </div>
                        <div class="editor-customizer-sidebar__footer">
                            <button class="editor-customizer-sidebar__footer__button editor-customizer-exit">Exit</button>  
                            <button class="editor-customizer-sidebar__footer__button editor-customizer-hide" onclick="this.closest('.editor-customizer-sidebar').classList.remove('active')">Hide</button>  
                            <button class="editor-customizer-sidebar__footer__button editor-customizer-save"></button>      
                        </div>
                    </div>
                `;
                document.querySelector("#app").insertAdjacentHTML("beforeend", sidebarHTML);

                // Then we will initialize the global editor settings after a short delay
                setTimeout(() => {
                    this.initializers.initializeGlobalEditor();
                }, 500);

                // Then we will disable all anchor tags to prevent accidental navigation while editing
                setTimeout(() => {
                    document.querySelectorAll("a").forEach((a) => {
                        a.href = "#";
                        a.removeAttribute("download")
                    });
                }, 2000);

                // Then we will attach a click listener into the exit button
                setTimeout(() => {
                    document.querySelector(".editor-customizer-exit")?.addEventListener("click", () => {
                        const shouldExit = confirm("Any unsaved changes will be lost. Are you sure you want to leave?");
                        if (shouldExit) {
                            const u = new URL(window.location);
                            u.searchParams.delete('membershipeditor');
                            location.href = u.toString();
                        }
                    })
                }, 500);

                // Then we will attach the listener for save button
                setTimeout(() => {
                    document.querySelector(".editor-customizer-save").addEventListener("click", async (e) => {
                        e.target.classList.toggle("saving");
                        await this.actions.saveEditsToProductsCustomJs();
                        e.target.classList.toggle("saving");
                    });
                }, 500);

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
                        this.initializers.initializeElementEditor(key, "template1", editableElement);
                    }
                });
            },

            // This method builds and renders the customization sidebar for a specific selected element
            initializeElementEditor: (key = "", template = "", element = null) => {
                // First we will retrieve the sidebar and its content container
                const $sidebar = document.querySelector(".editor-customizer-sidebar");
                const $sidebarContent = $sidebar.querySelector(".editor-customizer-sidebar__content");

                // Then we will make sure the sidebar is visible to the user
                $sidebar.classList.add("active");

                // Then we will retrieve the specific template item data based on the clicked element's key
                const templateItem = this.activePageOnTemplate.find((item) => item.key === key);

                // Then we will generate the HTML for the CSS customization inputs
                const cssCustomizationHtml = templateItem.cssCustomizations.reduce((a, c) => {
                    const input = (() => {
                        if (c.type === "multi") {
                            return this?.widgets?.multiInput(templateItem.key, c.property, c?.value, (updatedValue) => {
                                this.actions.updateTemplateCustomizations({
                                    key: templateItem.key,
                                    property: c.property,
                                    value: updatedValue
                                });
                            });
                        } else {
                            return this?.widgets?.input(templateItem.key, c.property, c?.value, c.type, c?.placeholder, (updatedValue) => {
                                this.actions.updateTemplateCustomizations({
                                    key: templateItem.key,
                                    property: c.property,
                                    value: updatedValue
                                });
                            });
                        }
                    })();
                    a += `
                    <div class="editor-customizer-item__form__item__input__group">
                        <h3 class="editor-customizer-item__form__item__input__group__name">${c.name}</h3>
                        ${input}
                    </div>
                `;
                    return a;
                }, "");

                // Then we will generate the HTML for the Element customization inputs (attributes or inner HTML)
                const elementCustomizationHTML = templateItem?.elementCustomizations?.reduce((a, c) => {
                    const input = (() => {
                        const value = (() => {
                            let elementValue = "";
                            if (c.type === "html") {
                                const elementHTML = element?.innerHTML || "";
                                elementValue = elementHTML;
                            } else {
                                const elementAttribute = element?.getAttribute(childC?.target);
                                elementValue = elementAttribute;
                            }
                            return c.value || elementValue
                        })();
                        return this?.widgets?.input(templateItem.key, `${c?.type}-${c?.target}`, value, "text", c?.placeholder, (updatedValue) => {
                            this.actions.updateTemplateElementCustomizations({
                                key: templateItem?.key,
                                type: c?.type,
                                target: c?.target,
                                value: updatedValue
                            });
                        }, c.type === "html");
                    })();
                    a += `
                    <div class="editor-customizer-item__form__item__input__group">
                        <p class="editor-customizer-item__form__item__input__group__name">${c.name}</p> 
                        ${input}
                    </div>
                    `;
                    return a
                }, "")

                // Then we will generate the HTML for the Feature customization inputs
                const featuresHTML = templateItem?.features?.reduce((a, c) => {
                    // First we will build the inputs for this specific feature's customizations
                    const customizationHTML = c.customizations?.reduce((ac, cc) => {
                        const input = (() => {
                            return this?.widgets?.input(templateItem.key, `${cc.type}-${cc.property}`, cc?.value, cc.type, cc?.placeholder, (updatedValue) => {
                                this.actions.updateTemplateFeatureCustomizations({
                                    templateItemKey: templateItem.key,
                                    featureKey: c.key,
                                    customizationProperty: cc.property,
                                    value: updatedValue,
                                });
                            });
                        })();
                        ac += `
                            <div class="editor-customizer-item__form__item__input__group">
                                <p class="editor-customizer-item__form__item__input__group__name">${cc.name}</p> 
                                ${input}
                            </div>
                        `;
                        return ac;
                    }, "");

                    // Then we will append this feature (toggle + customizations) into the features HTML
                    a += `
                        <div class="editor-customizer-item__form__item__input__group feature">
                            <h3 class="editor-customizer-item__form__item__input__group__name__toggler" onClick="this.parentElement.classList.toggle('active')">
                                ${c.name}
                                <i class="fa-solid fa-angle-right"></i>
                            </h3>
                            <div class="editor-customizer-item__form__item__input__group__content">
                                <div class="editor-customizer-item__form__item__input__group__toggler">
                                   <input 
                                      class="editor-customizer-item__form__item__input__group__input" 
                                      type="checkbox"
                                      ${c.isTurnedOn ? "checked" : ""}
                                      onInput="window.MembershipCustomization.actions.toggleTemplateFeature({templateItemKey: '${templateItem.key}',featureKey: '${c.key}',isTurnedOn: this.checked})" 
                                   />    
                                   <p>Turn On Feature</p>
                                </div>
                                <div class="editor-customizer-item__form__item__input__group__customizations">${customizationHTML}</div>    
                            </div>
                        </div>
                     `;

                    // Finally we return the accumulator
                    return a;
                }, "");

                // Then we will compile the entire form HTML by combining CSS, Element, and Feature sections
                const form = `
                    <div class="editor-customizer-header">
                        <i class="fa-solid fa-arrow-left editor-customizer-header__global" onclick="window.window.MembershipCustomization.initializers.initializeGlobalEditor()"></i>
                        <p class="editor-customizer-header__text">${templateItem.label}</p>
                        <div></div>
                    </div>
                    <div class="editor-customizer-item__form">
                        ${templateItem?.cssCustomizations?.length ? ` 
                        <div class="editor-customizer-item__form__item">
                          <p class="editor-customizer-item__form__item__title">Styles Customizations</p>
                          ${cssCustomizationHtml}
                        </div>`: ""}   
                        ${templateItem?.elementCustomizations?.length ? ` 
                        <div class="editor-customizer-item__form__item">
                          <p class="editor-customizer-item__form__item__title">Element Customizations</p>
                          ${elementCustomizationHTML}
                        </div>`: ""}   
                        ${templateItem?.features?.length ? ` 
                        <div class="editor-customizer-item__form__item">
                          <p class="editor-customizer-item__form__item__title">Features Customizations</p>
                          ${featuresHTML}
                        </div>`: ""}    
                    </div>
                `;

                // Finally we will inject the generated form into the sidebar
                $sidebarContent.innerHTML = form;
            },

            // This method will initialize the global editor sidebar and render all configuration inputs
            initializeGlobalEditor: () => {
                // First we will retrieve the sidebar and its content container where we will inject the HTML
                const $sidebar = document.querySelector(".editor-customizer-sidebar");
                const $sidebarContent = $sidebar.querySelector(".editor-customizer-sidebar__content");

                // Then we will generate the HTML structure by iterating through the global settings
                const globalItemsHTML = this.activeTemplate.global.reduce((a, c) => {
                    // First we will generate the HTML for the specific customizations within this global category
                    const customizationsHTML = c?.customizations?.reduce((ac, cc) => {

                        // First we will create the CSS customization inputs (handling both multi-value and standard inputs)
                        const cssCustomizationHtml = cc?.cssCustomizations?.reduce((childA, childC) => {
                            const input = (() => {
                                if (childC.type === "multi") {
                                    return this?.widgets?.multiInput(cc.key, childC.property, childC.value, (updatedValue) => {
                                        this.actions.updateTemplateCustomizations({}, {
                                            name: c.name,
                                            key: cc.key,
                                            property: childC.property,
                                            value: updatedValue
                                        });
                                    });
                                } else {
                                    return this?.widgets?.input(cc.key, childC.property, childC.value, childC.type, childC?.placeholder, (updatedValue) => {
                                        this.actions.updateTemplateCustomizations({}, {
                                            name: c.name,
                                            key: cc.key,
                                            property: childC.property,
                                            value: updatedValue
                                        });
                                    });
                                }
                            })();
                            childA += `
                                <div class="global-customizer-item__form__item__edit__item">
                                    <h3 class="global-customizer-item__form__item__edit__item__name">${childC.name}</h3>
                                    ${input}
                                </div>
                            `;
                            return childA;
                        }, "");

                        // Then we will create the element customization inputs (for attributes or HTML content)
                        const elementCustomizationHTML = cc?.elementCustomizations?.reduce((childA, childC) => {
                            const input = (() => {
                                const value = (() => {
                                    let elementValue = "";
                                    if (childC.type === "html") {
                                        const elementHTML = document.querySelector(cc?.elementSelector)?.innerHTML || "";
                                        elementValue = elementHTML;
                                    } else {
                                        const elementAttribute = document.querySelector(cc?.elementSelector)?.getAttribute(childC?.target);
                                        elementValue = elementAttribute;
                                    }
                                    return childC.value || elementValue;
                                })();
                                return this?.widgets?.input(cc.key, `${childC?.type}-${childC?.target}`, value, "text", childC?.placeholder, (updatedValue) => {
                                    this.actions.updateTemplateElementCustomizations({}, {
                                        name: c.name,
                                        key: cc.key,
                                        type: childC.type,
                                        target: childC.target,
                                        value: updatedValue
                                    });
                                }, childC.type === "html");
                            })();
                            childA += `
                              <div class="global-customizer-item__form__item__edit__item">
                                    <h3 class="global-customizer-item__form__item__edit__item__name">${childC.name}</h3>
                                    ${input}
                                </div>
                            `;
                            return childA
                        }, "");

                        // Then we will generate the HTML for features, including their toggles and specific settings
                        const featuresHTML = cc?.features?.reduce((fA, fC) => {

                            // First we will build the inputs for this specific feature's customizations
                            const customizationHTML = fC?.customizations?.reduce((fAC, fCC) => {
                                const input = (() => {
                                    return this?.widgets?.input(cc.key, `${fCC.type}-${fCC.property}`, fCC?.value, fCC.type, fCC?.placeholder, (updatedValue) => {
                                        this.actions.updateTemplateFeatureCustomizations({}, {
                                            name: c.name,
                                            templateItemKey: cc.key,
                                            featureKey: fC.key,
                                            customizationProperty: fCC.property,
                                            value: updatedValue,
                                        });
                                    });
                                })();
                                fAC += `
                                 <div style="global-customizer-item__form__item__edit__item__customizations__item">
                                     <p>${fCC.name}</p> 
                                     ${input}
                                 </div>
                                 `;
                                return fAC;
                            }, "");

                            // Then we will append this feature (toggle + customizations) into the features HTML
                            fA += `
                                 <div class="global-customizer-item__form__item__edit__item feature">
                                     <h3 class="global-customizer-item__form__item__edit__item__name__toggler" onClick="this.parentElement.classList.toggle('active')">
                                        ${fC.name}
                                         <i class="fa-solid fa-angle-right" aria-hidden="true"></i>
                                    </h3>
                                    <div class="global-customizer-item__form__item__edit__item__content">
                                        <div class="global-customizer-item__form__item__edit__item__toggler">
                                            <input 
                                               class="global-customizer-form__item__input" 
                                               type="checkbox"
                                               ${fC.isTurnedOn ? "checked" : ""}
                                               onInput="window.MembershipCustomization.actions.toggleTemplateFeature({},{name: '${c.name}',templateItemKey: '${cc.key}',featureKey: '${fC.key}',isTurnedOn: this.checked})" 
                                            />    
                                            <p>Turn On Feature</p>
                                        </div>
                                        <div class="global-customizer-item__form__item__edit__item__customizations">${customizationHTML}</div>    
                                    </div>
                                 </div>
                             `;

                            // Finally we will return the accumulator
                            return fA;
                        }, "");

                        // Then we will assemble the CSS, Element, and Feature HTML into a single collapsible form item
                        ac += `
                          <div class="global-customizer-item__form">
                                <div class="global-customizer-item__form__item">
                                    <p class="global-customizer-item__form__item__title" onClick="this.parentElement.classList.toggle('active')">
                                        ${cc.label}
                                        <i class="fa-solid fa-angle-right"></i>
                                    </p>
                                    ${cc?.cssCustomizations?.length ? ` 
                                    <div class="global-customizer-item__form__item__edit">
                                      <p class="global-customizer-item__form__item__edit__title">Styles Customizations</p>
                                      ${cssCustomizationHtml}
                                    </div>`: ""}   
                                     ${cc?.elementCustomizations?.length ? ` 
                                    <div class="global-customizer-item__form__item__edit">
                                      <p class="global-customizer-item__form__item__edit__title">Element Customizations</p>
                                      ${elementCustomizationHTML}
                                    </div>`: ""}    
                                     ${cc?.features?.length ? ` 
                                    <div class="global-customizer-item__form__item__edit">
                                      <p class="global-customizer-item__form__item__edit__title">Features Customizations</p>
                                      ${featuresHTML}
                                    </div>`: ""}    
                                </div>
                            </div>
                        `;

                        // Finally we will return the accumulator
                        return ac;
                    }, "");

                    // Finally we will wrap all customizations for this category into a global collapsible item
                    a += `
                        <div class="global-customizer-item">
                            <div class="global-customizer-item__toggler" onClick="this.parentElement.classList.toggle('active')">
                                <p>${c.name}</p>    
                                <i class="fa-solid fa-angle-right"></i>
                            </div>    
                           <div class="global-customizer-item__wrapper">${customizationsHTML}</div>
                        </div>
                    `;
                    return a
                }, "");

                // Finally we will render the fully generated HTML into the sidebar content area
                $sidebarContent.innerHTML = `
                    <div class="global-customizer">
                        <div class="global-customizer__header">
                            <div></div>
                            <p class="global-customizer__header__text">Global</p>    
                            <i class="fa-solid fa-shirt global-customizer__header__themes" onclick="window.MembershipCustomization.initializers.initializeThemeSelector()"></i> 
                        </div>
                        ${globalItemsHTML}
                    </div>
                `;
            },

            // This method will initialize the theme selector sidebar
            initializeThemeSelector: () => {
                // First we will retrieve the sidebar and its content container where we will inject the HTML
                const $sidebar = document.querySelector(".editor-customizer-sidebar");
                const $sidebarContent = $sidebar.querySelector(".editor-customizer-sidebar__content");

                // Then we will create the template list html
                const themeHTML = (() => {
                    const itemHTML = this.templates.reduce((a, c) => {
                        const controllerHTML = (() => {
                            if (this.activeTemplate.id === c.id) {
                                return `
                                     <div class="theme-selector__list__item__controller">
                                        <p class="theme-selector__list__item__controller__info">Current</p>
                                    </div>
                                `;
                            } else {
                                return `
                                    <div class="theme-selector__list__item__controller">
                                        <a href="#" onclick="window.MembershipCustomization.actions.updateTemplateToProductsCustomJs('${c.id}')" class="theme-selector__list__item__controller__button">
                                            <i class="fa-solid fa-check"></i>
                                        </a>   
                                        <a href="${c.previewLink}" target="__blank" class="theme-selector__list__item__controller__button">
                                            <i class="fa-solid fa-eye"></i>    
                                        </a>    
                                    </div>       
                                `;
                            }
                        })();
                        a += `
                            <div class="theme-selector__list__item">
                                <div class="theme-selector__list__item__content">
                                    <img src="${c.imageUrl}" class="theme-selector__list__item__image" />
                                    ${controllerHTML}
                                </div>
                                <p class="theme-selector__list__item__title">${c.title}</p>
                            </div>
                        `;
                        return a
                    }, "");
                    return `
                        <div class="theme-selector__list">${itemHTML}</div>
                    `;
                })();

                // Finally we will render the fully generated HTML into the sidebar content area
                $sidebarContent.innerHTML = `
                    <div class="theme-selector">
                        <div class="theme-selector__header">
                            <i class="fa-solid fa-arrow-left theme-selector__header__icon" onclick="window.MembershipCustomization.initializers.initializeGlobalEditor()"></i>
                            <p class="theme-selector__header__text">Templates</p>     
                            <div></div>
                        </div>
                        ${themeHTML}
                    </div>
                `;
            }
        };

        // Action module
        actions = {
            // This method handles enabling/disabling a feature
            toggleTemplateFeature: (
                normal = {
                    templateItemKey: "",
                    featureKey: "",
                    isTurnedOn: false
                }, global = {
                    name: "",
                    templateItemKey: "",
                    featureKey: "",
                    isTurnedOn: false
                }) => {
                // First we will initialize placeholders for the items we need to find
                let templateItem = null;
                let featureItem = null;

                // Then we will create a  helper function handles the actual DOM manipulation (CSS/JS injection)
                const toggleFeature = (isTurnedOn = false, templateItemKey = "", featureKey = "") => {
                    if (isTurnedOn) {
                        // First we will insert the feature's styles
                        document.body.insertAdjacentHTML("beforeend", `
                            <style id="${templateItemKey}-${featureKey}">
                                ${featureItem.css(featureItem.customizations)}
                            </style>
                        `);

                        // Finally we will insert and execute the feature's JavaScript
                        const scriptTag = document.createElement("script");
                        scriptTag.id = `${templateItemKey}-${featureKey}`;
                        scriptTag.innerHTML = featureItem.js(featureItem.customizations);
                        document.body.append(scriptTag);
                    } else {
                        // First we will remove the previous styles and script tags
                        document.querySelector(`style[id = '${templateItemKey}-${featureKey}']`)?.remove();
                        document.querySelector(`script[id = '${templateItemKey}-${featureKey}']`)?.remove();

                        // Finally we will run the cleanup script to reset any side effects
                        const scriptTag = document.createElement("script");
                        scriptTag.id = `${templateItemKey}-${featureKey}`;
                        scriptTag.innerHTML = featureItem.cleanUpJs(featureItem.customizations);
                        document.body.append(scriptTag);
                        setTimeout(() => {
                            scriptTag.remove();
                        }, 500);
                    }
                }

                // Finally depends if it is a global or normal update we will process the feature toggle accordingly
                if (!global.featureKey) {
                    // First if it is a normal update, we will retrieve the template item and the specific feature from the active page
                    templateItem = this.activePageOnTemplate.find((item) => item.key === normal.templateItemKey);
                    featureItem = templateItem.features.find((fI) => fI.key === normal.featureKey);

                    // Then we will update the feature's isTurnedOn state in the data structure
                    this.activePageOnTemplate.forEach((item) => {
                        if (item.key === normal.templateItemKey) {
                            item.features.forEach((fI) => {
                                if (fI.key === normal.featureKey) {
                                    fI.isTurnedOn = normal.isTurnedOn
                                }
                            })
                        }
                    });

                    // Finally we will invoke the helper to apply the changes to the DOM
                    toggleFeature(normal.isTurnedOn, normal.templateItemKey, normal.featureKey);
                } else {
                    // First otherwise if this is a global update, we will retrieve the items from the global settings
                    templateItem = this.activeTemplate.global.find((item) => item.name === global.name).customizations.find((item) => item.key === global.templateItemKey);
                    featureItem = templateItem.features.find((fI) => fI.key === global.featureKey);

                    // Then we will update the feature's isTurnedOn state in the global data structure
                    this.activeTemplate.global.forEach((item) => {
                        if (item.name === global.name) {
                            item.customizations.forEach((cItem) => {
                                if (cItem.key === global.templateItemKey) {
                                    cItem.features.forEach((fI) => {
                                        if (fI.key === global.featureKey) {
                                            fI.isTurnedOn = global.isTurnedOn
                                        }
                                    })
                                }
                            })
                        }
                    });

                    // Finally we will invoke the helper to apply the global changes to the DOM
                    toggleFeature(global.isTurnedOn, global.templateItemKey, global.featureKey);
                }
            },

            // This method updates the activePageOnTemplate's CSS customization values
            updateTemplateCustomizations: (normal = { key: "", property: "", value: "" }, global = { name: "", key: "", property: "", value: "" }) => {
                // First if a normal key is provided, we will find the specific item on the active page and update its CSS value
                if (normal?.key) {
                    this.activePageOnTemplate.forEach((item) => {
                        if (item.key === normal?.key) {
                            item.cssCustomizations.forEach((cssItem) => {
                                if (cssItem.property === normal?.property) {
                                    cssItem.value = normal?.value;
                                }
                            });
                        }
                    });
                }
                // Then if a global key is provided, we will iterate through the global settings to find and update the matching CSS property
                if (global.name) {
                    this.activeTemplate.global.forEach((item) => {
                        if (item.name === global.name) {
                            item.customizations.forEach((itemCustomization) => {
                                if (itemCustomization.key === global.key) {
                                    itemCustomization.cssCustomizations.forEach((cssItem) => {
                                        if (cssItem.property === global?.property) {
                                            cssItem.value = global?.value;
                                        }
                                    });
                                }
                            })
                        }
                    })
                }

                // Finally we will sync the updated CSS values with the live preview
                this.actions.syncTemplateCssCustomizations();
            },

            // This method updates a specific customization for the activePageOnTemplate's element
            updateTemplateElementCustomizations: (normal = { key: "", type: "attribute", target: "", value: "" }, global = { name: "", key: "", type: "attribute", target: "", value: "" }) => {
                /**
                 * First we will locate the element customization on the active page by matching:
                 * - the element key
                 * - the customization type (attribute/html)
                 * - the customization target (attr name)
                 * When found, we will update its value
                */
                if (normal.key) {
                    this.activePageOnTemplate.forEach((item) => {
                        if (item.key === normal.key) {
                            item.elementCustomizations.forEach((item) => {
                                if (item.type === normal.type && item.target === normal.target) {
                                    item.value = normal.value;
                                }
                            });
                        }
                    });
                }

                /**
                 * Then if a global key is provided, we will traverse the global settings to match:
                 * - the global group name
                 * - the element key
                 * - the customization type and target
                 * When found, we will update its value
                */
                if (global.key) {
                    this.activeTemplate.global.forEach((item) => {
                        if (item.name === global.name) {
                            item.customizations.forEach((customizationItem) => {
                                if (customizationItem.key === global.key) {
                                    customizationItem.elementCustomizations.forEach((elementCustomizationI) => {
                                        if (elementCustomizationI.type === global.type && elementCustomizationI.target === global.target) {
                                            elementCustomizationI.value = global.value;
                                        }
                                    });
                                }
                            });
                        }
                    })
                }

                /**
                 * Finally we will sync the updated customizations so the UI and preview
                 * will reflect the new state
                */
                this.actions.syncTemplateElementsCustomization();
            },

            // This method updates a specific feature customization
            updateTemplateFeatureCustomizations: (
                normal = { templateItemKey: "", featureKey: "", customizationProperty: "", value: "" },
                global = { name: "", templateItemKey: "", featureKey: "", customizationProperty: "", value: "" }
            ) => {
                // First if a normal feature key is provided, we will traverse the active page to find and update the specific feature customization while checking if the feature is active
                if (normal.featureKey) {
                    let isTurnedOn = false;
                    this.activePageOnTemplate.forEach((item) => {
                        if (item.key === normal.templateItemKey) {
                            item.features.forEach((fItem) => {
                                if (fItem.key === normal.featureKey) {
                                    isTurnedOn = fItem.isTurnedOn;
                                    fItem.customizations.forEach((fItemC) => {
                                        if (fItemC.property === normal.customizationProperty) {
                                            fItemC.value = normal.value;
                                        }
                                    })
                                }
                            })
                        }
                    });

                    // Finally we will re-sync the feature only if it is currently turned on
                    if (isTurnedOn) {
                        this.actions.syncTemplateFeatureCustomizations({
                            "featureKey": normal.featureKey,
                            "templateItemKey": normal.templateItemKey
                        });
                    }
                }

                // Then if a global feature key is provided, we will iterate through the global settings to find and update the matching feature customization while checking if the feature is active
                if (global.featureKey) {
                    let isTurnedOn = false;
                    this.activeTemplate.global.forEach((item) => {
                        if (item.name === global.name) {
                            item.customizations.forEach((cItem) => {
                                if (cItem.key === global.templateItemKey) {
                                    cItem.features.forEach((fItem) => {
                                        if (fItem.key === global.featureKey) {
                                            fItem.customizations.forEach((fcItem) => {
                                                if (fcItem.property === global.customizationProperty) {
                                                    isTurnedOn = fItem.isTurnedOn;
                                                    fcItem.value = global.value;
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    });

                    // Finally we will re-sync the global feature only if it is currently turned on
                    if (isTurnedOn) {
                        this.actions.syncTemplateFeatureCustomizations({}, {
                            "name": global.name,
                            "featureKey": global.featureKey,
                            "templateItemKey": global.templateItemKey
                        });
                    }
                }
            },

            // This method applies all CSS customizations from the activePageOnTemplate into the page
            syncTemplateCssCustomizations: () => {
                // First we will remove any previously rendered style tags
                document.querySelectorAll(".bm-template-style")?.forEach((e) => e.remove());

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
                    return ""
                })();
                const globalTemplateStyles = (() => {
                    return `
                    <style class="bm-template-style">
                    ${this.activeTemplate.global?.reduce((a, c) => {
                        c.customizations?.forEach((gCustomizations) => {
                            a += `
                                ${gCustomizations?.elementSelector} {
                                    ${gCustomizations?.cssCustomizations?.reduce((ac, cc) => {
                                if (cc.value) {
                                    const important = cc?.important ? "!important" : "";
                                    ac += `${cc.property}: ${cc.property === "background-image" ? `url(${cc.value})` : cc.value} ${important};`;
                                }
                                return ac;
                            }, "")}
                                }
                                `;
                        });
                        return a
                    }, "")}
                    </style>
                    `;
                })();

                // Finally we will insert the fresh style tags with the updated CSS values
                document.body.insertAdjacentHTML(
                    "beforeend",
                    `${commonTemplateStyles}${globalTemplateStyles}`
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
                            if (elItem?.type === "attribute" && elItem?.value) {
                                this.utils.whenElementReady(item.elementSelector, () => {
                                    document
                                        ?.querySelector(item.elementSelector)
                                        ?.setAttribute(elItem.target, elItem.value);
                                });
                            } else if (elItem.type === "html" && elItem.value) {
                                this.utils.whenElementReady(item.elementSelector, () => {
                                    document.querySelector(item.elementSelector).innerHTML = elItem.value;
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
                                if (elementCustomizationI?.type === "attribute" && elementCustomizationI?.value) {
                                    this.utils.whenElementReady(cItem.elementSelector, () => {
                                        document
                                            ?.querySelector(cItem.elementSelector)
                                            ?.setAttribute(elementCustomizationI.target, elementCustomizationI.value);
                                    });
                                } else if (elementCustomizationI.type === "html" && elementCustomizationI.value) {
                                    this.utils.whenElementReady(cItem.elementSelector, () => {
                                        document.querySelector(cItem.elementSelector).innerHTML = elementCustomizationI?.value;
                                    });
                                }
                            });
                        }
                    })
                });
            },

            // This method re-syncs a feature by re-inserting its CSS and JS
            syncTemplateFeatureCustomizations: (
                normal = { templateItemKey: "", featureKey: "" },
                global = { name: "", templateItemKey: "", featureKey: "" },
                forceSync = false
            ) => {
                // First we will initialize placeholders for the items we need to find
                let templateItem = null;
                let featureItem = null;

                // Then we will define a helper function to handle the actual DOM manipulation (Cleanup -> Removal -> Injection)
                const syncFeature = (templateItemKey = "", featureKey = "") => {
                    // First we will run the cleanup script to reset any previous states before removing the feature
                    const scriptTagCleanUp = document.createElement("script");
                    scriptTagCleanUp.id = `${templateItemKey}-${featureKey}`;
                    scriptTagCleanUp.innerHTML = featureItem.cleanUpJs(featureItem.customizations);
                    document.body.append(scriptTagCleanUp);
                    setTimeout(() => {
                        scriptTagCleanUp.remove();
                    }, 500);

                    // Then we will remove the existing feature style and script tags from the DOM
                    document.querySelector(`style[id = '${templateItemKey}-${featureKey}']`)?.remove();
                    document.querySelector(`script[id = '${templateItemKey}-${featureKey}']`)?.remove();

                    // Then we will re-insert the fresh style tag with the updated CSS
                    document.body.insertAdjacentHTML("beforeend", `
                        <style id="${templateItemKey}-${featureKey}">
                            ${featureItem.css(featureItem.customizations)}
                        </style>
                    `);

                    // Finally we will re-insert the fresh script tag with the updated JavaScript
                    const scriptTag = document.createElement("script");
                    scriptTag.id = `${templateItemKey}-${featureKey}`;
                    scriptTag.innerHTML = featureItem.js(featureItem.customizations);
                    document.body.append(scriptTag);
                }

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
                        })
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
                    })

                    // Finally we will return empty value to prevent the execution of the code below
                    return;
                }

                // Finally, depending on whether it is a global or normal update, we will determine the correct context and process the feature sync
                if (!global.featureKey) {
                    // First, if it is a normal update, we will retrieve the template item and the specific feature directly from the active page configuration
                    templateItem = this.activePageOnTemplate.find((item) => item.key === normal.templateItemKey);
                    featureItem = templateItem.features.find((fI) => fI.key === normal.featureKey);

                    // Finally, we will invoke the helper to apply the changes to the DOM
                    syncFeature(normal.templateItemKey, normal.featureKey);
                } else {
                    // First, otherwise if this is a global update, we will retrieve the target items from the global settings configuration
                    templateItem = this.activeTemplate.global.find((item) => item.name === global.name).customizations.find((item) => item.key === global.templateItemKey);
                    featureItem = templateItem.features.find((fI) => fI.key === global.featureKey);

                    // Finally, we will invoke the helper to apply the global changes to the DOM
                    syncFeature(global.templateItemKey, global.featureKey);
                }
            },

            // This method is responsible for saving the user's edits inside the current product custom js in ghl
            saveEditsToProductsCustomJs: async () => {
                // First we will retrieve the authentication token and extract the location and product IDs from the URL
                const productData = JSON.parse(window.atob($cookies.get("acat")));
                const locationId = productData?.locationId;
                const productId = location.href.split("/products/")[1].split("?")[0].split("/")[0];
                const url =
                    `https://services.leadconnectorhq.com/membership/locations/${locationId}/products/${productId}`;

                // Finally if a valid token exists, we will serialize the template data ensuring functions are preserved as strings
                if (this.token) {
                    try {
                        // First we will stringify the active template and do advance parsing for functions
                        const stringifiedTemplateData = JSON.stringify(this.activeTemplate, (key, value) => {
                            if (typeof value === 'function') {
                                return value?.toString();
                            }
                            return value;
                        });

                        // Then we will attempt to update the product configuration with the rehydration script included
                        await fetch(url, {
                            method: "PUT",
                            headers: {
                                "authority": "services.leadconnectorhq.com",
                                "accept": "application/json, text/plain, */*",
                                "accept-language": "en-US,en;q=0.9",
                                "authorization": `Bearer ${this.token}`,
                                "content-type": "application/json",
                                "origin": "https://backend.memberships.apisystem.tech",
                                "referer": "https://backend.memberships.apisystem.tech/",
                                "source": "WEB_USER",
                                "sourceid": locationId,
                                "version": "2021-07-28",
                            },
                            body: JSON.stringify({
                                customJs: `var s = ${stringifiedTemplateData}; window.activeTemplateConfig = JSON.parse(JSON.stringify(s), (key, value) => { if (typeof value === 'string' && (value.startsWith('function') || value.startsWith('(customizations = []) =>') || value.startsWith('(e=[])=>'))){return new Function('return ' + value)();}return value;});`,
                            }),
                            redirect: "follow",
                        });

                        // Finally we will show an alert saying the active template structure is saved
                        alert("✅ Your current changes for this page have been saved.");
                    } catch (err) {
                        alert("❌ Oops! Something went wrong while saving. Try refreshing the page or contact support.")
                        console.error(err);
                    }
                } else {
                    alert("❌ Invalid token. Please refresh the page or contact support.")
                }
            },

            // This method is responsible for updating the user's selected theme inside the current product custom js in ghl
            updateTemplateToProductsCustomJs: async (templateId = "") => {
                // First we will confirm the user's intent since switching templates will overwrite the current in-editor progress
                if (!confirm("Warning: Progress will be lost Selecting a different template will clear your current edits. Do you want to proceed?")) return;

                // First we will retrieve the authentication token and extract the location and product IDs from the URL
                const productData = JSON.parse(window.atob($cookies.get("acat")));
                const locationId = productData?.locationId;
                const productId = location.href.split("/products/")[1].split("?")[0].split("/")[0];

                // Then we will build the product service endpoint used to persist the selected template into the product custom JS
                const url =
                    `https://services.leadconnectorhq.com/membership/locations/${locationId}/products/${productId}`;

                // Finally if a valid token exists, we will serialize the template data ensuring functions are preserved as strings
                if (this.token) {
                    try {
                        // First we will locate the selected template metadata based on the provided template id
                        const selectedTemplate = this.templates.find((e) => e.id === templateId);

                        // Then we will stringify the selected template configuration while converting functions into strings for safe transport/storage
                        const stringifiedTemplateData = JSON.stringify({
                            name: selectedTemplate.name,
                            id: selectedTemplate.id,
                            pages: [],
                            global: []
                        }, (key, value) => {
                            if (typeof value === 'function') {
                                return value?.toString();
                            }
                            return value;
                        });

                        // Then we will attempt to update the product configuration by sending a PUT request with a rehydration script embedded in customJs
                        await fetch(url, {
                            method: "PUT",
                            headers: {
                                "authority": "services.leadconnectorhq.com",
                                "accept": "application/json, text/plain, */*",
                                "accept-language": "en-US,en;q=0.9",
                                "authorization": `Bearer ${this.token}`,
                                "content-type": "application/json",
                                "origin": "https://backend.memberships.apisystem.tech",
                                "referer": "https://backend.memberships.apisystem.tech/",
                                "source": "WEB_USER",
                                "sourceid": locationId,
                                "version": "2021-07-28",
                            },
                            body: JSON.stringify({
                                // Finally we will persist the selected template into customJs and rehydrate any serialized functions back into executable form on load
                                customJs: `var s = ${stringifiedTemplateData}; window.activeTemplateConfig = JSON.parse(JSON.stringify(s), (key, value) => { if (typeof value === 'string' && (value.startsWith('function') || value.startsWith('(customizations = []) =>') || value.startsWith('(e=[])=>'))){return new Function('return ' + value)();}return value;});`,
                            }),
                            redirect: "follow",
                        });

                        // Finally we will show an alert saying the active template structure is saved
                        alert("✅ Done! The selected template has been saved. At this point, the changes are irreversible.");
                        location.reload();
                    } catch (err) {
                        // Finally we will notify the user and log the error for debugging if saving fails for any reason
                        alert("❌ Oops! Something went wrong while saving. Try refreshing the page or contact support.")
                        console.error(err);
                    }
                } else {
                    // Finally we will block the save action and instruct the user to refresh or contact support when no valid token is available
                    alert("❌ Invalid token. Please refresh the page or contact support.")
                }
            }
        };

        // Widgets module
        widgets = {
            multiInput: (templateKey, property, value = "", onChange = () => { }) => {
                // First we will create a helper function to interpret a CSS spacing string (e.g. "10px 20px")
                const parseValue = (val) => {
                    if (!val || val.trim() === "0")
                        return { top: "", right: "", bottom: "", left: "", all: "" };
                    const parts = val.split(/\s+/).filter(v => v.trim() !== '' && v.trim() !== '0');
                    if (parts.length === 1)
                        return { top: "", right: "", bottom: "", left: "", all: parts[0] };
                    if (parts.length === 2)
                        return { top: parts[0], right: parts[1], bottom: parts[0], left: parts[1], all: "" };
                    if (parts.length === 3)
                        return { top: parts[0], right: parts[1], bottom: parts[2], left: parts[1], all: "" };
                    if (parts.length >= 4)
                        return { top: parts[0], right: parts[1], bottom: parts[2], left: parts[3], all: "" };
                    return { top: "", right: "", bottom: "", left: "", all: "" };
                };

                // Then we will parse initial incoming value (for pre-filling inputs)
                const { top, right, bottom, left, all } = parseValue(value);

                // Then we will create a listener for ANY input change inside the widget
                const listenerId = `${templateKey}-${property}`;
                const listenerFunction = (e) => {
                    // First we will retrieve the closest multi input widget
                    const $targetElement = e.target.closest(`.widget-multi-input`);

                    // Finally if there is a closest multi input widget then we will process the input
                    if ($targetElement) {
                        // First we will retrieve the widget template key and property
                        const widgetTemplateKey = $targetElement.getAttribute("data-template-key");
                        const widgetProperty = $targetElement.getAttribute("data-property");

                        // Finally we will only update if this widget matches the expected template + property
                        if (widgetTemplateKey === templateKey && widgetProperty === property) {
                            // First we will retrieve the  input side and the input value
                            const inputSide = e.target.getAttribute("data-side");
                            const inputValue = e.target.value;

                            // Then if the input side is "all", we will mirror it's value to all of the input
                            if (inputSide === "all") {
                                Array.from($targetElement.querySelectorAll("input"))
                                    ?.filter((e) => e.getAttribute("data-side") !== "all")
                                    ?.forEach((e) => {
                                        e.value = inputValue;
                                    });
                            }

                            // Then we will build final CSS value string: "top right bottom left"
                            const finalValue = ["top", "right", "bottom", "left"].reduce((a, c) => {
                                const value = $targetElement.querySelector(`input[data-side=${c}]`)?.value || 0;
                                a += `${value}px `;
                                return a;
                            }, "");

                            // Finallyy we will invoke the passed onchange value
                            onChange?.(finalValue);
                        }
                    }
                }
                if (!window._multiInputListeners) {
                    window._multiInputListeners = {};
                }
                if (listenerId in window?._multiInputListeners) {
                    window.removeEventListener("input", window._multiInputListeners[listenerId])
                }
                window.addEventListener("input", listenerFunction);
                window._multiInputListeners[listenerId] = listenerFunction;

                // Finally return the actual HTML for the widget
                return `
                    <div class="widget-multi-input" data-template-key="${templateKey}" data-property="${property}">
                        <input type="number" placeholder="Top" data-side="top" value="${top.replace("px", "")}">
                        <input type="number" placeholder="Right" data-side="right" value="${right.replace("px", "")}">
                        <input type="number" placeholder="Bottom" data-side="bottom" value="${bottom.replace("px", "")}">
                        <input type="number" placeholder="Left" data-side="left" value="${left.replace("px", "")}">
                        <input type="number" placeholder="All" data-side="all" value="${all.replace("px", "")}">
                    </div>
                `;
            },
            input: (templateKey, property, value = "", type = "text", placeholder = "", onChange = () => { }, isTextArea = false) => {
                // First we will create a listener for ANY input change inside the widget
                const listenerId = `${templateKey}-${property}`;
                const listenerFunction = (e) => {
                    const $targetElement = e.target;
                    if ($targetElement.classList.contains(`editor-customizer-form__item__input`)) {
                        const widgetTemplateKey = $targetElement.getAttribute("data-template-key");
                        const widgetProperty = $targetElement.getAttribute("data-template-property");
                        if (widgetTemplateKey === templateKey && widgetProperty === property) {
                            onChange?.(e.target.value);
                        }
                    }
                }

                // Then we will manage the event listeners using a global registry to prevent duplication
                if (!window._input) {
                    window._input = {};
                }
                if (listenerId in window?._input) {
                    window.removeEventListener("input", window._input[listenerId])
                }
                window.addEventListener("input", listenerFunction);
                window._input[listenerId] = listenerFunction;

                // Then if this is a text area, we will initialize the TinyMCE rich text editor
                if (isTextArea) {
                    // First we will remove any existing instances to prevent conflicts
                    if (tinymce) {
                        tinymce.remove('.rich-text');
                    }

                    // Finally we will initialize the editor and setup event synchronization with the original textarea
                    setTimeout(() => {
                        tinymce.init({
                            selector: '.rich-text',
                            base_url: 'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.8.2',
                            suffix: '.min',
                            menubar: false,
                            branding: false,
                            promotion: false,
                            forced_root_block: false,
                            statusbar: true,
                            elementpath: false,
                            plugins: ['advlist', 'lists', 'code', 'fullscreen'],
                            toolbar: 'code | bold italic | bullist numlist | removeformat | undo redo',
                            height: 300,
                            setup: function (editor) {
                                editor.on('input change keyup', function () {
                                    editor.save();
                                    const originalTextarea = editor.getElement();
                                    const event = new Event('input', { bubbles: true });
                                    originalTextarea.dispatchEvent(event);
                                });
                            }
                        });
                    }, 500);
                }

                // Then if the type passed is color then we will initialize jscolor library
                if (type === "color" && typeof jscolor !== "undefined") {
                    setTimeout(() => {
                        jscolor?.install();
                    }, 500);
                }

                // Finally return the actual HTML for the widget
                return isTextArea ? `
                    <textarea 
                    data-template-key=${templateKey}
                    data-template-property=${property}
                    id="${templateKey}${property}"
                    class="editor-customizer-form__item__input rich-text">${value}</textarea>
                `: `
                   <input 
                        class="editor-customizer-form__item__input" 
                        data-template-key=${templateKey}
                        data-template-property=${property}
                        type="${type === "color" ? "text" : type}" 
                        value="${value}" 
                        ${type === "color" ? `data-jscolor='{"alphaChannel":true,"format":"hexa"}'` : ""}
                        placeholder="${placeholder}"
                    />
                `;
            }
        }

        // Utils module
        utils = {
            // This helper method waits for a DOM element to appear matching the selector
            whenElementReady: (
                selector,
                callback,
                {
                    timeoutMs = 7000,
                    root = document.documentElement,
                    once = true
                } = {}
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

                // Then will initialize the MutationObserver and start observing the root element for changes
                observer = new MutationObserver(apply);
                observer.observe(root, { childList: true, subtree: true });

                // Then will also set a fallback timeout to stop observing if the element never appears
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
            }
        }
    }

    window.MembershipCustomization = new MembershipCustomization();
</script>
