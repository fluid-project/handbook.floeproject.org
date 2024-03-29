"use strict";

const i18n = require("eleventy-plugin-i18n-gettext");
const { generatePermalink } = require("eleventy-plugin-fluid");

module.exports = {
    /* Build a permalink using the page title and language. */
    permalink: data => {
        const locale = data.locale;
        return generatePermalink(data, "pages", false, i18n._(locale, "page"));
    },
    layout: "layouts/page.njk",
    eleventyComputed: {
        eleventyNavigation: data => {
            if (Object.prototype.hasOwnProperty.call(data, "eleventyNavigation") && Object.prototype.hasOwnProperty.call(data.eleventyNavigation, "key")) {
                /* If this page has `eleventyNavigation` front-matter set, use that */
                return data.eleventyNavigation;
            } else if (data.order) {
                /* If this page has an `order` attribute, create an Eleventy Navigation object for it. */
                return {
                    parent: data.locale,
                    order: data.order,
                    /* If a key is set, use that for the navigation item label; otherwise use the page title. */
                    key: Object.prototype.hasOwnProperty.call(data, "key") ? data.key : data.title
                };
            }
            return false;
        },
        lang: data => data.locale,
        langDir: data => data.supportedLanguages[data.locale].dir
    }
};
