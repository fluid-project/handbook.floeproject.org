---
title: Testing and Validation
layout: default
category: Inclusive EPUB 3
---

There is a wide spectrum of EPUB reader systems currently available, each with different capabilities. Some reader systems support scripting, some do not. One reader system supports webm video, while another has a built-in voice synthesizer.

Reader systems aside, the end users themselves have unique characteristics that must be taken into account. Users may have different subject familiarity, different ability to perceive and understand the content, or different ways to access and interact with the content.

Given the different combinations of reader systems and user ability, how does a content creator ensure that their EPUB content is inclusive and considerate of all these permutations? The short answer: build a good standards compliant EPUB, and test across a variety of systems.

The following table represents a sampling of systems to consider testing with:

* Mobile devices:
   * Google Nexus tablets and phones
   * Samsung Galaxy Tab
   * Apple iPad
   * Amazon Kindle Fire
* Reader Software:
   * Readium for Chrome browswer - <a class="link-external" href="http://readium.org/">http://readium.org/</a>
   * iBooks for Mac OS X and iOS -
   * Lucifox for Firefox browser - <a class="link-external" href="http://lucidor.org/lucifox/">http://lucidor.org/lucifox/</a>
   * Calibre for Mac OS X and Windows - <a class="link-external" href="http://calibre-ebook.com/">http://calibre-ebook.com/</a>
   * Universal Book Reader for Android - <a class="link-external" href="http://www.mobisystems.com/android/ub-reader/">http://www.mobisystems.com/android/ub-reader/</a>
* Screen Readers:
   * NVDA for Windows - <a class="link-external" href="http://www.nvaccess.org/">http://www.nvaccess.org/</a>
   * VoiceOver for Mac OS and iOS

There are a number of reasons why it is important to test a variety of systems and to never assume that because the experience in one system is acceptable, it will be acceptable in other systems, for example:

* `aria-label` and `aria-labelledby` are ignored by NVDA when used on `<math>` elements (<a class="link-external" href="http://community.nvda-project.org/ticket/4422">reference link</a>), but are read aloud by Apple's VoiceOver.
* MathML is rendered fine in Calibre, iBooks, and Lucifox, but appears improperly in Readium (<a class="link-external" href="http://idpf.org/forum/topic-1618"> reference link</a>).
* `&lt;mover&gt;` MathML elements are pronounced as "underneath" instead of "over" in Apple's VoiceOver.

As when building a website, cross-system testing is important to ensure the message and content you want to convey comes across accurately.

##Validation##

Validating an EPUB file will ensure that it conforms to the EPUB specification.

* Online validator: http://validator.idpf.org/ (maximum 10MB)
* Locally-run validator: https://github.com/idpf/epubcheck
