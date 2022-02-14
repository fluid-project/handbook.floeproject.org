"use strict";

const generateEleventyComputed = require("../../utils/generateEleventyComputed.js");

module.exports = {
    "layout": "layouts/topic-page",
    "permalink": "perspectives/{{ title | slugify }}/",
    eleventyComputed: data => generateEleventyComputed(data, "perspectives")
};
