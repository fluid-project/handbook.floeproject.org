"use strict";

const fs = require("fs");
const fluidPlugin = require("@fluid-project/eleventy-plugin-fluid");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const parseTransform = require('./src/transforms/parse-transform.js');

module.exports = function (config) {
	config.setUseGitIgnore(false);
	
	// Layouts
	config.addLayoutAlias('default', 'layouts/default.njk');

	// Plugins
	config.addPlugin(fluidPlugin);
	config.addPlugin(syntaxHighlight);

	// Transforms
	config.addTransform('parse', parseTransform);

	// Passthrough copy
	config.addPassthroughCopy({"src/assets/images": "assets/images"});
	config.addPassthroughCopy({"src/assets/fonts": "assets/fonts"});
	config.addPassthroughCopy({"node_modules/docs-core/src/static/css": "assets/styles"})
	config.addPassthroughCopy({"node_modules/docs-core/src/static/lib": "lib"})

	return {
		dir: {
		  input: 'src',
		  output: 'dist'
		},
		// To use a template language, use a file with the appropriate file extension.
        // See: https://www.11ty.dev/docs/languages/
        // If you wish to use a template language within an HTML or Markdown file,
        // you can configure this in the file's header.
        // See: https://www.11ty.dev/docs/languages/#templateengineoverride-examples
        htmlTemplateEngine: false,
        markdownTemplateEngine: "hbs",
        passthroughFileCopy: true
 	};
};
