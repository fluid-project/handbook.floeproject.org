/*
Copyright the Inclusive Learning Design Handbook copyright holders.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/handbook.floeproject.org/raw/main/AUTHORS.md.

Licensed under the New BSD license. You may not use this file except in compliance with this License.

You may obtain a copy of the New BSD License at
https://github.com/fluid-project/handbook.floeproject.org/raw/main/LICENSE.md.
*/

"use strict";

const fs = require("fs");

const fluidPlugin = require("eleventy-plugin-fluid");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const MarkdownIt = require("markdown-it");
const navigationPlugin = require("@11ty/eleventy-navigation");
const rssPlugin = require("@11ty/eleventy-plugin-rss");
const syntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");

// Import transforms
const htmlMinTransform = require("./src/transforms/html-min-transform.js");
const parseTransform = require("./src/transforms/parse-transform.js");

// Import data files
const siteConfig = require("./src/_data/config.json");
const getResourceLinks = require("./src/utils/getResourceLinks.js");

module.exports = function (config) {
    config.setUseGitIgnore(false);

    // Filters
    const md = new MarkdownIt({
        html: true,
        quotes: "“”‘’"
    });
    config.addFilter("markdown", (content) => {
        return md.render(content);
    });

    // Transforms
    config.addTransform("htmlmin", htmlMinTransform);
    config.addTransform("parse", parseTransform);

    // Passthrough copy
    config.addPassthroughCopy("src/_redirects");
    config.addPassthroughCopy({"src/admin/config.yml": "admin/config.yml"});
    config.addPassthroughCopy({"src/assets/icons": "/"});
    config.addPassthroughCopy({"src/assets/images": "assets/images"});

    // Plugins
    config.addPlugin(EleventyRenderPlugin);
    config.addPlugin(fluidPlugin);
    config.addPlugin(navigationPlugin);
    config.addPlugin(rssPlugin);
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

    // 404
    config.setBrowserSyncConfig({
        callbacks: {
            ready: function (err, bs) {

                bs.addMiddleware("*", (req, res) => {
                    const content_404 = fs.readFileSync("dist/404.html");
                    // Provides the 404 content without redirect.
                    res.write(content_404);
                    res.writeHead(404);
                    res.end();
                });
            }
        }
    });

    config.on("beforeBuild", () => {
        if (!siteConfig.languages[siteConfig.defaultLanguage]) {
            process.exitCode = 1;
            throw new Error(`The default language, ${siteConfig.defaultLanguage}, configured in src/_data/config.json is not one of your site's supported languages.`);
        }
    });

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: "_includes"
        },
        passthroughFileCopy: true
    };
};
