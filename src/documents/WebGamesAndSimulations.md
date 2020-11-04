---
title: Web Games and Simulations
category: Approaches
eleventyNavigation:
    parent: Inclusive Authoring
    key: Web Games and Simulations
    order: 5
---

Interactive games can provide rich learning experiences for many students - but for some, these games are an
accessibility and inclusivity challenge. This guide aims at giving some practical techniques to help improve the
inclusiveness and accessibility of interactive content whether retrofitting existing content or creating a new game from
scratch.

**Scope of this Guide:** This guide deals with interactive games built using standard web technologies such as HTML5,
CSS, SVG, and JavaScript. By using established web standards, the content you create has a higher chance of being
understood by assistive technologies.

## Orienting the User

Regardless of the modality used for interaction, a logical, predictable structure helps users focus on learning instead
of getting stuck on the interaction. Consistency and predicability is important.

Help orient the user by:

* having a consistent structure;
* describing the scene and setting so non-visual users can understand their context;
* identifying the actors and interactive parts;
* giving meaningful and predictable landmarks for the user;
* using progress and status indicators as necessary;
* trying to keep the structure stable. Be mindful about removing items completely from the structure - consider
  disabling elements rather than removing them.

## Player Choices and Controls

Some people make choices easily, while others require more time before making decisions. Choices in games can be
exciting for some, but stressful for others.

If presenting learners with multiple choices that affect the outcome of a game:

* If possible, make choices forgiving: give opportunity for users to recover from, or change their choices.
* Avoid player choices which require decisions within a time limit or provide options to disable such features.

Other best practices are:

* Label each button and control. Labels should use simple terminology and define any terms if necessary.
* Labels should state simply what the button will do. If longer descriptions are needed, use an `aria-describedby`
  property.
* Buttons, links, controls should make it clear what the outcome would be. For example: A choice called "I'm out of
  here" could be changed to "I'm out of here - quit game", or simply "Quit".
* For graphical buttons, like icons on a toolbar, use `aria-labelledby` to label the button and then use a technique to
  hide the text visually. The following article shows how to visibly hide content, but keeping it accessible:
  ["Invisible Content Just for Screen Reader Users" on WebAim.org](http://webaim.org/techniques/css/invisiblecontent/).

## Communicating Events and Actions with Text and Sound

A large part of interactive content are the events that happen during and after a user performs an action. Often these
occur as on-screen visuals, animations, and transitions. The following are some techniques for creating an equivalent
experience for non-sighted learners:

* Use `aria-live` regions to communicate changes to the interface. ["Aria Live Regions" article on Mozilla
  Developers](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) gives an overview of
  how `aria-live` is used.
* Use ARIA `describedby` to write text descriptions of what has happened. ["Using the aria-describedby attribute"
  article on Mozilla
  Developers](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute)
  shows how `describedby` can be used.
* Consider use of various sounds to convey meaning. For example, to convey proximity of one object to another, use a
  tone of increasing pitch like a Theremin (visit [Theremin on Wikipedia](https://en.wikipedia.org/wiki/Theremin)).
  * To find out more about how sound can be used to enhance learning, see [Floe Sonification Work on the Fluid Project
    Wiki](https://wiki.fluidproject.org/display/fluid/Floe+Sonification+Work).

## Content Accessibility / Screen Readers

Follow a good structure and use semantic markup:

* [WebAim.org - Designing for Screen Reader Compatibility](http://webaim.org/techniques/screenreader/)
* [Inclusive Learning Design Handbook - Accessibility Principles](/FollowAccessibilityPrinciples.html)
* Make sure to use HTML 5 semantic markup wherever possible: i.e.
  <https://developer.mozilla.org/en/docs/Web/HTML/Element>
* Use WAI-ARIA to improve accessibility. See: [Mozilla Developer ARIA - good resource for learning, examples,
  blogs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA).

## Visuals

* Provide text descriptions for important visuals: images should have alt-text and longer text descriptions if
  necessary. Use `aria-describedby` or `longdesc` as required. See:
  [http://www.w3.org/WAI/tutorials/images/complex/](http://www.w3.org/WAI/tutorials/images/complex/)
* Content contained in the background (using background CSS property), :before or :after elements are ignored by screen
  readers. Do not put important content within these elements. Use `<figure>` and `<figcaption>` pattern as necessary
  for important graphics / images.
* Ensure good contrast in colours and details. You can check your colours by using the [WebAIM Color Contrast
  Checker](http://webaim.org/resources/contrastchecker/).

## Punctuation

Punctuation helps a screen reader know when to pause, or give proper emphasis.

* Check for missing punctuation - if periods or commas are missing, screen readers would not know to pause.
* Unicode characters are often omitted by screen readers. Ellipsis (...), arrows, and other characters are ignored.
* Acronyms and abbreviations should use the `<abbr>` element with the relevant aria properties. For example:
  * `<abbr role="text" title="kilograms" aria-label="kilograms">kg</abbr>`
  * `<abbr role="text" title="miles per hour" aria-label="miles per hour">mph</abbr>`

## Charts and Graphs

Charts and graphs are an excellent way to convey data in a meaningful way. However, charts and graphs typically favour a
student who is capable of perceiving the content and can cognitively process the information.

To make charts and graphs more inclusive:

* Provide alternatives to charts. Give text descriptions and interpretations of the data, give a table of data.
* Write a good description:
  * Identifies what is being shown (i.e. the purpose of the chart).
  * Describes the values (relative sizes and differences between values).
  * Describes any patterns to may help us understand the data.
  * Summarizes the trend / data pattern.

For additional resources on describing complex diagrams, see:

* PSU’s chart accessibility guide -
  [http://accessibility.psu.edu/images/charts/](http://accessibility.psu.edu/images/charts/).
* W3C's guide on describing complex images -
  [http://www.w3.org/WAI/tutorials/images/complex/](http://www.w3.org/WAI/tutorials/images/complex/).

If using a table of data:

* Follow best practices for table formatting (i.e. proper use of table headers, no table nesting). [See Data Table Best
  Practices at WebAccessibility.com](https://www.webaccessibility.com/best_practices.php?technology_platform_id=8).
* Define any math, symbols, units, or acronyms. For additional information about making math accessible, see
  [Mathematics](/Mathematics.html).
* Simplify and separate data tables if possible. Tables can be cumbersome to navigate (like with screen readers, small
  mobile displays, or screen magnifiers), so splitting and simplifying can be helpful.

## Poet Image Description Tool for Graphs

The Poet Image Description Tool is a web-based tool for creating image descriptions in existing DAISY and EPUB books.
This tool has resources and tools to help content authors create good image descriptions following an extended NCAM
guideline. There is also a math editor which transcribes math into readable format.

See: Poet Image Description Tool at
[http://diagramcenter.org/development/poet.html](http://diagramcenter.org/development/poet.html).

## Cognitive

Information should be presented in a clear concise manner, and where possible starting with general statements first
with more detailed information following.

* Instructions should be clear and concise, using a language that is appropriate.
* If there is any possibility of confusion, make help readily available.
* Avoid really dense content and interactions. Leverage semantic markup such as `<section>` elements with proper `<h1>`
  headings to help group content into navigable chunks.
* Consider presenting information as needed, rather than presenting it all up front.
  * For example, instead of printing instructions up front in text, instructions may be better presented when the user
    is hovering or focused on that control (like a tooltip). This helps reduce cognitive load and gives information only
    when it's needed.

* Consider presenting information as needed, rather than presenting it all up front. Instructions may be better
  presented in context of the button or action (like a tooltip). This helps reduce cognitive load and gives information
  only when it's needed.

For related information, see: [Designing interfaces to meet the needs of users with cognitive
disabilities](https://wiki.fluidproject.org/x/D4DpAg).

## Visual Perception

* Do not rely on colour alone to convey meaning. If this is unavoidable, provide a text label or text descriptions.
* Avoid using transition / animation effects on content that is critical to the outcomes of the game. These effects may
  be missed or misunderstood.
* Use opacity, transparency, alpha channels with caution. These effects may make it more difficult for some users to
  distinguish content from the background.

## Keyboard / Keypad / Single-switch Interaction

Many users, not just users of screen readers, use the keyboard to interact with their computer. Some users may be using
a keypad, a joystick mapped to keys, or a single-switch to navigate a virtual keyboard. A succinct keyboard interaction
will help these learners focus on the content and not the mechanics of interaction.

* Tab order should be consistent with existing user experiences and conventions. Generally tab order follows reading
  order for your region (e.g. left-to-right, top-to-bottom).
* Many screen readers have their own keys related to navigation and interaction. Therefore if your application has
  implemented its own keyboard interaction, it may conflict with keys used by assistive technologies. To understand the
  different modes a screen reader can navigate and consume content, visit "[Understanding screen reader interaction
  modes](http://tink.uk/understanding-screen-reader-interaction-modes/)" on tink.uk.
* Default browser focus styling is often too subtle to be noticeable by many users. It is recommended to use focus
  styling that is more noticeable by either using a thicker border or better colour contrast.

You want to get your users into the experience as quickly as possible:

* If there is a group of navigation elements such as a site menu, navigation breadcrumb, or other common "header"
  features up front, use accessibility "skip" links to jump to the main content. Also using HTML 5 semantic markup such
  as `<nav>` and `<header>` will help screen readers identify content and be able to skip past them if needed.
  * To add a skip link to your content, see this article on WebAIM:
    [http://webaim.org/techniques/skipnav/](http://webaim.org/techniques/skipnav/)
* When tabbing through - focus should "wrap around" to the start of the tab order when the end has been reached. Watch
  for focus traps or hidden elements which may confuse or break the game for users.

## Images, Symbols, Math, Icons, and Glyphs

Make sure that symbols, math notation, and other glyphs have the desired textual output when read by a screen reader.
For example: "1/2" should read as “one half” and not “one slash two”.

* Consider using MathML for math notations. See example: [Mathematics](/Mathematics.html).
* Acronyms and abbreviations should use the `<abbr>` element with the relevant aria properties. For example:
  * `<abbr role="text" title="kilograms" aria-label="kilograms">kg</abbr>`
  * `<abbr role="text" title="miles per hour" aria-label="miles per hour">mph</abbr>`
  * Also see:
    [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr)

* For icons and symbols, use alt-text (if it is an image) and aria-label
  [http://www.w3.org/WAI/GL/wiki/Using_aria-label_to_provide_labels_for_objects"](http://www.w3.org/WAI/GL/wiki/Using_aria-label_to_provide_labels_for_objects)
* If images are in the background and are cosmetic, they do not require text descriptions. Provide text descriptions for
  visual content that is important to the interaction.
* Avoid using standard characters to create graphics as each character is read back individually. Example: -> is read
  back as "hyphen greater than" although the author likely intended it to be a right-pointing arrow.

Unicode characters offer a few common glyphs which can be used in place of image icons. If using Unicode characters,
something like the following code snippet would be helpful:

HTML:

```html
<span aria-labelledby="left-arrow">&larr;</span>
<span id="left-arrow" class="hidden">Left arrow</span>
```

CSS:

```css
.hidden {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
}
```
