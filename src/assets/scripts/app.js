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
const ARIA_EXPANDED = "aria-expanded";

$(document).ready(function () {
    // Selectors for accordion container elements
    const accordionContainerSelectors = ["section", "subsection", "card"];

    for (const accordionSelector of accordionContainerSelectors) {
        // only act on those elements that have the aria-expanded attribute defined
        const toggleButtonSelector = "." + accordionSelector + "__toggle[aria-expanded]";

        /* When "show all" button is clicked, expands all matching accordions to show their contents. */
        $(".sections-control__expand-all").click(() => toggleAccordion(toggleButtonSelector, accordionSelector, true));

        /* When "hide all" button is clicked, collapses all matching accordions to hide their contents. */
        $(".sections-control__collapse-all").click(() => toggleAccordion(toggleButtonSelector, accordionSelector, false));

        $(toggleButtonSelector).click(evt => {
            var toggleButton = evt.delegateTarget;
            var newExpandedState = toggleExpanded(toggleButton);

            if (newExpandedState !== null && newExpandedState !== "") {
                toggleAccordion(toggleButton, accordionSelector, newExpandedState);
            }

            evt.preventDefault();
        });
    }
});

/**
 * Toggles an accordion control's expanded state, setting it to a given value.
 * Assumes that the button controlling the accordion is an element within a specified container.
 *
 * @param {String|jQuery} button - the button element's selector or a jQuery object representing the button
 * @param {String} accordionContainerSelector - the accordion's container selector
 * @param {Boolean} state - the state to which to set the toggle control
 */
const toggleAccordion = function (button, accordionContainerSelector, state) {
    $(button)
        .toggleClass(accordionContainerSelector + "__toggle" + "--expanded", state)
        .closest("." + accordionContainerSelector)
        .toggleClass(accordionContainerSelector + "__content--show", state);
};

/**
 * Toggles the aria-expanded state of an element, if the element has that attribute,
 * or sets it to a given value
 *
 * @param {DOMNode} element - the DOM Node to toggle the aria-expanded state on.
 * @param {Boolean} [newState] - (optional) explicit state to set aria-expanded to.
 *
 * @return {Boolean} - the element's new aria-expanded state, null or empty string if unset
 */
const toggleExpanded = (element, newState) => {
    if (element.hasAttribute(ARIA_EXPANDED)) {
        let isExpanded = element.getAttribute(ARIA_EXPANDED) === "true" ? true : false;
        newState = typeof(newState) === "undefined" ? !isExpanded : newState;

        element.setAttribute(ARIA_EXPANDED, newState ? "true" : "false");
    }

    return element.getAttribute(ARIA_EXPANDED);
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
            toggleExpanded(btn, false);
        }
    });

    // Close the menu when clicking outside of it.
    // This is needed due to Safari not applying focus to clicked inputs.
    // https://bugs.webkit.org/show_bug.cgi?id=22261
    document.body.addEventListener("click", (event) => {
        if (!menuContainer.contains(event.target)) {
            toggleExpanded(btn, false);
        }
    });

    // Close the menu when the "Escape" key is pressed and the menu has focus. Shifts focus back to the button.
    menuContainer.addEventListener("keyup", (event) => {
        if (event.code === "Escape") {
            toggleExpanded(btn, false);
            btn.focus();
        }
    });

    // Toggle expansion of menu when button is clicked
    btn.addEventListener("click", () => {
        toggleExpanded(btn);
    });
};

// initialize the mobile navigation menu
menu.init(".menu");
