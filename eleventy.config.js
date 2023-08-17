/*
Copyright the Inclusive Learning Design Handbook copyright holders.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/handbook.floeproject.org/raw/main/AUTHORS.md.

Licensed under the New BSD license. You may not use this file except in compliance with this License.

You may obtain a copy of the New BSD License at
https://github.com/fluid-project/handbook.floeproject.org/raw/main/LICENSE.md.
*/

"use strict";

const fluidPlugin = require("eleventy-plugin-fluid");
const navigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");

// Import transforms
const parseTransform = require("./src/_transforms/parse-transform.js");

// Import data files
const siteConfig = require("./src/_data/config.json");
const getResourceLinks = require("./src/_utils/getResourceLinks.js");
const getArticleContents = require("./src/_utils/getArticleContents.js");
const getContentsFromNavKey = require("./src/_utils/getContentsFromNavKey.js");
const slugify = require("@sindresorhus/slugify");

module.exports = function (config) {
    config.setUseGitIgnore(false);

    // Transforms
    config.addTransform("parse", parseTransform);

    // Passthrough copy
    config.addPassthroughCopy("src/_redirects");
    config.addPassthroughCopy({"src/assets/fonts": "assets/fonts"});
    config.addPassthroughCopy({"src/assets/icons": "/"});
    config.addPassthroughCopy({"src/assets/images": "assets/images"});

    // Plugins
    config.addPlugin(fluidPlugin, {
        defaultLanguage: "en-CA",
        localesDirectory: "src/_locales",
        supportedLanguages: {
            "en-CA": {
                slug: "en",
                name: "English"
            },
            "fr-CA": {
                slug: "fr",
                name: "Français",
                dir: "ltr",
                uioSlug: "fr"
            }
        },
        markdown: {
            plugins: [
                ["markdown-it-anchor", { slugify: s => slugify(s) }]
            ]
        },
        css: {
            enabled: false
        },
        sass: {
            enabled: true
        }
    });
    config.addPlugin(navigationPlugin);
    config.addPlugin(syntaxHighlightPlugin);

    // Shortcodes
    config.addShortcode("svg_sprite", (sprite, altText, ariaHidden = true) => {
        const altTextMarkup = altText ? `<title>${altText}</title>` : "";
        const ariaHiddenMarkup = ariaHidden ? " aria-hidden=\"true\"" : "";
        return `<svg class="ildh-${sprite}"${ariaHiddenMarkup}>${altTextMarkup}<use xlink:href="/assets/images/sprites.svg#${sprite}"></use></svg>`;
    });

    config.addShortcode("extract_resource_links", (content, sideContentHeadings, lang) => {
        return getResourceLinks(content, sideContentHeadings, lang);
    });

    config.addShortcode("article_contents", (content, summary, headingsSelector, containerCssClass) => {
        return getArticleContents(content, summary, headingsSelector, containerCssClass);
    });

    config.addShortcode("content_from_nav_key", (collection, navigationKey) => {
        return getContentsFromNavKey(collection, navigationKey.toString());
    });

    /*
        Provide a custom duplicate of eleventy-plugin-fluid's uioInit shortcode in
        order to run it without the text-size preference until issue #57 is solved

        This is called from base.njk and home.njk

        https://github.com/fluid-project/handbook.floeproject.org/issues/57
    */
    config.addShortcode("uioCustomInit", (locale, direction) => {
        let options = {
            preferences: [
                "fluid.prefs.lineSpace",
                "fluid.prefs.textFont",
                "fluid.prefs.contrast",
                "fluid.prefs.tableOfContents",
                "fluid.prefs.enhanceInputs"
            ],
            auxiliarySchema: {
                terms: {
                    templatePrefix: "/lib/infusion/src/framework/preferences/html",
                    messagePrefix: "/lib/infusion/src/framework/preferences/messages"
                },
                "fluid.prefs.tableOfContents": {
                    enactor: {
                        tocTemplate: "/lib/infusion/src/components/tableOfContents/html/TableOfContents.html",
                        tocMessage: "/lib/infusion/src/framework/preferences/messages/tableOfContents-enactor.json",
                        ignoreForToC: {
                            ignoreClass: ".flc-toc-ignore"
                        }
                    }
                }
            },
            prefsEditorLoader: {
                lazyLoad: true
            },
            locale: locale,
            direction: direction
        };

        return `<script>fluid.uiOptions.multilingual(".flc-prefsEditor-separatedPanel", ${JSON.stringify(options)});</script>`;
    });

    config.on("beforeBuild", () => {
        if (!siteConfig.languages[siteConfig.defaultLanguage]) {
            process.exitCode = 1;
            throw new Error(`The default language, ${siteConfig.defaultLanguage}, configured in src/_data/config.json is not one of your site's supported languages.`);
        }
    });

    return {
        dir: {
            input: "src"
        },
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk"
    };
};
