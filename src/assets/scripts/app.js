/*
Copyright the Inclusive Learning Design Handbook copyright holders.

See the AUTHORS.md file at the top-level directory of this distribution and at
https://github.com/fluid-project/handbook.floeproject.org/raw/main/AUTHORS.md.

Licensed under the New BSD license. You may not use this file except in compliance with this License.

You may obtain a copy of the New BSD License at
https://github.com/fluid-project/handbook.floeproject.org/raw/main/LICENSE.md.
*/

"use strict";

const menu = {};

/**
 * Given a jQuery event, toggles the aria-expanded state of its target element
 * and subsequently toggles an associated accordion control.
 * Any default action by the event is prevented.
 *
 * @param {Event} evt - the jQuery event
 * @param {String} accordionContainerSelector - the CSS selector for the accordion's container
 */
const toggleExpandedState = function (evt, accordionContainerSelector) {
    var target = $(evt.delegateTarget);
    var expandedState = target.attr("aria-expanded") === "true" ? true : false;
    toggleAccordion(target, accordionContainerSelector, !expandedState);
    evt.preventDefault();
};

/**
 * Toggles an accordion control's expanded state, setting it to a given value.
 * Assumes that the button controlling the accordion is an element within a specified container.
 *
 * @param {String|jQuery} button - the button element's selector or a jQuery object representing the button
 * @param {String} accordionContainerSelector - the accordion's container selector
 * @param {Boolean} state - the state to which to set the toggle control
 */
const toggleAccordion = function (button, accordionContainerSelector, state) {

    /*
     * Ensure aria-expanded exists before toggling the accordion, in case this is an "empty" accordion
     * and is not intended to be expanded (i.e. if it's a card with no content)
     *
     * Please see this page for more detail on the syntax:
     * https://css-tricks.com/snippets/jquery/make-an-jquery-hasattr/
     */
    if ($(button)[0].hasAttribute("aria-expanded")) {
        $(button)
            .attr("aria-expanded", state)
            .toggleClass(accordionContainerSelector + "__toggle" + "--expanded", state)
            .closest("." + accordionContainerSelector)
            .toggleClass(accordionContainerSelector + "__content--show", state);
    }
};

$(document).ready(function () {
    // Selectors for accordion container elements
    const accordionContainerSelectors = ["section", "subsection", "card"];

    for (const accordionSelector of accordionContainerSelectors) {
        const toggleButtonSelector = "." + accordionSelector + "__toggle";

        /* When "show all" button is clicked, expands all matching accordions to show their contents. */
        $(".sections-control__expand-all").click(() => toggleAccordion(toggleButtonSelector, accordionSelector, true));

        /* When "hide all" button is clicked, collapses all matching accordions to hide their contents. */
        $(".sections-control__collapse-all").click(() => toggleAccordion(toggleButtonSelector, accordionSelector, false));

        $(toggleButtonSelector).click(evt => toggleExpandedState(evt, accordionSelector));
    }
});

/**
 * Toggles the aria-expanded state of an element.
 *
 * @param {DOMNode} element - the DOM Node to toggle the aria-expanded state on.
 * @param {Boolean} [state] - (optional) explicit state to set aria-expanded to.
 */
menu.toggleExpansion = (element, state) => {
    let isExpanded = element.getAttribute("aria-expanded") === "true" ? true : false;
    state = typeof(state) !== "undefined" ? state : !isExpanded;

    element.setAttribute("aria-expanded", state ? "true" : "false");
};

/**
 * Initializes a menu widget.
 *
 * @param {String} container - A CSS selector for the menu's container.
 * @param {String} [button] - (optional) A CSS slector for the menu's button. Defaults to "button".
 * @throws {Exception} - if no element is found for the container selector.
 * @throws {Exception} - if no element is found for the button selector within the container element.
 */
menu.init = (container, button = "button") => {
    let menuContainer = document.querySelector(container);

    if (!menuContainer) {
        throw new Error(`No element found for container selector: ${container}`);
    }

    let btn = menuContainer.querySelector(button);

    if (!btn) {
        throw new Error(`No element found for button selector: ${button}`);
    }

    // Close the menu when focus is moved away from the menu
    menuContainer.addEventListener("focusout", (event) => {
        if (!menuContainer.contains(event.relatedTarget)) {
            menu.toggleExpansion(btn, false);
        }
    });

    // Close the menu when clicking outside of it.
    // This is needed due to Safari not applying focus to clicked inputs.
    // https://bugs.webkit.org/show_bug.cgi?id=22261
    document.body.addEventListener("click", (event) => {
        if (!menuContainer.contains(event.target)) {
            menu.toggleExpansion(btn, false);
        }
    });

    // Close the menu when the "Escape" key is pressed and the menu has focus. Shifts focus back to the button.
    menuContainer.addEventListener("keyup", (event) => {
        if (event.code === "Escape") {
            menu.toggleExpansion(btn, false);
            btn.focus();
        }
    });

    // Toggle expansion of menu when button is clicked
    btn.addEventListener("click", () => {
        menu.toggleExpansion(btn);
    });
};

// initialize the mobile navigation menu
menu.init(".menu");
