"use strict";

const getLang = require("../../_utils/getLang.js");

module.exports = {
    tags: "cards",
    permalink: false,
    eleventyComputed: {
        /* Determine the language of this item based on the language code in the file path. */
        lang: data => getLang(data.page.filePathStem, "audioTactileCards"),
        /* Set the translationKey, used for populating the language switcher, to the file slug. */
        translationKey: data => {
            const lang = getLang(data.page.filePathStem, "audioTactileCards");

            if (data.page.fileSlug === lang) {
                return "index";
            }

            return data.page.fileSlug;
        }
    }
};
