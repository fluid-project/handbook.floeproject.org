"use strict";

const { parseHTML } = require("linkedom");

module.exports = function getResourceLinks(pageContent, sideContentHeadings, lang) {
    var output = "";

    const allHeadingsSelector = "h1, h2, h3, h4, h5, h6"; // for selecting all heading elements

    const {document} = parseHTML(pageContent);

    // get every heading where the text matches one of the defined headings
    for (const targetHeading of sideContentHeadings[lang].headings) {
        // get all elements that are headings (h1, h2, ... h6)
        var headingsInContent = document.querySelectorAll(allHeadingsSelector);

        // for each matching element
        for (const headingInContent of headingsInContent) {
            if (headingInContent.textContent === targetHeading) {
                var selectorsToStopAt = getDelimiterSelector(allHeadingsSelector, headingInContent.tagName);

                // get all anchor elements until the next heading element of equal or higher level
                var listsUnderHeading = nextUntil(headingInContent, selectorsToStopAt, "ul");

                for (const list of listsUnderHeading) {
                    var links = extractLinksFromElement(list);

                    for (const link of links) {
                        output += `<li class="side-content__list-item">${link}</li>`;
                    }
                }
            }
        }
    }

    // if there are links, wrap them in an unordered list
    return output ? `<ul class="side-content__list">${output}</ul>` : "";
};

/*
 * Builds an array containing all links (anchor tags) within the given element
 *
 * @param {Element} element - the DOM element to process
 *
 * @return {String[]} - an array of strings containing markup for each link in the element
 */
var extractLinksFromElement = function (element) {
    const linkRegex = /<a[^>]*>.*<\/a>/g;
    const elementMarkup = element.outerHTML;

    return [...elementMarkup.matchAll(linkRegex)].map(x => x[0]);
};

/*
 * Get the subset of all heading selectors which includes the current selector plus all levels above it
 *
 * E.g.
 *      getDelimiterSelector("h1, h2, h3, h4, h5, h6", "h3")
 *      return value is "h1, h2, h3"
 *
 * @param {String} allHeadingsSelector - A CSS selector which includes all heading levels in descending order
 * @param {String} currentMatchSelector - A CSS selector for the currently-matched heading
 *
 * @return {String} - A CSS selector for all headings at or above the current heading's level
 */
var getDelimiterSelector = function (allHeadingsSelector, currentMatchSelector) {
    return allHeadingsSelector.substring(0,
        allHeadingsSelector.indexOf(currentMatchSelector.toLowerCase()) + currentMatchSelector.length
    );
};

/*!
 * Get all following siblings of each element up to but not including the element matched by the selector
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 *
 * Retrieved from https://vanillajstoolkit.com/helpers/nextuntil/ 2022-02-17
 *
 * @param  {Node}   elem     The element
 * @param  {String} selector The selector to stop at
 * @param  {String} filter   The selector to match siblings against [optional]
 * @return {Array}           The siblings
 */
var nextUntil = function (elem, selector, filter) {

    // Setup siblings array
    var siblings = [];

    // Get the next sibling element
    elem = elem.nextElementSibling;

    // As long as a sibling exists
    while (elem) {

        // If we've reached our match, bail
        if (elem.matches(selector)) { break; }

        // If filtering by a selector, check if the sibling matches
        if (filter && !elem.matches(filter)) {
            elem = elem.nextElementSibling;
            continue;
        }

        // Otherwise, push it to the siblings array
        siblings.push(elem);

        // Get the next sibling element
        elem = elem.nextElementSibling;

    }

    return siblings;

};
