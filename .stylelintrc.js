"use strict";

module.exports = {
    extends: "stylelint-config-fluid",
    plugins: ["stylelint-use-logical-spec"],
    ignoreFiles: ["dist/**/*.css"],
    rules: {
        "custom-property-pattern": null,
        "import-notation": "string",
        "selector-class-pattern": null,
        "liberty/use-logical-spec": [
            "always",
            { except: ["float", "top", "left", "right", "bottom"] }
        ]
    }
};
