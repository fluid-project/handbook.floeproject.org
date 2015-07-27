---
title: WAI-ARIA
layout: default
category: Inclusive EPUB 3
---
While HTML 5 semantic markup and epub:type go a long way to help your publication's structure and content be understood by reader systems, there are times when WAI-ARIA  is needed to help convey relationships and function of elements on a page.

WAI-ARIA is used primarily with scripting, but it can also be used to describe the roles and functions of elements on a page. For example, a list of text items used as a toolbar or navigation menu can be described using WAI-ARIA this way:

```
<nav>
    <ul class="buttons" title="Website navigation">
        <li id="Home" aria-labelledby="navigation_home" aria-controls="my_content" aria-pressed="false" tabindex="0" role="button">Home</li>
        <li id="Blog" aria-labelledby="navigation_blog" aria-controls="my_content" aria-pressed="false" tabindex="0" role="button">Blog</li>
        <li id="About" aria-labelledby="navigation_about" aria-controls="my_content" aria-pressed="false" tabindex="0" role="button">About</li>
     </ul>
</nav>

<p id="navigation_home" class="hide_offscreen">Go Home</p>
<p id="navigation_blog" class="hide_offscreen">Blog</p>
<p id="navigation_about" class="hide_offscreen">About us</p>
```

Even though scripting is optional in EPUB 3, scripting can be used to add meaningful interactions to an otherwise static EPUB 3 book. If scripting is used in EPUB 3, WAI-ARIA can help describe content that is controlled or updated dynamically. For example, consider the case of a script on the page which behaves like a timer that begins counting down to zero once the user presses a button. Typically, the area that counts down the seconds would not be accessible to users using audio only, but with WAI-ARIA, you can describe the updating numbers this way:

```
<div id="region1Container">
    <label id="live1Label" for="liveregion1">Seconds left</label>:
    <div id="liveregion1" class="region" aria-relevant="all" aria-atomic="true"
        aria-live="assertive" aria-labelledby="live1Label" role="timer">XXX</div>
</div>
```

WAI-ARIA goes a long way to help users and reader systems understand the relationships and interactions between contents on a page, especially if the EPUB 3 book is using scripting.

##WAI-ARIA and Math##
Math notation and equations is traditionally challenging to make accessible and comprehensible, but this can be improved thanks to some WAI-ARIA markup. With WAI-ARIA, math content can be:
* given a literal translation to clarify notation
* elaborated with longer descriptions and definitions to give an additional avenue for understanding

Refer to the [Mathematics](/Mathematics.html) section for techniques to adding inclusive math content to EPUB.

## Further reading: ##
* <a class="link-external" href="http://www.w3.org/WAI/intro/aria"> WAI-ARIA W3C Web Accessibility Initiative Aria Overview</a>
* <a class="link-external" href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"> "Highly Accessible Interactive EPUB" - by Liza Daly, Threepress / Ibis Reader</a>
* <a class="link-external" href="http://www.idpf.org/accessibility/guidelines/content/script/aria.php"> "WAI-ARIA & Custom Controls" - by IDPF</a>
* <a class="link-external" href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"> "ARIA" - by Mozilla Developer Network</a>
* <a class="link-external" href="http://oaa-accessibility.org/examples/"> "Open AJAX Examples" - by Open Ajax Alliance</a>
* <a class="link-external" href="http://alistapart.com/article/the-accessibility-of-wai-aria"> "The Accessibility of WAI-ARIA" - by Detlev Fischer, A List Apart</a>
