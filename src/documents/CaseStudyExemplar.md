---
title: "Case Study: Exemplar"
category: Techniques
---

The Floe project developed an EPUB 3 resource that exemplifies best practices for creating inclusive EPUB resources:

[Download the EPUB](https://idrc.cachefly.net/floeproject.org/ebooks/InclusiveEPUB-physics.epub)

This resource demonstrates the following accessibility features:

* ARIA attributes and other HTML markup to support screen readers;
* accessible math using MathML and long descriptions;
* captions for the first video;
* a media overlay narrating the opening portion of Chapter 1;
* accessibility metadata.

## Notes:

* The interactive physics simulation in Chapter 3 can be played using a mouse. A keyboard-accessible version of the
  simulation has been developed, but it does not function properly within the EPUB document. Work is underway to address
  this (documented under issue [FLOE-287](http://issues.fluidproject.org/browse/FLOE-287)).
* The interactive physics simulation will load in iBooks on Mac OS 10.10 Yosemite, but not on Mac OS 10.9 Mavericks.

In creating this exemplar, Pandoc (link: [http://johnmacfarlane.net/pandoc/](http://johnmacfarlane.net/pandoc/)) was
initially used to create an EPUB from HTML files. While Pandoc was excellent in converting HTML 5 into an EPUB 3
container, the output was unsuitable for handling desirable inclusive EPUB features, such as Media Overlays and WAI-ARIA
markup. For a detailed (and somewhat technical) look at using Pandoc in creating an inclusive EPUB, see [Fluid Wiki -
Experiences with Pandoc](http://wiki.fluidproject.org/display/fluid/Experiences+with+Pandoc).

The rest of this page provides some technical information about how the exemplar EPUB resource was created and some
lessons learned along the way.

[View the github repository containing the resources used to build the
EPUB](https://github.com/jhung/EPUB/tree/FLOE-240-2)

## Semantic markup - HTML 5 semantics and epub type

EPUB 3 uses an XHTML document type that is based on HTML5 and inherits almost all definitions of semantics, structure
and processing behaviors from the HTML5 specification. This means that you can create valid HTML5 documents and update
the head of the document to define it as XML and declare the epub namespace.

### Original HTML:

```html
<!DOCTYPE html>
<html>
    <head>
    ...
```

### Modified to be EPUB 3 compatible:

```html
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:epub="http://www.idpf.org/2007/ops">
    <head>
    ...
```

## Scripts

The interactive simulation we used in the exemplar EPUB is taken from [PhET](http://phet.colorado.edu/), specificially
the Forces and Motion simulation:

* Online demo: [http://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html](http://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html)
* Source code on github: [https://github.com/phetsims/forces-and-motion-basics](https://github.com/phetsims/forces-and-motion-basics)
* Phet development overview: [http://bit.ly/phet-development-overview](http://bit.ly/phet-development-overview)

In order to use scripts in EPUB, CDATA blocks need to be added. However this will break the HTML in browsers.

```html
<script>
   <!CDATA[
   var code = document.getElementById('code');
   code.style.color = 'rgb(0,0,200)';
   code.onclick = function() {
      revealCode();
   };
   ]]>
</script>
```

<!-- markdownlint-disable ol-prefix -->
## Media Overlays

The following process was used to create the Media Overlays for the Inclusive EPUB exemplar.

1. Decide what level of granularity you want the highlighting to happen at: word, sentence, paragraph, etc.
2. Ensure there's an ID attribute on any HTML element you want highlighted.
3. Record an audio narration of the text. We used the [free audio editing tool Audacity](http://audacityteam.org/).
4. Identify start and end timecodes for the blocks of audio corresponding to the granularity level you chose:

* In Audacity, select the wave segment for the audio in question
* Add a label by selecting "Add Label at Selection" under the "Tracks" menu. The first time you do this, Audacity will
  automatically create a Label track.
* Name label using the same ID of the associated HTML element.

5. Export Audacity's label file. Each line in the output label file will contain `start time, end time, label`. The file
   will look something like this:

```txt
0.185760        9.102222        c01p0002
9.380862        11.702857        c01h02
11.702857        15.185850        c01list001item001
```

6. Convert timecodes into SMIL `<par>` elements as per EPUB overlay specification using `awk`:

```bash
> awk -f convert.awk -v htmlFile=01-velocity.html -v audioFile=audio/01-velocity.mp3 \
       01-velocity-timecodes.txt > 01-velocity.smil
```

7. Add the appropriate SMIL header and footer to the output of the awk script, as well as any desired `<seq>` elements.

```xml
<smil
     xmlns="http://www.w3.org/ns/SMIL"
     xmlns:epub="http://www.idpf.org/2007/ops"
     version="3.0">
    <body>
 .. paste the output of the awk script here ...

    </body>
</smil>
```

8. Edit the manifest file `content.opf` as necessary:
<!-- markdownlint-enable ol-prefix -->

* add duration metadata to the top of the document, inside the `<meta>` element:

```html
<meta property="media:duration">0:00:59.000</meta>
<meta property="media:duration" refines="#ch001_overlay">0:00:59.000</meta>
```

* add `<item>` elements for the new files, ensuring to include the correct mime type:
  * the SMIL file
  * the audio recording(s)

```html
<item id="ch001_overlay" href="01-velocity.smil" media-type="application/smil+xml"/>
<item id="ch001_overlay_mp3" href="audio/01-velocity.mp3" media-type="audio/mpeg" />
```

* add a `media-overlay` attribute to `<item>s` for the html file(s), referencing the ID of the relevant SMIL file:

```html
<item id="ch001_xhtml" href="ch001.xhtml" media-type="application/xhtml+xml"
      properties="mathml" media-overlay="ch001_overlay" />
```

## Text-to-speech

The Floe team discovered that none of the EPUB readers or operating system voicing technologies we tested honoured the
lexicons or SSML. We found that some screen readers honour the `title` attribute of the `<abbr>` tag, and others the
`aria-label`, so those were used to provide proper spoken versions of units, math, etc., as illustrated below.

```html
<abbr role="text"
      title="metres per second"
      aria-label="meters per second">m/s</abbr>
```

## Accessibility metadata

Add [Schema.org accessibility metadata](http://www.idpf.org/accessibility/guidelines/content/meta/schema.org.php) to the
package.opf file describing the features of the EPUB:

```xml
<package … >
    …
    <meta property="schema:accessibilityFeature">tableOfContents</meta>
    <meta property="schema:accessibilityFeature">MathML</meta>
    <meta property="schema:accessibilityFeature">describedMath</meta>
    …
</package>
```

Note: The Schema.org accessibility property `accessibilityFeature` does not yet have a value that can convey the fact
that an EPUB contains an audio narration through the media overlay, but such a value is being proposed.

### IMPORTANT NOTE:

Until validators recognize the `schema:` prefix, you must declare it in the `package.opf` file:

```xml
<package …
    prefix="schema: http://schema.org">
    …
</package>
```

## Testing and validation

The exemplar EPUB was tested and validated using:

* [Readium for Chrome web browser](http://readium.org/)
* iBooks for Mac OS X
* [Lucifox for Firefox](https://addons.mozilla.org/en-US/firefox/addon/lucifox/)
* [W3C Validator](http://validator.w3.org)
* [EPUB Check](http://validator.idpf.org/)

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
