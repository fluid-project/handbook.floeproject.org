---
title: Semantic Markup in EPUB 3
layout: default
category: Techniques
---

EPUB 3 books can be created from HTML5, and the same principles for creating well-formed, semantically sound web content apply. For an EPUB 3 author, there are two tools available: <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element" rel="nofollow" target="_blank" class="link-external">HTML 5 semantic elements</a>, and <a href="http://www.idpf.org/accessibility/guidelines/content/semantics/epub-type.php" rel="nofollow" target="_blank" class="link-external">`epub:type`</a>.

HTML 5 semantic markup gives meaning to otherwise anonymous containers or text structures. For example, you can use the `<section>` element to denote changes in topic, or `<aside>` to indicate content that is secondary in importance.

EPUB 3 also provides semantics more suitable for publications. In addition to using HTML 5 semantic markup, you can describe the same HTML 5 markup as being chapters, or as a sidebar.

Here is an example:

```
<section epub:type="chapter">
   <h1>Chapter 1: At the Start</h1>
    We always start with a good idea.
    <aside epub:type="sidebar">
        In 2013, 9 out of 10 ideas were great.
    </aside>
</section>
```

The "EPUB 3 Content Document" article by Matt Garrish is a great place to start learning about semantics in EPUB 3:  <a href="http://epubzone.org/news/epub-3-content-documents" rel="nofollow" target="_blank" class="link-external">http://epubzone.org/news/epub-3-content-documents</a>.

## Further reading ##

* <a href="http://www.idpf.org/accessibility/guidelines/content/semantics/epub-type.php" rel="nofollow" target="_blank" class="link-external">"The epub:type attribute" - by IDPF</a>
* <a href="http://html5doctor.com/lets-talk-about-semantics/" rel="nofollow" target="_blank" class="link-external"> "Let's Talk about Semantics" - by Mike Robinson, html5doctor.com</a>
* <a href="http://www.idpf.org/epub/vocab/structure/" rel="nofollow" target="_blank" class="link-external"> "EPUB 3 Structural Semantics Vocabulary" - by IDPF</a>
* <a href="http://www.heliconbooks.com/article/epub3sem" rel="nofollow" target="_blank" class="link-external"> "EPUB 3 semantic tags" - by Helicon Books</a>

## Topics:
* [Inclusive EPUB3](InclusiveEPUB3.html)
* [Semantic Markup in EPUB 3](SemanticMarkupInEPUB3.html)
* [WAI-ARIA](WAI-ARIA.html)
* [Visual Styles](VisualStyles.html)
* [Graphics and Multimedia](GraphicsAndMultimedia.html)
* [Scripting in EPUB 3](ScriptingInEPUB3.html)
* [Mathematics](Mathematics.html)
* [Narrations and Text to Speech](NarrationsAndTextToSpeech.html)
* [Accessibility Metadata](AccessibilityMetadata.html)
* [Testing and Validation](TestingAndValidation.html)
* [Case Study Exemplar](CaseStudyExemplar.html)
* [EPUB 3 Resources](EPUB3Resources.html)
