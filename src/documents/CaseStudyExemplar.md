---
title: Case Study: Exemplar
layout: default
category: Inclusive EPUB 3
---

The Floe project developed an EPUB 3 resource that exemplifies best practices for creating inclusive EPUB resources:

<a class="link-external" href="https://idrc.cachefly.net/floeproject.org/ebooks/InclusiveEPUB-physics.epub"> Download the EPUB</a>

This resource demonstrates the following accessibility features:
* ARIA attributes and other HTML markup to support screen readers;
* accessible math using MathML and long descriptions;
* captions for the first video;
* a media overlay narrating the opening portion of Chapter 1;
* accessibility metadata.

## Notes: ##
* The interactive physics simulation in Chapter 3 can be played using a mouse. A keyboard-accessible version of the simulation has been developed, but it does not function properly within the EPUB document. Work is underway to address this (documented under issue  <a class="link-external" href="http://issues.fluidproject.org/browse/FLOE-287"> FLOE-287</a>).
* The interactive physics simulation will load in iBooks on Mac OS 10.10 Yosemite, but not on Mac OS 10.9 Mavericks.

In creating this exemplar, Pandoc (link: http://johnmacfarlane.net/pandoc/) was initially used to create an EPUB from HTML files. While Pandoc was excellent in converting HTML 5 into an EPUB 3 container, the output was unsuitable for handling desirable inclusive EPUB features, such as Media Overlays and WAI-ARIA markup. For a detailed (and somewhat technical) look at using Pandoc in creating an inclusive EPUB, see http://wiki.fluidproject.org/display/fluid/Experiences+with+Pandoc">.

The rest of this page provides some technical information about how the exemplar EPUB resource was created and some lessons learned along the way.

<a class="link-external" href="https://github.com/jhung/EPUB/tree/FLOE-240-2"> View the github repository containing the resources used to build the EPUB</a>

## Semantic markup - HTML 5 semantics and epub type ##
EPUB 3 uses an XHTML document type that is based on HTML5 and inherits almost all definitions of semantics, structure and processing behaviors from the HTML5 specification. This means that you can create valid HTML5 documents and update the head of the document to define it as XML and declare the epub namespace.

### Original HTML:
```
<!DOCTYPE html>
<html>
    <head>
    ...
```

###Modified to be EPUB 3 compatible:###
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:epub="http://www.idpf.org/2007/ops">
    <head>
    ...
```

## Scripts ##
The interactive simulation we used in the exemplar EPUB is taken from <a class="link-external" href="http://phet.colorado.edu/"> PhET</a>, specificially the Forces and Motion simulation:

* Online demo: http://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html
* Source code on github: https://github.com/phetsims/forces-and-motion-basics
* Phet development overview: http://bit.ly/phet-development-overview

In order to use scripts in EPUB, CDATA blocks need to be added. However this will break the HTML in browsers.
```
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

## Media Overlays ##

The following process was used to create the Media Overlays for the Inclusive EPUB exemplar.

1. Decide what level of granularity you want the highlighting to happen at: word, sentence, paragraph, etc.

2. Ensure there's an ID attribute on any HTML element you want highlighted.

3. Record an audio narration of the text. We used the free tool Audacity http://audacity.sourceforge.net/

4. Identify start and end timecodes for the blocks of audio corresponding to the granularity level you chose:
* In Audacity, select the wave segment for the audio in question
* Add a label by selecting "Add Label at Selection" under the "Tracks" menu. The first time you do this, Audacity will automatically create a Label track.
* Name label using the same ID of the associated HTML element.

5. Export Audacity's label file. Each line in the output label file will contain <code>start time, end time, label</code>. The file will look something like this:
```
0.185760        9.102222        c01p0002
9.380862        11.702857        c01h02
11.702857        15.185850        c01list001item001
```

6. Convert timecodes into SMIL <code>&lt;par&gt;</code> elements as per EPUB overlay specification using <code>awk</code>:
```
> awk -f convert.awk -v htmlFile=01-velocity.html -v audioFile=audio/01-velocity.mp3 \
       01-velocity-timecodes.txt > 01-velocity.smil
```

7. Add the appropriate SMIL header and footer to the output of the awk script, as well as any desired <code><seq></code> elements.
```
<smil
     xmlns="http://www.w3.org/ns/SMIL"
     xmlns:epub="http://www.idpf.org/2007/ops"
     version="3.0">
    <body>
 .. paste the output of the awk script here ...

    </body>
</smil>
```

8. Edit the manifest file <code>content.opf</code> as necessary:
* add duration metadata to the top of the document, inside the <code>&lt;meta&gt;</code> element:
```
<meta property="media:duration">0:00:59.000</meta>
<meta property="media:duration" refines="#ch001_overlay">0:00:59.000</meta>
```

* add <code>&lt;item&gt;</code> elements for the new files, ensuring to include the correct mime type:
   * the SMIL file
   * the audio recording(s)
```
<item id="ch001_overlay" href="01-velocity.smil" media-type="application/smil+xml"/>
<item id="ch001_overlay_mp3" href="audio/01-velocity.mp3" media-type="audio/mpeg" />
```

* add a <code>media-overlay</code> attribute to <code>&lt;item&gt;s</code> for the html file(s), referencing the ID of the relevant SMIL file:
```
<item id="ch001_xhtml" href="ch001.xhtml" media-type="application/xhtml+xml"
      properties="mathml" media-overlay="ch001_overlay" />
```

## Text-to-speech ##

The Floe team discovered that none of the EPUB readers or operating system voicing technologies we tested honoured the lexicons or SSML. We found that some screen readers honour the <code>title</code> attribute of the <code>&lt;abbr&gt;</code> tag, and others the <code>aria-label</code>, so those were used to provide proper spoken versions of units, math, etc., as illustrated below.

```
<abbr role="text"
      title="metres per second"
      aria-label="meters per second">m/s</abbr>
```

## Accessibility metadata ##
Add <a class="link-external" href="http://www.idpf.org/accessibility/guidelines/content/meta/schema.org.php"> Schema.org accessibility metadata</a> to the package.opf file describing the features of the EPUB:
```
<package … >
    …
    <meta property="schema:accessibilityFeature">tableOfContents</meta>
    <meta property="schema:accessibilityFeature">MathML</meta>
    <meta property="schema:accessibilityFeature">describedMath</meta>
    …
</package>
```

Note: The Schema.org accessibility property ''accessibilityFeature'' does not yet have a value that can convey the fact that an EPUB contains an audio narration through the media overlay, but such a value is being proposed.

###IMPORTANT NOTE:###
Until validators recognize the schema: prefix, you must declare it in the package.opf file:
```
<package …
    prefix="schema: http://schema.org">
    …
</package>
```

## Testing and validation ##

The exemplar EPUB was tested and validated using:
* <a class="link-external" href="http://readium.org/"> Readium for Chrome web browser</a>
* iBooks for Mac OS X
* <a class="link-external" href="https://addons.mozilla.org/en-US/firefox/addon/lucifox/"> Lucifox for Firefox</a>
* <a class="link-external" href="http://validator.w3.org"> W3C Validator</a>
* <a class="link-external" href="http://validator.idpf.org/"> EPUB Check</a>
