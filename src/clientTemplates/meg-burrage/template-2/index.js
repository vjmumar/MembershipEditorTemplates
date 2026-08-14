window.templateCustomizationSchema = {
   name: "Production",
   id: "template-1",
   customCss:
      "@font-face { font-family: 'Ogg'; src: url('https://res.cloudinary.com/dpr6hw8uh/raw/upload/v1659948521/Ogg-Roman_vloao9.otf') format('opentype'); font-weight: normal; font-style: normal; font-display: swap; }",
   customFonts: [],
   googleFontsUsed: ["Lavishly Yours", "Playfair Display", "Quicksand"],
   placeholderThumbnail:
      "https://res.cloudinary.com/dpr6hw8uh/image/upload/v1771635525/image7_w940ot.png",
   branding: [
      {
         label: "Typography",
         key: "branding-typography",
         customizations: [
            {
               name: "Heading Font",
               property: "branding-heading-font-family",
               type: "font",
               placeholder: "",
               value: "Ogg",
            },
            {
               name: "Body Font",
               property: "branding-body-font-family",
               type: "font",
               placeholder: "",
               value: "Quicksand",
            },
         ],
      },
      {
         label: "Font Sizes",
         key: "branding-font-sizes",
         customizations: [
            {
               name: "H1 Size",
               property: "branding-h1-font-size",
               type: "text",
               placeholder: "E.g: 70px",
               value: "45px",
            },
            {
               name: "H2 Size",
               property: "branding-h2-font-size",
               type: "text",
               placeholder: "E.g: 60px",
               value: "33px",
            },
            {
               name: "H3 Size",
               property: "branding-h3-font-size",
               type: "text",
               placeholder: "E.g: 50px",
               value: "30px",
            },
            {
               name: "H4 Size",
               property: "branding-h4-font-size",
               type: "text",
               placeholder: "E.g: 40px",
               value: "24px",
            },
            {
               name: "H5 Size",
               property: "branding-h5-font-size",
               type: "text",
               placeholder: "E.g: 30px",
               value: "20px",
            },
            {
               name: "H6 Size",
               property: "branding-h6-font-size",
               type: "text",
               placeholder: "E.g: 20px",
               value: "18px",
            },
            {
               name: "Paragraph Size",
               property: "branding-p-font-size",
               type: "text",
               placeholder: "E.g: 16px",
               value: "16px",
            },
         ],
      },
      {
         label: "Colours",
         key: "branding-colours",
         customizations: [
            {
               name: "Button Colour",
               property: "branding-button-background-color",
               type: "color",
               placeholder: "E.g: #FFFFFF",
               value: "#d29a89",
            },
            {
               name: "Button Text Colour",
               property: "branding-button-text-color",
               placeholder: "E.g: #FFFFFF",
               type: "color",
               value: "#000000",
            },
            {
               name: "Primary Heading Colour",
               property: "branding-primary-heading-color",
               type: "color",
               placeholder: "E.g: #000000",
               value: "#000000",
            },
            {
               name: "Primary Text Colour",
               property: "branding-primary-text-color",
               type: "color",
               placeholder: "E.g: #000000",
               value: "#000000",
            },
            {
               name: "Primary Accent - Dark",
               property: "branding-primary-accent-dark",
               placeholder: "E.g: #FFFFFF",
               type: "color",
               value: "#d29a89",
            },
            {
               name: "Secondary Accent - Light",
               property: "branding-secondary-accent-light",
               placeholder: "E.g: #FFFFFF",
               type: "color",
               value: "#e0c5ba",
            },
            {
               name: "Background Colour - Dark",
               property: "branding-background-color-dark",
               placeholder: "E.g: #FFFFFF",
               type: "color",
               value: "#e8f0f1",
            },
            {
               name: "Background Colour - Light",
               property: "branding-background-color-light",
               placeholder: "E.g: #FFFFFF",
               type: "color",
               value: "#f6ebe7",
            },
         ],
      },
      {
         label: "Buttons",
         key: "branding-buttons",
         customizations: [
            {
               name: "Button Radius",
               property: "branding-button-radius",
               placeholder: "E.g: 10px",
               type: "text",
               value: "4px",
            },
         ],
      },
   ],
   global: [
      {
         name: "Loading Overlay",
         showOnMobileEditor: true,
         customizations: [
            {
               elementSelector: ".loading-overlay__container",
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
               ],
            },
            {
               elementSelector: ".loading-overlay__logo",
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
                     value: "https://res.cloudinary.com/dpr6hw8uh/image/upload/v1774393003/Meg_Burrage_Saasy_Funnels_Logos_1-Icon_2_z4z0gh.png",
                  },
               ],
            },
            {
               elementSelector: ".loading-overlay__bottom-text",
               label: "Bottom Text",
               key: "loading-overlay-text",
               cssCustomizations: [],
               elementCustomizations: [
                  {
                     name: "HTML Content",
                     type: "html",
                     target: "",
                     value: "",
                  },
               ],
            },
         ],
      },
      {
         name: "Navbar",
         showOnMobileEditor: true,
         customizations: [
            {
               elementSelector: ".template-navbar-wrapper",
               label: "Container",
               key: "navigation-bar-container",
               cssCustomizations: [
                  {
                     name: "Background Image",
                     property: "background-image",
                     placeholder: "E.g: https://www.sampleimage.com",
                     type: "image",
                     value: "",
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
                     value: "",
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
               ],
               elementCustomizations: [
                  {
                     name: "Image",
                     type: "attribute",
                     target: "src",
                     value: "",
                  },
               ],
            },
            {
               elementSelector: ".template-navbar__content__nav-links a",
               label: "Menu Items",
               key: "template-navbar-content-nav-links",
               features: [
                  {
                     name: "Menus",
                     key: "template-navbar-menus",
                     isTurnedOn: false,
                     customizations: [
                        {
                           name: "Label",
                           property: "menu-text-1",
                           type: "text",
                           placeholder: "Home",
                           value: "Home",
                           group: "menu-1",
                           groupLabel: "Menu 1",
                        },
                        {
                           name: "Link",
                           property: "menu-link-1",
                           type: "text",
                           placeholder: "https://example.com/image",
                           value: "https://img.freepik.com/free-vector/pastel-coloured-hand-painted-watercolour-background_1048-19244.jpg?semt=ais_hybrid&w=740&q=80",
                           group: "menu-1",
                        },
                        {
                           name: "Label",
                           property: "menu-text-2",
                           type: "text",
                           placeholder: "What's New",
                           value: "What's New",
                           group: "menu-2",
                           groupLabel: "Menu 2",
                        },
                        {
                           name: "Link",
                           property: "menu-link-2",
                           type: "text",
                           placeholder: "https://example.com/image",
                           value: "https://t3.ftcdn.net/jpg/04/99/21/50/360_F_499215058_WG1sNeCqCm4KW0X5V6y1beuCL0twCFZ7.jpg",
                           group: "menu-2",
                        },
                        {
                           name: "Label",
                           property: "menu-text-3",
                           type: "text",
                           placeholder: "Favorites",
                           value: "Favorites",
                           group: "menu-3",
                           groupLabel: "Menu 3",
                        },
                        {
                           name: "Link",
                           property: "menu-link-3",
                           type: "text",
                           placeholder: "https://example.com/image",
                           value: "https://t3.ftcdn.net/jpg/04/99/21/50/360_F_499215058_WG1sNeCqCm4KW0X5V6y1beuCL0twCFZ7.jpg",
                           group: "menu-3",
                        },
                        {
                           name: "Label",
                           property: "menu-text-4",
                           type: "text",
                           placeholder: "Announcements",
                           value: "Announcements",
                           group: "menu-4",
                           groupLabel: "Menu 4",
                        },
                        {
                           name: "Link",
                           property: "menu-link-4",
                           type: "text",
                           placeholder: "https://example.com/image",
                           value: "https://t3.ftcdn.net/jpg/04/99/21/50/360_F_499215058_WG1sNeCqCm4KW0X5V6y1beuCL0twCFZ7.jpg",
                           group: "menu-4",
                        },
                        {
                           name: "Label",
                           property: "menu-text-5",
                           type: "text",
                           placeholder: "Announcements",
                           value: "Announcements",
                           group: "menu-5",
                           groupLabel: "Menu 5",
                        },
                        {
                           name: "Link",
                           property: "menu-link-5",
                           type: "text",
                           placeholder: "https://example.com/image",
                           value: "https://t3.ftcdn.net/jpg/04/99/21/50/360_F_499215058_WG1sNeCqCm4KW0X5V6y1beuCL0twCFZ7.jpg",
                           group: "menu-5",
                        },
                        {
                           name: "Label",
                           property: "menu-text-6",
                           type: "text",
                           placeholder: "Contact",
                           value: "Contact",
                           group: "menu-6",
                           groupLabel: "Menu 6",
                        },
                        {
                           name: "Link",
                           property: "menu-link-6",
                           type: "text",
                           placeholder: "https://example.com/image",
                           value: "https://t3.ftcdn.net/jpg/04/99/21/50/360_F_499215058_WG1sNeCqCm4KW0X5V6y1beuCL0twCFZ7.jpg",
                           group: "menu-6",
                        },
                     ],
                     css: (customizations = []) => {
                        let css = ``;
                        customizations.forEach((cItem) => {
                           css = css.replace(`{{${cItem?.property}}}`, cItem?.value);
                        });
                        return css;
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
                           js = js.replace(`{{${cItem?.property}}}`, cItem?.value);
                        });
                        return js;
                     },
                     cleanUpJs: (customizations = []) => {
                        let js = `
                           (() => {
                              const defaultLinks = [ { text: 'Home', url: '/' }, { text: "Library", url: "/courses/library-v2" }, { text: 'Favorites', url: '/favorites' }, { text: 'Announcements', url: '/announcements' }, { text: 'Contact', url: '/contact' } ];
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
                           js = js.replace(`{{${cItem?.property}}}`, cItem?.value);
                        });
                        return js;
                     },
                  },
               ],
               cssCustomizations: [
                  {
                     name: "Text Color",
                     property: "color",
                     type: "color",
                     placeholder: "#191919",
                     value: "",
                  },
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
                     value: "",
                  },
               ],
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
               ],
            },
         ],
      },
      {
         name: "Sidebar",
         showOnMobileEditor: true,
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
               ],
            },
            {
               elementSelector: ".template-sidebar__back-button *",
               label: "Back Button",
               key: "template-sidebar-back-button",
               cssCustomizations: [
                  {
                     name: "Color",
                     property: "color",
                     type: "color",
                     value: "",
                  },
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
               ],
               elementCustomizations: [
                  {
                     name: "Image Src",
                     type: "attribute",
                     target: "src",
                     value: "",
                  },
               ],
            },
            {
               elementSelector: ".template-sidebar__titles",
               label: "Module Title",
               key: "template-sidebar-titles",
               cssCustomizations: [
                  {
                     name: "Text Color",
                     property: "color",
                     type: "color",
                     value: "",
                  },
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
                     value: "",
                  },
                  {
                     name: "Border Top Color",
                     property: "border-top-color",
                     type: "color",
                     value: "",
                  },
                  {
                     name: "Border Bottom Color",
                     property: "border-bottom-color",
                     type: "color",
                     value: "",
                  },
               ],
               elementCustomizations: [
                  {
                     name: "HTML Content",
                     type: "html",
                     target: "",
                     value: "",
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
                     name: "Border Bottom Color",
                     property: "border-bottom-color",
                     type: "color",
                     value: "",
                  },
               ],
            },
            {
               elementSelector:
                  ".template-sidebar__category__item__title__content__title",
               label: "Category Item Text",
               key: "template-sidebar-category-item-title-content-title",
               cssCustomizations: [
                  {
                     name: "Color",
                     property: "color",
                     type: "color",
                     value: "",
                  },
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
                     value: "",
                  },
                  {
                     name: "Font Size",
                     property: "font-size",
                     placeholder: "E.g: 20px",
                     type: "text",
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
                  },
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
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
               ],
            },
            {
               elementSelector:
                  ".template-sidebar__category__item__sub-folder__title__text",
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
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
                     value: "",
                  },
               ],
            },
            {
               elementSelector:
                  ".template-sidebar__category__item__sub-folder__title__icon",
               label: "Sub Category Item Icon",
               key: "template-sidebar-category-item-sub-folder-title-icon",
               cssCustomizations: [
                  {
                     name: "Color",
                     property: "color",
                     type: "color",
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
                     name: "Background Color",
                     property: "background-color",
                     type: "color",
                     value: "",
                  },
               ],
               elementCustomizations: [
                  {
                     name: "Link To",
                     type: "attribute",
                     target: "href",
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
                     value: "",
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
                  },
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
               ],
            },
         ],
      },
   ],
   pages: [
      {
         name: "Dashboard",
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
               ],
            },
            {
               elementSelector: ".template-welcome__greeting",
               label: "Welcome Greeting",
               key: "welcome-greeting",
               cssCustomizations: [
                  {
                     name: "Text Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
               ],
            },
            {
               elementSelector: ".template-welcome__progress span",
               label: "Welcome Progress Text",
               key: "welcome-progress-text",
               cssCustomizations: [
                  {
                     name: "Text Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
                     name: "Text Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
               elementSelector: ".dashboard__wrapper",
               label: "Dashboard Container",
               key: "dashboard-container",
               cssCustomizations: [
                  {
                     name: "Background Image",
                     property: "background-image",
                     type: "image",
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
                     name: "Text Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
            },
            {
               elementSelector: ".template-community-embed",
               label: "Community Embed",
               key: "template-community-embed",
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
               ],
               elementCustomizations: [
                  {
                     name: "HTML Content",
                     type: "html",
                     target: "",
                     value: "",
                  },
               ],
            },
            {
               elementSelector: ".template-hero__left",
               label: "Dashboard Info",
               key: "template-hero-left",
               cssCustomizations: [
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
                     name: "HTML Content",
                     type: "html",
                     target: "",
                     value: "",
                  },
               ],
            },
            {
               elementSelector: ".template-hero__right",
               label: "Dashboard Info Video",
               key: "template-hero-right",
               cssCustomizations: [
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
                     name: "Embed",
                     type: "html",
                     target: "",
                     value: "",
                  },
               ],
               features: [
                  {
                     name: "Video",
                     key: "template-hero-right-video",
                     isTurnedOn: false,
                     customizations: [
                        {
                           name: "Video Url",
                           property: "template-hero-right-video-url",
                           type: "text",
                           placeholder: "Video Url",
                           value: "https://www.w3schools.com/html/mov_bbb.mp4",
                        },
                        {
                           name: "Video Thumbnail",
                           property: "template-hero-right-video-thumbnail",
                           type: "text",
                           placeholder: "Video Thumbnail",
                           value: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
                        },
                     ],
                     css: (customizations = []) => {
                        let css = ``;
                        customizations.forEach((cItem) => {
                           css = css.replace(`{{${cItem?.property}}}`, cItem?.value);
                        });
                        return css;
                     },
                     js: (customizations = []) => {
                        let js = `
                           (() => {
                              window['template-hero-right-previous-html'] = document.querySelector('.template-hero__right').innerHTML;
                              document.querySelector('.template-hero__right').innerHTML =  '<video style="width: 100%;" src="{{template-hero-right-video-url}}" playsinline="" controls="" poster="{{template-hero-right-video-thumbnail}}"></video>'; 
                           })();
                           `;
                        customizations.forEach((cItem) => {
                           js = js.replace(`{{${cItem?.property}}}`, cItem?.value);
                        });
                        return js;
                     },
                     cleanUpJs: (customizations = []) => {
                        let js = `
                           (() => {
                              document.querySelector('.template-hero__right').innerHTML = window['template-hero-right-previous-html'];
                           })();     
                           `;
                        customizations.forEach((cItem) => {
                           js = js.replace(`{{${cItem?.property}}}`, cItem?.value);
                        });
                        return js;
                     },
                  },
               ],
            },
            {
               elementSelector: ".dashboard__categories__title",
               label: "Dashboard Category Title",
               key: "dashboard-categories-title",
               cssCustomizations: [
                  {
                     name: "Text Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
               ],
               elementCustomizations: [
                  {
                     name: "HTML Content",
                     type: "html",
                     target: "",
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
                     name: "Background Color",
                     property: "background-color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
               ],
            },
            {
               elementSelector: ".template-categories__title-text",
               label: "Dasboard Category Card Info Text",
               key: "template-categories-info-text",
               cssCustomizations: [
                  {
                     name: "Text Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
                     value: "",
                  },
               ],
            },
         ],
      },
      {
         name: "Category Posts",
         editor: [
            {
               elementSelector: ".template-category-post-title",
               label: "Category Title",
               key: "category-title",
               cssCustomizations: [
                  {
                     name: "Text Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
               elementSelector: ".template-category-post",
               label: "Category Post Container",
               key: "template-category-post",
               cssCustomizations: [
                  {
                     name: "Background Image",
                     property: "background-image",
                     type: "image",
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
               elementSelector: ".template-category-post__breadcrumbs *",
               label: "Category Posts Bread Crumbs",
               key: "template-category-post-breadcrumbs",
               cssCustomizations: [
                  {
                     name: "Text Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
                  {
                     name: "Text Hover",
                     property: "--category-post-breadcrumbs-hover-color",
                     type: "color",
                     placeholder: "",
                     value: "#2b6cb0",
                  },
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
                     name: "Background Color",
                     property: "background-color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
               ],
            },
            {
               elementSelector: ".template-post__title-text",
               label: "Category Posts Post Card Info Text",
               key: "template-post-info-text",
               cssCustomizations: [
                  {
                     name: "Text Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
                     value: "",
                  },
                  {
                     name: "Text Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
               ],
            },
         ],
      },
      {
         name: "Categories",
         editor: [
            {
               elementSelector: ".template-categories-title",
               label: "Category Title",
               key: "category-title",
               cssCustomizations: [
                  {
                     name: "Text Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
               elementSelector: ".template-categories__list",
               label: "Category Post Container",
               key: "template-categories-list",
               cssCustomizations: [
                  {
                     name: "Background Image",
                     property: "background-image",
                     type: "image",
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
               elementSelector: ".template-categories__info",
               label: "Categories Category Card Info",
               key: "template-categories-info",
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
            {
               elementSelector: ".template-categories__title-text",
               label: "Categories Category Card Info Text",
               key: "template-categories-title-text",
               cssCustomizations: [
                  {
                     name: "Text Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
                     value: "",
                  },
               ],
            },
         ],
      },
      {
         name: "Post",
         editor: [
            {
               elementSelector: ".template-post-page",
               label: "Post Container",
               key: "template-post-page",
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
            {
               elementSelector: ".template-post-page-header",
               label: "Post Header",
               key: "template-post-page-header",
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
            {
               elementSelector: ".template-downloads__button",
               label: "Downloads Button",
               key: "template-downloads-button",
               cssCustomizations: [
                  {
                     name: "Text Color",
                     property: "--download-text-color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
                     name: "Border Color",
                     property: "border-color",
                     type: "color",
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
               ],
            },
            {
               elementSelector: ".template-post-page-header__mark-as-complete",
               label: "Mark As Complete Button",
               key: "template-post-page-header-mark-as-complete",
               cssCustomizations: [
                  {
                     name: "Text Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
                     name: "Border Color",
                     property: "border-color",
                     type: "color",
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
                     important: true,
                     placeholder: "",
                     value: "",
                  },
               ],
            },
            {
               elementSelector: ".template-post-page__breadcrumbs *",
               label: "Post Bread Crumbs",
               key: "template-post-page-breadcrumbs",
               cssCustomizations: [
                  {
                     name: "Text Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
                  {
                     name: "Text Hover",
                     property: "--post-breadcrumbs-hover-color",
                     type: "color",
                     placeholder: "",
                     value: "#2b6cb0",
                  },
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
                     name: "Text Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
         ],
      },
   ],
};

class CourseTemplate {
   constructor() {
      this.coreMethods = null;
      this.isMobile = window.matchMedia("(max-width: 768px)").matches;
      this.baseURL = `https://membershipeditor.netlify.app`;
      this.path = `/src/clientTemplates/meg-burrage/template-1/`;
      this.init();
   }

   // This method initialize the script
   init = async () => {
      // First we will retrieve the current URL
      const url = window.location.href;

      // Then we will assign the core version
      const coreVersion = "v1";

      // Then we will insert the font-awesome script into the head
      const fScript = document.createElement("script");
      fScript.src = "https://kit.fontawesome.com/d84a98056b.js";
      document.head.append(fScript);

      // Then we will insert the templates global, widget and pages styles
      document.head.insertAdjacentHTML(
         "afterbegin",
         `
            <link class="template-global-styles" rel="stylesheet" href="${this.baseURL}${this.path}css/global.css" fetchpriority="high"></link>
            <link class="template-styles" rel="stylesheet" href="${this.baseURL}${this.path}css/page.css" fetchpriority="high"></link>
            <link class="template-widget-styles" rel="stylesheet" href="${this.baseURL}${this.path}css/widget.css" fetchpriority="high"></link>
         `,
      );

      // Then we will insert the template core and core widget css
      const courseTemplateCoreScript = document.createElement("script");
      courseTemplateCoreScript.src = `${this.baseURL}/src/courseTemplateCore/${coreVersion}/index.js`;
      courseTemplateCoreScript.fetchPriority = "high";
      document.head.prepend(courseTemplateCoreScript);
      await new Promise((res) => {
         courseTemplateCoreScript.onload = () => {
            this.coreMethods = new CourseTemplateCore(this.pages, this.globalWidgets);
            res(true);
         };
         courseTemplateCoreScript.error = (err) => {
            console.log(String(err));
         };
      });
      document.head.insertAdjacentHTML(
         "beforeend",
         `<link class="template-global-styles" rel="stylesheet" href="${this.baseURL}/src/courseTemplateCore/${coreVersion}/css/widgets.css" fetchpriority="high"></link>`,
      );

      // Then we will initialize the  global widgets and the landing page
      const $root = document.querySelector(".bm-theme-root");
      const $rootContainer = document.querySelector(".bm-theme-root__container");
      const $rootContainerPage = document.querySelector(
         ".bm-theme-root__container__page",
      );
      await this.globalWidgets?.["Sidebar"]($rootContainer);
      await this.globalWidgets?.["Navbar"]($rootContainer);
      await this.coreMethods.actions.navigate("Dashboard");

      // Then we will append a class to the body indicating that the template is ready
      setTimeout(() => {
         document.body.classList.add("template-ready");
      }, 0);

      // Finally we will remove the intial loader
      setTimeout(() => {
         document.querySelector(".template-loader")?.remove();
      }, 1000);
   };

   // This object holds global related initializers
   globalWidgets = {
      Navbar: async ($container = null) => {
         // First we will fetch the necessary data
         const [userData, product] = await Promise.allSettled([
            this.coreMethods.data.fetchUser(),
            this.coreMethods.data.fetchProduct(),
         ]).then((res) => res.map((e) => e.value));

         // Then we will create the default variables
         const logo =
            "https://res.cloudinary.com/dpr6hw8uh/image/upload/v1774393003/Meg_Burrage_Saasy_Funnels_Logos_1-Icon_2_z4z0gh.png";
         const defaultLinks = [
            { text: "Home", url: "/" },
            { text: "Library", url: "/courses/library-v2" },
            { text: "Favorites", url: "/favorites" },
            { text: "Announcements", url: "/announcements" },
            { text: "Contact", url: "/contact" },
         ];

         // Then we will generate the nav links HTML
         const linksHTML = defaultLinks.reduce((a, c) => {
            a += `<a href="${c.url}" class="template-navbar__link">${c.text}</a>`;
            return a;
         }, "");

         // Finally we will render the Navbar
         const html = `
                     <header class="template-navbar-wrapper" id="custom-navbar">
                           <div onclick="window.CourseTemplate.coreMethods.actions.navigate('Dashboard')" class="template-navbar__logo-link"><img src="${logo}" /></div>
                           <!-- Center: Navigation Links -->
                           <div class="template-navbar__content">
                              <i class="fa-solid fa-xmark template-navbar__content__close" onclick="this.parentElement.classList.remove('active')"></i>
                              <nav class="template-navbar__content__nav-links">${linksHTML}</nav>
                              <div class="template-navbar__content__actions">
                                 <!-- User Avatar -->
                                 <a href="/account?activeTab=Profile" class="template-navbar__content__avatar" id="navbar-avatar">
                                       <!-- Placeholder image, ideally replaced with user's actual avatar -->
                                       <img 
                                          src="${userData?.avatar || "https://i0.wp.com/s3.amazonaws.com/kajabi-storefronts-production/static_assets/default_avatar.jpg?ssl=1"}" 
                                          alt="User Avatar" 
                                          class="template-navbar__content__avatar-img"
                                       />
                                 </a>
                              </div>    
                           </div>
                           <i class="fa-solid fa-bars template-navbar__burgermenu" onclick="this.parentElement.querySelector('.template-navbar__content').classList.add('active')"></i>
                     </header>
                  `;
         if (document.querySelector(".template-navbar-wrapper")) return;
         $container.insertAdjacentHTML("afterbegin", html);
      },
      Sidebar: async ($container = null) => {
         // First we will fetch all necessary data
         const [product, categories] = await Promise.allSettled([
            this.coreMethods.data.fetchProduct(),
            this.coreMethods.data.fetchCategories(),
         ]).then((res) => res.map((e) => e.value));

         // Then we will organize subcategories under their parents
         let allCategories = categories.sort((a, b) =>
            a.sequenceNo > b.sequenceNo ? 1 : -1,
         );
         allCategories.forEach((e) => {
            if (e.parentCategory) {
               e.posts = e.posts.sort((a, b) => (a.sequenceNo > b.sequenceNo ? 1 : -1));
               allCategories.forEach((ca) => {
                  if (ca.id === e.parentCategory) {
                     allCategories = allCategories.filter((fCa) => fCa.id !== e.id);
                     ca.posts.push(e);
                     ca.posts = ca.posts.sort((a, b) =>
                        a.sequenceNo > b.sequenceNo ? 1 : -1,
                     );
                  }
               });
            }
         });

         // Then we will generate the HTML for the sidebar navigation
         const sideBarCategories = allCategories.reduce((a, c, i) => {
            const postsHTML = c?.posts.reduce((cPA, cP) => {
               if (!cP?.posts) {
                  cPA += `
                              <div onclick="window.CourseTemplate.coreMethods.actions.navigate('Post', {postId: '${cP.id}'})" class="template-sidebar__category__item__post">
                                 <svg class="template-sidebar__category__item__post__icon" width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                       <g id="text-lesson-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                          <g class="color-fill" id="Group" transform="translate(7.500000, 7.500000) scale(1, -1) translate(-7.500000, -7.500000) translate(3.000000, 4.000000)" fill="#000000" fill-rule="nonzero">
                                             <rect id="Rectangle-Copy-2" x="0" y="0" width="9" height="1" rx="0.5"></rect>
                                             <rect id="Rectangle-Copy-4" x="0" y="3" width="9" height="1" rx="0.5"></rect>
                                             <rect id="Rectangle-Copy-6" x="0" y="6" width="5" height="1" rx="0.5"></rect>
                                          </g>
                                          <rect class="color-stroke" id="Rectangle" stroke="#000000" fill-rule="nonzero" x="0.5" y="0.5" width="14" height="14" rx="2"></rect>
                                       </g>
                                 </svg>
                                 <p class="template-sidebar__category__item__post__text">${cP.title}</p>
                              </div>
                           `;
               } else {
                  const posts = cP.posts.reduce((cPPA, cPP) => {
                     cPPA += `
                                       <p onclick="window.CourseTemplate.coreMethods.actions.navigate('Post', {postId: '${cPP.id}'})" class="template-sidebar__category__item__post">
                                          <svg class="template-sidebar__category__item__post__icon" width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                             <g id="text-lesson-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                   <g class="color-fill" id="Group" transform="translate(7.500000, 7.500000) scale(1, -1) translate(-7.500000, -7.500000) translate(3.000000, 4.000000)" fill="#000000" fill-rule="nonzero">
                                                      <rect id="Rectangle-Copy-2" x="0" y="0" width="9" height="1" rx="0.5"></rect>
                                                      <rect id="Rectangle-Copy-4" x="0" y="3" width="9" height="1" rx="0.5"></rect>
                                                      <rect id="Rectangle-Copy-6" x="0" y="6" width="5" height="1" rx="0.5"></rect>
                                                   </g>
                                                   <rect class="color-stroke" id="Rectangle" stroke="#000000" fill-rule="nonzero" x="0.5" y="0.5" width="14" height="14" rx="2"></rect>
                                             </g>
                                          </svg>
                                          <p class="template-sidebar__category__item__post__text">${cPP.title}</p>
                                       </p>
                                 `;
                     return cPPA;
                  }, "");
                  cPA += `
                              <div class="template-sidebar__category__item__sub-folder">
                                 <div class="template-sidebar__category__item__sub-folder__title">
                                       <p class="template-sidebar__category__item__sub-folder__title__text">${cP.title}</p>
                                       <a  onclick="window.CourseTemplate.coreMethods.actions.navigate('Category Posts', {categoryId: '${c.id}'})" class="template-sidebar__category__item__sub-folder__title__icon"><i class="fa-regular fa-circle-right"></i></a>
                                 </div>
                                 <div class="template-sidebar-category__item__sub-folder__posts">
                                       ${posts}    
                                 </div>
                              </div>
                              `;
               }
               return cPA;
            }, "");
            a += `
                     <div class="template-sidebar__category__item" data-category-id="${c.id}" data-category-location="${c.locationId}">
                           <div class="template-sidebar__category__item__title">
                              <div class="template-sidebar__category__item__title__content">
                                 <i class="fas fa-angle-right template-sidebar__category__item__title__content__icon"></i>
                                 <p class="template-sidebar__category__item__title__content__title">${c.title}</p>
                              </div>
                              <p  onclick="window.CourseTemplate.coreMethods.actions.navigate('Category Posts', {categoryId: '${c.id}'})" class="template-sidebar__category__item__title__link"><i class="fa-regular fa-circle-right"></i></p>
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
                              <a onclick="window.CourseTemplate.coreMethods.actions.navigate('Dashboard')">
                                 <img class="template-sidebar__logo" src="https://res.cloudinary.com/dpr6hw8uh/image/upload/v1774393003/Meg_Burrage_Saasy_Funnels_Logos_1-Icon_2_z4z0gh.png">    
                              </a>
                              <p onclick="window.CourseTemplate.coreMethods.actions.navigate('Categories')" class='template-sidebar__titles'>Modules</p>
                              <div class="template-sidebar__category">
                                 ${sideBarCategories}    
                              </div>    
                              <p onclick="window.CourseTemplate.coreMethods.actions.navigate('Dashboard')" class="template-sidebar__image">
                                 <img src="${product?.posterImage}" />    
                              </p>
                           </div>
                           <div class="template-sidebar__toggler">
                              <i class="fa-solid fa-angle-right open"></i>
                              <i class="fa-solid fa-xmark close"></i>
                           </div>
                     </div>
                  `;

         // Finally we will inject the sidebar and attach event listeners for interactivity
         if (document.querySelector(".template-sidebar")) return;
         $container.insertAdjacentHTML("afterbegin", html);
         setTimeout(() => {
            document.body.addEventListener("click", (e) => {
               if (
                  e.target.closest(".template-sidebar__category__item__title__content")
               ) {
                  const $categoryItem = e.target.closest(
                     ".template-sidebar__category__item",
                  );
                  const isActive = $categoryItem.classList.contains("active");
                  $categoryItem.classList?.[isActive ? "remove" : "add"]("active");
               }

               if (
                  e.target.closest(".template-sidebar__category__item__sub-folder__title")
               ) {
                  const $subFolder = e.target.closest(
                     ".template-sidebar__category__item__sub-folder",
                  );
                  const isActive = $subFolder.classList.contains("active");
                  $subFolder.classList?.[isActive ? "remove" : "add"]("active");
               }

               if (e.target.closest(".template-sidebar__toggler")) {
                  const isSidebarActive = document
                     .querySelector(".template-sidebar")
                     .classList.contains("active");
                  document
                     .querySelector(".template-sidebar")
                     .classList[isSidebarActive ? "remove" : "add"]("active");
               }
            });
         }, 500);
      },
   };

   // This object holds desktop pages
   pages = {
      "Dashboard": async () => {
         // First we will initialize the page rendering process
         const [root, renderPage] = this.coreMethods.actions.initializePage();

         // Then we will retrieve the necessary data
         const [userData, userProductProgress, productCategories, completedPosts] =
            await Promise.allSettled([
               this.coreMethods.data.fetchUser(),
               this.coreMethods.data.fetchUserProductProgress(),
               this.coreMethods.data.fetchCategories(),
               this.coreMethods.data.fetchCompletedPosts(),
            ]).then((res) => res.map((e) => e.value));

         // Then we will process the categories data
         const categories = productCategories
            ?.filter((cat) => !cat?.parentCategory)
            ?.map((cat) => ({
               thumbnail:
                  cat?.posterImage ||
                  window.templateCustomizationSchema.placeholderThumbnail,
               title: cat.title,
               id: cat.id,
               locationId: cat.location,
               productId: cat.product,
               url: `/courses/products/${cat?.productId}/categories/${cat?.id}`,
            }));

         // Finally we will inject the Dashboard HTML and initialize the navigation components
         const html = `
            <div class='template-container'>
               <div class="dashboard">
                        ${this.widgets["Welcome Banner"](userData?.email, userProductProgress, productCategories, completedPosts, "")}
                        <div class="dashboard__wrapper">
                           ${this.widgets["Community Toggle"]()}
                           ${this.widgets["Hero Banner"]()}
                           <div class="dashboard__categories">
                              <p class="dashboard__categories__title">Categories</p>
                              ${this.widgets["Category Grid"](categories)}      
                           </div>  
                        </div>
               </div>
            </div>
            `;
         renderPage("Dashboard", html);
      },

      "Category Posts": async (params = { categoryId }) => {
         // First we will initialize the page rendering process
         const [root, renderPage] = this.coreMethods.actions.initializePage();

         // Then we will retrieve the necessary data
         const [product, category] = await Promise.allSettled([
            this.coreMethods.data.fetchProduct(),
            this.coreMethods.data.fetchCategory(params?.categoryId),
         ]).then((res) => res.map((e) => e.value));

         // Then we will fetch the category data and prepare the breadcrumbs
         const breadCrumbs = await (async () => {
            const productHTML = `
               <p onclick="window.CourseTemplate.coreMethods.actions.navigate('Dashboard')">
                  ${product.title}
               </p>
            `;
            const categoryHTML = (() => {
               return `
                  <p onclick="window.CourseTemplate.coreMethods.actions.navigate('Category Posts', {categoryId: '${category.category.id}'})">
                     ${category.category.title}
                  </p>
               `;
            })();
            return `
               ${productHTML}/${categoryHTML}
            `;
         })();

         // Then we will helper function to map posts to our data structure
         const generatePosts = (posts = []) => {
            return posts?.map((post) => ({
               id: post.id,
               thumbnail:
                  post?.posterImage ||
                  window.templateCustomizationSchema.placeholderThumbnail,
               title: post.title,
               url: `/courses/products/${post?.productId}/categories/${post?.categoryId}/posts/${post?.id}`,
            }));
         };

         // Then we will build the HTML for subcategories if they exist
         const subCategoriesHTML = category?.category?.subCategories?.reduce((a, c) => {
            const posts = generatePosts(c.posts);
            a += `
               <div class="template-category-post__sub-categories__item">
                  <p class="template-category-post__sub-categories__item__title">${c.title}</p>
                  <div class="template-category-post__sub-categories__item__posts">
                     ${this.widgets["Post Grid"](posts)}      
                  </div>  
               </div>
               `;
            return a;
         }, "");

         // Finally we will render the Category Page HTML
         const html = `
            <p class="template-category-post-title">${category?.category?.title}</p>
            <div class='template-container'>
               <div class="template-category-post">
                  <div class="template-category-post__breadcrumbs">${breadCrumbs}</div>
                  <div class="template-category-post__wrapper">
                        <div class="template-category-post__posts">
                           ${this.widgets["Post Grid"](generatePosts(category?.category?.posts))}      
                        </div>  
                        ${subCategoriesHTML}
                  </div>
               </div>
            </div>
            `;
         renderPage("Category Posts", html);
      },

      "Categories": async () => {
         // First we will initialize the page rendering process
         const [root, renderPage] = this.coreMethods.actions.initializePage();

         // Then we will fetch all categories and filter out subcategories
         const categories = await (async () => {
            const data = await this.coreMethods.data.fetchCategories();
            return data
               .filter((cat) => !cat?.parentCategory)
               ?.map((cat) => ({
                  thumbnail:
                     cat?.posterImage ||
                     window.templateCustomizationSchema.placeholderThumbnail,
                  title: cat.title,
                  url: `/courses/products/${cat?.productId}/categories/${cat?.id}`,
                  id: cat.id,
                  productId: cat.productId,
                  locationId: cat.locationId,
               }));
         })();

         // Finally we will render the Categories List Page
         const html = `
            <p class="template-categories-title">Categories</p>
            <div class='template-container'>
               <div class="template-categories__list">
                     <div class="template-categories__wrapper">
                        ${this.widgets["Category Grid"](categories)}      
                     </div>
               </div>
            </div>
            `;
         renderPage("Categories", html);
      },

      "Post": async (params = { postId }) => {
         // First we will initialize the page rendering process
         const [root, renderPage] = this.coreMethods.actions.initializePage();

         // Then we will fetch all necessary data for the lesson (Post, Category, Completions)
         const [product, completedPosts, currentPost, categories] =
            await Promise.allSettled([
               this.coreMethods.data.fetchProduct(),
               this.coreMethods.data.fetchCompletedPosts(),
               this.coreMethods.data.fetchPost(params.postId),
               this.coreMethods.data.fetchCategories(),
            ]).then((res) => res.map((e) => e.value));

         // Then we will create the bread crumbs
         const breadCrumbs = await (async () => {
            const productHTML = `
               <p onclick="window.CourseTemplate.coreMethods.actions.navigate('Dashboard')">
                  ${product.title}
               </p>
            `;
            const categoryHTML = (() => {
               const category = categories.find((e) => e.id === currentPost.categoryId);
               return `
                  <p onclick="window.CourseTemplate.coreMethods.actions.navigate('Category Posts', {categoryId: '${category.id}'})">
                     ${category.title}
                  </p>
               `;
            })();
            const postHTML = `
               <p onclick="window.CourseTemplate.coreMethods.actions.navigate('Post', {postId: '${currentPost.id}'})">
                  ${currentPost.title}
               </p>
            `;
            return `
               ${productHTML}/${categoryHTML}/${postHTML}
            `;
         })();

         // Then we will build the header HTML including navigation arrows and completion buttons
         const headerHTML = (() => {
            // First we will retrieve all post from category and subcategories
            const allPosts = this.coreMethods.utils.getDeepSequencedPosts(categories);

            // Then we will create the post widgets
            const leftArrowHTML = (() => {
               const currentPostIndex = allPosts.find(
                  (p) => p.id === currentPost.id,
               )?.sequenceNo;
               if (currentPostIndex) {
                  const previousPost = allPosts[currentPostIndex - 1];
                  return `<p class="template-post-page-header__arrow prev" onclick="window.CourseTemplate.coreMethods.actions.navigate('Post', {postId: '${previousPost?.id}'})"><i class="fas fa-arrow-circle-right"></i></p>`;
               }
               return "";
            })();
            const rightArrowHTML = (() => {
               const currentPostIndex = allPosts.find(
                  (p) => p.id === currentPost.id,
               )?.sequenceNo;
               const lastPostIndex = allPosts.slice(-1)[0]?.sequenceNo;
               const canGoToNextPost = currentPostIndex !== lastPostIndex;
               if (canGoToNextPost) {
                  const nextPost = allPosts[currentPostIndex + 1];
                  return `<p class="template-post-page-header__arrow next" onclick="window.CourseTemplate.coreMethods.actions.navigate('Post', {postId: '${nextPost?.id}'})"><i class="fas fa-arrow-circle-right"></i></p>`;
               }
               return "";
            })();
            const downloadsHTML = (() => {
               if (currentPost?.post_materials?.length) {
                  return this.widgets["Download Select"](currentPost?.post_materials);
               }
               return "";
            })();
            const markAsCompleteButton = (() => {
               window.addEventListener("click", async (e) => {
                  if (
                     e.target.classList.contains(
                        "template-post-page-header__mark-as-complete",
                     )
                  ) {
                     const isCompleted =
                        e.target.getAttribute("data-is-completed") === "true";
                     if (!isCompleted) {
                        const reqData =
                           await this.coreMethods.actions.markPostAsCompleteOrIncomplete(
                              currentPost.id,
                              true,
                           );
                        e.target.innerText = "Lesson Done";
                        e.target.setAttribute("data-is-completed", "true");
                        e.target.getAttribute("data-uncomplete-id", reqData?.id);
                     } else {
                        const unCompleteId = e.target.getAttribute("data-uncomplete-id");
                        await this.coreMethods.actions.markPostAsCompleteOrIncomplete(
                           currentPost.id,
                           false,
                        );
                        e.target.innerText = "Complete This Lesson";
                        e.target.setAttribute("data-is-completed", "false");
                     }
                  }
               });
               const postInsideCompletedPost = completedPosts?.find(
                  (e) => e.postId === currentPost.id,
               );
               if (!postInsideCompletedPost) {
                  return `<button class="template-post-page-header__mark-as-complete" data-is-completed='false'>Complete This Lesson</button>`;
               }
               return `<button class="template-post-page-header__mark-as-complete" data-is-completed='true' data-uncomplete-id='${postInsideCompletedPost?.id}'>Lesson Done</button>`;
            })();

            // Finallly we will create the header template
            return `
               <div class="template-post-page-header">
                  ${downloadsHTML}  
                  ${markAsCompleteButton}
                  ${leftArrowHTML}
                  ${rightArrowHTML}  
               </div>
               `;
         })();

         // Then we will render the page and re-attach the scraped elements (video, audio, comments)
         const html = `
            ${headerHTML}
            <div class='template-container'>
               <div class="template-post-page">
                  <div class="template-post-page__breadcrumbs">${breadCrumbs}</div>
                  <div class="template-post-page__wrapper">
                        <p class="template-post-page__title">${currentPost?.title || ""}</p>
                        <div class="template-post-page__media"></div>    
                        <div class="template-post-page__description">${currentPost?.description || ""}</div>  
                        <div class="template-post-page__comments"></div>  
                  </div>
               </div>
            </div>
            `;
         renderPage("Post", html);

         // Then we will append the media player
         const $mediaPostContainer = document.querySelector(".template-post-page__media");
         this.coreMethods.widgets["Post Player"](currentPost, $mediaPostContainer);

         // Finally we will retrieve the comments
         this.coreMethods.utils.extractPostComments({
            productId: currentPost.productId,
            categoryId: currentPost.categoryId,
            postId: currentPost.id,
            locationId: currentPost.locationId,
            iframeContainer: ".bm-theme-root__container__page",
            commentsTarget: ".template-post-page__comments",
            timeout: 30000,
         });
      },
   };

   // This object holds UI component templates
   widgets = {
      "Welcome Banner": (
         name = "User",
         userProductProgress,
         productCategories = [],
         completedPosts = [],
         additionalInlineStyling = "",
      ) => {
         // First we will generate the link and text for the banner button
         const bannerButtonLinkAndText = (() => {
            // First, we initialize the default button variables
            let text = "Let's Start";
            let nextPost = null;

            // Then we will fetch the course categories to organize them into a sorted, flat array of posts.
            const allPosts = (() => {
               // First we will retrieve all of the categories
               let allCategories = productCategories;

               // Then we will sort categories by sequence number
               allCategories = allCategories.sort((a, b) =>
                  a.sequenceNo > b.sequenceNo ? 1 : -1,
               );

               // Then we will nest sub-categories and sort internal posts
               allCategories.forEach((e) => {
                  if (e.parentCategory) {
                     e.posts = e.posts.sort((a, b) =>
                        a.sequenceNo > b.sequenceNo ? 1 : -1,
                     );
                     allCategories.forEach((ca) => {
                        if (ca.id === e.parentCategory) {
                           allCategories = allCategories.filter((fCa) => fCa.id !== e.id);
                           ca.posts.push(e);
                           ca.posts = ca.posts.sort((a, b) =>
                              a.sequenceNo > b.sequenceNo ? 1 : -1,
                           );
                        }
                     });
                  }
               });

               // Then we will flatten the hierarchy into a single searchable list of posts with indexed positions
               let index = 0;
               const allPost = allCategories?.reduce((a, c) => {
                  c?.posts?.forEach((post) => {
                     index++;
                     if (post?.posts) {
                        post?.posts.forEach((subPost) => {
                           subPost.index = index;
                           a.push(subPost);
                        });
                     } else {
                        post.index = index;
                        a.push(post);
                     }
                  });
                  return a;
               }, []);

               // Finally we will return all of the post
               return allPost;
            })();

            // Then, we check the user's progress to determine if we should show "Resume Course" and find the next post in the sequence, or simply start from the beginning.
            if (userProductProgress?.completedPosts >= 1) {
               const lastCompletedPost = allPosts.find(
                  (e) => e.id === completedPosts?.[0]?.postId,
               );
               text = "Resume Course";
               nextPost = allPosts[lastCompletedPost?.index || 0 + 1];
            } else if (userProductProgress?.progress === 100) {
               text = "Course Completed";
            } else {
               nextPost = allPosts[0];
            }

            // Finally, we return the button object containing the display text and the constructed URL path for the next lesson.
            return {
               text,
               nextPostId: nextPost.id,
            };
         })();

         // Then we will generate the html
         const html = `
                     <div class="template-welcome" ${additionalInlineStyling ? `style='${additionalInlineStyling}'` : ""}>
                           <div class="template-welcome__left">
                              <p class="template-welcome__greeting">Welcome back, ${name}</p>
                              <p class="template-welcome__progress">
                                 <i class="fa-solid fa-desktop template-welcome__progress-icon"></i>
                                 <span>${userProductProgress?.progress || 0}% COMPLETE</span>
                              </p>
                           </div>
                           <button 
                              ${
                                 userProductProgress?.progress !== 100
                                    ? `onclick="window.CourseTemplate.coreMethods.actions.navigate('Post', {postId: '${bannerButtonLinkAndText.nextPostId}'})"`
                                    : ""
                              }
                              class="template-welcome__button">${bannerButtonLinkAndText.text}
                           </button>    
                     </div>
                  `;

         // Finally we will return the html
         return html;
      },
      "Hero Banner": (
         title = "Welcome to Template",
         subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         paragraphHTML = "",
         embedHTML = "",
         additionalInlineStyling = "",
      ) => {
         const defaultEmbed = `<iframe width="560" height="315" src="https://www.youtube.com/embed/-KtdCRntB5I?si=ZMcV0CeJScDXSxwS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
         const defaultParagraph = `
                     <p>
                           <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius non neque ullamcorper rutrum. Integer et malesuada metus. Nulla facilisi. Integer non commodo justo. Nam sed urna sit amet orci placerat vehicula. Nulla quis molestie mauris. Suspendisse mi est, ultrices at scelerisque nec, efficitur in leo. Cras at ultrices justo, ut sollicitudin nisi.</strong><br/>
                           Ut interdum erat nec lectus euismod sagittis. Nulla semper, massa sed cursus vulputate, nisl sapien placerat diam, ut fermentum turpis sapien sit amet est. Phasellus convallis laoreet congue. Donec congue lobortis ex pellentesque malesuada. Maecenas mattis quis dui a malesuada. Morbi nec laoreet velit, id consequat leo. Maecenas nisi ex, iaculis at enim nec, bibendum vehicula lacus. Donec quis felis nisi. Aliquam cursus enim sit amet consequat eleifend. Aliquam eu sapien sapien. Morbi mollis nisl tellus, vitae bibendum dui interdum et. Vivamus accumsan diam vitae laoreet interdum.    
                     </p>
                  `;
         const html = `
                     <div class="template-hero" ${additionalInlineStyling ? `style='${additionalInlineStyling}'` : ""}>
                           <!-- Left Column: Text Content -->
                           <div class="template-hero__left">
                              <h1 class="template-hero__title" id="hero-title">${title}</h1>
                              <span class="template-hero__subtitle" id="hero-subtitle">[${subtitle}]</span>
                              ${paragraphHTML || defaultParagraph}
                           </div>
                           <!-- Right Column: Video Embed -->
                           <div class="template-hero__right" style="padding-bottom;">
                              <!-- Add the iframe embed code from your video hosting platform - e.g. YouTube -->
                              ${defaultEmbed || embedHTML} 
                           </div>
                     </div>
                  `;
         return html;
      },
      "Category Grid": (categories = []) => {
         // First we will check if the assed categories is valid and is not empty, if it does then we will return a error html
         if (!categories || categories.length === 0) {
            return '<p class="text-center text-gray-500">No categories found to display.</p>';
         }

         // Then we will generate the category cards
         const categoryCards = categories.reduce((a, c) => {
            a += `
                           <div onclick="window.CourseTemplate.coreMethods.actions.navigate('Category Posts', {categoryId: '${c.id}'})" class="template-categories__card">
                              <img 
                                 src="${c.thumbnail || window.templateCustomizationSchema.placeholderThumbnail}" 
                                 alt="Thumbnail for ${c.title}" 
                                 class="template-categories__thumbnail"
                                 loading="lazy"
                                 onerror="this.onerror=null; this.src='${window.templateCustomizationSchema.placeholderThumbnail}';"
                              />
                              <div class="template-categories__info">
                                 <h5 class="template-categories__title-text">${c.title}</h5>
                              </div>
                           </div>
                     `;
            return a;
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
      "Post Grid": (posts = []) => {
         // First we will check if the assed post is valid and is not empty, if it does then we will return a error html
         if (!posts || posts?.length === 0) {
            return '<p class="text-center text-gray-500">No posts found to display.</p>';
         }

         // Then we will generate the category cards
         const postCards = posts?.reduce((a, c) => {
            a += `
                           <div onclick="window.CourseTemplate.coreMethods.actions.navigate('Post', {postId: '${c.id}'})" class="template-post__card">
                              <img 
                                 src="${c.thumbnail ? `https://cdn.courses.apisystem.tech/${c.thumbnail}` : null || window.templateCustomizationSchema.placeholderThumbnail}" 
                                 alt="Thumbnail for ${c.title}" 
                                 class="template-post__thumbnail"
                                 loading="lazy"
                                 onerror="this.onerror=null; this.src='${window.templateCustomizationSchema.placeholderThumbnail}';"
                              />
                              <div class="template-post__info">
                                 <h3 class="template-post__title-text">${c.title}</h3>
                              </div>
                           </div>
                     `;
            return a;
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
      "Community Toggle": (
         buttonText = "Ask the Community",
         activeButtonText = "Hide Community Forum",
         embedHTML = "",
      ) => {
         const html = `
                     <div class="template-community-container">
                           <div class="template-community-toggle">
                              <button 
                                 class="template-community-toggle__button" 
                                 id="community-toggle-button"
                                 data-default-text="${buttonText}"
                                 data-active-text="${activeButtonText}"
                                 onclick="
                                    const container = this.closest('.template-community-container');
                                    container.classList.toggle('active');
                                    this.innerText = container.classList.contains('active')
                                       ? this.dataset.activeText
                                       : this.dataset.defaultText;
                                 "
                              >
                                 ${buttonText}
                              </button>
                           </div>
                     
                           <!-- This is the container that will be toggled by JavaScript -->
                           <div class="template-community-embed" id="community-embed-area">
                              ${embedHTML || `<iframe src="/communities"></iframe>`}
                           </div>
                     </div>
                  `;
         return html;
      },
      "Download Select": (
         items = [
            {
               url: "Test",
               title: "Test",
            },
         ],
      ) => {
         const assetsHTML = items?.reduce((a, c) => {
            a += `
                  <li class="template-downloads__item">
                        <a href="https://cdn.courses.apisystem.tech${c.url}" download>
                              <i class="fas fa-file-code"></i>
                              ${c.title}
                        </a>
                  </li>`;
            return a;
         }, "");
         return `
                  <div id="custom-download" class="template-downloads ${!items?.length ? "disabled" : ""}">
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
      },
      "Category With Dropdown Post": (
         title = "Syllabus",
         categories = [],
         completedPosts = [],
         categoryProgress = [],
      ) => {
         // First we will create the necessary variables
         let fallbackImage = window.templateCustomizationSchema.placeholderThumbnail;

         // Then we will add a boolean to each category if it is completed
         categories.forEach((category) => {
            const progress = categoryProgress?.error ? [] : categoryProgress || [];
            const currentCategoryProgress = (progress || [])?.find(
               (e) => e.categoryId === category.id,
            );
            category.isCompleted = currentCategoryProgress?.progress === 100;
         });

         categories.forEach((category) => {
            category.posts.forEach((post) => {
               const isCompleted = completedPosts.some((e) => e.postId === post.id);
               post.isCompleted = isCompleted;
            });
         });

         // Then we will organize subcategories under their parents
         let allCategories = categories.sort((a, b) =>
            a.sequenceNo > b.sequenceNo ? 1 : -1,
         );
         allCategories.forEach((e) => {
            if (e.parentCategory) {
               e.posts = e.posts.sort((a, b) => (a.sequenceNo > b.sequenceNo ? 1 : -1));
               allCategories.forEach((ca) => {
                  if (ca.id === e.parentCategory) {
                     allCategories = allCategories.filter((fCa) => fCa.id !== e.id);
                     ca.posts.push(e);
                     ca.posts = ca.posts.sort((a, b) =>
                        a.sequenceNo > b.sequenceNo ? 1 : -1,
                     );
                  }
               });
            }
         });

         // Then we will generate the categories html
         const categoriesHTML = allCategories.reduce((a, c) => {
            const postsHTML = c?.posts.reduce((cPA, cP) => {
               const image = cP?.posterImage
                  ? `https://cdn.courses.apisystem.tech${cP.posterImage}`
                  : fallbackImage;
               if (!cP?.posts) {
                  cPA += `
                              <a class="template-cwd__category__item__post" href="/courses/products/${cP.productId}/categories/${cP.categoryId}/posts/${cP.id}?source=courses">
                                 <img class="template-cwd__category__item__post__icon" src="${image}" />
                                    <div>
                                    <p class="template-cwd__category__item__post__text">${cP.title}</p>
                                       <div style="display: flex; align-items: center; gap: 5px;">
                                          <i class="template-cwd__category__item__post__completed ${!cP.isCompleted ? "fa-regular fa-circle" : "fa-solid fa-circle-check"}"></i>
                                          <p class="template-cwd__category__item__post__title">Lesson</p>
                                       </div>
                                    </div>
                              </a>
                           `;
               } else {
                  const posts = cP.posts.reduce((cPPA, cPP) => {
                     const image = cPP?.posterImage
                        ? `https://cdn.courses.apisystem.tech${cPP.posterImage}`
                        : fallbackImage;
                     cPPA += `
                                       <a href="/courses/products/${cPP.productId}/categories/${cPP.categoryId}/posts/${cPP.id}?source=courses" class="template-cwd__category__item__post">
                                          <img src="${image}" class="template-cwd__category__item__post__icon" />
                                          <div>
                                             <p class="template-cwd__category__item__post__text">${cPP.title}</p>
                                             <div style="display: flex; align-items: center; gap: 5px;">
                                                <i class="template-cwd__category__item__post__completed ${!cPP.isCompleted ? "fa-regular fa-circle" : "fa-solid fa-circle-check"}"></i>
                                                <p class="template-cwd__category__item__post__title">Lesson</p>
                                             </div>
                                          </div>
                                       </a>
                                 `;
                     return cPPA;
                  }, "");
                  cPA += `
                              <div class="template-cwd__category__item__sub-folder">
                                    <div class="template-cwd__category__item__sub-folder__title">
                                       <div>
                                          <img class="template-cwd__category__item__sub-folder__title__image" src="${image}" />
                                          <div class="template-cwd__category__item__sub-folder__title__details">
                                             <p class="template-cwd__category__item__sub-folder__title__details__name">${cP.title}</p>
                                             <div style="display: flex; align-items: center; gap: 5px;">
                                                <i class="template-cwd__category__item__sub-folder__title__details__completed ${!cP?.posts?.every((e) => e?.isCompleted) ? "fa-regular fa-circle" : "fa-solid fa-circle-check"}"></i>
                                                <p class="template-cwd__category__item__sub-folder__title__details__title">Category</p>
                                             </div>
                                          </div>
                                       </div>
                                       <i class="fas fa-angle-right template-cwd__category__item__sub-folder__title__icon"></i>
                                 </div>
                                 <div class="template-cwd-category__item__sub-folder__posts">
                                       ${posts}    
                                 </div>
                              </div>
                              `;
               }
               return cPA;
            }, "");
            a += `
                     <div class="template-cwd__category__item" data-category-id="${c.id}" data-category-location="${c.locationId}">
                           <div class="template-cwd__category__item__title">
                                 <div class="template-cwd__category__item__title__content">
                                    <img class="template-cwd__category__item__title__content__image" src="${c?.posterImage || fallbackImage}" />
                                    <div class="template-cwd__category__item__title__content__details">
                                       <p class="template-cwd__category__item__title__content__details__title">${c.title}</p>
                                       <div style="display: flex; align-items: center; gap: 5px;">
                                          <i class="template-cwd__category__item__title__content__details__completed ${!c.isCompleted ? "fa-regular fa-circle" : "fa-solid fa-circle-check"}"></i>
                                          <p class="template-cwd__category__item__title__content__details__posts">${c?.posts?.length} Lessons</p>
                                       </div>
                                    </div>
                                 </div>
                                 <i class="fas fa-angle-right template-cwd__category__item__title__content__icon"></i>
                           </div>
                           <div class="template-cwd__category__item__content">
                              ${postsHTML}     
                           </div>       
                     </div>
                     `;
            return a;
         }, "");

         // Then we will create full html structure
         const html = `
               <div class="template-cwd">
                  <p class="template-cwd__title" style="display: ${title ? "block" : "none"}">${title}<p>
                  <div class="template-cwd__content">${categoriesHTML}</div>
               </div>
            `;

         // Then we will create the click listener for the dropdowns and post navigation
         setTimeout(() => {
            document.body.addEventListener("click", (e) => {
               if (e.target.closest(".template-cwd__category__item__title")) {
                  const $categoryItem = e.target.closest(".template-cwd__category__item");
                  const isActive = $categoryItem.classList.contains("active");
                  $categoryItem.classList?.[isActive ? "remove" : "add"]("active");
               }

               if (e.target.closest(".template-cwd__category__item__sub-folder__title")) {
                  const $subFolder = e.target.closest(
                     ".template-cwd__category__item__sub-folder",
                  );
                  const isActive = $subFolder.classList.contains("active");
                  $subFolder.classList?.[isActive ? "remove" : "add"]("active");
               }
            });
         }, 500);

         // Finally we will return the html
         return html;
      },
   };
}

if (!window.CourseTemplate) {
   window.CourseTemplate = new CourseTemplate();
}
