"use strict";

const fluid = require("infusion");
const { JSDOM } = require("jsdom");

/*
 * Given page content markup, this function prepares a list of links to all headings of a given level
 * followed by the page content with ID's injected for each linked heading.
 *
 * This work was undertaken to address GitHub issue #59:
 * https://github.com/fluid-project/handbook.floeproject.org/issues/59
 *
 * @param {String} pageContent - the page content markup
 * @param {String} summary - the summary text to display at the top of the article contents list
 * @param {String} [headingsSelector] - a CSS selector to indicate which heading elements to list
 *
 * @return {String} - the combined string containing the list markup and modified page markup
 */
module.exports = (pageContent, summary = "Article Contents", headingsSelector = "h2") => {
    const dom = new JSDOM(pageContent);
    const headings = dom.window.document.querySelectorAll(headingsSelector);
    const listItemCssClass = "article-contents__list-item";
    const linkCssClass = "article-contents__link";

    var articleContentsList = "";

    for (const heading of headings) {
        var headingID = fluid.allocateSimpleId(heading); // also assigns the ID to that heading
        var headingTitle = heading.textContent.endsWith(":") ? heading.textContent.slice(0, -1) : heading.textContent;

        articleContentsList += `<li class="${listItemCssClass}"><a class="${linkCssClass}" href="#${headingID}">${headingTitle}</a></li>`;
    }

    const containerCssClass = "article-contents";
    const summaryCssClass = "article-contents__summary";
    const listCssClass = "article-contents__list";

    var articleContentsMarkup = articleContentsList ?
        `<details class="${containerCssClass}"><summary id="${summaryCssClass}" class="${summaryCssClass}">${summary}</summary>` +
        `<nav aria-labelledby="${summaryCssClass}"><ul class="${listCssClass}">${articleContentsList}</ul></nav></details>` :
        "";

    // prepend the article contents markup onto the modified page contents
    return articleContentsMarkup + dom.serialize();
};
