/* eslint-env node */
"use strict";

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Project package file destination.
        pkg: grunt.file.readJSON("package.json"),
        lintAll: {
            sources: {
                json: ["./*.json", ".eslintrc.json", ".stylelintrc.json", "./src/**/*.json"],
                js: ["./*.js", ".eleventy.js", "src/**/*.js", "!src/lib/**/*.js"],
                md: ["./src/documents/*.md", "README.md", "CONTRIBUTING.md", "AUTHORS.md", "./src/404.md", "!dist/**/*.md"]
            }
        }
    });
    // Load the plugin(s):
    grunt.loadNpmTasks("fluid-grunt-lint-all");
    // Custom tasks:
    grunt.registerTask("default", ["lint"]);
    grunt.registerTask("lint", "Perform all standard lint checks.", ["lint-all"]);
};
