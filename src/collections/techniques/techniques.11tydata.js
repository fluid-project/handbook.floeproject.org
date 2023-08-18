"use strict";

const i18n = require("eleventy-plugin-i18n-gettext");
const { generatePermalink } = require("eleventy-plugin-fluid");

module.exports = {
    /* Build a permalink using the page title and language. */
    permalink: data => {
        const locale = data.locale;
        return generatePermalink(data, "techniques", i18n._(locale, "techniques"));
    },
    eleventyComputed: {
        lang: data => data.locale,
        langDir: data => data.supportedLanguages[data.locale].dir
    }
};
