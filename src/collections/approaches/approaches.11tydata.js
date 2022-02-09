"use strict";

const generateEleventyComputed = require("../../utils/generateEleventyComputed.js");

module.exports = {
    layout: "layouts/base.njk",
    eleventyComputed: generateEleventyComputed("approaches")
};
