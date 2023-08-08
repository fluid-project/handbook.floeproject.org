"use strict";

module.exports = {
    extends: [
        "fluid",
        "plugin:yml/standard"
    ],
    ignorePatterns: ["dist/", "src/_locales/messages.js", "!.*.cjs", "!.*.js"],
    env: {
        amd: true,
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2020
    }
};
