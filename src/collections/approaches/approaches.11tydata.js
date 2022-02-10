"use strict";

const generateEleventyComputed = require("../../utils/generateEleventyComputed.js");

module.exports = {
    eleventyComputed: data => generateEleventyComputed(data, "approaches")
};
