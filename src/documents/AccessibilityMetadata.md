---
title: Accessibility Metadata
category: Techniques
---
The information captured by accessibility metadata can be useful to many users; describing a publication as containing transcripts, large print, or having text-to-speech allows users to quickly find what they want, and gives creators a way of differentiating themselves.

Investing the time to write good, rich metadata ensures that your publication is discoverable and relevant as content searching and matching techniques advance.

To describe the accessibility features of an EPUB 3 publication as a *whole*, the metadata would be written in the META-INF/metadata.xml file.

Here is the example provided by IDPF:

```html
<metadata>
    <meta property="schema:accessibilityFeature">structuralNavigation</meta>
    <meta property="schema:accessibilityFeature">MathML</meta>
    <meta property="schema:accessibilityFeature">alternativeText</meta>
    <meta property="schema:accessibilityFeature">longDescriptions</meta>
    <meta property="schema:accessibilityAPI">ARIA</meta>
    <meta property="schema:accessibilityControl">fullKeyboardControl</meta>
    <meta property="schema:accessibilityControl">fullMouseControl</meta>
    <meta property="schema:accessibilityControl">fullTouchControl</meta>
    <meta property="schema:accessibilityHazard">noFlashing</meta>
    <meta property="schema:accessibilityHazard">noSound</meta>
    <meta property="schema:accessibilityHazard">noMotionSimulation</meta>
    …
</metadata>
```

Source: [http://www.idpf.org/accessibility/guidelines/content/meta/schema.org.php](http://www.idpf.org/accessibility/guidelines/content/meta/schema.org.php)

What if your publication has two embedded videos, but only one has captions - how would you write metadata in this case? Since only some of the videos are captioned, it’s incorrect to specify accessibilityFeature:captions in the metadata.xml file.

To specify metadata to a *part* of your publication, you would embed microdata directly into the HTML of the content itself. The following example illustrates how metadata would be created for embedded content.

### Example: Embedded video without any metadata

```html
<video>
<source src="movie.mp4" type="video/mp4">

<!-- the Caption -->
<track src="http://www.example.com/captions.srt" kind="subtitles" srclang="fr-CA">
</video>
```

### Example: Embedded video with basic metadata

```html
<video itemscope itemtype="http://schema.org/Movie">
   <meta itemprop="accessibilityFeature" content="captions" />
    <source src="movie.mp4" type="video/mp4" />

    <!-- the Caption -->
    <span itemscope> /* Use itemscope property to denote containment / scope for metadata. */
    <meta itemprop="inLanguage" content="fr-CA">
    <track src="http://www.example.com/captions.srt" kind="subtitles" srclang="fr-CA" />
    </span>
</video>
```

### Example: Embedded video with more descriptive metadata

```html
<video itemscope itemtype="http://schema.org/Movie">
  <meta itemprop="accessibilityFeature" content="highContrast" />
  <meta itemprop="accessibilityFeature" content="signLanguage" />
  <meta itemprop="accessibilityHazard" content="noFlashing"/>
  <meta itemprop="accessMode" content="visual" />
  <meta itemprop="accessMode" content="auditory" />
  <meta itemprop="accessibilityFeature" content="captions" />
  <meta itemprop="hasAdaptation" content="http://www.example.com/captions.srt" />

  <source src="movie.mp4" type="video/mp4" />

  <!-- the Caption -->
  <span itemscope>  /* Use itemscope property to denote containment / scope for metadata. */
    <meta itemprop="inLanguage" content="fr-CA">
    <track src="http://www.example.com/captions.srt" kind="subtitles" srclang="fr-CA" />
  </span>
</video>
```

Source: [Encoding Accessibility Metadata for Floe](http://wiki.fluidproject.org/display/fluid/Encoding+Accessibility+Metadata+for+Floe+-+Tables+and+Examples)

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
