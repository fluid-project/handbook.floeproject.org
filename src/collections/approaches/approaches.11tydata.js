"use strict";

const generateEleventyComputed = require("../../utils/generateEleventyComputed.js");

module.exports = {
    "layout": "layouts/topic-page",
    "permalink": "approaches/{{ title | slugify }}/",
    eleventyComputed: data => generateEleventyComputed(data, "approaches")
};
