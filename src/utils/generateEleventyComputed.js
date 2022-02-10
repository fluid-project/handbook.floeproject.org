"use strict";

const getLang = require("./getLang.js");
const generatePermalink = require("./generatePermalink.js");

module.exports = (data, collectionName) => {
    return {
        /* Determine the language of this item based on the language code in the file path. */
        lang: getLang(data.page.filePathStem, collectionName),
        /* Set the translationKey, used for populating the language switcher, to the file slug. */
        translationKey: data.page.fileSlug,
        /* Build a permalink using the post title, language key, and translated collection type slug. */
        permalink: generatePermalink(data, collectionName)
    };
};
