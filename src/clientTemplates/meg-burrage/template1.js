window.templateCustomizationSchema = {
   name: "Production",
   id: "template-3",
   customCss:
      "@font-face { font-family: 'Ogg'; src: url('https://res.cloudinary.com/dpr6hw8uh/raw/upload/v1659948521/Ogg-Roman_vloao9.otf') format('opentype'); font-weight: normal; font-style: normal; font-display: swap; }",
   customFonts: ["Ogg"],
   googleFontsUsed: ["Lavishly Yours", "Playfair Display", "Quicksand"],
   placeholderThumbnail:
      "https://res.cloudinary.com/dpr6hw8uh/image/upload/v1771635525/image7_w940ot.png",
   global: [
      {
         name: "Loading Overlay",
         showOnMobileEditor: true,
         customizations: [
            {
               elementSelector: ".template-loader-overlay",
               label: "Container",
               key: "loading-overlay-container",
               cssCustomizations: [
                  {
                     name: "Display",
                     property: "display",
                     type: "select",
                     options: ["flex", "none"],
                     important: true,
                     value: "none",
                  },
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
                     name: "Padding",
                     property: "padding",
                     type: "multi",
                     value: "",
                  },
                  {
                     name: "Background Image",
                     property: "background-image",
                     placeholder: "E.g: https://www.sampleimage.com",
                     type: "text",
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
                  {
                     name: "Margin",
                     property: "margin",
                     type: "multi",
                     placeholder: "10px 10px 10px 10px",
                     value: "",
                  },
                  {
                     name: "Padding",
                     property: "padding",
                     type: "multi",
                     placeholder: "10px 10px 10px 10px",
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
               elementSelector: ".template-navbar__content__nav-links",
               label: "Menu",
               key: "template-navbar-nab-links-wrapper",
               cssCustomizations: [
                  {
                     name: "Padding",
                     property: "padding",
                     type: "multi",
                     placeholder: "50px 75px",
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
                           placeholder: "Pilates",
                           value: "Pilates",
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
                        }
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
                  {
                     name: "Padding",
                     property: "padding",
                     type: "multi",
                     placeholder: "10px 10px 10px 10px",
                     value: "",
                  },
                  {
                     name: "Margin",
                     property: "margin",
                     type: "multi",
                     placeholder: "10px 10px 10px 10px",
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
                  {
                     name: "Padding",
                     property: "padding",
                     type: "multi",
                     placeholder: "10px 10px 10px 10px",
                     value: "",
                  },
                  {
                     name: "Margin",
                     property: "margin",
                     type: "multi",
                     placeholder: "10px 10px 10px 10px",
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
                  {
                     name: "Padding",
                     property: "padding",
                     type: "multi",
                     value: "",
                  },
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
                     name: "Content",
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
                  {
                     name: "Size",
                     property: "font-size",
                     placeholder: "E.g: 20px",
                     type: "text",
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
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
                     value: "",
                  },
                  {
                     name: "Margin",
                     property: "margin",
                     type: "multi",
                     placeholder: "",
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
                     name: "Font Size",
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
                     name: "Content Embed",
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
                  {
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
               ],
               elementCustomizations: [
                  {
                     name: "Content",
                     type: "html",
                     target: "",
                     value: "",
                  },
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
                  {
                     name: "Font Size",
                     property: "font-size",
                     type: "text",
                     placeholder: "E.g: 20px",
                     value: "",
                  },
               ],
            },
         ],
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
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
                  },
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
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
         urlRegex: "/courses/products/[^/]+/categories/?(\\?.*)?$",
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
                  },
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
                  {
                     name: "Font Size",
                     property: "font-size",
                     type: "text",
                     placeholder: "E.g: 20px",
                     value: "",
                  },
               ],
            },
         ],
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
                     important: true,
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
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
                     name: "Font Size",
                     property: "font-size",
                     type: "text",
                     placeholder: "E.g: 20px",
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
   mobilePages: [
      {
         name: "Main",
         urlRegex: "/courses/products/[^/]+/categories(\\?.*)?$",
         editor: [
            {
               elementSelector: ".template-hero__image",
               label: "Hero Image",
               key: "template-hero-image",
               cssCustomizations: [
                  {
                     name: "Width",
                     property: "height",
                     type: "text",
                     placeholder: "E.g: 400px",
                     value: "",
                  },
                  {
                     name: "Minimum Hight",
                     property: "min-height",
                     type: "text",
                     placeholder: "E.g: 400px",
                     value: "",
                  },
                  {
                     name: "Padding",
                     property: "padding",
                     type: "multi",
                     value: "",
                  },
                  {
                     name: "Background Color",
                     property: "background-color",
                     type: "color",
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
               elementSelector: ".template-container",
               label: "Template Container",
               key: "template-container",
               cssCustomizations: [
                  {
                     name: "Background Color",
                     property: "background-color",
                     type: "color",
                     value: "",
                     important: true,
                  },
                  {
                     name: "Padding",
                     property: "padding",
                     type: "multi",
                     placeholder: "",
                     important: true,
                     value: "",
                  },
               ],
            },
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
                     name: "Font Size",
                     property: "font-size",
                     type: "text",
                     placeholder: "E.g: 20px",
                     value: "",
                  },
                  {
                     name: "Margin",
                     property: "margin",
                     type: "multi",
                     placeholder: "",
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
                     name: "Font Size",
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
                           document.querySelector('.template-hero__right').innerHTML =  '<video style="width: 100%;height: 100%;object-fit: cover; background-color: red;" src="{{template-hero-right-video-url}}" playsinline="" controls="" poster="{{template-hero-right-video-thumbnail}}"></video>'; 
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
               elementSelector: ".template-cwd",
               label: "CWD",
               key: "template-cwd",
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
            },
            {
               elementSelector: ".template-cwd__title",
               label: "CWD Title",
               key: "template-cwd-title",
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
                     name: "Font Size",
                     property: "font-size",
                     type: "text",
                     placeholder: "",
                     value: "",
                  },
               ],
            },
            {
               elementSelector: ".template-cwd__category__item__title",
               label: "CWD Category Item",
               key: "template-cwd-category-item-title",
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
            },
            {
               elementSelector: ".template-cwd__category__item__title__content__image",
               label: "CWD Category Item Image",
               key: "template-cwd-category-item-title-content-image",
               cssCustomizations: [
                  {
                     name: "Border Color",
                     property: "border-color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
                  {
                     name: "Border Width",
                     property: "border-width",
                     type: "text",
                     placeholder: "",
                     value: "",
                  },
               ],
            },
            {
               elementSelector:
                  ".template-cwd__category__item__title__content__details__title",
               label: "CWD Category Item Title",
               key: "template-cwd-category-item-title-content-details-title",
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
                     name: "Font Size",
                     property: "font-size",
                     type: "text",
                     placeholder: "E.g: 20px",
                     placeholder: "",
                     value: "",
                  },
               ],
            },
            {
               elementSelector:
                  ".template-cwd__category__item__title__content__details__completed",
               label: "CWD Category Item Icon Detail",
               key: "template-cwd-category-item-title-content-details-completed",
               cssCustomizations: [
                  {
                     name: "Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                     important: true,
                  },
               ],
            },
            {
               elementSelector:
                  ".template-cwd__category__item__title__content__details__posts",
               label: "CWD Category Item Detail",
               key: "template-cwd-category-item-title-content-details-posts",
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
                     name: "Font Size",
                     property: "font-size",
                     type: "text",
                     placeholder: "E.g: 20px",
                     placeholder: "",
                     value: "",
                  },
               ],
            },
            {
               elementSelector: ".template-cwd__category__item__title__content__icon",
               label: "CWD Category Item Arrow Icon",
               key: "template-cwd-category-item-title-content-icon",
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
                     placeholder: "",
                     value: "",
                  },
               ],
            },
            {
               elementSelector: ".template-cwd__category__item__post__icon",
               label: "CWD Post Item Image",
               key: "template-cwd-category-item-post-icon",
               cssCustomizations: [
                  {
                     name: "Border Color",
                     property: "border-color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
                  {
                     name: "Border Width",
                     property: "border-width",
                     type: "text",
                     placeholder: "",
                     value: "",
                  },
               ],
            },
            {
               elementSelector: ".template-cwd__category__item__post__text",
               label: "CWD Post Item Title",
               key: "template-cwd-category-item-post-text",
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
                     name: "Font Size",
                     property: "font-size",
                     type: "text",
                     placeholder: "E.g: 20px",
                     placeholder: "",
                     value: "",
                  },
               ],
            },
            {
               elementSelector: ".template-cwd__category__item__post__completed",
               label: "CWD Post Item Icon Detail",
               key: "template-cwd-category-item-post-completed",
               cssCustomizations: [
                  {
                     name: "Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                     important: true,
                  },
               ],
            },
            {
               elementSelector: ".template-cwd__category__item__post__title",
               label: "CWD Post Item Detail",
               key: "template-cwd-category-item-post-title",
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
                     name: "Font Size",
                     property: "font-size",
                     type: "text",
                     placeholder: "E.g: 20px",
                     placeholder: "",
                     value: "",
                  },
               ],
            },
            {
               elementSelector: ".template-cwd__category__item__sub-folder__title__image",
               label: "CWD Subfolder Item Image",
               key: "template-cwd-category-item-sub-folder-title-image",
               cssCustomizations: [
                  {
                     name: "Border Color",
                     property: "border-color",
                     type: "color",
                     placeholder: "",
                     value: "",
                  },
                  {
                     name: "Border Width",
                     property: "border-width",
                     type: "text",
                     placeholder: "",
                     value: "",
                  },
               ],
            },
            {
               elementSelector:
                  ".template-cwd__category__item__sub-folder__title__details__name",
               label: "CWD Subfolder Item Title",
               key: "template-cwd-category-item-sub-folder-title-details-name",
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
                     name: "Font Size",
                     property: "font-size",
                     type: "text",
                     placeholder: "E.g: 20px",
                     placeholder: "",
                     value: "",
                  },
               ],
            },
            {
               elementSelector:
                  ".template-cwd__category__item__sub-folder__title__details__completed",
               label: "CWD Subfolder Item Icon Detail",
               key: "template-cwd-category-item-sub-folder-title-details-completed",
               cssCustomizations: [
                  {
                     name: "Color",
                     property: "color",
                     type: "color",
                     placeholder: "",
                     value: "",
                     important: true,
                  },
               ],
            },
            {
               elementSelector:
                  ".template-cwd__category__item__sub-folder__title__details__title",
               label: "CWD Subfolder Item Detail",
               key: "template-cwd-category-item-sub-folder-title-details-title",
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
                     name: "Font Size",
                     property: "font-size",
                     type: "text",
                     placeholder: "E.g: 20px",
                     placeholder: "",
                     value: "",
                  },
               ],
            },
            {
               elementSelector: ".template-cwd__category__item__sub-folder__title__icon",
               label: "CWD Subfolder Item Arrow Icon",
               key: "template-cwd__category__item__sub-folder__title__icon",
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
                     placeholder: "",
                     value: "",
                  },
               ],
            },
         ],
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
                  },
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
                     name: "Font Size",
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
                     name: "Font Family",
                     property: "font-family",
                     type: "font",
                     important: true,
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
                     name: "Font Size",
                     property: "font-size",
                     type: "text",
                     placeholder: "E.g: 20px",
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
      this.isMobile = window.matchMedia("(max-width: 768px)").matches;
      this.init();
   }

   // This method initialize the script
   init = async () => {
      this?.[this.isMobile ? "mobileInitializers" : "desktopInitializers"]?.init();
      this?.globalInitializers.initStyles();
      this?.widgets.initStyles();
   };

   // This object holds global related initializers
   globalInitializers = {
      initStyles: () => {
         // !Note: Use https://unminify.com/ to uncompress the styles, and use https://www.textfixer.com/html/compress-html-compression.php to compress again
         const styles = `<style id="template-global-styles">*:not(strong):not(em) { font-family: "Quicksand", sans-serif; } /* Sidebar */ .template-sidebar { position: fixed; height: 100vh; left: -290px; z-index: 999999; transition-duration: 0.5s; } .template-sidebar.active { left: 0; transition-duration: 0.5s; } .template-sidebar__content { width: 290px; top: 0; max-width: 290px; background: #e0c5ba; box-shadow: 2px 0 5px 0 rgba(0, 0, 0, 0.05); overflow-y: auto; height: 100vh; align-self: flex-start; } .template-sidebar__back-button { display: flex; align-items: center; gap: 7px; padding: 25px 30px 0px; color: black; } .template-sidebar__back-button__icon { padding-bottom: 1px; color: #000000; } .template-sidebar__back-button__text { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; color: #000000; } .template-sidebar__logo { margin: auto; padding-inline: 30px; padding-block: 30px; min-width: 252px; } .template-sidebar__titles { font-size: 16px; color: #000000; font-weight: 700; padding: 5px 7px 5px 10px; cursor: pointer; background-color: transparent; border-bottom: solid #f6ebe7; border-top: solid #f6ebe7; line-height: 22.4px; } .template-sidebar__category { } .template-sidebar__category__item { } .template-sidebar__category__item__title { color: #000000; font-weight: 400; margin-top: 0px; margin-bottom: 0px; padding: 5px 10px; cursor: pointer; background-color: #e1c4ba4d; border-bottom: solid #f6ebe7; display: flex; align-items: flex-start; justify-content: space-between; cursor: pointer; border-bottom-style: solid; } .template-sidebar__category__item__title__content { display: flex; align-items: flex-start; } .template-sidebar__category__item__title__content__icon { font-size: 16px; transition-duration: 0.5s; } .template-sidebar__category__item.active .template-sidebar__category__item__title__content__icon { transform: rotate(90deg); transition-duration: 0.5s; } .template-sidebar__category__item__title__content__title { font-size: 16px; font-weight: 600; line-height: 22.4px; margin-left: 10px; color: #000000; } .template-sidebar__category__item__title__link i { font-size: 16px; padding-top: 3px; } .template-sidebar__category__item.active .template-sidebar__category__item__content { display: block; } .template-sidebar__category__item__content { display: none; } .template-sidebar__category__item__post { display: flex; gap: 10px; align-items: flex-start; cursor: pointer; margin: 5px 20px 5px 25px; } .template-sidebar__category__item__post__icon { width: 15px; height: 15px; padding-top: 3px; } .template-sidebar__category__item__post__text { color: #000000; display: block; font-size: 15px; line-height: 21px; padding-bottom: 3px; } .template-sidebar__category__item__sub-folder { margin-block: 5px; } .template-sidebar__category__item__sub-folder__title { display: flex; align-items: center; cursor: pointer; width: 100%; justify-content: space-between; padding-left: 20px; padding-right: 10px; } .template-sidebar__category__item__sub-folder__title__icon { font-weight: 900; font-size: 16px; color: #000000; } .template-sidebar__category__item__sub-folder__title__text { font-size: 15px; line-height: 21px; color: #000000; font-weight: 700; padding: 4px 12px 0px 0px; } .template-sidebar__category__item__sub-folder.active .template-sidebar-category__item__sub-folder__posts { display: block; } .template-sidebar-category__item__sub-folder__posts { padding-left: 2px; display: none; } .template-sidebar__image { display: block; border-radius: 0px; box-shadow: 0 5px 10px 0 rgb(0 0 0 / 5%); background: #f6ebe7; padding: 20px; } .template-sidebar__image img { border-radius: 8px; } .template-sidebar__toggler { padding-inline: 6px; background-color: #d29a89; position: absolute; top: 0; right: -40px; display: flex; align-items: center; justify-content: center; flex-direction: column; cursor: pointer; transition: all 0.2s ease-in-out; width: 40px; height: 100vh; } .template-sidebar__toggler:hover { transition: all 0.2s ease-in-out; } .template-sidebar__toggler i { color: #f6ebe7; font-size: 20px; font-family: var(--_fa-family) !important; } .template-sidebar__toggler i.close { display: none; } .template-sidebar.active .template-sidebar__toggler .close { display: block; } .template-sidebar.active .template-sidebar__toggler .open { display: none; } /* Navbar */ .template-navbar-wrapper { background-image: url(https://res.cloudinary.com/dpr6hw8uh/image/upload/v1774399175/About_Section_Background_Image_page-0001_1_ldcjft.jpg); background-size: cover; background-position: center; position: relative; display: flex; align-items: center; justify-content: space-between; padding-block: 30px; padding-inline: 15px; } .template-navbar-wrapper * { z-index: 1; position: relative; } .template-navbar-wrapper::before { content: ""; position: absolute; width: 100%; height: 100%; background-color: #f6ebe7c9; left: 0; top: 0; z-index: 0; } .template-navbar__logo-link img { margin-left: 50px; max-height: 100px; } .template-navbar__content { display: flex; align-items: center; gap: 18px; } .template-navbar__content__close { display: none; } .template-navbar__content__nav-links { display: flex; align-items: center; gap: 20px; } .template-navbar__content__nav-links a { font-size: 18px; line-height: 100px; font-weight: 400; color: #000000; } .template-navbar__content__avatar-img { height: 40px; margin-right: 20px; border-radius: 50%; } .template-navbar__burgermenu { display: none; } @media (max-width: 1024px) { html { overflow: unset !important; } /* Navbar */ .template-navbar-wrapper { padding: 13px 10px; } .template-navbar__logo-link { } .template-navbar__logo-link img { margin: 0; height: 50px; } .template-navbar__burgermenu { display: block; font-family: var(--_fa-family) !important; color: #000000; font-size: 25px; } .template-navbar__content { position: fixed; width: 95%; height: 100vh; top: 0; left: -100%; z-index: 999999999999999; background-color: #f6ebe7; flex-direction: column-reverse; overflow-y: scroll; align-items: flex-start; padding: 40px 20px 20px; justify-content: flex-end; transition-duration: 0.5s; } .template-navbar__content.active { left: 0; box-shadow: 0px 0px 0px 100vw #00000054; transition-duration: 0.5s; } .template-navbar__content__close { display: block; font-family: var(--_fa-family) !important; color: black; font-size: 25px; position: absolute; top: 15px; right: 15px; z-index: 9999; } .template-navbar__content__nav-links { flex-direction: column; align-items: flex-start; margin-top: 13px; gap: 15px; } .template-navbar__content__nav-links a { font-size: 18px; line-height: 25px; } /* Sidebar */ .template-sidebar.active::before { content: ""; position: fixed; background-color: #00000066; width: 100vw; height: 100vh; left: 0; } .template-sidebar__content { z-index: 1; position: relative; } .template-sidebar__toggler { width: 30px; height: 45px; right: -30px; margin-block: auto; bottom: 0; } .template-sidebar.active .template-sidebar__toggler::before { content: ""; position: absolute; width: 5px; background-color: inherit; height: 100vh; left: 0; z-index: 1; } .template-sidebar__toggler i { font-size: 13px; } }</style>`;
         document.body.insertAdjacentHTML("afterbegin", styles);
      },
      initNavBar: async ($container = null) => {
         // First we will fetch the necessary data
         const [userData, product] = await Promise.allSettled([
            this.data.fetchUser(),
            this.data.fetchProduct(),
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
                        <a href="/courses/products/${product.id}" class="template-navbar__logo-link"><img src="${logo}" /></a>
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
         (
            $container || document.querySelector(".product-container, #app-container")
         ).insertAdjacentHTML("afterbegin", html);
      },
      initSidebar: async ($container = null) => {
         // First we will fetch all necessary data
         const [product, categories] = await Promise.allSettled([
            this.data.fetchProduct(),
            this.data.fetchCategories(),
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
                            <a href="${`/courses/products/${cP?.productId}/categories/${cP?.categoryId}/posts/${cP?.id}`}" class="template-sidebar__category__item__post">
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
                            </a>
                        `;
               } else {
                  const posts = cP.posts.reduce((cPPA, cPP) => {
                     cPPA += `
                                    <a href="${`/courses/products/${cPP?.productId}/categories/${cPP?.categoryId}/posts/${cPP?.id}`}" class="template-sidebar__category__item__post">
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
                                    </a>
                                `;
                     return cPPA;
                  }, "");
                  cPA += `
                            <div class="template-sidebar__category__item__sub-folder">
                                <div class="template-sidebar__category__item__sub-folder__title">
                                    <p class="template-sidebar__category__item__sub-folder__title__text">${cP.title}</p>
                                    <a  style="display: ${this.isMobile ? "none" : "flex"}" href="/courses/products/${cP?.productId}/categories/${cP?.id}" class="template-sidebar__category__item__sub-folder__title__icon"><i class="fa-regular fa-circle-right"></i></a>
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
                            <a  style="display: ${this.isMobile ? "none" : "flex"}" href="/courses/products/${c?.productId}/categories/${c?.id}" class="template-sidebar__category__item__title__link"><i class="fa-regular fa-circle-right"></i></a>
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
                                <img class="template-sidebar__logo" src="https://res.cloudinary.com/dpr6hw8uh/image/upload/v1774393003/Meg_Burrage_Saasy_Funnels_Logos_1-Icon_2_z4z0gh.png">    
                            </a>
                            <p class='template-sidebar__titles'>Modules</p>
                            <div class="template-sidebar__category">
                                ${sideBarCategories}    
                            </div>    
                            <a class="template-sidebar__image" href="#">
                                <img src="${product?.posterImage}" />    
                            </a>
                        </div>
                        <div class="template-sidebar__toggler">
                            <i class="fa-solid fa-angle-right open"></i>
                            <i class="fa-solid fa-xmark close"></i>
                        </div>
                    </div>
                `;

         // Finally we will inject the sidebar and attach event listeners for interactivity
         ($container || document.querySelector(".product-container")).insertAdjacentHTML(
            "beforebegin",
            html,
         );
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
      initLoading: (shouldShow = true) => {
         // First we will generate the css
         const css = `
                    <style id="loader-styles">
                        .template-loader {
                           display: none;
                        }

                        .template-loader.active {
                           display: block !important;
                        }
                           
                        .template-loader-overlay {
                            position: fixed;
                            top: 0; 
                            left: 0; 
                            display: flex;
                            width: 100vw; 
                            height: 100vh;
                            background-color: #ffffff;
                            z-index: 2147483647;
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
                        <img src="https://res.cloudinary.com/dpr6hw8uh/image/upload/v1774393003/Meg_Burrage_Saasy_Funnels_Logos_1-Icon_2_z4z0gh.png" class="template-loader-overlay__logo" alt="Loading..." />
                    </div>
                `;

         // Then we will inject the css and js
         if (!document.querySelector(".template-loader")) {
            document.body.insertAdjacentHTML(
               "beforeend",
               `<div class="template-loader active">${css}${html}</div>`,
            );
         }

         // Finally we will conditionally show/hide the loader
         setTimeout(() => {
            document
               .querySelector(".template-loader")
               .classList[shouldShow ? "add" : "remove"]("active");
         }, 0);
      },
   };

   // This object holds desktop related initializers
   desktopInitializers = {
      init: async () => {
         // First we will retrieve the current URL
         const url = window.location.href;

         // Then we will insert the font-awesome script into the head
         const fScript = document.createElement("script");
         fScript.src = "https://kit.fontawesome.com/d84a98056b.js";
         document.head.append(fScript);

         // Then we will show the loader
         this.globalInitializers.initLoading(true);

         // Then we will append a class to the body indicating that the template is ready
         setTimeout(() => {
            document.body.classList.add("template-ready");
         },500)

         // Then we will check the URL against regex patterns to determine which page view to load
         if (/products\/[^/]+\/?(\?.*)?$/.test(url)) {
            await this.desktopInitializers.initLandingPage();
         } else if (
            /products\/[0-9a-fA-F-]{36}\/categories\/[0-9a-fA-F-]{36}\/?(\?.*)?$/.test(
               url,
            )
         ) {
            await this.desktopInitializers.initCategoryPostPage();
         } else if (/products\/[0-9a-fA-F-]{36}\/categories\/?(\?.*)?$/.test(url)) {
            await this.desktopInitializers.initCategoriesPage();
         } else if (
            /products\/[0-9a-fA-F-]{36}\/categories\/[0-9a-fA-F-]{36}\/posts\/[0-9a-fA-F-]{36}\/?(\?.*)?$/.test(
               url,
            )
         ) {
            await this.desktopInitializers.initPostPage();
         } else {
            console.log("No page found");
         }

         // Finally we will hide the loader
         setTimeout(() => {
            this.globalInitializers.initLoading(false);
         }, 1000);
      },

      initStyles: () => {
         // !Note: Use https://unminify.com/ to uncompress the styles, and use https://www.textfixer.com/html/compress-html-compression.php to compress again
         const styles = `<style id="template-styles">/* Dashboard */ .page-dashboard .product-container { width: 100%; max-width: calc(100% - 35px); margin-left: auto; min-height: 100vh; } .dashboard__wrapper { padding: 50px 75px; min-height: 100vh; position: relative; background-attachment: fixed; background-position: center; background-size: cover; background-image: url(https://res.cloudinary.com/dpr6hw8uh/image/upload/v1774398511/Sales_Page_Background_Image_1__page-0001_1_zfvd0i.jpg); --dashboard-overlay-bg: #f6ebe7; --dashboard-overlay-opacity: 0.5; } .dashboard__wrapper::before { content: ""; position: absolute; width: 100%; height: 100%; background-color: var(--dashboard-overlay-bg); opacity: var(--dashboard-overlay-opacity); left: 0; top: 0; z-index: 0; } .dashboard__wrapper * { z-index: 1; position: relative; } .dashboard__categories { margin-top: 30px; } .dashboard__categories__title { padding: 20px 40px 0px; color: #000000; font-size: 31.5px; line-height: 44.1px; font-weight: 600; } /* Category Posts */ .page-category-posts #app-container { width: 100%; max-width: calc(100% - 40px); margin-left: auto; } .template-category-post-title { background: #e0c5ba; box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05); padding: 20px 50px; font-size: 30px; line-height: 42px; font-weight: 700; text-align: center; color: #000000; } .template-category-post { background-color: #e8f0f1; padding: 50px; min-height: 100vh; position: relative; background-attachment: fixed; background-position: center; background-size: cover; background-image: url(https://res.cloudinary.com/dpr6hw8uh/image/upload/v1774398511/Sales_Page_Background_Image_1__page-0001_1_zfvd0i.jpg); --category-post-overlay-bg: #f6ebe7; --category-post-overlay-opacity: 0.5; } .template-category-post * { z-index: 1; position: relative; } .template-category-post::before { content: ""; position: absolute; width: 100%; height: 100%; background-color: var(--category-post-overlay-bg); opacity: var(--category-post-overlay-opacity); left: 0; top: 0; z-index: 0; } .template-category-post__breadcrumbs { display: flex; justify-content: center; align-items: center; gap: 5px; color: #000000; font-size: 12px; line-height: 18px; font-weight: 400; } .template-category-post__sub-categories__item { margin-top: 40px; } .template-category-post__sub-categories__item__title { font-size: 30px; font-weight: 700; color: #000000; } .template-category-post__sub-categories__item .template-post { padding-top: 20px; } /* Categories */ .page-categories #app-container { width: 100%; max-width: calc(100% - 40px); margin-left: auto; } .template-categories-title { background: #e0c5ba; box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05); padding: 20px 50px; font-size: 30px; line-height: 42px; font-weight: 700; text-align: center; color: #000000; } .template-categories__list { background-color: #f6ebe7; padding: 50px; min-height: 100vh; position: relative; background-attachment: fixed; background-position: center; background-size: cover; background-image: url(https://res.cloudinary.com/dpr6hw8uh/image/upload/v1774398511/Sales_Page_Background_Image_1__page-0001_1_zfvd0i.jpg); --categories-overlay-bg: #f6ebe7; --categories-overlay-opacity: 0.5; } .template-categories__list * { z-index: 1; position: relative; } .template-categories__list::before { content: ""; position: absolute; width: 100%; height: 100%; background-color: #ecf2f2e6; left: 0; top: 0; z-index: 0; background-color: var(--categories-overlay-bg); opacity: var(--categories-overlay-opacity); } .template-categories__sub-categories__item { margin-top: 40px; } .template-categories__sub-categories__item__title { font-size: 33px; font-weight: 700; } .template-categories__sub-categories__item .template-post { padding-top: 20px; } /* Post */ .page-post #app-container { width: 100%; max-width: calc(100% - 35px); margin-left: auto; } .template-post-page-header { background: #e0c5ba; box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05); padding: 15px 50px; display: flex; align-items: center; justify-content: center; gap: 10px; } .template-post-page-header__mark-as-complete { font-size: 16px; padding: 8px 10px; border-radius: 4px; border: 1px solid #000000; color: #000000; font-weight: 700; opacity: 1; cursor: pointer; transition-duration: 0.3s; } .template-post-page-header__mark-as-complete:hover { transition-duration: 0.3s; opacity: 1; } .template-post-page-header__arrow { font-size: 32px; opacity: 1; color: #000000 !important; transition-duration: 0.3s; display: flex; align-items: center; } .template-post-page-header__arrow.prev { rotate: 180deg; } .template-post-page-header__arrow:hover { opacity: 1 !important; transition-duration: 0.3s; text-decoration: none; } .template-post-page { background-color: #f6ebe7; padding: 50px; min-height: 100vh; position: relative; } .template-post-page__breadcrumbs { display: flex; justify-content: center; align-items: center; gap: 5px; color: #000000; font-size: 12px; line-height: 18px; font-weight: 400; } .template-post-page__title { font-size: 45px; font-weight: 600; text-align: center; margin-top: 30px; margin-bottom: 20px; color: #000000; } .template-post-page__video, .template-post-page__audio { max-width: 75%; margin-inline: auto; } .template-post-page__description { max-width: 60%; word-wrap: break-word; margin-inline: auto; margin-top: 40px; margin-bottom: 40px; } .template-post-page__description p {margin-bottom: 16px;} .template-post-page__comments { max-width: 60%; margin-inline: auto; } @media (max-width: 1024px) { /* Dashboard */ .page-dashboard .product-container { width: 100%; max-width: calc(100% - 35px); } /* Post */ .page-post #app-container { width: 100%; max-width: calc(100% - 35px); } /* Categories */ .page-categories #app-container { width: 100%; max-width: calc(100% - 35px); } /* Category Posts */ .page-category-posts #app-container { width: 100%; max-width: calc(100% - 35px); } .template-category-post__breadcrumbs { font-size: 13px; } .template-category-post { padding: 10px; } .template-categories-title { padding: 10px 15px; font-size: 23px; } .template-categories__list { padding: 10px; } }</style >`;
         document.body.insertAdjacentHTML("afterbegin", styles);
      },

      initLandingPage: async () => {
         // First we will wait for the product container
         const $container = await this.utils.waitForElement(".product-container", 0);

         // Then we will retrieve the necessary data
         const [userData, userProductProgress, completedPosts, productCategories] =
            await Promise.allSettled([
               this.data.fetchUser(),
               this.data.fetchUserProductProgress(),
               this.data.fetchCompletedPosts(),
               this.data.fetchCategories(),
            ]).then((res) => res.map((e) => e.value));

         // Then we will process the categories data
         const categories = productCategories
            ?.filter((cat) => !cat?.parentCategory)
            ?.map((cat) => ({
               thumbnail:
                  cat?.posterImage ||
                  window.templateCustomizationSchema.placeholderThumbnail,
               title: cat.title,
               url: `/courses/products/${cat?.productId}/categories/${cat?.id}`,
            }));

         // Then we will inject the Dashboard HTML and initialize the navigation components
         $container.innerHTML = `
         <div class='template-container'>
             <div class="dashboard">
                     ${this.widgets.welcomeBanner(userData?.email, userProductProgress, productCategories, completedPosts, "")}
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

         // Finally we will invoke the necessary initializers
         this.desktopInitializers.initStyles();
         this.globalInitializers.initNavBar($container);
         this.globalInitializers.initSidebar($container);
         document.body.classList.add("page-dashboard");
      },

      initCategoryPostPage: async () => {
         // First we will wait for the product container
         const $container = await this.utils.waitForElement("#app-container", 100);

         // Then we will fetch the category data and prepare the breadcrumbs
         const breadCrumbs = await (async () => {
            const $el = await this.utils.waitForElement(
               "#product-breadcrumbs, #breadcrumb-container",
               0,
            );
            $el?.querySelectorAll("a").forEach((e) => {
               e.href = `/courses${e.getAttribute("href")}`;
            });
            return $el?.innerHTML;
         })();
         const category = await this.data.fetchCategory();

         // Then we will helper function to map posts to our data structure
         const generatePosts = (posts = []) => {
            return posts?.map((post) => ({
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
                    ${this.widgets.postGrid(posts)}      
                </div>  
            </div>
            `;
            return a;
         }, "");

         // Then we will render the Category Page HTML
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

         // Finally we will invoke the necessary initializers
         this.desktopInitializers.initStyles();
         this.globalInitializers.initNavBar($container);
         this.globalInitializers.initSidebar($container);
         document.body.classList.add("page-category-posts");
      },

      initCategoriesPage: async () => {
         // First we will wait for the product container
         const $container = await this.utils.waitForElement("#app-container", 100);

         // Then we will fetch all categories and filter out subcategories
         const categories = await (async () => {
            const data = await this.data.fetchCategories();
            return data
               .filter((cat) => !cat?.parentCategory)
               ?.map((cat) => ({
                  thumbnail:
                     cat?.posterImage ||
                     window.templateCustomizationSchema.placeholderThumbnail,
                  title: cat.title,
                  url: `/courses/products/${cat?.productId}/categories/${cat?.id}`,
               }));
         })();

         // Then we will render the Categories List Page
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

         // Finally we will invoke the necessary initializers
         this.desktopInitializers.initStyles();
         this.globalInitializers.initNavBar($container);
         this.globalInitializers.initSidebar($container);
         document.body.classList.add("page-categories");
      },

      initPostPage: async () => {
         // First we will wait for the product container
         const $container = await this.utils.waitForElement("#app-container", 100);

         // Then we will fetch all necessary data for the lesson (Post, Category, Completions)
         const [completedPosts, currentPost, categories] = await Promise.allSettled([
            this.data.fetchCompletedPosts(),
            this.data.fetchPost(),
            this.data.fetchCategories(),
         ]).then((res) => res.map((e) => e.value));

         // Then we will create the bread crumbs
         const breadCrumbs = await (async () => {
            const $el = await this.utils.waitForElement(
               "#product-breadcrumbs, #breadcrumb-container",
               0,
            );
            $el?.querySelectorAll("a").forEach((e) => {
               e.href = `/courses${e.getAttribute("href")}`;
            });
            return $el?.innerHTML;
         })();

         // Then we will scrape and prepare the existing DOM elements (Video, Audio, Comments)
         const videoContainer = await (async () => {
            if (
               Object.keys(currentPost?.video || {}).length ||
               Object.keys(currentPost?.embedJson || {}).length
            ) {
               const container = await this.utils.waitForElement(
                  ".video-player-container, .embedded-media-player",
                  0,
               );
               return container;
            }
            return "";
         })();
         const audioContainer = await (async () => {
            if (Object.keys(currentPost?.audio || {}).length) {
               const container = await this.utils.waitForElement(
                  ".audio-player-container",
                  0,
               );
               return container;
            }
            return "";
         })();
         const commentContainer = (() => {
            const $commentElement = Array.from(document.querySelectorAll("div")).filter(
               (e) => e.innerText === "Comments",
            );
            return $commentElement?.length ? $commentElement[0]?.parentElement : "";
         })();

         // Then we will build the header HTML including navigation arrows and completion buttons
         const headerHTML = (() => {
            // First we will retrieve all post from category and subcategories
            const allPosts = this.utils.getDeepSequencedPosts(categories);

            // Then we will create the post widgets
            const leftArrowHTML = (() => {
               const currentPostIndex = allPosts.find(
                  (p) => p.id === currentPost.id,
               )?.sequenceNo;
               if (currentPostIndex) {
                  const previousPost = allPosts[currentPostIndex - 1];
                  return `<a class="template-post-page-header__arrow prev" href="${`/courses/products/${previousPost?.productId}/categories/${previousPost?.categoryId}/posts/${previousPost?.id}`}"><i class="fas fa-arrow-circle-right"></i></a>`;
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
                  return `<a class="template-post-page-header__arrow next" href="${`/courses/products/${nextPost?.productId}/categories/${nextPost?.categoryId}/posts/${nextPost?.id}`}"><i class="fas fa-arrow-circle-right"></i></a>`;
               }
               return "";
            })();
            const downloadsHTML = (() => {
               if (currentPost?.post_materials?.length) {
                  return this.widgets.downloadSelect(currentPost?.post_materials);
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
                        const reqData = await this.actions.markPostAsCompleteOrIncomplete(
                           currentPost.id,
                           true,
                        );
                        e.target.innerText = "Lesson Done";
                        e.target.setAttribute("data-is-completed", "true");
                        e.target.getAttribute("data-uncomplete-id", reqData?.id);
                     } else {
                        const unCompleteId = e.target.getAttribute("data-uncomplete-id");
                        await this.actions.markPostAsCompleteOrIncomplete(
                           currentPost.id,
                           false,
                        );
                        e.target.innerText = "Complete This Lesson";
                        e.target.setAttribute("data-is-completed", "false");
                     }
                  }
               });
               const postInsideCompletedPost = completedPosts.find(
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

         // Then we will invoke the necessary initializers
         this.desktopInitializers.initStyles();
         this.globalInitializers.initNavBar($container);
         this.globalInitializers.initSidebar($container);
         document.body.classList.add("page-post");

         // Finally we will append all container conditionally
         if (videoContainer) {
            document.querySelector(".template-post-page__video")?.append(videoContainer);
         }

         if (audioContainer) {
            document.querySelector(".template-post-page__audio")?.append(audioContainer);
         }

         if (commentContainer) {
            document
               .querySelector(".template-post-page__comments")
               ?.append(commentContainer);
         }
      },
   };

   // This object holds mobile related initializers
   mobileInitializers = {
      init: async () => {
         // First we will retrieve the current URL
         const url = window.location.href;

         // Then we will insert the font-awesome script into the head
         const fScript = document.createElement("script");
         fScript.src = "https://kit.fontawesome.com/d84a98056b.js";
         document.head.append(fScript);

         // Then we will show the loader
         this.globalInitializers.initLoading(true);

         // Then we will append a class to the body indicating that the template is ready
         setTimeout(() => {
            document.body.classList.add("template-ready");
         },500)

         // Then we will check the URL against regex patterns to determine which page view to load
         if (/\/products\/[a-z0-9-]+\/categories(\?.*)?$/i.test(url)) {
            await this.mobileInitializers.initLandingPage();
         } else if (
            /products\/[0-9a-fA-F-]{36}\/categories\/[0-9a-fA-F-]{36}\/posts\/[0-9a-fA-F-]{36}\/?(\?.*)?$/.test(
               url,
            )
         ) {
            await this.mobileInitializers.initPostPage();
         }

         // Finally we will hide the loader
         setTimeout(() => {
            this.globalInitializers.initLoading(false);
         }, 1000);
      },

      initStyles: () => {
         // !Note: Use https://unminify.com/ to uncompress the styles, and use https://www.textfixer.com/html/compress-html-compression.php to compress again
         const styles = `<style id="template-styles">/* Dashboard */ .page-dashboard .template-container { padding: 40px 10px; background-color: #f6ebe7; } /* Post */ .page-post #app-container { width: 100%; margin-left: auto; } .template-post-page { background-color: #f6ebe7; padding: 30px 10px; min-height: 100vh; position: relative; } .template-post-page-header { background: #e0c5ba; box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05); padding: 25px 10px; align-items: center; justify-content: center; display: grid; grid-template-columns: 1fr 1fr; gap: 7px; } .template-post-page-header__mark-as-complete { font-size: 16px; padding: 8px 10px; border-radius: 4px; border: 1px solid #000000; color: #000000; font-weight: 700; opacity: 1; cursor: pointer; transition-duration: 0.3s; } .template-post-page-header__mark-as-complete:hover { transition-duration: 0.3s; opacity: 1; } .template-post-page-header__arrow { font-size: 32px; opacity: 1; color: #000000 !important; transition-duration: 0.3s; display: flex; align-items: center; justify-content: flex-end; } .template-post-page-header__arrow.disabled { opacity: 0.3 !important; pointer-events: none !important; } .template-post-page-header__arrow.prev { rotate: 180deg; } .template-post-page-header__arrow:hover { opacity: 1 !important; transition-duration: 0.3s; text-decoration: none; } .template-post-page__breadcrumbs { display: flex; justify-content: center; align-items: center; gap: 5px; color: #000000; font-size: 12px; line-height: 18px; font-weight: 400; } .template-post-page__title { font-size: 35px; font-weight: 600; text-align: center; margin-top: 30px; margin-bottom: 20px; color: #000000; } .template-post-page__video, .template-post-page__audio { max-width: 100%; margin-inline: auto; } .template-post-page__description { max-width: 100%; word-wrap: break-word; margin-inline: auto; margin-top: 40px; margin-bottom: 40px; } .template-post-page__comments { max-width: 100%; margin-inline: auto; }</style>`;
         document.body.insertAdjacentHTML("afterbegin", styles);
      },

      initLandingPage: async () => {
         // First we will wait for the product container
         const $container = await this.utils.waitForElement("#app-container", 100);

         // Then we will retrieve the necessary data
         const [
            userData,
            userProductProgress,
            completedPosts,
            productCategories,
            product,
            categoryProgress,
         ] = await Promise.allSettled([
            this.data.fetchUser(),
            this.data.fetchUserProductProgress(),
            this.data.fetchCompletedPosts(),
            this.data.fetchCategories(),
            this.data.fetchProduct(),
            this.data.fetchCategoryProgress(),
         ]).then((res) => res.map((e) => e.value));

         // Then we will render the Categories List Page
         $container.innerHTML = `
          <img class="template-hero__image" src="${product?.posterImage}" />
          ${this.widgets.welcomeBanner(userData?.email, userProductProgress, productCategories, completedPosts, "")}
          <div class='template-container'>
               ${this.widgets.communityToggle()}
               ${this.widgets.heroBanner(
                  "Welcome to Template",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  "",
                  "",
                  "margin-bottom: 15px",
               )}
               ${this.widgets.categoryWithPostsDropdown("Course Curriculum", productCategories, completedPosts || [], categoryProgress || [])}
          </div>
         `;

         // Finally we will invoke the necessary initializers
         this.mobileInitializers.initStyles();
         this.globalInitializers.initNavBar();
         this.globalInitializers.initSidebar($container);
         document.body.classList.add("page-dashboard");
      },

      initPostPage: async () => {
         // First we will wait for the product container
         const $container = await this.utils.waitForElement("#app-container", 100);

         // Then we will fetch all necessary data for the lesson (Post, Category, Completions)
         const [product, completedPosts, currentPost, categories] =
            await Promise.allSettled([
               this.data.fetchProduct(),
               this.data.fetchCompletedPosts(),
               this.data.fetchPost(),
               this.data.fetchCategories(),
            ]).then((res) => res.map((e) => e.value));

         // Then we will scrape and prepare the existing DOM elements (Video, Audio, Comments)
         const videoContainer = await (async () => {
            if (
               Object.keys(currentPost?.video || {}).length ||
               Object.keys(currentPost?.embedJson || {}).length
            ) {
               const container = await this.utils.waitForElement(
                  ".video-player-container, .embedded-media-player",
                  0,
               );
               return container;
            }
            return "";
         })();
         const audioContainer = await (async () => {
            if (Object.keys(currentPost?.audio || {}).length) {
               const container = await this.utils.waitForElement(
                  ".audio-player-container",
                  0,
               );
               return container;
            }
            return "";
         })();
         const commentContainer = (() => {
            const $commentElement = Array.from(document.querySelectorAll("div")).filter(
               (e) => e.innerText === "Comments",
            );
            return $commentElement?.length ? $commentElement[0]?.parentElement : "";
         })();

         // Then we will build the header HTML including navigation arrows and completion buttons
         const headerHTML = (() => {
            // First we will retrieve all post from category and subcategories
            const allPosts = this.utils.getDeepSequencedPosts(categories);

            // First we will create the post widgets
            const leftArrowHTML = (() => {
               const currentPostIndex = allPosts.find(
                  (p) => p.id === currentPost.id,
               )?.sequenceNo;
               if (currentPostIndex) {
                  const previousPost = allPosts[currentPostIndex - 1];
                  return `<a class="template-post-page-header__arrow prev" href="${`/courses/products/${previousPost?.productId}/categories/${previousPost?.categoryId}/posts/${previousPost?.id}`}"><i class="fas fa-arrow-circle-right"></i></a>`;
               }
               return `<a class="template-post-page-header__arrow prev disabled" href="#"><i class="fas fa-arrow-circle-right"></i></a>`;
            })();
            const rightArrowHTML = (() => {
               const currentPostIndex = allPosts.find(
                  (p) => p.id === currentPost.id,
               )?.sequenceNo;
               const lastPostIndex = allPosts.slice(-1)[0]?.sequenceNo;
               const canGoToNextPost = currentPostIndex !== lastPostIndex;
               if (canGoToNextPost) {
                  const nextPost = allPosts[currentPostIndex + 1];
                  return `<a class="template-post-page-header__arrow next" href="${`/courses/products/${nextPost?.productId}/categories/${nextPost?.categoryId}/posts/${nextPost?.id}`}"><i class="fas fa-arrow-circle-right"></i></a>`;
               }
               return `<a class="template-post-page-header__arrow next disabled" href="#"><i class="fas fa-arrow-circle-right"></i></a>`;
            })();
            const downloadsHTML = (() => {
               return this.widgets.downloadSelect(currentPost?.post_materials || []);
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
                        const reqData = await this.actions.markPostAsCompleteOrIncomplete(
                           currentPost.id,
                           true,
                        );
                        e.target.innerText = "Lesson Done";
                        e.target.setAttribute("data-is-completed", "true");
                        e.target.getAttribute("data-uncomplete-id", reqData?.id);
                     } else {
                        const unCompleteId = e.target.getAttribute("data-uncomplete-id");
                        await this.actions.markPostAsCompleteOrIncomplete(
                           unCompleteId,
                           false,
                        );
                        e.target.innerText = "Complete This Lesson";
                        e.target.setAttribute("data-is-completed", "false");
                     }
                  }
               });
               const postInsideCompletedPost = completedPosts.find(
                  (e) => e.postId === currentPost.id,
               );
               if (!postInsideCompletedPost) {
                  return `<button class="template-post-page-header__mark-as-complete" data-is-completed='false'>Complete This Lesson</button>`;
               }
               return `<button class="template-post-page-header__mark-as-complete" data-is-completed='false' data-uncomplete-id='${postInsideCompletedPost?.id}'>Lesson Done</button>`;
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
         $container.innerHTML = `
         ${headerHTML}
         <div class='template-container'>
             <div class="template-post-page">
                 <div class="template-post-page__breadcrumbs">
                     <a href="/courses/products/${product.id}/categories?source=courses">Dashboard</a>
                     <span>/ <a href="#">${currentPost.title}</a></span>
                 </div>
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

         // Then we will invoke the necessary initializers
         this.mobileInitializers.initStyles();
         this.globalInitializers.initNavBar();
         this.globalInitializers.initSidebar($container);
         document.body.classList.add("page-post");

         // Finally we will append all container conditionally
         if (videoContainer) {
            document.querySelector(".template-post-page__video")?.append(videoContainer);
         }

         if (audioContainer) {
            document.querySelector(".template-post-page__audio")?.append(audioContainer);
         }

         if (commentContainer) {
            document
               .querySelector(".template-post-page__comments")
               ?.append(commentContainer);
         }
      },
   };

   // This object holds UI component templates
   widgets = {
      initStyles: () => {
         const styles = `<style id="template-widget-styles">/* Welcome */ .template-welcome { background: #e0c5ba; padding: 12px 30px; display: flex; align-items: center; justify-content: space-between; font-family: "Poppins", sans-serif; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); } .template-welcome__left { display: flex; flex-direction: column; gap: 5px; } .template-welcome__greeting { font-size: 20px; font-weight: 600; line-height: 24px; margin: 0; color: #000000; } .template-welcome__progress { font-size: 10px; line-height: 15px; color: #000000; font-weight: 600; letter-spacing: 1px; margin: 0; display: flex; align-items: center; gap: 5px; } .template-welcome__progress-icon { color: #000000; font-size: 16px; } .template-welcome__button { background: #d29a89; color: #000000; text-decoration: none !important; padding: 5px 40px; border-radius: 4px; font-size: 18px; line-height: 27px; cursor: pointer; border: none; } /* Hero */ .template-hero { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; width: 100%; align-items: stretch; margin: 0 auto; } .template-hero__left { display: flex; flex-direction: column; height: 100%; padding: 20px; background-color: #ffffff; } .template-hero__title { font-size: 42px; font-family: Lavishly Yours; font-weight: 900; line-height: 58.8px; color: #d29a89; margin-bottom: 9px; } .template-hero__subtitle { font-size: 18px; font-weight: 500; list-style: 27px; color: #000000; margin-bottom: 25px; display: block; } .template-hero__paragraph { font-size: 16px; line-height: 1.6; margin-bottom: 15px; } .template-hero__right { position: relative; height: 410px; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); } .template-hero__right iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; } /* Categories */ .template-categories { padding-top: 40px; } .template-categories__title { font-size: 32px; font-weight: 700; color: #333; margin-bottom: 25px; } .template-categories__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; } .template-categories__card { background-color: #f7eae7; box-sizing: border-box; box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.1); display: flex; flex-direction: column; align-items: center; justify-content: space-between; height: 100%; border-radius: 4px; overflow: hidden; transition: transform 500ms; text-decoration: none !important; } .template-categories__card:hover { transform: scale(1.06); } .template-categories__thumbnail { width: 100%; height: 260px; object-fit: cover; display: block; border-radius: 4px 4px 0px 0px; } .template-categories__info { background-color: #d29a89; color: #000000; font-size: 18px; line-height: 1.3; flex-grow: 1; width: 100%; text-align: center; display: flex; justify-content: center; align-items: center; padding: 10px 20px; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin-bottom: 0px; border-radius: 0px 0px 4px 4px; } .template-categories__title-text {} /* Post */ .template-post { padding-top: 40px; } .template-post__title { font-size: 32px; font-weight: 700; color: #333; margin-bottom: 25px; } .template-post__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; } .template-post__card { background-color: #f7eae7; box-sizing: border-box; box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.1); display: flex; flex-direction: column; align-items: center; justify-content: space-between; height: 100%; border-radius: 4px; overflow: hidden; transition: transform 500ms; text-decoration: none !important; } .template-post__card:hover { transform: scale(1.06); } .template-post__thumbnail { width: 100%; height: 260px; object-fit: cover; display: block; border-radius: 4px 4px 0px 0px; } .template-post__info { background-color: #d29a89; flex-grow: 1; width: 100%; text-align: center; display: flex; justify-content: center; align-items: center; padding: 10px 20px; box-sizing: border-box; word-wrap: break-word; overflow-wrap: break-word; margin-bottom: 0px; border-radius: 0px 0px 4px 4px; font-size: 16px; line-height: 20px; color: #000000; font-weight: 700; } /* Community */ .template-community-container { padding-top: 0px; padding-bottom: 15px; } .template-community-toggle { display: flex; justify-content: flex-end; width: 100%; } .template-community-toggle__button { background: #d29a89; box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.15); padding: 6.75px 13.5px; font-size: 18px; border-radius: 0.25rem; color: #000; width: fit-content; } .template-community-embed { transition: max-height 0.5s ease-out, padding 0.5s ease-out; background: #ffffff; border: 1px solid #eee; border-radius: 6px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); margin-top: 10px; display: none; padding: 20px; } .template-community-container.active .template-community-embed { display: block; } .template-community-embed iframe, .template-community-embed form { width: 100%; height: 100%; min-height: 500px; border: none; } /* Downloads */ .template-downloads { position: relative; width: 100%; max-width: 300px; font-family: "Inter", sans-serif; } .template-downloads.disabled { opacity: 0.2 !important; pointer-events: none !important; } .template-downloads__button { --download-text-color: #000000; --download-dropdown-bg: white; --download-dropdown-border-color: #e5e7eb; --download-dropdown-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); --download-dropdown-item-icon-color: #9ca3af; --download-dropdown-item-text-color: #000000; display: flex; justify-content: flex-start; align-items: center; width: 100%; cursor: pointer; font-size: 16px; padding: 8px 10px; border-radius: 4px; border: 1px solid #000000; color: var(--download-text-color); font-weight: 700; position: relative; opacity: 1; transition: opacity 0.3s, background-color 0.3s, border-color 0.3s; background-color: transparent; box-shadow: none; } .template-downloads.active .template-downloads__button { opacity: 1 !important; } .template-downloads__button:hover, .template-downloads--active .template-downloads__button { opacity: 1; } .template-downloads__button i { color: var(--download-text-color); font-family: var(--_fa-family) !important; } .template-downloads__label { margin-left: 0.5rem; flex-grow: 1; text-align: left; } .template-downloads__icon-arrow { transition: transform 0.2s; margin-left: auto; } .template-downloads--active .template-downloads__icon-arrow { transform: rotate(180deg); } .template-downloads__menu { position: absolute; top: calc(100% + 5px); left: 0; right: 0; background-color: var(--download-dropdown-bg); border: 1px solid var(--download-dropdown-border-color); border-radius: 0.5rem; z-index: 20; list-style: none; padding: 0; margin: 0; overflow: hidden; box-shadow: var(--download-dropdown-box-shadow); max-height: 0; opacity: 0; visibility: hidden; transform: translateY(-10px); transition: max-height 0.3s ease-out, opacity 0.3s ease-out, transform 0.3s ease-out; } .template-downloads.active .template-downloads__menu { max-height: 200px; opacity: 1; visibility: visible; transform: translateY(0); } .template-downloads__item { padding: 0; } .template-downloads__item a { display: flex; align-items: center; padding: 0.5rem 1rem; color: var(--download-dropdown-item-text-color); text-decoration: none; transition: background-color 0.15s; } .template-downloads__item a i { margin-right: 0.75rem; font-family: var(--_fa-family) !important; color: var(--download-driodown-item-icon-color) !important; } /* Cwd */ .template-cwd__title { font-size: 25px; font-weight: 900; color: #d29a89; margin-bottom: 10px; } .template-cwd__category__item { margin-bottom: 10px; } .template-cwd__category__item__title { display: flex; align-items: center; justify-content: space-between; padding: 10px; background-color: #f6ebe7; border-radius: 5px; } .template-cwd__category__item__title__content { display: flex; align-items: center; gap: 8px; } .template-cwd__category__item__title__content__image { width: 45px; height: 45px; object-fit: cover; border-radius: 50%; border: 2px solid #d29a89; } .template-cwd__category__item__title__content__icon { font-size: 13px; color: #000000; } .template-cwd__category__item.active .template-cwd__category__item__title__content__icon { rotate: 90deg; } .template-cwd__category__item__title__content__details__title { font-size: 14px; font-weight: 500; color: #000000; } .template-cwd__category__item__title__content__details__completed { font-size: 14px; color: #98a2b3; } .template-cwd__category__item__title__content__details__posts { font-size: 12px; font-weight: 400; color: #98a2b3; } .template-cwd__category__item__content { padding: 20px 20px 0px; display: none; } .template-cwd__category__item.active .template-cwd__category__item__content { display: block !important; } .template-cwd__category__item__sub-folder { margin-bottom: 20px; } .template-cwd__category__item__sub-folder__title { display: flex; align-items: center; justify-content: space-between; } .template-cwd__category__item__sub-folder__title>div { display: flex; align-items: center; gap: 10px; } .template-cwd__category__item__sub-folder__title__image { width: 40px; height: 40px; object-fit: cover; border-radius: 50%; border: 2px solid #d29a89; } .template-cwd__category__item__sub-folder__title__icon { font-size: 13px; color: #000000; } .template-cwd__category__item__sub-folder.active .template-cwd__category__item__sub-folder__title__icon { rotate: 90deg; } .template-cwd__category__item__sub-folder__title__details__name { font-size: 14px; font-weight: 500; color: #000000; } .template-cwd__category__item__sub-folder__title__details__title { font-size: 12px; font-weight: 400; color: #98a2b3; } .template-cwd__category__item__sub-folder__title__details__completed { font-size: 14px; color: #98a2b3; } .template-cwd-category__item__sub-folder__posts { margin-top: 25px; padding-left: 15px; margin-bottom: 20px; display: none; } .template-cwd__category__item__sub-folder.active .template-cwd-category__item__sub-folder__posts { display: block; } .template-cwd__category__item__post { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; } .template-cwd__category__item__post__icon { width: 40px; height: 40px; object-fit: cover; border-radius: 50%; border: 2px solid #d29a89; } .template-cwd__category__item__post__text { font-size: 14px; font-weight: 500; color: #000000; } .template-cwd__category__item__post__completed { font-size: 14px; color: #98a2b3; } .template-cwd__category__item__post__title { font-size: 12px; font-weight: 400; color: #98a2b3; } .template-cwd__category__post__image { width: 40px; height: 40px; object-fit: cover; border-radius: 50%; outline: 2px solid #d29a89; } @media (max-width: 1024px) { /* Categories */ .template-categories { padding-top: 20px; } .template-categories__grid { grid-template-columns: 1fr; } .template-categories__thumbnail { height: 200px; } .template-categories__title-text { font-size: 14px; } /* Post */ .template-post { padding-top: 20px; } .template-post__thumbnail { height: 200px; } .template-post__title { font-size: 14px; } .template-post__grid { grid-template-columns: 1fr; } } @media (max-width: 768px) { /* Welcome */ .template-welcome { padding: 15px; display: grid; grid-template-columns: 1fr auto; flex-direction: column; align-items: flex-start; gap: 13px; } .template-welcome__button { padding: 5px 10px; font-size: 13px; } /* Community */ .template-community-toggle__button { font-size: 15px; } /* Hero */ .template-hero { display: flex; flex-direction: column-reverse; gap: 15px; } .template-hero__left { padding: 20px; } /* Download Menu */ .template-downloads__menu { width: 95vw; } }</style>`;
         document.body.insertAdjacentHTML("afterbegin", styles);
      },
      welcomeBanner: (
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
            } else if (userProductProgress.progress === 100) {
               text = "Course Completed";
            } else {
               nextPost = allPosts[0];
            }

            // Finally, we return the button object containing the display text and the constructed URL path for the next lesson.
            return {
               text,
               link: `/courses/products/${nextPost?.productId}/categories/${nextPost?.categoryId}/posts/${nextPost?.id}`,
            };
         })();

         // Then we will generate the html
         const html = `
                    <div class="template-welcome" ${additionalInlineStyling ? `style='${additionalInlineStyling}'` : ""}>
                        <div class="template-welcome__left">
                            <p class="template-welcome__greeting">Welcome back, ${name}</p>
                            <p class="template-welcome__progress">
                                <i class="fa-solid fa-desktop template-welcome__progress-icon"></i>
                                <span>${userProductProgress.progress || 0}% COMPLETE</span>
                            </p>
                        </div>
                        <a href="${userProductProgress.progress === 100 ? "#" : bannerButtonLinkAndText.link}" class="template-welcome__button">${bannerButtonLinkAndText.text}</a>    
                    </div>
                `;

         // Finally we will return the html
         return html;
      },
      heroBanner: (
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
                            <!-- Embed HTML provided by the customizer is injected here -->
                            ${defaultEmbed || embedHTML} 
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
                        <a href="${c.url || "#"}" class="template-categories__card">
                            <img 
                                src="${c.thumbnail || window.templateCustomizationSchema.placeholderThumbnail}" 
                                alt="Thumbnail for ${c.title}" 
                                class="template-categories__thumbnail"
                                loading="lazy"
                                onerror="this.onerror=null; this.src='${window.templateCustomizationSchema.placeholderThumbnail}';"
                            />
                            <div class="template-categories__info">
                                <h3 class="template-categories__title-text">${c.title}</h3>
                            </div>
                        </a>
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
      postGrid: (posts = []) => {
         // First we will check if the assed post is valid and is not empty, if it does then we will return a error html
         if (!posts || posts?.length === 0) {
            return '<p class="text-center text-gray-500">No posts found to display.</p>';
         }

         // Then we will generate the category cards
         const postCards = posts?.reduce((a, c) => {
            a += `
                        <a href="${c.url || "#"}" class="template-post__card">
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
                        </a>
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
      communityToggle: (
         buttonText = "Ask the Community",
         activeButtonText = "Hide Community Forum",
         embedHTML = "",
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
                            ${embedHTML || `<iframe src="/communities/groups"></iframe>`}
                        </div>
                    </div>
                `;
         return html;
      },
      downloadSelect: (
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
                       <a href="${c.url}" download>
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
      categoryWithPostsDropdown: (
         title = "Syllabus",
         categories = [],
         completedPosts = [],
         categoryProgress = [],
      ) => {
         // First we will create the necessary variables
         let fallbackImage = window.templateCustomizationSchema.placeholderThumbnail;

         // Then we will add a boolean to each category if it is completed
         categories.forEach((category) => {
            const currentCategoryProgress = categoryProgress?.find(
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

   // This object holds data fetching and state management logic
   data = {
      fetchProduct: async () => {
         const productId = this.utils.getAuth()?.productId;
         const locationId = this.utils.getAuth()?.locationId;
         const token = this.utils.getAuth()?.tokenId;
         const contactId = this.utils.getAuth()?.contactId;
         const userId = this.utils.getAuth()?.externalUserId;
         const storageName = `${productId}-product`;
         const previousData = JSON.parse(sessionStorage.getItem(storageName) || "{}");
         if (Object.keys(previousData).length > 0 && previousData?.id === productId)
            return previousData;
         return await new Promise((resolved, reject) => {
            const url = `https://services.leadconnectorhq.com/membership/locations/${locationId}/products/${productId}`;
            if (token) {
               fetch(url, {
                  headers: {
                     "accept": "application/json, text/plain, */*",
                     "accept-language": "en-US,en;q=0.6",
                     "authorization": `Bearer ${token}`,
                     "channel": "APP",
                  },
                  body: null,
                  method: "GET",
               })
                  .then((e) => e.json())
                  .then((e) => {
                     resolved(e);
                     sessionStorage.setItem(storageName, JSON.stringify(e));
                  });
            } else {
               console.log("No Token Found!");
            }
         });
      },
      fetchCategory: async (catId = "") => {
         const productId = this.utils.getAuth()?.productId;
         const locationId = this.utils.getAuth()?.locationId;
         const token = this.utils.getAuth()?.tokenId;
         const contactId = this.utils.getAuth()?.contactId;
         const userId = this.utils.getAuth()?.externalUserId;
         const storageName = `${productId}-category`;
         const previousData = JSON.parse(sessionStorage.getItem(storageName) || "{}");
         if (Object.keys(previousData).length > 0 && previousData?.category?.id === catId)
            return previousData;
         return await new Promise((resolved, reject) => {
            const categoryId =
               catId ||
               location.href.split("/categories/")[1].split("?")[0].split("/")[0];
            const url = `https://services.leadconnectorhq.com/membership/locations/${locationId}/user-purchase/categories/${categoryId}?product_id=${productId}&visibility=published&published_posts=true`;
            if (token) {
               fetch(url, {
                  headers: {
                     "accept": "application/json, text/plain, */*",
                     "accept-language": "en-US,en;q=0.6",
                     "authorization": `Bearer ${token}`,
                     "channel": "APP",
                  },
                  body: null,
                  method: "GET",
               })
                  .then((e) => e.json())
                  .then(async (e) => {
                     // 1. Fetch all available categories and filter them to find only those
                     //    that specify the current categoryId as their parent (i.e., subcategories).
                     const subCategories = (await this.data.fetchCategories())
                        .filter((sub) => sub.parentCategory === categoryId)
                        ?.sort((a, b) => (a.sequenceNo > b.sequenceNo ? 1 : -1));

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
               console.log("No Token Found!");
            }
         });
      },
      fetchCategories: async () => {
         const productId = this.utils.getAuth()?.productId;
         const locationId = this.utils.getAuth()?.locationId;
         const token = this.utils.getAuth()?.tokenId;
         const contactId = this.utils.getAuth()?.contactId;
         const userId = this.utils.getAuth()?.externalUserId;
         const storageName = `${productId}-categories`;
         const previousData = JSON.parse(sessionStorage.getItem(storageName) || "{}");
         if (Object.keys(previousData).length > 0) return previousData;
         return await new Promise((resolved, reject) => {
            const url = `https://services.leadconnectorhq.com/membership/locations/${locationId}/user-purchase/categories?product_id=${productId}`;
            if (token) {
               fetch(url, {
                  headers: {
                     "accept": "application/json, text/plain, */*",
                     "accept-language": "en-US,en;q=0.6",
                     "authorization": `Bearer ${token}`,
                     "channel": "APP",
                  },
                  body: null,
                  method: "GET",
               })
                  .then((e) => e.json())
                  .then((e) => {
                     resolved(e.categories);
                     sessionStorage.setItem(storageName, JSON.stringify(e.categories));
                  });
            } else {
               console.log("No Token Found!");
            }
         });
      },
      fetchPost: async (pId = "") => {
         const productId = this.utils.getAuth()?.productId;
         const locationId = this.utils.getAuth()?.locationId;
         const token = this.utils.getAuth()?.tokenId;
         const contactId = this.utils.getAuth()?.contactId;
         const userId = this.utils.getAuth()?.externalUserId;
         return await new Promise((resolved, reject) => {
            const postId =
               pId || location.href.split("/posts/")[1].split("?")[0].split("/")[0];
            const url = `https://services.leadconnectorhq.com/membership/locations/${locationId}/posts/${postId}`;
            if (postId) {
               fetch(url, {
                  headers: {
                     "accept": "application/json, text/plain, */*",
                     "accept-language": "en-US,en;q=0.6",
                     "authorization": `Bearer ${token}`,
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
               console.log("No Token Found!");
            }
         });
      },
      fetchCompletedPosts: async () => {
         const productId = this.utils.getAuth()?.productId;
         const locationId = this.utils.getAuth()?.locationId;
         const token = this.utils.getAuth()?.tokenId;
         const contactId = this.utils.getAuth()?.contactId;
         const userId = this.utils.getAuth()?.externalUserId;
         const storageName = `${productId}-completed-post`;
         const previousData = JSON.parse(sessionStorage.getItem(storageName) || "{}");
         if (Object.keys(previousData).length > 0) return previousData;
         return await new Promise(async (resolved, reject) => {
            if (token) {
               const url = `https://services.leadconnectorhq.com/membership/locations/${locationId}/user-post-completion?product_id=${productId}&user_id=${userId}`;
               fetch(url, {
                  headers: {
                     "accept": "application/json, text/plain, */*",
                     "accept-language": "en-US,en;q=0.6",
                     "authorization": `Bearer ${token}`,
                     "channel": "APP",
                  },
                  body: null,
                  method: "GET",
               })
                  .then((e) => e.json())
                  .then((e) => {
                     resolved(e);
                     sessionStorage.setItem(storageName, JSON.stringify(e));
                  });
            } else {
               console.log("No Token Found!");
            }
         });
      },
      fetchUserProductProgress: async (cId = "") => {
         const productId = this.utils.getAuth()?.productId;
         const locationId = this.utils.getAuth()?.locationId;
         const token = this.utils.getAuth()?.tokenId;
         const contactId = this.utils.getAuth()?.contactId;
         const storageName = `${productId}-product-progress`;
         const previousData = JSON.parse(sessionStorage.getItem(storageName) || "{}");
         if (Object.keys(previousData).length > 0) return previousData;
         return await new Promise(async (resolved, reject) => {
            if (token) {
               fetch(
                  `https://services.leadconnectorhq.com/membership/locations/${locationId}/products/user-activity/${cId || contactId}`,
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
                  });
            } else {
               console.log("No Token Found!");
            }
         });
      },
      fetchCategoryProgress: async () => {
         const productId = this.utils.getAuth()?.productId;
         const locationId = this.utils.getAuth()?.locationId;
         const token = this.utils.getAuth()?.tokenId;
         const contactId = this.utils.getAuth()?.contactId;
         const storageName = `${productId}-category-progress`;
         const previousData = JSON.parse(sessionStorage.getItem(storageName) || "{}");
         if (Object.keys(previousData).length > 0) return previousData;
         return await new Promise(async (resolved, reject) => {
            if (token) {
               const categoryIds = await this.data.fetchCategories();
               fetch(
                  `https://services.leadconnectorhq.com/membership/locations/${locationId}/categories/get-progress`,
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
                  },
               )
                  .then((e) => e.json())
                  .then((e) => {
                     sessionStorage.setItem(storageName, JSON.stringify(e));
                     resolved(e);
                  });
            } else {
               console.log("No Token Found!");
            }
         });
      },
      fetchUser: async () => {
         const productId = this.utils.getAuth()?.productId;
         const locationId = this.utils.getAuth()?.locationId;
         const token = this.utils.getAuth()?.tokenId;
         const contactId = this.utils.getAuth()?.contactId;
         const userId = this.utils.getAuth()?.userId;
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
                        "accept-language": "en-US,en;q=0.5",
                        "source": "PORTAL_USER",
                        "token-id": token,
                     },
                     referrer: `https://${locationId}.app.clientclub.net/`,
                     referrerPolicy: "strict-origin-when-cross-origin",
                     body: null,
                     method: "GET",
                     mode: "cors",
                     credentials: "omit",
                  },
               )
                  .then((e) => e.json())
                  .then((e) => {
                     resolved(e);
                     sessionStorage.setItem(storageName, JSON.stringify(e));
                  });
            } else {
               console.log("No Token Found!");
            }
         });
      },
   };

   // This object holds actions methods
   actions = {
      markPostAsCompleteOrIncomplete: async (postId = "", isComplete = true) => {
         const productId = this.utils.getAuth()?.productId;
         const locationId = this.utils.getAuth()?.locationId;
         const token = this.utils.getAuth()?.tokenId;
         const contactId = this.utils.getAuth()?.contactId;
         const userId = this.utils.getAuth()?.externalUserId;
         let req = null;
         try {
            if (isComplete) {
               req = await fetch(
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
                        postId: postId,
                        productId: productId,
                     }),
                  },
               );
            } else {
               req = await fetch(
                  `https://services.leadconnectorhq.com/membership/locations/${locationId}/user-post-completion/${postId}`,
                  {
                     headers: {
                        "accept": "application/json, text/plain, */*",
                        "accept-language": "en-US,en;q=0.6",
                        "authorization": `Bearer ${token}`,
                        "channel": "APP",
                     },
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
      waitForElement: (elementSelector = "", resolveDelay = 1000) => {
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
            }, 0);
         });
      },
      getAuth: () => {
         const acatToken = $cookies.get("acat");
         const catToken = $cookies.get("cat");
         const data = JSON.parse(window.atob(catToken || acatToken) || "{}");
         if (!("productId" in data)) {
            const url = location.href?.split("/products/")[1].split("/")[0].split("?")[0];
            data.productId = url;
         }
         console.log(data, "test2")
         return data;
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

if (!window.CourseTemplate) {
   window.CourseTemplate = new CourseTemplate();
}