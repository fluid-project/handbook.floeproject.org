---
title: Audio Content and Learning
subheader: Floe references: Floe Audio Player Concept
layout: default
category: Methods
---

Audio as a learning medium has been, and continues to be, used pervasively. Audiobooks, lecture recordings, podcasts, and other audio content provide learners with rich content that they can listen to both at home and on the go.

Peculiarly, while video content and players often come with captions, it is unusual to find audio content and players accompanied by text alternatives.

Like with video players (see [Video content and learning](/VideoContentAndLearning.html)), the following considerations have a major impact on the inclusivity of audio players:

* Multi-modality of audio content (default aural track, text-based visual track)
* Enhancing the visual and aural perceivability of the content and player interface
* Localization of content
* Mouse, keyboard, and alternate input operability of the audio player
* Breaking forced pace and forced linearity of audio content

## Take Away##
* Ensure that audio content can be consumed visually (via text).
* Audio content is typically consumed in a linear way, at a forced pace. Allow learners to scan content, and consume it at both their own pace, and in the order they want it in.

## Managing the Multi-modality of Video##

Audio, unlike video, often comes simply as audio, without any complementing transcript. While many learners may find this sufficient for their needs, many others will not. Like with video content, we should consider students wanting to listen to audio but are circumstantially (e.g., in a quiet library space or at a loud cafe without headphones) or chronically (e.g., hard of hearing) unable to. In such scenarios, audio material is useless.

Thus, audio should ideally be composed of at least two layers of content:

1. The standard audio track layer.
2. A visual layer, in the form of closed captions, subtitles, and/or transcripts

## Subtitles, Closed captions and Transcripts##

Subtitles, closed captions, and transcripts provide users with a visual text track that they can read along with or separate from the audio track.

Subtitles are texts displayed simultaneous with the audio that is typically composed just of dialogue. Oftentimes, subtitles are translated into other languages for localization, which ensures the content is not exclusive to one particular language. This is also particularly helpful for learners who are both learning a new topic as well as a new language.

Closed captions are texts displayed simultaneous with the audio that includes both dialogue and other audio content (e.g., <jazz music playing in the background>, <loud crashing noise>).

Transcripts are the full text of audio, which are useful both while listening to and independent of the audio. Oftentimes, to offer increased readability, transcripts provide additional content structure that closed captions and subtitles do not (e.g., paragraphs, headings, etc.).

<figure>
[![Audio player with captions and structured transcript](/images/thumbs/500px-Audio_player_design-captions-transcript.png)](/images/Audio_player_design-captions-transcript.png)
<figcaption>
*Figure:* Audio player with captions and structured transcript.
</figcaption>
</figure>

## Visual and Aural Considerations##

### Visual considerations###

While audio content has no inherent visual considerations, the audio playing interface, captions/subtitles, and transcripts should be made as inclusive as possible. The various transformations for interfaces and text (see [Learner needs and preferences](/LearnerNeedsAndPreferences.html)) apply to audio subtitles, captions, transcripts and the audio playing interface.

These include:

* For subtitles, captions, transcripts:
   *  Text size
   *  Line-spacing (and, less commonly, word and character spacing)
   *  Text style
      *  Serif
      *  Sans-serif
      *  Weighted for dyslexia (e.g., <a href="http://www.dyslexiefont.com/en/dyslexia-font/" class="link-external">Dyslexie font</a>)
      *  Different variations of letter readability (e.g., for lowercase “a”, typeface with a “tailed ‘a’” or “hatted ‘a’”)
   *  Contrast
      *  High-contrast variations (e.g., black on white, white on black, yellow on black, black on yellow)
      *  Photophobia variations (i.e., lower contrast)
* For the interface:
   *  Large buttons and icons
   *  Contrast changes

### Aural considerations###

The space of what can be effectively and easily done to benefit aural inclusion is limited. The most fundamental preference option is volume control, but beyond that, one can also perform post-processing to even out volume, limit volume, and augment vocal frequencies.

## Operability of the Audio Player##

Ensuring that audio content can be consumed by a diversity of users and in a diversity of situations is important, but those efforts are in vain if the audio player itself cannot be easily operated.

Beyond basic usability considerations, audio players should ensure that:
* Interface elements are well visible and operable: Buttons, sliders, drop-downs, etc. should be sufficiently large to both easily see and easily click on.
* The player is operable with different inputs: Users should be able to use the player with just the mouse, or just the keyboard, or other alternative inputs (e.g., switch interfaces).
* The player is screen-reader friendly.

## Breaking the Forced Pace and Linearity of Audio##

Audio content is, by default, intended to be consumed at a prescribed rate (one second of audio content consumed per one second of learning time), in a prescribed direction (specifically, in forward sequence). This prevents learners from learning at their own pace (since their pace must be exactly that of the learning content’s pace), as well as in their own arrangement (since the content must be consumed in the order that it was created).

Contrast this to books. Books can be consumed at the learner’s own pace (they can spend as much time reading a sentence as they’d like; and repeatedly, if they wish), and in their own arrangement (they can read a chapter on French art, and then another chapter on Japanese art, in that order, even if that was not the order of the book).

To break the pace and linear consumption of audio, we should use audio players with the following functionality:

* Scannable content
* Skippable content

(Additionally, audio players supporting structured content are also of value.)

Allowing for scannable content allows users to see both what’s ahead and what was already presented, without having to either wait for the audio to present it or listen to the audio all over again. Allowing learners to easily skip from point to point in the audio also gives them the chance to review previous material, or skip ahead to relevant material.

The combination of the two--scannable and skippable content--help to break the forced pace and linear consumption of audio content.

## Case Study: Floe Audio Player Concept##

The Floe audio player design concept would accomplish many of the goals of an inclusive audio playing platform. Some of the envisaged features include:
* Richly layered content: closed captions and structured transcripts
* Localization for the captions and transcripts
* Visual preferences: options for changing text and interface size, typeface, and contrast
* Mouse- or keyboard-friendly: fully operable with mouse or keyboard only
* Enhanced keyboard operation: usable with standard tab, enter, and arrow keys; or with customizable key bindings for each of the functions (e.g., spacebar for play/pause)
* Caption preview on scrub bar hover
* Interactive transcript that shows what’s currently being spoken, and also allows users to skip to a different part by clicking on the text
* Option to request content alternatives (e.g., request a French caption, if one isn’t available)

There are also future plans for audio annotation, structured audio (dividing the audio into chapters and sections), and bookmarks.

<figure>
![Floe audio player design showing captions and caption preview on scrub bar hover](/images/Audio_player_design-caption-preview.png)
<figcaption>
*Figure:* Floe audio player design showing captions and caption preview on scrub bar hover
</figcaption>
</figure>

<figure>
![Floe audio player design showing enlarged captions and interface for readability](/images/Audio_player_design-enlarged-captions.png)
<figcaption>
*Figure:* Floe audio player design showing enlarged captions and interface for readability
</figcaption>
</figure>

<figure>
![Floe audio player design showing an interactive, structured transcript](/images/Audio_player_design-interactive-transcript.png)
<figcaption>
*Figure:* Floe audio player design showing an interactive, structured transcript
</figcaption>
</figure>
