"use strict";

/*
 * Given a collection of "pages", iterates over the collection and returns the content
 * for the item which has the same key as the one provided
 *
 * @param {Object[]} collection - the collection of content objects to iterate on
 * @param {String} navigationKey - the eleventyNavigation key of the object to match
 *
 * @return {String} - The content of the matching object from the collection
 */
module.exports = (collection, navigationKey) => {
    const filteredCollection = collection.filter(page => page.data.eleventyNavigation.key === navigationKey);

    return filteredCollection[0].data.content;
};
