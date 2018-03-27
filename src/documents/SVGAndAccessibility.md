---
title: SVG and Accessibility
subheader:
layout: default
category: Approaches
---

## What is SVG?

SVG (Scalable Vector Graphics) is a means of describing vector graphics in markup on a web page. This can be advantageous for inclusive design because vector graphics can be easily resized, and scaled up or down to different resolutions without loss of quality. SVG can also be augmented with additional semantics that make them compatible with assistive technologies such as screen readers.

## Simple SVG Example

### Source Code
```
<svg width="10em" height="5em" viewBox="0 0 1200 400"
     xmlns="http://www.w3.org/2000/svg" version="1.1">
  <desc>Two small rectangles, one red, one green.</desc>
  <rect x="300" y="150" width="400" height="200"
        fill="red" stroke="black" stroke-width="5" />
  <rect x="725" y="150" width="400" height="200"
      fill="green" stroke="black" stroke-width="5" />
</svg>
```
### Rendered SVG

<svg width="10em" height="5em" viewBox="0 0 1200 400"
     xmlns="http://www.w3.org/2000/svg" version="1.1">
  <desc>Two small rectangles, one red, one green.</desc>
  <rect x="300" y="150" width="400" height="200"
        fill="red" stroke="black" stroke-width="5" />
  <rect x="800" y="150" width="400" height="200"
      fill="green" stroke="black" stroke-width="5" />
</svg>

## Traditional Web Image Accessibility

The familiar `<img>` image tag embeds an existing image file onto a web page. Access is typically provided to such images through alternate textual description by the `alt` attribute. Images are one of the most common and familiar challenges in web accessibility and are well-covered by the <a href="https://www.w3.org/TR/WCAG20/" target="_blank" class="link-external">Web Content Accessibility Guidelines</a>.

SVGs are a very different approach to images on webpages, and require somewhat different approaches to accessibility to follow the [Accessibility Principles](/AccessibilityPrinciples.html) of perceivability, understandability and operability. Rather than embedding bitmap image files directly, they supply markup to describe an image and rely on the end user's browser to interpret them and render the image.

### Bitmap Graphics vs. Vector Graphics

<a href="https://en.wikipedia.org/wiki/Bitmap" target="_blank" class="link-external">Bitmap graphics</a> are made up of rectangular grids of pixels, while <a href="https://en.wikipedia.org/wiki/Vector_graphics" target="_blank" class="link-external">vector graphics</a> build up images from simple polygons. One obvious and frequently noted advantage of this is that vector graphics are easily scaled up without the loss of resolution.

SVG is a specific W3C standard for defining vector graphics in XML that most modern browsers support.

## What Possibilities Does SVG Offer for Inclusive Design?

Because SVG is expressed in pure markup and then interpeted and rendered by the browser in a similar manner to HTML, it has some interesting potential for inclusive design:

* It's a technology based on web standards, and requires no separate plug-ins to support.
* Because it forms part of the <a href="https://en.wikipedia.org/wiki/Document_Object_Model" target="_blank" class="link-external">Document Object Model</a>, it can be transformed by client-side code that interacts with the DOM, giving it potential for adaptation into alternative formats or reuse.
* SVG code is highly portable and can be shared or embedded in another context simply by embedding its markup.
* Individual or grouped polygons can have different markup, such as different ARIA attributes; this can help support building more complex interactions
* The structure, content and presentation of SVG can be separated, similar to best practices around HTML.

## How Do We Support the Accessibility of SVG Content?

Techniques and approaches to supporting accessible SVG include:

* Use `aria-role` to describe the role of SVG content in the page. This can avoid unexpected or confusing behaviour by ATs interpreting the markup.
  * For example, a fuctionally static image created from a combination of SVG elements may have individual elements read by a screen reader. Assigning `aria-role="image"` can prevent this behaviour and allow a screen reader to interpret and convey the image as a single image element, with appropriate alternate text description.
* Use the `title` and `desc` elements made available by SVG for providing text alternatives.
* Don't make use of `aria-labelledby`, `aria-labels`, `aria-describedby`, `aria-describes` and other ARIA attributes to indicate related elements both within the SVG and between the SVG and the rest of the document.
* If using SVG for animated or interactive elements, use ARIA attributes and provide keyboard alternatives to interaction; some guidance for games and simulations using SVG can be found at the [Inclusive Learning Design Handbook entry on Web Games and Simulations](/WebGamesAndSimulations.html).
* Where possible consider the use of <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/SVG_and_CSS" target="_blank" class="link-external">CSS to manage the visual appearance of SVG elements</a> as a means of separating presentation from structure and content; this will make adaptation to alternative presentations easier.

## Caveats

SVG is a large and complex non-HTML technology, albeit one that is supported by modern web browsers well enough to offer many useful possibilities. However

* Complex uses of SVG should be considered with <a href="http://caniuse.com/#cats=SVG" target="_blank" class="link-external">reference to browser support for specialized features</a>, especially if you are interested in supporting older browsers, or advanced effects such as filters and path clipping.
* If features can be implemented or information presented using only HTML, this is probably preferable to using SVG.
* Consider whether or not it makes sense to provide an alternative presentation using HTML to any SVG content, such as a data table for data rendered in a chart as is found in the <a href="http://build.fluidproject.org/chartAuthoring/demos/" target="_blank" class="link-external">FLOE Chart Authoring Tool</a>.

## Resources

### General SVG Resources

* <a href="https://developer.mozilla.org/en-US/docs/Web/SVG" target="_blank" class="link-external">Mozilla Developer Network - SVG</a>
* <a href="https://sarasoueidan.com/tags/svg/" target="_blank" class="link-external">Sara Soueidan's SVG Articles</a>

### Accessibility-specific Articles

* <a href="http://www.sitepoint.com/tips-accessible-svg/" target="_blank" class="link-external">Tips for Creating Accessible SVG</a>
* <a href="http://schepers.cc/authoring-accessible-svg" target="_blank" class="link-external">Current State of Authoring Accessible SVG</a>
* <a href="http://www.sitepoint.com/creating-accessible-breakout-game-using-web-audio-svg/" target="_blank" class="link-external">Creating an Accessible Breakout Game Using Web Audio and SVG</a>
* <a href="https://www.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/" target="_blank" class="link-external">Using ARIA to enhance SVG accessibility</a>

### Specifications

* <a href="https://www.w3.org/TR/SVG/" target="_blank" class="link-external">W3C SVG 1.1 Specification</a>
* <a href="https://www.w3.org/TR/SVG/" target="_blank" class="link-external">W3C SVG 2 Specification</a> (working draft)
* <a href="https://www.w3.org/TR/svg-aam-1.0/" target="_blank" class="link-external">SVG Accessibility API Mappings</a> (working draft)

### Open Source Libraries for Working With SVG
* <a href="https://d3js.org/" target="_blank" class="link-external">D3.js</a> - a powerful, web standards-based library with many functions for building SVG-based charts, graphs and other data visualizations.
* <a href="http://snapsvg.io/" target="_blank" class="link-external">Snap.svg</a> - an SVG library emphasizing modern browsers and the newest SVG features.
  * By contrast, <a href="https://github.com/DmitryBaranovskiy/raphael" target="_blank" class="link-external">Raphaël</a> focuses on cross-browser compatibility.
