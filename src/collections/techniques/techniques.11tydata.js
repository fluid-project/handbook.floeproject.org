"use strict";

const generatePermalink = require("../../utils/generatePermalink.js");
const getLang = require("../../utils/getLang.js");

module.exports = {
    layout: "layouts/topic-page",
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
        },
        /* Build a permalink using the post title, language key, and translated collection type slug. */
        permalink: data => generatePermalink(data, "techniques")
    }
};
