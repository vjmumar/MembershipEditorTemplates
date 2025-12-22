<script type="module">
    import "https://kit.fontawesome.com/91a03c8b1f.js";
    window.templateCustomizationSchema = {
        name: "Template 1",
        id: "template-1",
        global: [
            {
                name: "Loading Overlay",
                customizations: [
                    {
                        elementSelector: ".template-loader-overlay",
                        label: "Container",
                        key: "loading-overlay-container",
                        cssCustomizations: [
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                important: true,
                                placeholder: "#FEFEFF",
                                value: "",
                            },
                        ]
                    },
                    {
                        elementSelector: ".template-loader-overlay__logo",
                        label: "Logo",
                        key: "loading-overlay-logo",
                        cssCustomizations: [
                            {
                                name: "Width",
                                property: "width",
                                type: "text",
                                placeholder: "E.g: 500px",
                                value: "",
                            },
                            {
                                name: "Height",
                                property: "height",
                                type: "text",
                                placeholder: "E.g: 500px",
                                value: "",
                            },
                        ],
                        elementCustomizations: [
                            {
                                name: "Image Src",
                                type: "attribute",
                                target: "src",
                                value: ""
                            }
                        ]
                    },
                ]
            },
            {
                name: "Navbar",
                customizations: [
                    {
                        elementSelector: ".template-navbar-wrapper",
                        label: "Container",
                        key: "navigation-bar-container",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                value: ""
                            },
                            {
                                name: "Background Image",
                                property: "background-image",
                                placeholder: "E.g: https://www.sampleimage.com",
                                type: "text",
                                value: ""
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-navbar-wrapper::before",
                        label: "Container Overlay",
                        key: "navigation-bar-container-overlay",
                        cssCustomizations: [
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "#ffffff29",
                                value: "",
                            },
                            {
                                name: "Opacity",
                                property: "opacity",
                                type: "text",
                                placeholder: "E.g: 1 or .5",
                                value: ""
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-navbar__logo-link img",
                        label: "Logo",
                        key: "template-navbar__logo-link-img",
                        cssCustomizations: [
                            {
                                name: "Width",
                                property: "width",
                                type: "text",
                                placeholder: "E.g: 500px",
                                value: "",
                            },
                            {
                                name: "Margin",
                                property: "margin",
                                type: "multi",
                                placeholder: "10px 10px 10px 10px",
                                value: ""
                            },
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "10px 10px 10px 10px",
                                value: ""
                            },
                        ],
                        elementCustomizations: [
                            {
                                name: "Image",
                                type: "attribute",
                                target: "src",
                                value: ""
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-navbar__content__nav-links",
                        label: "Navigation Bar Menu",
                        key: "template-navbar-nab-links-wrapper",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "50px 75px",
                                value: "",
                            }
                        ],
                        features: [
                            {
                                name: "Menus",
                                key: "template-navbar-menus",
                                isTurnedOn: false,
                                customizations: [
                                    {
                                        name: "Menu Text 1",
                                        property: "menu-text-1",
                                        type: "text",
                                        placeholder: "Home",
                                        value: "Home"
                                    },
                                    {
                                        name: "Menu Link 1",
                                        property: "menu-link-1",
                                        type: "text",
                                        placeholder: "https://example.com/image",
                                        value: "https://img.freepik.com/free-vector/pastel-coloured-hand-painted-watercolour-background_1048-19244.jpg?semt=ais_hybrid&w=740&q=80"
                                    },
                                    {
                                        name: "Menu Text 2",
                                        property: "menu-text-2",
                                        type: "text",
                                        placeholder: "What's New",
                                        value: "What's New"
                                    },
                                    {
                                        name: "Menu Link 2",
                                        property: "menu-link-2",
                                        type: "text",
                                        placeholder: "https://example.com/image",
                                        value: "https://t3.ftcdn.net/jpg/04/99/21/50/360_F_499215058_WG1sNeCqCm4KW0X5V6y1beuCL0twCFZ7.jpg"
                                    },
                                    {
                                        name: "Menu Text 3",
                                        property: "menu-text-3",
                                        type: "text",
                                        placeholder: "Favorites",
                                        value: "Favorites"
                                    },
                                    {
                                        name: "Menu Link 3",
                                        property: "menu-link-3",
                                        type: "text",
                                        placeholder: "https://example.com/image",
                                        value: "https://t3.ftcdn.net/jpg/04/99/21/50/360_F_499215058_WG1sNeCqCm4KW0X5V6y1beuCL0twCFZ7.jpg"
                                    },
                                    {
                                        name: "Menu Text 4",
                                        property: "menu-text-4",
                                        type: "text",
                                        placeholder: "Announcements",
                                        value: "Announcements"
                                    },
                                    {
                                        name: "Menu Link 4",
                                        property: "menu-link-4",
                                        type: "text",
                                        placeholder: "https://example.com/image",
                                        value: "https://t3.ftcdn.net/jpg/04/99/21/50/360_F_499215058_WG1sNeCqCm4KW0X5V6y1beuCL0twCFZ7.jpg"
                                    },
                                    {
                                        name: "Menu Text 5",
                                        property: "menu-text-5",
                                        type: "text",
                                        placeholder: "Pilates",
                                        value: "Pilates"
                                    },
                                    {
                                        name: "Menu Link 5",
                                        property: "menu-link-5",
                                        type: "text",
                                        placeholder: "https://example.com/image",
                                        value: "https://t3.ftcdn.net/jpg/04/99/21/50/360_F_499215058_WG1sNeCqCm4KW0X5V6y1beuCL0twCFZ7.jpg"
                                    },
                                    {
                                        name: "Menu Text 6",
                                        property: "menu-text-6",
                                        type: "text",
                                        placeholder: "Contact",
                                        value: "Contact"
                                    },
                                    {
                                        name: "Menu Link 6",
                                        property: "menu-link-6",
                                        type: "text",
                                        placeholder: "https://example.com/image",
                                        value: "https://t3.ftcdn.net/jpg/04/99/21/50/360_F_499215058_WG1sNeCqCm4KW0X5V6y1beuCL0twCFZ7.jpg"
                                    },
                                ],
                                css: (customizations = []) => {
                                    let css = ``;
                                    customizations.forEach((cItem) => {
                                        css = css.replace(`{{${cItem?.property}}}`, cItem?.value)
                                    });
                                    return css
                                },
                                js: (customizations = []) => {
                                    let js = `
                                        (() => {
                                           var menu = [
                                              {
                                                 name: "{{menu-text-1}}",
                                                 link: "{{menu-link-1}}",
                                              },
                                              {
                                                 name: "{{menu-text-2}}",
                                                 link: "{{menu-link-2}}",
                                              },
                                              {
                                                 name: "{{menu-text-3}}",
                                                 link: "{{menu-link-3}}",
                                              },
                                              {
                                                 name: "{{menu-text-4}}",
                                                 link: "{{menu-link-4}}",
                                              },
                                              {
                                                 name: "{{menu-text-5}}",
                                                 link: "{{menu-link-5}}",
                                              },
                                              {
                                                 name: "{{menu-text-6}}",
                                                 link: "{{menu-link-6}}",
                                              },
                                           ];
                                           const menuHTML = menu.reduce((a, c) => {
                                              if (c.name) {
                                                    a += \`<a href="\${c.link}">\${c.name}</a>\`;
                                              }
                                              return a;
                                           }, "");
                                           if (document.querySelector('.template-navbar__content__nav-links')) {
                                                 document.querySelector('.template-navbar__content__nav-links').innerHTML =  menuHTML; 
                                           }
                                        })();
                                        `;
                                    customizations.forEach((cItem) => {
                                        js = js.replace(`{{${cItem?.property}}}`, cItem?.value)
                                    });
                                    return js
                                },
                                cleanUpJs: (customizations = []) => {
                                    let js = `
                                            (() => {
                                                const defaultLinks = [ { text: 'Home', url: '/' }, { text: "What's New", url: '/whats-new' }, { text: 'Favorites', url: '/favorites' }, { text: 'Announcements', url: '/announcements' }, { text: 'Pilates', url: '/pilates' }, { text: 'Contact', url: '/contact' } ];
                                                const linksHTML = defaultLinks.reduce((a, c) => {
                                                    a += \`<a href="\${c.url}" class="template-navbar__link">\${c.text}</a>\`;
                                                    return a
                                                }, '');
                                                if (document.querySelector('.template-navbar__content__nav-links')) {
                                                    document.querySelector('.template-navbar__content__nav-links').innerHTML =  linksHTML; 
                                                }
                                            })();     
                                        `;
                                    customizations.forEach((cItem) => {
                                        js = js.replace(`{{${cItem?.property}}}`, cItem?.value)
                                    });
                                    return js
                                },
                            }
                        ]
                    },
                    {
                        elementSelector: ".template-navbar__content__nav-links a",
                        label: "Navigation Bar Menu Items",
                        key: "template-navbar-content-nav-links",
                        cssCustomizations: [
                            {
                                name: "Text Color",
                                property: "color",
                                type: "color",
                                placeholder: "#191919",
                                value: "",
                            },
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "10px 10px 10px 10px",
                                value: ""
                            },
                            {
                                name: "Margin",
                                property: "margin",
                                type: "multi",
                                placeholder: "10px 10px 10px 10px",
                                value: ""
                            },
                        ]
                    },
                    {
                        elementSelector: ".template-navbar__content__avatar-img",
                        label: "Avatar",
                        key: "template-navbar-avatar",
                        cssCustomizations: [
                            {
                                name: "Width",
                                property: "width",
                                type: "text",
                                placeholder: "E.g: 500px",
                                value: "",
                            },
                            {
                                name: "Height",
                                property: "height",
                                type: "text",
                                placeholder: "E.g: 500px",
                                value: "",
                            },
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "10px 10px 10px 10px",
                                value: ""
                            },
                            {
                                name: "Margin",
                                property: "margin",
                                type: "multi",
                                placeholder: "10px 10px 10px 10px",
                                value: ""
                            },
                        ]
                    },
                ],
            },
            {
                name: "Sidebar",
                customizations: [
                    {
                        elementSelector: ".template-sidebar__content",
                        label: "Container",
                        key: "template-sidebar",
                        cssCustomizations: [
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                value: "",
                            },
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                value: "",
                            }
                        ],
                    },
                    {
                        elementSelector: ".template-sidebar__back-button",
                        label: "Back Button",
                        key: "template-sidebar-back-button",
                        cssCustomizations: [
                            {
                                name: "Color",
                                property: "color",
                                type: "color",
                                value: "",
                            }
                        ],
                    },
                    {
                        elementSelector: ".template-sidebar__logo",
                        label: "Logo",
                        key: "template-sidebar-logo",
                        cssCustomizations: [
                            {
                                name: "Width",
                                property: "width",
                                type: "text",
                                placeholder: "E.g: 500px",
                                value: "",
                            },
                            {
                                name: "Height",
                                property: "height",
                                type: "text",
                                placeholder: "E.g: 500px",
                                value: "",
                            },
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                value: "",
                            },
                            {
                                name: "Margin",
                                property: "Margin",
                                type: "multi",
                                value: "",
                            },
                        ],
                        elementCustomizations: [
                            {
                                name: "Image Src",
                                type: "attribute",
                                target: "src",
                                value: ""
                            }
                        ]
                    },
                    {
                        elementSelector: ".template-sidebar__titles",
                        label: "Module Title",
                        key: "template-sidebar-titles",
                        cssCustomizations: [
                            {
                                name: "Color",
                                property: "color",
                                type: "color",
                                value: "",
                            },
                            {
                                name: "Border Top Color",
                                property: "border-top-color",
                                type: "text",
                                value: "",
                            },
                            {
                                name: "Border Bottom Color",
                                property: "border-bottom-color",
                                type: "text",
                                value: "",
                            },
                        ],
                        elementCustomizations: [
                            {
                                name: "Content",
                                type: "html",
                                target: "",
                                value: ""
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-sidebar__category__item__title",
                        label: "Category Item",
                        key: "template-sidebar-category-item-title",
                        cssCustomizations: [
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                value: "",
                            },
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                value: "",
                            },
                            {
                                name: "Border Bottom Color",
                                property: "border-bottom-color",
                                type: "color",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-sidebar__category__item__title i",
                        label: "Category Item Icon",
                        key: "template-sidebar-category-item-title-i",
                        cssCustomizations: [
                            {
                                name: "Color",
                                property: "color",
                                type: "color",
                                value: "",
                            },
                            {
                                name: "Size",
                                property: "font-size",
                                placeholder: "E.g: 20px",
                                type: "",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-sidebar__category__item__post",
                        label: "Lesson Item",
                        key: "template-sidebar__category__item__post",
                        cssCustomizations: [
                            {
                                name: "Color",
                                property: "background-color",
                                type: "color",
                                value: "",
                            },
                            {
                                name: "Border Radius",
                                property: "border-radius",
                                type: "text",
                                value: "",
                            },
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                value: "",
                            },
                            {
                                name: "Margin",
                                property: "margin",
                                type: "multi",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-sidebar__category__item__post__icon *",
                        label: "Lesson Item Icon",
                        key: "template-sidebar-category-item-post-icon",
                        cssCustomizations: [
                            {
                                name: "Color",
                                property: "stroke",
                                type: "color",
                                value: "",
                            }
                        ],
                    },
                    {
                        elementSelector: ".template-sidebar__category__item__post__text",
                        label: "Lesson Item Text",
                        key: "template-sidebar-category-item-post-text",
                        cssCustomizations: [
                            {
                                name: "Color",
                                property: "color",
                                type: "color",
                                value: "",
                            },
                            {
                                name: "Font Size",
                                property: "font-size",
                                placeholder: "E.g: 20px",
                                type: "text",
                                value: "",
                            },
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                value: "",
                            },
                            {
                                name: "Margin",
                                property: "margin",
                                type: "multi",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-sidebar__category__item__sub-folder__title",
                        label: "Sub Category Item",
                        key: "template-sidebar-category-item-sub-folder-title",
                        cssCustomizations: [
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                value: "",
                            },
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-sidebar__category__item__sub-folder__title__text",
                        label: "Sub Category Item Text",
                        key: "template-sidebar-category-item-sub-folder-title-textplate-sidebar-category-item-title-i",
                        cssCustomizations: [
                            {
                                name: "Color",
                                property: "color",
                                type: "color",
                                value: "",
                            },
                            {
                                name: "Size",
                                property: "font-size",
                                placeholder: "E.g: 20px",
                                type: "text",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-sidebar__category__item__sub-folder__title__icon",
                        label: "Sub Category Item Icon",
                        key: "template-sidebar-category-item-sub-folder-title-icon",
                        cssCustomizations: [
                            {
                                name: "Color",
                                property: "color",
                                type: "color",
                                value: "",
                            },
                            {
                                name: "Size",
                                property: "font-size",
                                placeholder: "E.g: 20px",
                                type: "text",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-sidebar__image",
                        label: "Bottom Image Container",
                        key: "template-sidebar-image",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                value: "",
                            },
                            {
                                name: "Margin",
                                property: "margin",
                                type: "multi",
                                value: "",
                            },
                            {
                                name: "Backkground Color",
                                property: "background-color",
                                type: "color",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-sidebar__image img",
                        label: "Bottom Image",
                        key: "template-sidebar-image-img",
                        cssCustomizations: [
                            {
                                name: "Border Radius",
                                property: "border-radius",
                                type: "multi",
                                value: "",
                            },
                            {
                                name: "Width",
                                property: "width",
                                placeholder: "E.g: 500px",
                                type: "text",
                                value: "",
                            },
                            {
                                name: "Height",
                                property: "height",
                                placeholder: "E.g: 500px",
                                type: "text",
                                value: "",
                            },
                        ],
                        elementCustomizations: [
                            {
                                name: "Image Src",
                                type: "attribute",
                                target: "src",
                                value: ""
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-sidebar__toggler",
                        label: "Toggler Wrapper",
                        key: "template-sidebar-toggler-wrapper",
                        cssCustomizations: [
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                value: "",
                            }
                        ],
                    },
                    {
                        elementSelector: ".template-sidebar__toggler i",
                        label: "Toggler Icon",
                        key: "template-sidebar-toggler-icon",
                        cssCustomizations: [
                            {
                                name: "Color",
                                property: "color",
                                type: "color",
                                value: "",
                            },
                            {
                                name: "Size",
                                property: "font-size",
                                placeholder: "E.g: 20px",
                                type: "text",
                                value: "",
                            },
                        ],
                    },
                ]
            },
        ],
        pages: [
            {
                name: "Dashboard",
                urlRegex: "\\/courses\\/products\\/[^/]+\\/?(\\?.*)?$",
                editor: [
                    {
                        elementSelector: ".template-welcome",
                        label: "Welcome Container",
                        key: "welcome-container",
                        cssCustomizations: [
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Box Shadow",
                                property: "box-shadow",
                                type: "text",
                                placeholder: "5px 10px #888888",
                                value: "",
                            },
                            {
                                name: "Mininum Height",
                                property: "min-height",
                                type: "text",
                                placeholder: "E.g: 400px",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-welcome__greeting",
                        label: "Welcome Greeting",
                        key: "welcome-greeting",
                        cssCustomizations: [
                            {
                                name: "Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Margin",
                                property: "margin",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Font Size",
                                property: "font-size",
                                type: "text",
                                placeholder: "E.g: 20px",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-welcome__progress-icon",
                        label: "Welcome Progress Icon",
                        key: "welcome-progress-icon",
                        cssCustomizations: [
                            {
                                name: "Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Margin",
                                property: "margin",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Size",
                                property: "font-size",
                                type: "text",
                                placeholder: "E.g: 20px",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-welcome__progress span",
                        label: "Welcome Progress Text",
                        key: "welcome-progress-text",
                        cssCustomizations: [
                            {
                                name: "Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Size",
                                property: "font-size",
                                type: "text",
                                placeholder: "E.g: 20px",
                                placeholder: "",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-welcome__button",
                        label: "Welcome Button",
                        key: "welcome-button",
                        cssCustomizations: [
                            {
                                name: "Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Font Size",
                                property: "font-size",
                                type: "text",
                                placeholder: "E.g: 20px",
                                value: "",
                            },
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Margin",
                                property: "margin",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                        ],
                        elementCustomizations: [
                            {
                                name: "Content",
                                type: "html",
                                target: "",
                                value: ""
                            }
                        ]
                    },
                    {
                        elementSelector: ".dashboard__wrapper",
                        label: "Dashboard Container",
                        key: "dashboard-container",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Mininum Height",
                                property: "min-height",
                                type: "text",
                                placeholder: "E.g: 400px",
                                value: "",
                            },
                            {
                                name: "Background Image",
                                property: "background-image",
                                type: "text",
                                placeholder: "E.g: https://www.sampleimage.com",
                                value: "",
                            },
                            {
                                name: "Overlay Background Color",
                                property: "--dashboard-overlay-bg",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Overlay Opacity",
                                property: "--dashboard-overlay-opacity",
                                type: "text",
                                placeholder: "E.g: 1 or .5",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-community-toggle__button",
                        label: "Community Toggle Button",
                        key: "template-community-toggle-button",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Border Radius",
                                property: "border-radius",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Box Shadow",
                                property: "box-shadow",
                                type: "text",
                                placeholder: "5px 10px #888888",
                                value: "",
                            },
                            {
                                name: "Text Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Font Size",
                                property: "font-size",
                                type: "text",
                                placeholder: "E.g: 20px",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-community-embed",
                        label: "Community Embed",
                        key: "template-community-embed",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Margin",
                                property: "margin",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Border Radius",
                                property: "border-radius",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Box Shadow",
                                property: "box-shadow",
                                type: "text",
                                placeholder: "5px 10px #888888",
                                value: "",
                            },
                        ],
                        elementCustomizations: [
                            {
                                name: "Content",
                                type: "html",
                                target: "",
                                value: ""
                            }
                        ],
                    },
                    {
                        elementSelector: ".template-hero__left",
                        label: "Dashboard Info",
                        key: "template-hero-left",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Border Radius",
                                property: "border-radius",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                        ],
                        elementCustomizations: [
                            {
                                name: "Content",
                                type: "html",
                                target: "",
                                value: ""
                            }
                        ],
                    },
                    {
                        elementSelector: ".template-hero__right",
                        label: "Dashboard Info Embed",
                        key: "template-hero-right",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Border Radius",
                                property: "border-radius",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                        ],
                        elementCustomizations: [
                            {
                                name: "Content",
                                type: "html",
                                target: "",
                                value: ""
                            }
                        ],
                    },
                    {
                        elementSelector: ".dashboard__categories__title",
                        label: "Dashboard Category Title",
                        key: "dashboard-categories-title",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Margin",
                                property: "margin",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                        ],
                        elementCustomizations: [
                            {
                                name: "Content",
                                type: "html",
                                target: "",
                                value: ""
                            }
                        ],
                    },
                    {
                        elementSelector: ".template-categories__card",
                        label: "Dasboard Category Card",
                        key: "template-categories-card",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Margin",
                                property: "margin",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Border Radius",
                                property: "border-radius",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-categories__info",
                        label: "Dasboard Category Card Info",
                        key: "template-categories-info",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Text Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Font Size",
                                property: "font-size",
                                type: "text",
                                placeholder: "E.g: 20px",
                                value: "",
                            },
                        ],
                    },
                ]
            },
            {
                name: "Category Posts",
                urlRegex: "/courses/products/[^/]+/categories/[^/]+/?(\\?.*)?$",
                editor: [
                    {
                        elementSelector: ".template-category-post-title",
                        label: "Category Title",
                        key: "category-title",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Text Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Font Size",
                                property: "font-size",
                                type: "text",
                                placeholder: "E.g: 20px",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-category-post",
                        label: "Category Post Container",
                        key: "template-category-post",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Mininum Height",
                                property: "min-height",
                                type: "text",
                                placeholder: "E.g: 400px",
                                value: "",
                            },
                            {
                                name: "Background Image",
                                property: "background-image",
                                type: "text",
                                placeholder: "E.g: https://www.sampleimage.com",
                                value: "",
                            },
                            {
                                name: "Overlay Background Color",
                                property: "--category-post-overlay-bg",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Overlay Opacity",
                                property: "--category-post-overlay-opacity",
                                type: "text",
                                placeholder: "E.g: 1 or .5",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-category-post__breadcrumbs",
                        label: "Category Posts Bread Crumbs",
                        key: "template-category-post-breadcrumbs",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Text Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Font Size",
                                property: "font-size",
                                type: "text",
                                placeholder: "E.g: 20px",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-category-post__posts",
                        label: "Category Posts Post Container",
                        key: "template-category-post-posts",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Margin",
                                property: "margin",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Mininum Height",
                                property: "min-height",
                                type: "text",
                                placeholder: "E.g: 400px",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            }
                        ],
                    },
                    {
                        elementSelector: ".template-post__card",
                        label: "Category Posts Post Card",
                        key: "template-post__card",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Margin",
                                property: "margin",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Border Radius",
                                property: "border-radius",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-post__info",
                        label: "Category Posts Post Card Info",
                        key: "template-post-info",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Text Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Font Size",
                                property: "font-size",
                                type: "text",
                                placeholder: "E.g: 20px",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-category-post__sub-categories__item__title",
                        label: "Category Posts Sub Category Title",
                        key: "template-category-post-sub-categories-item-title",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Text Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Font Size",
                                property: "font-size",
                                type: "text",
                                placeholder: "E.g: 20px",
                                value: "",
                            },
                        ],
                    },
                ]
            },
            {
                name: "Categories",
                urlRegex: "/courses/products/[^/]+/categories/?(\\?.*)?$",
                editor: [
                    {
                        elementSelector: ".template-categories-title",
                        label: "Category Title",
                        key: "category-title",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Text Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Font Size",
                                property: "font-size",
                                type: "text",
                                placeholder: "E.g: 20px",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-categories__list",
                        label: "Category Post Container",
                        key: "template-categories-list",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Mininum Height",
                                property: "min-height",
                                type: "text",
                                placeholder: "E.g: 400px",
                                value: "",
                            },
                            {
                                name: "Background Image",
                                property: "background-image",
                                type: "text",
                                placeholder: "E.g: https://www.sampleimage.com",
                                value: "",
                            },
                            {
                                name: "Overlay Background Color",
                                property: "--categories-overlay-bg",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Overlay Opacity",
                                property: "--categories-overlay-opacity",
                                type: "text",
                                placeholder: "E.g: 1 or .5",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-categories",
                        label: "Categories Category Item Containers",
                        key: "template-category-post-posts",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Margin",
                                property: "margin",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Mininum Height",
                                property: "min-height",
                                type: "text",
                                placeholder: "E.g: 400px",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            }
                        ],
                    },
                    {
                        elementSelector: ".template-categories__card",
                        label: "Categories Category Card",
                        key: "template-categories-card",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Margin",
                                property: "margin",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Border Radius",
                                property: "border-radius",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-categories__info",
                        label: "Categories Category Card Info",
                        key: "template-categories-info",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Text Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Font Size",
                                property: "font-size",
                                type: "text",
                                placeholder: "E.g: 20px",
                                value: "",
                            },
                        ],
                    },
                ]
            },
            {
                name: "Post",
                urlRegex: "/courses/products/[^/]+/categories/[^/]+/posts/[^/]+/?(\\?.*)?$",
                editor: [

                    {
                        elementSelector: ".template-post-page",
                        label: "Post Container",
                        key: "template-post-page",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Minimum Height",
                                property: "min-height",
                                type: "text",
                                placeholder: "E.g: 400px",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-post-page-header",
                        label: "Post Header",
                        key: "template-post-page-header",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            }
                        ],
                    },
                    {
                        elementSelector: ".template-downloads__button",
                        label: "Downloads Button",
                        key: "template-downloads-button",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Text Color",
                                property: "--download-text-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Border Color",
                                property: "border-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Border Radius",
                                property: "border-radius",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Drop Down Background Color",
                                property: "--download-dropdown-bg",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Drop Down Border Color",
                                property: "--download-dropdown-border-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Drop Down Box Shadow",
                                property: "--download-dropdown-box-shadow",
                                type: "text",
                                placeholder: "5px 10px #888888",
                                value: "",
                            },
                            {
                                name: "Drop Down Item Icon Color",
                                property: "--download-dropdown-item-icon-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Drop Down Item Text Color",
                                property: "--download-dropdown-item-text-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-downloads__button i:last-of-type",
                        label: "Downloads Button Icon",
                        key: "template-downloads-button-download-icon-last",
                        cssCustomizations: [
                            {
                                name: "Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Size",
                                property: "font-size",
                                type: "text",
                                placeholder: "E.g: 20px",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-downloads__button i:first-of-type",
                        label: "Downloads Button Icon",
                        key: "template-downloads-button-download-icon-first",
                        cssCustomizations: [
                            {
                                name: "Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Size",
                                property: "font-size",
                                type: "text",
                                placeholder: "E.g: 20px",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-post-page-header__mark-as-complete",
                        label: "Mark As Complete Button",
                        key: "template-post-page-header-mark-as-complete",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Text Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Border Color",
                                property: "border-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Border Radius",
                                property: "border-radius",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-post-page-header__arrow",
                        label: "Post Arrow",
                        key: "template-post-page-header-arrow",
                        cssCustomizations: [
                            {
                                name: "Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Size",
                                property: "font-size",
                                type: "text",
                                placeholder: "E.g: 20px",
                                value: "",
                            },
                            {
                                name: "margin",
                                property: "margin",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-post-page__breadcrumbs",
                        label: "Post Bread Crumbs",
                        key: "template-post-page-breadcrumbs",
                        cssCustomizations: [
                            {
                                name: "Padding",
                                property: "padding",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Text Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Font Size",
                                property: "font-size",
                                type: "text",
                                placeholder: "E.g: 20px",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-post-page__title",
                        label: "Post Title",
                        key: "template-post-page-title",
                        cssCustomizations: [
                            {
                                name: "Margin",
                                property: "margin",
                                type: "multi",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Text Color",
                                property: "color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                            {
                                name: "Font Size",
                                property: "font-size",
                                type: "text",
                                placeholder: "E.g: 20px",
                                value: "",
                            },
                        ],
                    },
                    {
                        elementSelector: ".template-post-page__comments > div",
                        label: "Comment Body",
                        key: "template-post-page-comments-div",
                        cssCustomizations: [
                            {
                                name: "Background Color",
                                property: "background-color",
                                type: "color",
                                placeholder: "",
                                value: "",
                            },
                        ],
                    },

                ]
            }
        ]
    };
    class CourseTemplate {
        constructor() {
            this.initializers.init();
        }

        initializers = {
            init: () => {
                // First we will retrieve the current URL
                const url = window.location.href;

                // Then we will append a class to the body indicating that the template is ready
                document.body.classList.add("template-ready");

                // Then we will check the URL against regex patterns to determine which page view to load
                if (/products\/[^/]+\/?(\?.*)?$/.test(url)) {
                    document.body.classList.add("page-dashboard");
                    this.initializers.initLandingPage();
                } else if (/products\/[0-9a-fA-F-]{36}\/categories\/[0-9a-fA-F-]{36}\/?(\?.*)?$/.test(url)) {
                    document.body.classList.add("page-category-posts");
                    this.initializers.initCategoryPostPage();
                } else if (/products\/[0-9a-fA-F-]{36}\/categories\/?(\?.*)?$/.test(url)) {
                    document.body.classList.add("page-categories");
                    this.initializers.initCategoriesPage();
                } else if (/products\/[0-9a-fA-F-]{36}\/categories\/[0-9a-fA-F-]{36}\/posts\/[0-9a-fA-F-]{36}\/?(\?.*)?$/.test(url)) {
                    document.body.classList.add("page-post");
                    this.initializers.initPostPage();
                } else {
                    console.log("No page found")
                }

                // Finally we will initialize the loading
                this.initializers.initializeLoading();
            },

            initializeLoading: () => {
                // First we will generate the css
                const css = `
                    <style id="loader-styles">
                        .template-loader-overlay {
                            position: fixed;
                            top: 0; 
                            left: 0; 
                            width: 100vw; 
                            height: 100vh;
                            background-color: #ffffff;
                            z-index: 2147483647; /* Maximum Z-Index */
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: opacity 0.5s ease-out, visibility 0.5s;
                        }

                        .template-loader-overlay__logo {
                            width: 150px;
                            height: auto;
                            animation: breathe-animation 3s infinite ease-in-out;
                        }

                        @keyframes breathe-animation {
                            0% { transform: scale(1); opacity: 0.5; }
                            50% { transform: scale(1.1); opacity: 1; }
                            100% { transform: scale(1); opacity: 0.5; }
                        }
                    </style>
                `;

                // Then we will generate the html
                const html = `
                    <div class="template-loader-overlay">
                        <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2161088211/settings_images/64f5a33-a5b-d0d-8348-c382c18ab2c7_28760b44-cf55-4cbf-a32c-4c4724027fe2.webp" class="template-loader-overlay__logo" alt="Loading..." />
                    </div>
                `;

                // Then we will inject the css and js
                document.body.insertAdjacentHTML("beforeend", `<div class="template-loader">${css}${html}</div>`);

                // Finally after 4s we will remove the loader
                setTimeout(() => {
                    document.querySelector(".template-loader").style.display = "none";
                }, 6000);
            },

            initLandingPage: async () => {
                // First we will start an interval to wait for the product container to exist in the DOM
                const interval = setInterval(async () => {
                    const $container = document.querySelector(".product-container");
                    if ($container) {
                        clearInterval(interval);
                        setTimeout(async () => {
                            // First we will retrieve the templates and fetch all necessary user and product data
                            const userData = await this.data.fetchUser();
                            const userProductProgress = await this.data.fetchUserProductProgress();

                            // Then we will process the categories data
                            const categories = await (async () => {
                                const data = await this.data.fetchCategories();
                                return data.filter((cat) => !cat?.parentCategory)?.map((cat) => ({
                                    thumbnail: cat?.posterImage || "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/site/24410/products/4YTC9RNTS7KLyCz4UWmw_pexels-alexy-almond-3758056.jpg",
                                    title: cat.title,
                                    url: `/courses/products/${cat?.productId}/categories/${cat?.id}`
                                }))
                            })();

                            // Finally we will inject the Dashboard HTML and initialize the navigation components
                            $container.innerHTML = `
                                <div class='template-container'>
                                    <div class="dashboard">
                                            ${this.widgets.welcomeBanner(userData?.email, userProductProgress?.progressPercentage || "", "Let's Start")}
                                            <div class="dashboard__wrapper">
                                                ${this.widgets.communityToggle()}
                                                ${this.widgets.heroBanner()}
                                                <div class="dashboard__categories">
                                                    <p class="dashboard__categories__title">Categories</p>
                                                    ${this.widgets.categoryGrid(categories)}      
                                                </div>  
                                            </div>
                                    </div>
                                </div>
                                `;
                            this.initializers.initializeStyles();
                            this.initializers.initializeNavBar();
                            this.initializers.initializeSidebar();
                        }, 1000);
                    }
                }, 0);
            },

            initCategoryPostPage: async () => {
                // First we will wait for the app container to load
                const interval = setInterval(async () => {
                    const $container = document.querySelector("#app-container");
                    if ($container) {
                        clearInterval(interval);
                        setTimeout(async () => {
                            // First we will fetch the category data and prepare the breadcrumbs
                            const breadCrumbs = (() => {
                                const $el = document.querySelector("#product-breadcrumbs");
                                $el?.querySelectorAll("a").forEach((e) => {
                                    e.href = `/courses${e.getAttribute("href")}`;
                                });
                                return $el.innerHTML
                            })();
                            const category = await this.data.fetchCategory();

                            // Then we will helper function to map posts to our data structure
                            const generatePosts = (posts = []) => {
                                return posts?.map((post) => ({
                                    thumbnail: post?.posterImage || "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/site/24410/products/4YTC9RNTS7KLyCz4UWmw_pexels-alexy-almond-3758056.jpg",
                                    title: post.title,
                                    url: `/courses/products/${post?.productId}/categories/${post?.categoryId}/posts/${post?.id}`
                                }))
                            };

                            // Then we will build the HTML for subcategories if they exist
                            const subCategoriesHTML = category?.category?.subCategories?.reduce((a, c) => {
                                const posts = generatePosts(c.posts);
                                a += `
                                <div class="template-category-post__sub-categories__item">
                                    <p class="template-category-post__sub-categories__item__title">${c.title}</p>
                                    <div class="template-category-post__sub-categories__item__posts">
                                        ${this.widgets.postGrid(posts)}      
                                    </div>  
                                </div>
                            `;
                                return a
                            }, "");

                            // Finally we will render the Category Page HTML
                            $container.innerHTML = `
                                <p class="template-category-post-title">${category?.category?.title}</p>
                                <div class='template-container'>
                                    <div class="template-category-post">
                                        <div class="template-category-post__breadcrumbs">${breadCrumbs}</div>
                                        <div class="template-category-post__wrapper">
                                            <div class="template-category-post__posts">
                                                ${this.widgets.postGrid(generatePosts(category?.category?.posts))}      
                                            </div>  
                                            ${subCategoriesHTML}
                                        </div>
                                    </div>
                                </div>
                                `;
                            this.initializers.initializeStyles();
                            this.initializers.initializeNavBar($container);
                            this.initializers.initializeSidebar($container);
                        }, 1000)
                    }
                }, 0);
            },

            initCategoriesPage: async () => {
                // First we will wait for the app container
                const interval = setInterval(async () => {
                    const $container = document.querySelector("#app-container");
                    if ($container) {
                        clearInterval(interval);
                        setTimeout(async () => {
                            // First we will fetch all categories and filter out subcategories
                            const categories = await (async () => {
                                const data = await this.data.fetchCategories();
                                return data.filter((cat) => !cat?.parentCategory)?.map((cat) => ({
                                    thumbnail: cat?.posterImage || "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/site/24410/products/4YTC9RNTS7KLyCz4UWmw_pexels-alexy-almond-3758056.jpg",
                                    title: cat.title,
                                    url: `/courses/products/${cat?.productId}/categories/${cat?.id}`
                                }))
                            })();

                            // Finally we will render the Categories List Page
                            $container.innerHTML = `
                                <p class="template-categories-title">Categories</p>
                                <div class='template-container'>
                                    <div class="template-categories__list">
                                        <div class="template-categories__wrapper">
                                            ${this.widgets.categoryGrid(categories)}      
                                        </div>
                                    </div>
                                </div>
                                `;
                            this.initializers.initializeStyles();
                            this.initializers.initializeNavBar($container);
                            this.initializers.initializeSidebar($container);
                        }, 1000)
                    }
                }, 0);
            },

            initPostPage: async () => {
                // First we will wait for the app container
                const interval = setInterval(async () => {
                    const $container = document.querySelector("#app-container");
                    if ($container) {
                        clearInterval(interval);
                        setTimeout(async () => {
                            //First we will fetch all necessary data for the lesson (Post, Category, Completions)
                            const category = await this.data.fetchCategory();
                            const currentPost = await this.data.fetchPost();
                            const allPosts = category.category.posts.sort((a, b) => (a.sequenceNo > b.sequenceNo ? 1 : -1));
                            const completedPosts = await this.data.fetchCompletedPosts();

                            // Then we will scrape and prepare the existing DOM elements (Video, Audio, Comments)
                            const breadCrumbs = (() => {
                                const $el = document.querySelector("#product-breadcrumbs");
                                $el?.querySelectorAll("a").forEach((e) => {
                                    e.href = `/courses${e.getAttribute("href")}`;
                                });
                                return $el.innerHTML
                            })();
                            const videoContainer = (() => {
                                const videoContainer = document.querySelector(".video-player-container");
                                const embedContainer = document.querySelector(".embedded-media-player");
                                return videoContainer || embedContainer || ""
                            })();
                            const audioContainer = (() => {
                                const audioContainer = document.querySelector(".audio-player-container");
                                return audioContainer || ""
                            })();
                            const commentContainer = (() => {
                                const $commentElement = Array.from(document.querySelectorAll("div")).filter((e) => e.innerText === "Comments");
                                return $commentElement?.length ? $commentElement[0]?.parentElement : "";
                            })();

                            // Then we will build the header HTML including navigation arrows and completion buttons
                            const headerHTML = (() => {
                                const leftArrowHTML = (() => {
                                    const currentPostIndex = allPosts.findIndex((p) => p.sequenceNo === currentPost.sequenceNo);
                                    const canGoToPrevious = currentPostIndex && allPosts.length !== 1;
                                    if (canGoToPrevious) {
                                        const previousPost = allPosts[currentPostIndex - 1];
                                        return `<a class="template-post-page-header__arrow prev" href="${`/courses/products/${previousPost?.productId}/categories/${previousPost?.categoryId}/posts/${previousPost?.id}`}"><i class="fas fa-arrow-circle-right"></i></a>`
                                    }
                                    return ""
                                })();
                                const rightArrowHTML = (() => {
                                    const currentPostIndex = allPosts.findIndex((p) => p.sequenceNo === currentPost.sequenceNo);
                                    const lastPostIndexOfCategory = allPosts.findIndex((p) => p.sequenceNo === allPosts.slice(-1)[0].sequenceNo);
                                    const canGoToNextPost = allPosts.length !== 1 && currentPostIndex !== lastPostIndexOfCategory;
                                    if (canGoToNextPost) {
                                        const nextPost = allPosts[currentPostIndex + 1];
                                        return `<a class="template-post-page-header__arrow next" href="${`/courses/products/${nextPost?.productId}/categories/${nextPost?.categoryId}/posts/${nextPost?.id}`}"><i class="fas fa-arrow-circle-right"></i></a>`
                                    }
                                    return ""
                                })();
                                const downloadsHTML = (() => {
                                    if (currentPost?.post_materials?.length) {
                                        return this.widgets.downloadSelect(currentPost?.post_materials);
                                    }
                                    return ""
                                })();

                                // Then we will create the Mark as Complete button
                                const markAsCompleteButton = (() => {
                                    const locationId = location.href.split(".")[0].replace("https://", "");
                                    const productId = location.href.split("/products/")[1].split("?")[0].split("/")[0];
                                    const acatToken = $cookies.get("acat") || $cookies.get("cat");
                                    const token = JSON.parse(window.atob(acatToken))?.tokenId;
                                    window.addEventListener("click", async (e) => {
                                        if (e.target.classList.contains('template-post-page-header__mark-as-complete')) {
                                            const isCompleted = e.target.getAttribute("data-is-completed") === "true";
                                            if (!isCompleted) {
                                                const req = await fetch(
                                                    `https://services.leadconnectorhq.com/membership/locations/${locationId}/user-post-completion`,
                                                    {
                                                        method: "POST",
                                                        headers: {
                                                            "accept": "application/json, text/plain, */*",
                                                            "accept-language": "en-US,en;q=0.6",
                                                            "authorization": `Bearer ${token}`,
                                                            "content-type": "application/json",
                                                            "channel": "APP",
                                                        },
                                                        body: JSON.stringify({
                                                            percentage: 100,
                                                            postId: currentPost.id,
                                                            productId: productId
                                                        }),
                                                    }
                                                );
                                                const reqData = await req.json();
                                                e.target.innerText = "Lesson Done";
                                                e.target.setAttribute("data-is-completed", "true");
                                                e.target.getAttribute("data-uncomplete-id", reqData?.id);
                                            } else {
                                                const unCompleteId = e.target.getAttribute("data-uncomplete-id");
                                                await fetch(
                                                    `https://services.leadconnectorhq.com/membership/locations/${locationId}/user-post-completion/${unCompleteId}`,
                                                    {
                                                        headers: {
                                                            "accept": "application/json, text/plain, */*",
                                                            "accept-language": "en-US,en;q=0.6",
                                                            "authorization": `Bearer ${token}`,
                                                            "channel": "APP",
                                                        },
                                                        method: "DELETE",
                                                    }
                                                );
                                                e.target.innerText = "Complete This Lesson";
                                                e.target.setAttribute("data-is-completed", "false");
                                            }
                                        }
                                    });
                                    const postInsideCompletedPost = completedPosts.find((e) => e.postId === currentPost.id);
                                    if (!postInsideCompletedPost) {
                                        return `<button class="template-post-page-header__mark-as-complete" data-is-completed='false'>Complete This Lesson</button>`
                                    } else {
                                        return `<button class="template-post-page-header__mark-as-complete" data-is-completed='true' data-uncomplete-id='${postInsideCompletedPost?.id}'>Lesson Done</button>`
                                    }
                                })();

                                // Finallly we will create the header template
                                return `
                                <div class="template-post-page-header">
                                    ${downloadsHTML}  
                                    ${markAsCompleteButton}
                                    ${leftArrowHTML}
                                    ${rightArrowHTML}  
                                </div>
                            `
                            })();

                            // Then we will render the page and re-attach the scraped elements (video, audio, comments)
                            $container.innerHTML = `
                            ${headerHTML}
                                <div class='template-container'>
                                    <div class="template-post-page">
                                        <div class="template-post-page__breadcrumbs">${breadCrumbs}</div>
                                        <div class="template-post-page__wrapper">
                                            <p class="template-post-page__title">${currentPost?.title || ""}</p>
                                            <div class="template-post-page__video"></div>    
                                            <div class="template-post-page__audio"></div>
                                            <div class="template-post-page__description">${currentPost?.description || ""}</div>  
                                            <div class="template-post-page__comments"></div>  
                                        </div>
                                    </div>
                                </div>
                            `;
                            this.initializers.initializeStyles();
                            this.initializers.initializeNavBar($container);
                            this.initializers.initializeSidebar($container);

                            // Finally we will append all container conditionally
                            if (videoContainer) {
                                document.querySelector(".template-post-page__video")?.append(videoContainer);
                            }

                            if (audioContainer) {
                                document.querySelector(".template-post-page__audio")?.append(audioContainer);
                            }

                            if (commentContainer) {
                                document.querySelector(".template-post-page__comments")?.append(commentContainer);
                            }
                        }, 1000)
                    }
                }, 0);
            },

            initializeNavBar: async ($container = null) => {
                // First we will fetch the product details
                const product = await this.data.fetchProduct();
                const logo = "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2161088211/settings_images/66bdede-a488-34d-e50b-c6f78c10753_28760b44-cf55-4cbf-a32c-4c4724027fe2.webp";
                const defaultLinks = [
                    { text: 'Home', url: '/' },
                    { text: 'What\'s New', url: '/whats-new' },
                    { text: 'Favorites', url: '/favorites' },
                    { text: 'Announcements', url: '/announcements' },
                    { text: 'Pilates', url: '/pilates' },
                    { text: 'Contact', url: '/contact' }
                ];

                // Then we will generate the nav links HTML
                const linksHTML = defaultLinks.reduce((a, c) => {
                    a += `<a href="${c.url}" class="template-navbar__link">${c.text}</a>`;
                    return a
                }, '');

                // Finally we will render the Navbar
                const html = `
                    <header class="template-navbar-wrapper" id="custom-navbar">
                        <a href="/courses/products/${product.id}" class="template-navbar__logo-link"><img src="${logo}" /></a>
                        <!-- Center: Navigation Links -->
                        <div class="template-navbar__content">
                            <nav class="template-navbar__content__nav-links">${linksHTML}</nav>
                            <div class="template-navbar__content__actions">
                                <!-- User Avatar -->
                                <div class="template-navbar__content__avatar" id="navbar-avatar">
                                    <!-- Placeholder image, ideally replaced with user's actual avatar -->
                                    <img 
                                        src="https://i0.wp.com/s3.amazonaws.com/kajabi-storefronts-production/static_assets/default_avatar.jpg?ssl=1" 
                                        alt="User Avatar" 
                                        class="template-navbar__content__avatar-img"
                                    />
                                </div>
                            </div>    
                        </div>
                    </header>
                `;
                ($container || document.querySelector(".product-container")).insertAdjacentHTML("afterbegin", html);
            },

            initializeSidebar: async ($container = null) => {
                // First we will retrieve the product details
                const product = await this.data.fetchProduct();

                // Then we will retrieve the categories and sort them by sequence number
                let categories = await this.data.fetchCategories();
                categories = categories.sort((a, b) => (a.sequenceNo > b.sequenceNo ? 1 : -1));

                // Then we will organize subcategories under their parents
                categories.forEach((e) => {
                    if (e.parentCategory) {
                        e.posts = e.posts.sort((a, b) => (a.sequenceNo > b.sequenceNo ? 1 : -1));
                        categories.forEach((ca) => {
                            if (ca.id === e.parentCategory) {
                                categories = categories.filter((fCa) => fCa.id !== e.id);
                                ca.posts.push(e);
                                ca.posts = ca.posts.sort((a, b) => (a.sequenceNo > b.sequenceNo ? 1 : -1));
                            }
                        })
                    }
                });

                // Then we will generate the HTML for the sidebar navigation
                const sideBarCategories = categories.reduce((a, c, i) => {
                    const postsHTML = c.posts.reduce((cPA, cP) => {
                        if (!cP?.posts) {
                            cPA += `
                            <a href="${`/courses/products/${cP?.productId}/categories/${cP?.categoryId}/posts/${cP?.id}`}" class="template-sidebar__category__item__post">
                                <svg class="template-sidebar__category__item__post__icon" width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="text-lesson-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g class="color-fill" id="Group" transform="translate(7.500000, 7.500000) scale(1, -1) translate(-7.500000, -7.500000) translate(3.000000, 4.000000)" fill="#748493" fill-rule="nonzero">
                                            <rect id="Rectangle-Copy-2" x="0" y="0" width="9" height="1" rx="0.5"></rect>
                                            <rect id="Rectangle-Copy-4" x="0" y="3" width="9" height="1" rx="0.5"></rect>
                                            <rect id="Rectangle-Copy-6" x="0" y="6" width="5" height="1" rx="0.5"></rect>
                                        </g>
                                        <rect class="color-stroke" id="Rectangle" stroke="#748493" fill-rule="nonzero" x="0.5" y="0.5" width="14" height="14" rx="2"></rect>
                                    </g>
                                </svg>
                                <p class="template-sidebar__category__item__post__text">${cP.title}</p>
                            </a>
                        `;
                        } else {
                            const posts = cP.posts.reduce((cPPA, cPP) => {
                                cPPA += `
                                    <a href="${`/courses/products/${cPP?.productId}/categories/${cPP?.categoryId}/posts/${cPP?.id}`}" class="template-sidebar__category__item__post">
                                        <svg class="template-sidebar__category__item__post__icon" width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <g id="text-lesson-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                <g class="color-fill" id="Group" transform="translate(7.500000, 7.500000) scale(1, -1) translate(-7.500000, -7.500000) translate(3.000000, 4.000000)" fill="#748493" fill-rule="nonzero">
                                                    <rect id="Rectangle-Copy-2" x="0" y="0" width="9" height="1" rx="0.5"></rect>
                                                    <rect id="Rectangle-Copy-4" x="0" y="3" width="9" height="1" rx="0.5"></rect>
                                                    <rect id="Rectangle-Copy-6" x="0" y="6" width="5" height="1" rx="0.5"></rect>
                                                </g>
                                                <rect class="color-stroke" id="Rectangle" stroke="#748493" fill-rule="nonzero" x="0.5" y="0.5" width="14" height="14" rx="2"></rect>
                                            </g>
                                        </svg>
                                        <p class="template-sidebar__category__item__post__text">${cPP.title}</p>
                                    </a>
                                `;
                                return cPPA
                            }, "")
                            cPA += `
                            <div class="template-sidebar__category__item__sub-folder">
                                <div class="template-sidebar__category__item__sub-folder__title">
                                    <p class="template-sidebar__category__item__sub-folder__title__text">${cP.title}</p>
                                    <a href="/courses/products/${cP?.productId}/categories/${cP?.id}" class="template-sidebar__category__item__sub-folder__title__icon"><i class="fa-regular fa-circle-right"></i></a>
                                </div>
                                <div class="template-sidebar-category__item__sub-folder__posts">
                                    ${posts}    
                                </div>
                            </div>
                            `;
                        }
                        return cPA
                    }, "");
                    a += `
                    <div class="template-sidebar__category__item" data-category-id="${c.id}" data-category-location="${c.locationId}">
                        <div class="template-sidebar__category__item__title">
                            <div class="template-sidebar__category__item__title__content">
                                <i class="fas fa-angle-right template-sidebar__category__item__title__content__icon"></i>
                                <p class="template-sidebar__category__item__title__content__title">${c.title}</p>
                            </div>
                            <a href="/courses/products/${c?.productId}/categories/${c?.id}" class="template-sidebar__category__item__title__link"><i class="fa-regular fa-circle-right"></i></a>
                        </div>
                        <div class="template-sidebar__category__item__content">
                            ${postsHTML}     
                        </div>       
                    </div>
                    `;
                    return a;
                }, "");
                const html = `
                    <div class="template-sidebar">
                        <div class="template-sidebar__content">
                            <a href="/library" class="template-sidebar__back-button">
                                <i class="fa-solid fa-angle-left template-sidebar__back-button__icon"></i>
                                <p class="template-sidebar__back-button__text">Library</p>    
                            </a>
                            <a href="/courses/products/${product.id}">
                                <img class="template-sidebar__logo" src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2161088211/settings_images/64f5a33-a5b-d0d-8348-c382c18ab2c7_28760b44-cf55-4cbf-a32c-4c4724027fe2.webp">    
                            </a>
                            <p class='template-sidebar__titles'>Modules</p>
                            <div class="template-sidebar__category">
                                ${sideBarCategories}    
                            </div>    
                            <div class="template-sidebar__image">
                                <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2152332827/settings_images/f4b8184-d2c1-e23b-a102-0c7fb032440_0c45fcdc-c904-42fd-a06d-be150deda680.png" />    
                            </div>
                        </div>
                        <div class="template-sidebar__toggler">
                            <i class="fa-solid fa-arrow-right-arrow-left open"></i>
                            <i class="fa-solid fa-x close"></i>    
                        </div>
                    </div>
                `;

                // Finally we will inject the sidebar and attach event listeners for interactivity
                ($container || document.querySelector(".product-container")).insertAdjacentHTML("beforebegin", html);
                setTimeout(() => {
                    document.body.addEventListener("click", (e) => {
                        if (e.target.closest(".template-sidebar__category__item__title__content")) {
                            const $categoryItem = e.target.closest(".template-sidebar__category__item");
                            const isActive = $categoryItem.classList.contains("active");
                            $categoryItem.classList?.[isActive ? "remove" : "add"]("active")
                        }

                        if (e.target.closest(".template-sidebar__category__item__sub-folder__title")) {
                            const $subFolder = e.target.closest(".template-sidebar__category__item__sub-folder");
                            const isActive = $subFolder.classList.contains("active");
                            $subFolder.classList?.[isActive ? "remove" : "add"]("active")
                        }

                        if (e.target.closest(".template-sidebar__toggler")) {
                            const isSidebarActive = document.querySelector(".template-sidebar").classList.contains("active");
                            document.querySelector(".template-sidebar").classList[isSidebarActive ? "remove" : "add"]("active");
                        }
                    });
                }, 500);
            },

            initializeStyles: () => {
                // !Note: Use https://unminify.com/ to uncompress the styles, and use https://www.textfixer.com/html/compress-html-compression.php to compress again
                const styles = `<style id="template-widget-styles"> /* --- Welcome Banner Widget --- */ .template-welcome { background: #e0ecec; padding: 12px 30px; display: flex; align-items: center; justify-content: space-between; color: #333; font-family: 'Poppins', sans-serif; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); } .template-welcome__left { display: flex; flex-direction: column; gap: 5px; } .template-welcome__greeting { font-size: 20px; font-weight: 600; line-height: 24px; margin: 0; color: black; } .template-welcome__progress { font-size: 10px; line-height: 15px; color: black; font-weight: 600; letter-spacing: 1px; margin: 0; display: flex; align-items: center; gap: 5px; } .template-welcome__progress-icon { color: black; font-size: 16px; } .template-welcome__button { background: black; color: #aac5c5; padding: 5px 40px; border-radius: 4px; text-decoration: none; font-weight: 600; font-size: 18px; line-height: 27px; box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2); cursor: pointer; border: none; } /* --- Hero Widget --- */ .template-hero { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; width: 100%; align-items: stretch; margin: 0 auto; } .template-hero__left { display: flex; flex-direction: column; height: 100%; padding: 20px; background-color: white; } .template-hero__title { font-size: 42px; font-weight: 900; line-height: 58.8px; color: #9ededd; margin-bottom: 9px; } .template-hero__subtitle { font-size: 18px; font-weight: 500; list-style: 27px; color: #34495E; margin-bottom: 25px; display: block; } .template-hero__paragraph { font-size: 16px; line-height: 1.6; margin-bottom: 15px; } .template-hero__right { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); } .template-hero__right iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; } /* --- Template Categories --- */ .template-categories { padding-top: 40px; } .template-categories__title { font-size: 32px; font-weight: 700; color: #333; margin-bottom: 25px; } .template-categories__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; } .template-categories__card { background-color: #aac5c5; box-sizing: border-box; box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.1); display: flex; flex-direction: column; align-items: center; justify-content: space-between; height: 100%; border-radius: 4px; overflow: hidden; transition: transform 500ms; } .template-categories__card:hover { transform: scale(1.06); } .template-categories__thumbnail { width: 100%; height: 310px; object-fit: cover; display: block; border-radius: 4px 4px 0px 0px; } .template-categories__info { background-color: #aac5c5; color: #2c3e50; font-size: 18px; line-height: 1.3; flex-grow: 1; width: 100%; text-align: center; display: flex; justify-content: center; align-items: center; padding: 10px 20px; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin-bottom: 0px; border-radius: 0px 0px 4px 4px; } .template-categories__title-text {} /* --- Template Categories --- */ .template-post { padding-top: 40px; } .template-post__title { font-size: 32px; font-weight: 700; color: #333; margin-bottom: 25px; } .template-post__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; } .template-post__card { background-color: #aac5c5; box-sizing: border-box; box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.1); display: flex; flex-direction: column; align-items: center; justify-content: space-between; height: 100%; border-radius: 4px; overflow: hidden; transition: transform 500ms; } .template-post__card:hover { transform: scale(1.06); } .template-post__thumbnail { width: 100%; height: 310px; object-fit: cover; display: block; border-radius: 4px 4px 0px 0px; } .template-post__info { background-color: #aac5c5; flex-grow: 1; width: 100%; text-align: center; display: flex; justify-content: center; align-items: center; padding: 10px 20px; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin-bottom: 0px; border-radius: 0px 0px 4px 4px; font-size: 16px; line-height: 20px; color: #2C3E50; font-weight: 700; } /* --- Community Toggle Widget --- */ .template-community-container { padding-top: 0px; padding-bottom: 15px; } .template-community-toggle { display: flex; justify-content: flex-end; width: 100%; } .template-community-toggle__button { background: #9fd1d1; box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.15); padding: 6.75px 13.5px; font-size: 18px; border-radius: 0.25rem; color: #000; width: fit-content; } .template-community-embed { transition: max-height 0.5s ease-out, padding 0.5s ease-out; background: #ffffff; border: 1px solid #eee; border-radius: 6px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); margin-top: 10px; display: none; padding: 20px; } .template-community-container.active .template-community-embed { display: block; } .template-community-embed iframe, .template-community-embed form { width: 100%; height: 100%; min-height: 350px; border: none; } /* Downloads */ .template-downloads { position: relative; width: 100%; max-width: 300px; font-family: 'Inter', sans-serif; } .template-downloads__button { --download-text-color: #2b3c4d; --download-dropdown-bg: white; --download-dropdown-border-color: #e5e7eb; --download-dropdown-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); --download-dropdown-item-icon-color: #9ca3af; --download-dropdown-item-text-color: #374151; display: flex; justify-content: flex-start; align-items: center; width: 100%; cursor: pointer; font-size: 16px; padding: 8px 10px; border-radius: 4px; border: 1px solid #2b3c4d; color: var(--download-text-color); font-weight: 700; position: relative; opacity: .5; transition: opacity 0.3s, background-color 0.3s, border-color 0.3s; background-color: transparent; box-shadow: none; } .template-downloads.active .template-downloads__button { opacity: 1 !important; } .template-downloads__button:hover, .template-downloads--active .template-downloads__button { opacity: 1; } .template-downloads__button i { color: var(--download-text-color); } .template-downloads__label { margin-left: 0.5rem; flex-grow: 1; text-align: left; } .template-downloads__icon-arrow { transition: transform 0.2s; margin-left: auto; } .template-downloads--active .template-downloads__icon-arrow { transform: rotate(180deg); } .template-downloads__menu { position: absolute; top: calc(100% + 5px); left: 0; right: 0; background-color: var(--download-dropdown-bg); border: 1px solid var(--download-dropdown-border-color); border-radius: 0.5rem; z-index: 20; list-style: none; padding: 0; margin: 0; overflow: hidden; box-shadow: var(--download-dropdown-box-shadow); max-height: 0; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: max-height 0.3s ease-out, opacity 0.3s ease-out, transform 0.3s ease-out; } .template-downloads.active .template-downloads__menu { max-height: 200px; opacity: 1; visibility: visible; transform: translateY(0); } .template-downloads__item { padding: 0; } .template-downloads__item a { display: flex; align-items: center; padding: 0.5rem 1rem; color: var(--download-dropdown-item-text-color); text-decoration: none; transition: background-color 0.15s; } .template-downloads__item a i { margin-right: 0.75rem; color: var(--download-driodown-item-icon-color) !important; }</style><style id="template-styles"> /* Sidebar */ .template-sidebar { position: fixed; height: 100vh; left: -290px; z-index: 999999; transition-duration: .5s; } .template-sidebar.active { left: 0; transition-duration: .5s; } .template-sidebar__content { width: 290px; top: 0; max-width: 290px; background: #D7E7E6; box-shadow: 2px 0 5px 0 rgba(0, 0, 0, 0.05); overflow-y: auto; height: 100vh; align-self: flex-start; } .template-sidebar__back-button { display: flex; align-items: center; gap: 7px; padding: 25px 30px 0px; color: black; } .template-sidebar__back-button__icon { padding-bottom: 1px; } .template-sidebar__back-button__text { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; } .template-sidebar__logo { margin: auto; padding-inline: 30px; padding-block: 30px; min-width: 252px; } .template-sidebar__titles { font-size: 16px; color: #34495e; font-weight: 700; padding: 5px 7px 5px 10px; cursor: pointer; background-color: transparent; border-bottom: solid white; border-top: solid white; line-height: 22.4px; } .template-sidebar__category {} .template-sidebar__category__item {} .template-sidebar__category__item__title { color: #34495e; font-weight: 400; margin-top: 0px; margin-bottom: 0px; padding: 5px 10px; cursor: pointer; background-color: #dedad6; border-bottom: solid white; display: flex; align-items: flex-start; justify-content: space-between; cursor: pointer; border-bottom-style: solid; } .template-sidebar__category__item__title__content { display: flex; align-items: flex-start; } .template-sidebar__category__item__title__content__icon { font-size: 16px; transition-duration: .5s; } .template-sidebar__category__item.active .template-sidebar__category__item__title__content__icon { transform: rotate(90deg); transition-duration: .5s; } .template-sidebar__category__item__title__content__title { font-size: 16px; font-weight: 600; line-height: 22.4px; margin-left: 10px; color: #34495E; } .template-sidebar__category__item__title__link i { font-size: 16px; padding-top: 3px; } .template-sidebar__category__item.active .template-sidebar__category__item__content { display: block; } .template-sidebar__category__item__content { display: none; } .template-sidebar__category__item__post { display: flex; gap: 10px; align-items: flex-start; cursor: pointer; margin: 5px 20px 5px 25px; } .template-sidebar__category__item__post__icon { width: 15px; height: 15px; color: black; padding-top: 3px; } .template-sidebar__category__item__post__text { color: rgba(52, 73, 94, 0.8); display: block; font-size: 15px; line-height: 21px; padding-bottom: 3px; } .template-sidebar__category__item__sub-folder { margin-block: 5px; } .template-sidebar__category__item__sub-folder__title { display: flex; align-items: center; cursor: pointer; width: 100%; justify-content: space-between; padding-left: 20px; padding-right: 10px; } .template-sidebar__category__item__sub-folder__title__icon { font-weight: 900; font-size: 16px; } .template-sidebar__category__item__sub-folder__title__text { font-size: 15px; line-height: 21px; color: #34495E; font-weight: 700; padding: 4px 12px 0px 0px; } .template-sidebar__category__item__sub-folder.active .template-sidebar-category__item__sub-folder__posts { display: block; } .template-sidebar-category__item__sub-folder__posts { padding-left: 2px; display: none; } .template-sidebar__image { border: 0.8px solid #97b1b1; border-radius: 0px; box-shadow: 0 5px 10px 0 rgb(0 0 0 / 5%); background: #ecf0f1; padding: 20px; } .template-sidebar__image img { border-radius: 8px } .template-sidebar__toggler { padding-inline: 6px; background-color: #c4ae93; position: absolute; top: 0; right: -40px; display: flex; align-items: center; justify-content: center; flex-direction: column; cursor: pointer; transition: all 0.2s ease-in-out; width: 40px; height: 100vh; } .template-sidebar__toggler:hover { transition: all 0.2s ease-in-out; } .template-sidebar__toggler i { color: white; font-size: 18px; } .template-sidebar__toggler i.close { display: none; } .template-sidebar.active .template-sidebar__toggler .close { display: block; } .template-sidebar.active .template-sidebar__toggler .open { display: none; } /* Navbar */ .template-navbar-wrapper { background-image: url(https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2161088211/settings_images/86d70c6-bdad-dea2-7ce-e8a448d6c31b_pexels-shelaghmurphy-1666813.jpg); background-size: cover; position: relative; display: flex; align-items: center; justify-content: space-between; padding-block: 30px; padding-inline: 15px; } .template-navbar-wrapper * { z-index: 1; position: relative; } .template-navbar-wrapper::before { content: ""; position: absolute; width: 100%; height: 100%; background-color: #ffffff7d; left: 0; top: 0; z-index: 0; } .template-navbar__logo-link img { margin-left: 50px; max-height: 100px; } .template-navbar__content { display: flex; align-items: center; gap: 18px; } .template-navbar__content__nav-links { display: flex; align-items: center; gap: 20px; } .template-navbar__content__nav-links a { font-size: 18px; line-height: 100px; font-weight: 400; } .template-navbar__content__avatar-img { height: 40px; margin-right: 20px; border-radius: 50%; } /* Dashboard Page */ .page-dashboard .product-container { width: calc(100% - 40px); margin-left: auto; min-height: 100vh; } .dashboard__wrapper { padding: 50px 75px; min-height: 100vh; position: relative; background-attachment: fixed; background-position: center; background-size: cover; background-image: url(https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2152332827/settings_images/f8d85b1-4dcd-f6d-07be-3b3b8a0b6e5b_j9ZZUudMSYOf8RmHgA7a_3YQU34bCSPy42MIUiVkG_YogaBackground.jpg); --dashboard-overlay-bg: white; --dashboard-overlay-opacity: .8; } .dashboard__wrapper::before { content: ""; position: absolute; width: 100%; height: 100%; background-color: var(--dashboard-overlay-bg); opacity: var(--dashboard-overlay-opacity); left: 0; top: 0; z-index: 0; } .dashboard__wrapper * { z-index: 1; position: relative; } .dashboard__categories { margin-top: 30px; } .dashboard__categories__title { padding: 20px 40px 0px; color: #2c3e50; font-size: 31.5px; line-height: 44.1px; } /* Category Posts Page */ .page-category-posts #app-container { width: calc(100% - 40px); margin-left: auto; } .template-category-post-title { background: #d6e6e6; box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05); padding: 20px 50px; font-size: 30px; line-height: 42px; font-weight: 700; text-align: center; color: #2b3c4d; } .template-category-post { background-color: #E8F0F1; padding: 50px; min-height: 100vh; position: relative; background-attachment: fixed; background-position: center; background-size: cover; background-image: url(https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2152332827/settings_images/f8d85b1-4dcd-f6d-07be-3b3b8a0b6e5b_j9ZZUudMSYOf8RmHgA7a_3YQU34bCSPy42MIUiVkG_YogaBackground.jpg); --category-post-overlay-bg: white; --category-post-overlay-opacity: .8; } .template-category-post * { z-index: 1; position: relative; } .template-category-post::before { content: ""; position: absolute; width: 100%; height: 100%; background-color: var(--category-post-overlay-bg); opacity: var(--category-post-overlay-opacity); left: 0; top: 0; z-index: 0; } .template-category-post__breadcrumbs { display: flex; justify-content: center; align-items: center; gap: 5px; color: #2C3E50; font-size: 12px; line-height: 18px; font-weight: 400; } .template-category-post__sub-categories__item { margin-top: 40px; } .template-category-post__sub-categories__item__title { font-size: 33px; font-weight: 700; } .template-category-post__sub-categories__item .template-post { padding-top: 20px; } /* Categories Page */ .page-categories #app-container { width: calc(100% - 40px); margin-left: auto; } .template-categories-title { background: #d6e6e6; box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05); padding: 20px 50px; font-size: 30px; line-height: 42px; font-weight: 700; text-align: center; color: #2b3c4d; } .template-categories__list { background-color: #E8F0F1; padding: 50px; min-height: 100vh; position: relative; background-attachment: fixed; background-position: center; background-size: cover; background-image: url(https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2152332827/settings_images/f8d85b1-4dcd-f6d-07be-3b3b8a0b6e5b_j9ZZUudMSYOf8RmHgA7a_3YQU34bCSPy42MIUiVkG_YogaBackground.jpg); --categories-overlay-bg: white; --categories-overlay-opacity: .8; } .template-categories__list * { z-index: 1; position: relative; } .template-categories__list::before { content: ""; position: absolute; width: 100%; height: 100%; background-color: #ecf2f2e6; left: 0; top: 0; z-index: 0; background-color: var(--categories-overlay-bg); opacity: var(--categories-overlay-opacity); } .template-categories__sub-categories__item { margin-top: 40px; } .template-categories__sub-categories__item__title { font-size: 33px; font-weight: 700; } .template-categories__sub-categories__item .template-post { padding-top: 20px; } /* Post Page */ .page-post #app-container { width: calc(100% - 40px); margin-left: auto; } .template-post-page-header { background: #d6e6e6; box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .05); padding: 10px 50px; display: flex; align-items: center; justify-content: center; gap: 10px; } .template-post-page-header__mark-as-complete { font-size: 16px; padding: 8px 10px; border-radius: 4px; border: 1px solid #2b3c4d; color: #2b3c4d; font-weight: 700; opacity: .5; cursor: pointer; transition-duration: .3s; } .template-post-page-header__mark-as-complete:hover { transition-duration: .3s; opacity: 1; } .template-post-page-header__arrow { font-size: 32px; opacity: .5; color: #2b3c4d !important; transition-duration: .3s; display: flex; align-items: center; } .template-post-page-header__arrow.prev { rotate: 180deg; } .template-post-page-header__arrow:hover { opacity: 1 !important; transition-duration: .3s; text-decoration: none; } .template-post-page { background-color: #E8F0F1; padding: 50px; min-height: 100vh; position: relative; } .template-post-page__breadcrumbs { display: flex; justify-content: center; align-items: center; gap: 5px; color: #2C3E50; font-size: 12px; line-height: 18px; font-weight: 400; } .template-post-page__title { font-size: 45px; font-weight: 600; text-align: center; margin-top: 30px; margin-bottom: 20px; color: #2b3c4d; } .template-post-page__video, .template-post-page__audio { max-width: 75%; margin-inline: auto; } .template-post-page__description { max-width: 60%; margin-inline: auto; margin-top: 40px; margin-bottom: 40px; } .template-post-page__comments { max-width: 60%; margin-inline: auto; }</style>`;
                document.body.insertAdjacentHTML("afterbegin", styles);
            }
        }

        // This method holds widgets related methods
        widgets = {
            welcomeBanner: (name = "User", progress = "No progress available", buttonText = "Let's Start", buttonLink = "#") => {
                const html = `
                    <div class="template-welcome">
                        <div class="template-welcome__left">
                            <p class="template-welcome__greeting">Welcome back, ${name}</p>
                            <p class="template-welcome__progress">
                                <i class="fa-solid fa-desktop template-welcome__progress-icon"></i>
                                <span>${progress}% COMPLETE</span>
                            </p>
                        </div>
                        <a href="${buttonLink}" class="template-welcome__button">${buttonText}</a>    
                    </div>
                `;
                return html;
            },
            heroBanner: (title = "Welcome to Flix", subtitle = "[YOGA ANYWHERE, ANYTIME].", paragraphHTML = "", embedHTML = "") => {
                const defaultEmbed = `<iframe width="560" height="315" src="https://www.youtube.com/embed/yCjJyiqpAuU?si=GwkgG-HTW4OChx95" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
                const defaultParagraph = `
                    <p><strong>Simply choose your favorite style from below, pick a lesson and off you go.</strong></p>
                    <p>Or come along to one of our Live Yoga Classes held fortnightly. Just choose your preferred day on the calendar and book yourself a spot. These are held on Zoom.</p>
                `;
                const html = `
                    <div class="template-hero">
                        <!-- Left Column: Text Content -->
                        <div class="template-hero__left">
                            <h1 class="template-hero__title" id="hero-title">${title}</h1>
                            <span class="template-hero__subtitle" id="hero-subtitle">[${subtitle}]</span>
                            ${paragraphHTML || defaultParagraph}
                        </div>
                        <!-- Right Column: Video Embed -->
                        <div class="template-hero__right">
                            <!-- Embed HTML provided by the customizer is injected here -->
                            ${embedHTML || defaultEmbed} 
                        </div>
                    </div>
                `;
                return html;
            },
            categoryGrid: (categories = []) => {
                // First we will check if the assed categories is valid and is not empty, if it does then we will return a error html
                if (!categories || categories.length === 0) {
                    return '<p class="text-center text-gray-500">No categories found to display.</p>';
                }

                // Then we will generate the category cards
                const categoryCards = categories.reduce((a, c) => {
                    a += `
                        <a href="${c.url || '#'}" class="template-categories__card">
                            <img 
                                src="${c.thumbnail || 'https://placehold.co/400x200/cccccc/333333?text=Placeholder'}" 
                                alt="Thumbnail for ${c.title}" 
                                class="template-categories__thumbnail"
                                loading="lazy"
                                onerror="this.onerror=null; this.src='https://placehold.co/400x200/cccccc/333333?text=Placeholder';"
                            />
                            <div class="template-categories__info">
                                <h3 class="template-categories__title-text">${c.title}</h3>
                            </div>
                        </a>
                    `;
                    return a
                }, "");

                // Then we will wrap the cards in the main grid container
                const html = `
                    <div class="template-categories">
                        <div class="template-categories__grid" id="category-grid-container">
                            ${categoryCards}
                        </div>
                    </div>
                `;

                // Finally we will return the html
                return html;
            },
            postGrid: (posts = []) => {
                // First we will check if the assed post is valid and is not empty, if it does then we will return a error html
                if (!posts || posts?.length === 0) {
                    return '<p class="text-center text-gray-500">No posts found to display.</p>';
                }

                // Then we will generate the category cards
                const postCards = posts?.reduce((a, c) => {
                    a += `
                        <a href="${c.url || '#'}" class="template-post__card">
                            <img 
                                src="${c.thumbnail ? `https://cdn.courses.apisystem.tech/${c.thumbnail}` : null || 'https://placehold.co/400x200/cccccc/333333?text=Placeholder'}" 
                                alt="Thumbnail for ${c.title}" 
                                class="template-post__thumbnail"
                                loading="lazy"
                                onerror="this.onerror=null; this.src='https://placehold.co/400x200/cccccc/333333?text=Placeholder';"
                            />
                            <div class="template-post__info">
                                <h3 class="template-post__title-text">${c.title}</h3>
                            </div>
                        </a>
                    `;
                    return a
                }, "");

                // Then we will wrap the cards in the main grid container
                const html = `
                    <div class="template-post">
                        <div class="template-post__grid" id="post-grid-container">
                            ${postCards}
                        </div>
                    </div>
                `;

                // Finally we will return the html
                return html;
            },
            communityToggle: (
                buttonText = "Ask the Community",
                activeButtonText = "Hide Community Forum",
                embedHTML = ""
            ) => {
                window.addEventListener("click", (e) => {
                    const $targetItem = e.target.closest(".template-community-toggle__button");
                    if ($targetItem) {
                        const $container = $targetItem.closest(".template-community-container");
                        const isActive = $container.classList.contains("active");
                        $targetItem.innerText = !isActive ? activeButtonText : buttonText;
                        $container.classList?.[isActive ? "remove" : "add"]("active");
                    }
                });
                const html = `
                    <div class="template-community-container">
                        <div class="template-community-toggle">
                            <button 
                                class="template-community-toggle__button" 
                                id="community-toggle-button"
                            >
                                ${buttonText}
                            </button>
                        </div>
                    
                        <!-- This is the container that will be toggled by JavaScript -->
                        <div class="template-community-embed" id="community-embed-area">
                            ${embedHTML}
                        </div>
                    </div>
                `;
                return html;
            },
            downloadSelect: (items = [{
                url: "Test",
                title: "Test"
            }]) => {
                const assetsHTML = items?.reduce((a, c) => {
                    a += `
                <li class="template-downloads__item">
                       <a href="${c.url}" download>
                           <i class="fas fa-file-code"></i>
                           ${c.title}
                       </a>
                </li>`;
                    return a
                }, "");
                return `
                <div id="custom-download" class="template-downloads">
                    <button id="dropdown-button" onclick="this.parentElement.classList.toggle('active')" class="template-downloads__button" aria-expanded="false" aria-controls="dropdown-menu">
                        <i class="fas fa-cloud-download-alt text-xl"></i>
                        <span id="button-label" class="template-downloads__label">Downloads</span>
                        <i id="dropdown-icon" class="fas fa-chevron-down template-downloads__icon-arrow text-sm"></i>
                        <ul id="dropdown-menu" class="template-downloads__menu">
                            ${assetsHTML}
                        </ul>
                    </button>
                </div>
            `;
            }
        }

        // This object holds data related methods
        data = {
            fetchProduct: async () => {
                return await new Promise((resolved, reject) => {
                    const locationId = location.href.split(".")[0].replace("https://", "");
                    const productId = location.href.split("/products/")[1].split("?")[0].split("/")[0];
                    const url = `https://services.leadconnectorhq.com/membership/locations/${locationId}/products/${productId}`;
                    const acatToken = $cookies.get("acat") || $cookies.get("cat");
                    if (acatToken) {
                        const token = JSON.parse(window.atob(acatToken))?.tokenId;
                        fetch(
                            url,
                            {
                                headers: {
                                    "accept": "application/json, text/plain, */*",
                                    "accept-language": "en-US,en;q=0.6",
                                    "authorization": `Bearer ${token}`,
                                    "channel": "APP",
                                },
                                body: null,
                                method: "GET",
                            }
                        )
                            .then((e) => resolved(e.json()))
                    } else {
                        console.log("No Token Found!");
                    }
                });
            },
            fetchCategory: async (catId = "") => {
                return await new Promise((resolved, reject) => {
                    const locationId = location.href.split(".")[0].replace("https://", "");
                    const productId = location.href.split("/products/")[1].split("?")[0].split("/")[0];
                    const categoryId = catId || location.href.split("/categories/")[1].split("?")[0].split("/")[0];
                    const url = `https://services.leadconnectorhq.com/membership/locations/${locationId}/user-purchase/categories/${categoryId}?product_id=${productId}&visibility=published&published_posts=true`;
                    const acatToken = $cookies.get("acat") || $cookies.get("cat");
                    if (acatToken) {
                        const token = JSON.parse(window.atob(acatToken))?.tokenId;
                        fetch(
                            url,
                            {
                                headers: {
                                    "accept": "application/json, text/plain, */*",
                                    "accept-language": "en-US,en;q=0.6",
                                    "authorization": `Bearer ${token}`,
                                    "channel": "APP",
                                },
                                body: null,
                                method: "GET",
                            }
                        )
                            .then((e) => e.json())
                            .then(async (e) => {
                                // 1. Fetch all available categories and filter them to find only those
                                //    that specify the current categoryId as their parent (i.e., subcategories).
                                const subCategories = (await this.data.fetchCategories()).filter(
                                    (sub) => sub.parentCategory === categoryId
                                )?.sort((a, b) => (a.sequenceNo > b.sequenceNo ? 1 : -1));

                                // 2. Assign the found subcategories directly to the current category's structure.
                                //    NOTE: This operation REPLACES any existing data in the 'subCategories'
                                //    array on the category object (e.category) with the newly filtered list.
                                e.category.subCategories = subCategories;

                                // 3. Sort the posts within the current category based on their sequence number.
                                e.category.posts = e?.category?.posts?.sort((a, b) => (a.sequenceNo > b.sequenceNo ? 1 : -1))

                                // 4. Resolve the promise with the fully structured 'e' object,
                                //    which now contains posts and its aggregated subcategories.
                                resolved(e);
                            });
                    } else {
                        console.log("No Token Found!");
                    }
                });
            },
            fetchCategories: async () => {
                return await new Promise((resolved, reject) => {
                    const locationId = location.href.split(".")[0].replace("https://", "");
                    const productId = location.href.split("/products/")[1].split("?")[0].split("/")[0];
                    const url = `https://services.leadconnectorhq.com/membership/locations/${locationId}/user-purchase/categories?product_id=${productId}`;
                    const acatToken = $cookies.get("acat") || $cookies.get("cat");
                    if (acatToken) {
                        const token = JSON.parse(window.atob(acatToken))?.tokenId;
                        fetch(
                            url,
                            {
                                headers: {
                                    "accept": "application/json, text/plain, */*",
                                    "accept-language": "en-US,en;q=0.6",
                                    "authorization": `Bearer ${token}`,
                                    "channel": "APP",
                                },
                                body: null,
                                method: "GET",
                            }
                        )
                            .then((e) => e.json())
                            .then((e) => {
                                resolved(e.categories);
                            });
                    } else {
                        console.log("No Token Found!");
                    }
                });
            },
            fetchPost: async (pId = "") => {
                return await new Promise((resolved, reject) => {
                    const locationId = location.href.split(".")[0].replace("https://", "");
                    const postId = pId || location.href.split("/posts/")[1].split("?")[0].split("/")[0];
                    const url = `https://services.leadconnectorhq.com/membership/locations/${locationId}/posts/${postId}`;
                    const acatToken = $cookies.get("acat") || $cookies.get("cat");
                    if (acatToken) {
                        const token = JSON.parse(window.atob(acatToken))?.tokenId;
                        fetch(
                            url,
                            {
                                headers: {
                                    "accept": "application/json, text/plain, */*",
                                    "accept-language": "en-US,en;q=0.6",
                                    "authorization": `Bearer ${token}`,
                                    "channel": "APP",
                                },
                                body: null,
                                method: "GET",
                            }
                        )
                            .then((e) => e.json())
                            .then((e) => {
                                resolved(e);
                            });
                    } else {
                        console.log("No Token Found!");
                    }
                });
            },
            fetchCompletedPosts: async (pId = "") => {
                return await new Promise(async (resolved, reject) => {
                    const locationId = location.href.split(".")[0].replace("https://", "");
                    const productId = location.href.split("/products/")[1].split("?")[0].split("/")[0];
                    const acatToken = $cookies.get("acat") || $cookies.get("cat");
                    if (acatToken) {
                        const token = JSON.parse(window.atob(acatToken))?.tokenId;
                        const userId = JSON.parse(window.atob(acatToken))?.externalUserId;
                        const url = `https://services.leadconnectorhq.com/membership/locations/${locationId}/user-post-completion?product_id=${productId}&user_id=${userId}`;
                        fetch(
                            url,
                            {
                                headers: {
                                    "accept": "application/json, text/plain, */*",
                                    "accept-language": "en-US,en;q=0.6",
                                    "authorization": `Bearer ${token}`,
                                    "channel": "APP",
                                },
                                body: null,
                                method: "GET",
                            }
                        )
                            .then((e) => e.json())
                            .then((e) => {
                                resolved(e);
                            });
                    } else {
                        console.log("No Token Found!");
                    }
                });
            },
            fetchUserProductProgress: async (cId = "") => {
                return await new Promise(async (resolved, reject) => {
                    const locationId = location.href.split(".")[0].replace("https://", "");
                    const acatToken = $cookies.get("acat") || $cookies.get("cat");
                    if (acatToken) {
                        const token = JSON.parse(window.atob(acatToken))?.tokenId;
                        const contactId = JSON.parse(window.atob(acatToken))?.contactId;
                        fetch(`https://services.leadconnectorhq.com/membership/locations/${locationId}/products/user-activity/${cId || contactId}`, {
                            "headers": {
                                "accept": "application/json, text/plain, */*",
                                "accept-language": "en-US,en;q=0.5",
                                "token-id": token,
                            },
                            "body": null,
                            "method": "POST",
                            "mode": "cors",
                            "credentials": "omit"
                        })
                            .then((e) => e.json())
                            .then((e) => {
                                e.progressPercentage = ((e.completedPosts / e.totalPosts) * 100).toFixed(0);
                                resolved(e);
                            });
                    } else {
                        console.log("No Token Found!");
                    }
                });
            },
            fetchUser: async (cId = "") => {
                return await new Promise(async (resolved, reject) => {
                    const locationId = location.href.split(".")[0].replace("https://", "");
                    const acatToken = $cookies.get("acat") || $cookies.get("cat");
                    if (acatToken) {
                        const token = JSON.parse(window.atob(acatToken))?.tokenId;
                        const contactId = JSON.parse(window.atob(acatToken))?.contactId;
                        fetch(`https://services.leadconnectorhq.com/clientclub/${locationId}/users/${cId || contactId}`, {
                            "headers": {
                                "accept": "application/json, text/plain, */*",
                                "channel": "APP",
                                "accept-language": "en-US,en;q=0.5",
                                "source": "PORTAL_USER",
                                "token-id": token,
                            },
                            "referrer": `https://${locationId}.app.clientclub.net/`,
                            "referrerPolicy": "strict-origin-when-cross-origin",
                            "body": null,
                            "method": "GET",
                            "mode": "cors",
                            "credentials": "omit"
                        })
                            .then((e) => e.json())
                            .then((e) => {
                                console.log(e)
                                resolved(e);
                            });
                    } else {
                        console.log("No Token Found!");
                    }
                });
            }
        }

        utils = {

        }
    }

    window.CourseTemplate = new CourseTemplate();
</script>
