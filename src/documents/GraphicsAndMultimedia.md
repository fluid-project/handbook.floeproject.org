---
title: Graphics and Multimedia
layout: default
category: Inclusive EPUB 3
---
The notion of a "typical end user" is increasingly difficult to define. With EPUB 3 and eBooks easily accessible through different devices, even users who were once described as "typical" find themselves in situations where their ability to consume or comprehend content is affected by their environment or context. The challenge for EPUB 3 authors is to create content that is robust and can adapt to the wide spectrum of users and their situations.

For example, a user may need to be discrete and may not want the audio in an EPUB 3 book to disturb others - can the content be understood without the audio?

The key to making embedded media understood in a wide variety of situations is to provide ample alternatives that can be consumed in different ways. The following are some examples of what you can do:

* Do not rely on a single media type to convey critical meaning - provide alternates:
   * For videos, audio, illustrations or graphics: provide a text synopsis.
   * For audio or video: a text transcript is useful.
   * For videos: user-selectable audio descriptions (not just captions) can enhance comprehension.
   * <a class="link-external" href="http://www.idpf.org/epub/30/spec/epub30-publications.html#sec-fallback-processing-flow"> Content fallbacks</a>: allow content to be accessed if a particular reader can not interpret it. e.g. for a video element, a poster image and text can be a fallback.
* Media support and media format varies between reader platforms. Do not assume that if content is accessible on one platform that it will be accessible to everyone:
   * For video, it is recommended by the IDPF to use both H.264 and WebM video codecs.
   * For audio, EPUB 3 supports MP3 format.
* Use a variety of complementary media to reinforce concepts. For example, an illustration may be better understood with an accompanying video.
* Provide links to alternatives so users can help themselves. Alternatives can appear alongside the content, be located in an Appendix, or be made available online and accessible using a web link.
* Provide captions in plain text as a transcript, or use the `<track>` element to add synchronized captions to audio and video.
* Multiple `<track>` elements can be used to provide alternate audio tracks in different languages or to provide audio descriptions. Note that some platforms may not support `<track>` elements.

## Further reading ##

* <a class="link-external" href="http://chimera.labs.oreilly.com/books/1234000000770/ch03.html"> "`<audio>`/`<video>` for Publishers" O'Reilly Media, Inc</a>
* <a class="link-external" href="http://www.idpf.org/accessibility/guidelines/content/xhtml/video.php"> "EPUB 3 Accessibility Guidelines: Video", by IDPF</a>
* <a class="link-external" href="http://www.idpf.org/accessibility/guidelines/content/xhtml/audio.php"> "EPUB 3 Accessibility Guidelines: Audio", by IDPF</a>
