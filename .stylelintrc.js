"use strict";

module.exports = {
    extends: ["stylelint-config-fluid", "stylelint-config-standard-scss"],
    plugins: ["stylelint-use-logical-spec"],
    ignoreFiles: ["_site/**/*.scss"],
    rules: {
        indentation: 4,
        "custom-property-pattern": null,
        "import-notation": "string",
        "scss/at-if-closing-brace-space-after": null,
        "scss/at-if-closing-brace-newline-after": null,
        "scss/no-global-function-names": null,
        "selector-class-pattern": null,
        "liberty/use-logical-spec": [
            "always",
            { except: ["float", "top", "left", "right", "bottom"] }
        ]
    }
};
