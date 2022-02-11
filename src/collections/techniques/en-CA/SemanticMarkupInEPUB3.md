---
title: Semantic Markup in EPUB 3
eleventyNavigation:
    parent: Inclusive EPUB 3
    key: Semantic Markup in EPUB 3
    order: 1
---

EPUB 3 books can be created from HTML5, and the same principles for creating well-formed, semantically sound web
content apply. For an EPUB 3 author, there are two tools available:
[HTML 5 semantic elements](https://developer.mozilla.org/en/docs/Web/HTML/Element), and [`epub:type`](http://www.idpf.org/accessibility/guidelines/content/semantics/epub-type.php).

HTML 5 semantic markup gives meaning to otherwise anonymous containers or text structures. For example, you can use the
`<section>` element to denote changes in topic, or `<aside>` to indicate content that is secondary in importance.

EPUB 3 also provides semantics more suitable for publications. In addition to using HTML 5 semantic markup, you can
describe the same HTML 5 markup as being chapters, or as a sidebar.

Here is an example:

```html
<section epub:type="chapter">
   <h1>Chapter 1: At the Start</h1>
    We always start with a good idea.
    <aside epub:type="sidebar">
        In 2013, 9 out of 10 ideas were great.
    </aside>
</section>
```

The "EPUB 3 Content Document" article by Matt Garrish is a great place to start learning about semantics in EPUB 3:
[http://epubzone.org/news/epub-3-content-documents](http://epubzone.org/news/epub-3-content-documents).

## Further reading

* ["The epub:type attribute" - by IDPF](http://www.idpf.org/accessibility/guidelines/content/semantics/epub-type.php)
* ["Let's Talk about Semantics" - by Mike Robinson, html5doctor.com](http://html5doctor.com/lets-talk-about-semantics/)
* ["EPUB 3 Structural Semantics Vocabulary" - by IDPF](http://www.idpf.org/epub/vocab/structure/)
* ["EPUB 3 semantic tags" - by Helicon Books](http://www.heliconbooks.com/article/epub3sem)

## Topics:

* [Inclusive EPUB3](/InclusiveEPUB3.html)
* [Semantic Markup in EPUB 3](/SemanticMarkupInEPUB3.html)
* [WAI-ARIA](/WAI-ARIA.html)
* [Visual Styles](/VisualStyles.html)
* [Graphics and Multimedia](/GraphicsAndMultimedia.html)
* [Scripting in EPUB 3](/ScriptingInEPUB3.html)
* [Mathematics](/Mathematics.html)
* [Narrations and Text to Speech](/NarrationsAndTextToSpeech.html)
* [Accessibility Metadata](/AccessibilityMetadata.html)
* [Testing and Validation](/TestingAndValidation.html)
* [Case Study Exemplar](/CaseStudyExemplar.html)
* [EPUB 3 Resources](/EPUB3Resources.html)
