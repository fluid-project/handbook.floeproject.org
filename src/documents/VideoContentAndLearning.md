---
title: Video Content and Learning
subheader: Floe references: Floe Video Player
layout: default
category: Methods
---

Video as a learning medium has become increasingly popular on the web. Many sites now even cater solely to video learning content (e.g., Academic Earth, TED Talks, Khan Academy). With the use of video as a compact and compelling medium, however, comes the responsibility of making it an effective platform for users with a myriad of different needs and preferences.

Broadly speaking, the following considerations have a major impact on the inclusivity of video players:

* Multi-modality of video (mixed audio-video track, purely visual track, and purely aural track)
* Enhancing the visual and aural perceivability of the content and player interface
* Localization of content
* Mouse, keyboard, and alternate input operability of the video player
* Breaking forced pace and forced linearity of video content

## Take Away
* Video content typically contains both visual and aural content. Ensure that it can be consumed with a single mode (just visual or just aural) using captions and video descriptions.
* Video content is typically consumed in a linear way. Allow learners to scan content, and consume it at both their own pace, and in the order they want it in.
* See a <a href="http://build.fluidproject.org/videoPlayer/demos/Mammals.html" class="link-external">demo of the current version of Floe Video Player</a>


## Managing the Multi-modality of Video##

Videos typically come in complementing audio and video tracks. While many learners find this valuable in most situations, not all learners and not all situations are amenable to consuming videos in that format. Consider, for instance, a student watching a lecture video at a quiet library without headphones, or at a loud coffee shop. To a student in such situations, the audio track in videos is useless.

Similarly, there are many learners who, for chronic or situational reasons, prefer “listening” to a video, and not watching it. The combination of these two factors (learners who prefer “seeing” a video, and learners who prefer “listening” to a video) means that we should provide learners with content that is still clear and understandable with just one sense (hearing or vision).

Thus, video should ideally have at least three layers of content:

1. The standard simultaneous audio and video track layer.
2. A purely visual layer, where any aural content is converted to visible text. This is typically in the form of closed captions, subtitles, and transcripts (see [Subtitles, Closed captions, and Transcripts](#SubtitlesClosedCaptionsAndTranscripts))
3. A purely aural layer, where any visual content is converted into aural form. This is typically in the form of audio-based video descriptions.

<a name="SubtitlesClosedCaptionsAndTranscripts"></a>
## Subtitles, Closed captions, and Transcripts##

Subtitles, closed captions, and transcripts provide users with a visual text track that they can read along with or separate from the video track.

Subtitles are the text displayed on the screen simultaneous with the video that is typically composed just of dialogue. Oftentimes, subtitles are translated into other languages for localization (see [Localization of Video Content](#LocalizationOfVideoContent)).

Closed captions are texts displayed on the screen simultaneous with the video that includes both dialogue and other audio content (e.g., <jazz music playing in the background>, <loud crashing noise>).

Transcripts are the full text of audio tracks, which are useful both while watching and independent of the video. Oftentimes, to offer increased readability, transcripts provide additional content structure that closed captions and subtitles do not (e.g., paragraphs, headings, etc.).

Examples of subtitling authoring tools:

* <a href="http://www.amara.org/en/" class="link-external">Amara</a>: a web application (formerly called Universal Subtitles), online community, and subtitles database for subtitling or captioning videos
* See Floe’s usability and accessibility review on Universal Subtitles:
   * <a href="http://wiki.fluidproject.org/pages/viewpage.action?pageId=29492583" class="link-external">Universal Subtitles user testing usability report</a>
   * <a href="http://wiki.fluidproject.org/pages/viewpage.action?pageId=29492574" class="link-external">Universal Subtitles user testing accessibility report</a>
   * <a href="http://wiki.fluidproject.org/pages/viewpage.action?pageId=29491519" class="link-external">Universal Subtitles user testing data</a>

## Visual and Aural Considerations##

### Visual considerations###

While there are limitations to what can be done with the video content after it’s been produced, the video playing interface, captions/subtitles, and transcripts should be made as inclusive as possible. The various transformations for interfaces and text (see [Learner needs and preferences](/LearnerNeedsAndPreferences.html)) apply to video subtitles, captions, transcripts and the video playing interface.

These include:

* For video subtitles, captions, transcripts:
   * Text size
   * Line-spacing (and, less commonly, word and character spacing)
   * Text style
        * Serif
        * Sans-serif
        * Weighted for dyslexia (e.g., <a href="http://www.dyslexiefont.com/en/dyslexia-font/" class="link-external">Dyslexie font</a>)
        * Different variations of letter readability (e.g., for lowercase “a”, typeface with a “tailed ‘a’” or “hatted ‘a’”)
   * Contrast
        * High-contrast variations (e.g., black on white, white on black, yellow on black, black on yellow)
        * Photophobia variations (i.e., lower contrast)
* For the interface:
    * Large buttons and icons
    * Contrast changes
* For the video (post-processing):
    * Brightness
    * Contrast
    * Gamma
    * Saturation
    * Slowdown/speed-up

### Aural considerations###

The space of what can be effectively and easily done to benefit aural inclusion is limited. The most fundamental preference option is volume control, but beyond that, one can also perform post-processing to even out volume, limit volume, and augment vocal frequencies.

<a name="LocalizationOfVideoContent"></a>
## Localization of Video Content##

Both the purely visual and purely aural layers (see above section) should be localized for different languages. This ensures the content is not exclusive to one particular language, and is also particularly helpful for learners who are both learning a new topic as well as a new language.

## Operability of the Video Player##

Ensuring that video content can be consumed by a diversity of users and in a diversity of situations is important, but those efforts are in vain if the video player itself cannot be easily operated.

Beyond basic usability considerations, video players should ensure that:

* Interface elements are well visible and operable: Buttons, sliders, drop-downs, etc. should be sufficiently large to both easily seen and easily selectable.
* The player is operable with different inputs: Users should be able to use the player with just the mouse, or just the keyboard, or other alternative inputs (e.g., switch interfaces).
* The player is screen-reader friendly.

## Breaking the Forced Pace and Linearity of Video##

Video content is, by default, intended to be consumed at a prescribed rate (one second of video content consumed per one second of learning time), in a prescribed direction (specifically, in forward frame-by-frame sequence). This prevents learners from learning at their own pace (since their pace must be exactly that of the learning content’s pace), as well as in their own arrangement (since the content must be consumed in the order that it was created).

Contrast this to books. Books can be consumed at the learner’s own pace (they can spend as much time reading a sentence as they’d like), and in their own arrangement (they can read a chapter on French art, and then another chapter on Japanese art, in that order, even if that was not the order of the book).

To break the pace and linear consumption of video, we should use video players with the following functionality:

* Scannable content
* Skippable content

(Additionally, video players supporting structured content are also of value.)

Allowing for scannable content allows users to see both what’s ahead and what was already presented, without having to either wait for the video to present it or watch the video all over again. Allowing learners to easily skip from point to point on the video gives them the chance to review previous material, or skip ahead to relevant material.

The combination of the two--scannable and skippable content--help to break the forced pace and linear consumption of video content.

## Case Study: Floe Video Player##

In practice, the <a href="http://studios.fluidproject.org/index.html%3Fp=1.html" class="link-external">Floe video player</a> accomplishes many of the goals of an inclusive video playing platform. Its key features include:

* Richly layered content: closed captions, transcript, and video descriptions (an audio track describing what’s occurring visually)
* Localization for all layers, with the option of simultaneously having different localizations for each of the layers (e.g., for an English-speaking French language learner, they could turn on French captions with an English transcript)
* Visual preferences: options for changing text and interface size, typeface, and contrast
* Mouse- or keyboard-friendly: fully operable with mouse or keyboard only
* Enhanced keyboard operation: usable with standard tab, enter, and arrow keys; or with customizable key bindings for each of the functions (e.g., spacebar for play/pause)
* Frame and caption preview on scrub bar hover
* Interactive transcript that shows what’s currently being spoken on the video, and also allows users to skip to a different part by clicking on the text
* Option to request content alternatives (e.g., request a French caption, if one isn’t available)

There are also future plans for video annotation, structured video (dividing videos into chapters and sections), and bookmarks.

See a <a href="http://build.fluidproject.org/videoPlayer/demos/Mammals.html" class="link-external">demo of the current version of the Floe video player</a> (not all features might be implemented)

<figure>
![Screenshot of the Floe video player, in its default configuration](/images/Videoplayer-default-config.jpg)
<figcaption>
*Figure:* Floe video player, in its default configuration.
</figcaption>
</figure>

<figure>
![Screenshot of the Floe video player, showing different transcript localization options, as well as the option for requesting different transcripts](/images/Videoplayer-options.jpg)
<figcaption>
*Figure:* Floe video player, showing different transcript localization options, as well as the option for requesting different transcripts.
</figcaption>
</figure>

<figure>
![Screenshot of the Floe video player, with frame and caption preview on hover over the scrub bar](/images/Videoplayer-frame-and-caption.jpg)
<figcaption>
*Figure:* Floe video player, with frame and caption preview on hover over the scrub bar.
</figcaption>
</figure>

<figure>
![Screenshot of the Floe video player, with enlarged interface](/images/Videoplayer-enlarged-interface.jpg)
<figcaption>
*Figure:* Floe video player, with enlarged interface.
</figcaption>
</figure>

<figure>
![Screenshot of the Floe video player, in yellow-on-black contrast mode](/images/Videoplayer-yellow-on-black.jpg)
<figcaption>
*Figure:* Floe video player, in yellow-on-black contrast mode.
</figcaption>
</figure>

<figure>
![Screenshot of the Floe video player, with captions and interactive transcript on](/images/Videoplayer-captions-transcripts.jpg)
<figcaption>
*Figure:* Floe video player, with captions and interactive transcript on.
</figcaption>
</figure>
