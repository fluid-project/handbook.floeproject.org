"use strict";

const generateEleventyComputed = require("../../utils/generateEleventyComputed.js");

module.exports = {
    "layout": "layouts/topic-page",
    eleventyComputed: data => generateEleventyComputed(data, "perspectives")
};
