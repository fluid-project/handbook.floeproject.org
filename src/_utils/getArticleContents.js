"use strict";

const { parseHTML } = require("linkedom");

/*
 * Given page content markup, this function prepares a list of links to all headings of a given level
 * followed by the page content with ID's injected for each linked heading.
 *
 * This work was undertaken to address GitHub issue #59:
 * https://github.com/fluid-project/handbook.floeproject.org/issues/59
 *
 * @param {String} pageContent - the page content markup
 * @param {String} [summary] - the summary text to display at the top of the article contents list
 * @param {String} [headingsSelector] - a CSS selector to indicate which heading elements to list
 * @param {String} [containerCssClass] - a CSS class for the article contents container element
 *
 * @return {String} - the combined string containing the list markup and modified page markup
 */

// eslint-disable-next-line
module.exports = (pageContent, summary = _("Article Contents"), headingsSelector = "h2", containerCssClass = "article-contents") => {
    const {document} = parseHTML(pageContent);
    const headings = document.querySelectorAll(headingsSelector);

    const summaryCssClass = `${containerCssClass}__summary`;
    const listCssClass = `${containerCssClass}__list`;
    const listItemCssClass = `${containerCssClass}__list-item`;
    const linkCssClass = `${containerCssClass}__link`;

    var articleContentsList = "";

    for (const heading of headings) {
        // remove trailing colons from any headings (e.g. "Topics:")
        var headingTitle = heading.textContent.endsWith(":") ? heading.textContent.slice(0, -1) : heading.textContent;

        articleContentsList += `<li class="${listItemCssClass}"><a class="${linkCssClass}" href="#${heading.id}">${headingTitle}</a></li>`;
    }

    return articleContentsList ?
        `<details class="${containerCssClass}"><summary id="${summaryCssClass}" class="${summaryCssClass}">${summary}</summary>` +
        `<nav aria-labelledby="${summaryCssClass}"><ul class="${listCssClass}">${articleContentsList}</ul></nav></details>` :
        "";
};
