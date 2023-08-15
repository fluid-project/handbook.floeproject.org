"use strict";

const i18n = require("eleventy-plugin-i18n-gettext");
const { generatePermalink } = require("eleventy-plugin-fluid");
const getLang = require("../../_utils/getLang.js");

module.exports = {
    /* Build a permalink using the page title and language. */
    permalink: data => {
        const locale = data.locale || data.config.defaultLanguage;
        return generatePermalink(data, "techniques", false, i18n._(locale, "technique"));
    },
    eleventyComputed: {
        /* Determine the language of this item based on the language code in the file path. */
        lang: data => getLang(data.page.filePathStem, "techniques"),
        /* Set the translationKey, used for populating the language switcher, to the file slug. */
        translationKey: data => {
            const lang = getLang(data.page.filePathStem, "techniques");

            if (data.page.fileSlug === lang) {
                return "index";
            }

            return data.page.fileSlug;
        }
    }
};
