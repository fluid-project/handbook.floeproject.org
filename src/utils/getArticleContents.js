"use strict";

const fluid = require("infusion");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = (pageContent, summary, headingsSelector) => {
    const dom = new JSDOM(pageContent);
    const headings = dom.window.document.querySelectorAll(headingsSelector || "h2");

    var articleContentsList = "";

    for (const heading of headings) {
        const listItemCssClass = "article-contents__list-item";
        const linkCssClass = "article-contents__link";

        var headingID = fluid.allocateSimpleId(heading); // also assigns the ID to that heading
        var headingTitle = heading.textContent.endsWith(":") ? heading.textContent.slice(0, -1) : heading.textContent;

        articleContentsList += `<li class="${listItemCssClass}"><a class="${linkCssClass}" href="#${headingID}">${headingTitle}</a></li>`;
    }

    const containerCssClass = "article-contents";
    const summaryCssClass = "article-contents__summary";
    const listCssClass = "article-contents__list";

    var summaryText = summary || "Article Contents";

    var articleContentsMarkup = articleContentsList ?
        `<details class="${containerCssClass}"><summary class="${summaryCssClass}">${summaryText}</summary>` +
        `<ul class="${listCssClass}">${articleContentsList}</ul></details>` :
        "";

    // prepend the article contents markup onto the modified page contents
    return articleContentsMarkup + dom.serialize();
};
