---
title: Schema.org Accessibility Properties
eleventyNavigation:
    parent: Techniques
    key: Schema.org Accessibility Properties
---
In December, 2013, the W3C Schema.org process accepted a proposal for a set of accessibility metadata terms based on
the [AccessForAll](AccessForAll.html) specification. The accessibility metadata is now a part of the Schema.org
CreativeWork properties.

[Schema.org](http://schema.org) was created by a consortium of large search engines (including Google, Yahoo, etc.) as
a collection of schemas that can be used to add semantic information to content and improve search results. The
inclusion of accessibility metadata in the Schema.org collection would help people to easily find content that meets
their individual needs and preferences.

This accessibility  metadata can be embedded directly in the markup of any web content. The example below shows how a
page that includes a video and audio file might use the accessibility metadata properties:

```html
   <h1>Martin Luther King's Speech: 'I Have a Dream'</h1>

   <div id="videoMLK" itemprop="video">
      <p class="alert">Warning: This video contains
          <span itemprop="accessHazard">flashing</span> that
          may cause seizures in some individuals. The
          <a itemprop="hasAdaptation" href="#mlkAudio">audio
          track of the speech</a> is separately available
          below as an alternative.</p>
      <video src="http://www.youtube.com/watch?v=smEqnnklfYs" controls="">
         <track src="captions.webvtt" type="captions"/>
      </video>
   </div>

   <audio id="audioMLK"
          src="http://www.archive.org/download/MLKDream/MLKDream_64kb.mp3"
          controls=""/>

   <div itemprop="transcript" id="transcriptMLK">
      <h2>Transcript</h2>
      <p>...</p>
      <meta itemprop="displayTransformability" content="css"/>
   </div>
```

You can find the complete list of proposed properties, as well as more information and examples, at [http://www.a11ymetadata.org/](http://www.a11ymetadata.org/).
