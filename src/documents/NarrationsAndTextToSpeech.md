---
title: Narrations and Text-to-Speech
category: Techniques
---
Media overlays and text-to-speech in EPUB 3 are powerful features that unlock the ability for users to listen to the
contents of the book, instead of just reading it.

## Media Overlays

"Media overlay" is EPUB's term for pre-recorded audio "overlaid" on the content. Media overlays are typically used for
narration of text, but they can be used for other purposes, such as commentary. Media overlays are recorded in blocks,
typically by section or paragraphs, and synchronized with the actions of the user. At its most basic implementation, as
a user advances through an EPUB book, their capable reader system would play back the narration like an audio book.

To add media overlays to an EPUB 3 book, you would follow these basic steps:

1. Record your narration for each segment of text,
2. Add unique identifiers in your EPUB content for each corresponding segment of text, and
3. Create another file (in XHTML) which associates the text with the recorded audio.

Matt Garrish has written an excellent resource called "[EPUB 3 Media Overlays](http://epubzone.org/news/epub-3-media-overlays)"
which explains how media overlays work in EPUB 3 and how to add it to your own work.

For information about lessons learned by the Floe team while implementing media overlays in an exemplar EPUB resource,
see [Case study: Exemplar](/CaseStudyExemplar.html).

## Further reading

* ["Media Overlays Overview" IDPF](http://www.idpf.org/accessibility/guidelines/content/overlays/overview.php)
* ["EPUB 3 Media Overlays" by Matt Garrish, EPUB Zone](http://epubzone.org/news/epub-3-media-overlays)
* ["Readium: EPUB Media Overlays 3.0" by Youji Sakai (Video)](http://vimeo.com/53999718)
* ["Moby Dick with Media Overlays for first two chapters" epub samples project](https://code.google.com/p/epub-samples/downloads/detail?name=moby-dick-mo-20120214.epub)
* ["Creating or Modifying EPUB Media Overlays" Tobi DAISY Multimedia](http://www.daisy.org/tobi/creating-or-modifying-epub-media-overlays)

## Text-to-Speech

Another feature EPUB 3 offers is the ability for book creators to specify information that will enhance the experience
of text-to-speech (or TTS) on capable reader systems. Unlike Media Overlays, which are pre-recorded, TTS is generated
on-the-fly by the reader's platform (like Apple's VoiceOver feature on iOS devices). Special instructions can be
embedded within the EPUB book that can change the quality of voice feedback - such as putting emphasis on certain
words, adding different speaker styles for different sections of text, specify pronunciation of complex words such as
"hemocyanin", or clarify the pronunciation of homographs such as "record" the noun and "record" the verb.

TTS in EPUB 3 consists of 3 working parts:

* an [aural style sheet](http://www.w3.org/TR/CSS2/aural.html) to give content clarity and richness (such as different
voice and intonation on different page elements, or pauses after reading headers),
* [SSML](http://www.w3.org/TR/speech-synthesis/) (Speech Synthesis Markup Language) mark-up to provide information on
pronunciation, volume, pitch, rate, etc., and
* [PLS](http://www.w3.org/TR/pronunciation-lexicon/) (Pronunciation Lexicon Specification) information, which defines
pronunciation of special words (i.e. medical terms).

The following is an example of content using SSML, some Aural Styles, and the word "acetaminophen" defined by PLS:
(example adapted from [EPUB 3 Accessibility Guidelines: SSML](http://www.idpf.org/accessibility/guidelines/content/tts/ssml.php))

```html
<html xmlns:ssml="http://www.w3.org/2001/10/synthesis" ssml:alphabet="x-sampa">
    ...
    <head>
        ...
        <link rel="pronunciation" href="lex/en.pls"
              type="application/pls+xml"
              hreflang="en" />
        ...
    </head>
    <p>The agent from the <abbr style="-epub-speak-as: spell-out">FBI</abbr>
       was playing a <span ssml:ph="beIs">bass</span> that was shaped like a
       <span ssml:ph="b&s">bass</span>, while studying acetaminophen.
    </p>
    ...
</html>

<lexicon
 version="1.0"
 alphabet="x-sampa"
 xml:lang="en"
 xmlns="http://www.w3.org/2005/01/pronunciation-lexicon">
    <lexeme>
        <grapheme>acetaminophen</grapheme>
        <phoneme>@"sit@'mIn@f@n</phoneme>
    </lexeme>
</lexicon>
```

Currently leading screen readers and speech engines (example: Apple VoiceOver, and NVDA) ignore SSML and lexicon
information.  However, it is recommended to still include SSML and lexicon information where appropriate as it will
make your content more robust in future applications.

### Acronyms, Abbreviations, and Units of Measurement

Acronyms, abbreviations, and units of measurement require some HTML 5 and some WAI-ARIA markup so that screen readers
and other accessibility tools respond properly.

For example: `The brick weighs 5 lbs.`

In this case we would want to say "pounds" and not "libs", nor do we want to spell out "L-B-S".  Using `<abbr>` and
`aria-label`, we can define what we want said.

```html
The brick weighs <abbr role="text" title="pounds" aria-label="pounds">lbs.</abbr>
```

A similar strategy would work on other units of measure:

* `<abbr role="text" title="newtons per meter squared" aria-label="newtons per meter squared">N/m<sup>2</sup></abbr>`
* `<abbr role="text" title="kilobytes" aria-label="kilobytes">kB</abbr>`

### Further reading

* ["Text to Speech Overview" by IDPF](http://www.idpf.org/accessibility/guidelines/content/tts/overview.php)
* ["EPUB 3: Text to Speech" by Matt Garrish, EPUB Zone](http://epubzone.org/news/epub-3-text-to-speech-tts)
* ["Appendix A. Aural style sheets" W3C](http://www.w3.org/TR/CSS2/aural.html)

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
