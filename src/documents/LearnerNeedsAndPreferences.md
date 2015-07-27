---
title: Learner Needs and Preferences
subheader: Floe references: Learner Options (aka User Interface Options)
layout: default
category: Methods
---

The key principle behind [inclusive learning](/InclusiveLearning.html) is the ability for learning resources to be malleable and transformable with respect to learner needs and preferences. This enables learners who have articulated their particular needs and preferences (whether implicitly or explicitly) to be given learning content in a format that they can fully interact with, understand, and consume (see [Accessibility principles](/AccessibilityPrinciples.html) for perceivable, operable, understandable, and robust content).

Learners should be able to articulate their needs and preferences, and have returned to them content packaged in a way that meets those requirements.

## Take Away
* Users have individual needs and preferences when it comes to content
* The presentation and interaction to content should be flexible
* Learners should be able to articulate those needs and preferences, and have appropriate content returned
* See a <a href="http://build.fluidproject.org/infusion/demos/prefsFramework/" class="link-external">demo of the current version of Floe Learner Options</a>

## Content Malleability

In practice, this translates to at least three levels of malleability in the content:  tweaks and adjustments, supplementation, and recreation.

*Tweaks and adjustments:* At this level, default (i.e., the original) content is in a medium that is consumable by the learner, but some tweaks are needed to make it fully perceivable and understandable. Changes at this level of malleability do not happen to the content proper, but rather to its presentation.

Examples of tweaks and adjustments include text size changes, and colour contrast changes

<figure>
[![Screenshot of learner options text presentation controls](/images/thumbs/720px-Learner-options-text.png)](/images/Learner-options-text.png)
<figcaption>
*Figure:* A screen from Learner Options' text presentation controls.
</figcaption>
</figure>

*Supplementation:* Some learning resources are not consumable in their default (i.e., original) medium, but can be easily converted into a medium that is consumable. In these cases, a natural translation of the content into an alternative medium is needed.

See also: [The importance of natural language](#TheImportanceOfNaturalLanguage)

Examples of supplementation include:
* Providing closed captions (or subtitles) and transcripts for audio and videos (see Video content and learning)
* Providing descriptions for photos, figures, diagrams, and other images

<figure>
[![Screenshot of Video player with transcript on](/images/thumbs/400px-Videoplayer-captions-transcripts.jpg)](/images/Videoplayer-captions-transcripts.jpg)
<figcaption>
*Figure:* A screen of the Floe Video player with transcripts displayed
</figcaption>
</figure>

*Recreation:* Not all learning resources can be naturally tweaked or supplemented to provide good learning experiences. Some learning resources are in a medium where no natural translation exists. For instance, there is no easy way to translate a symphony orchestra performance into a non-aural experience. In these cases, a revisit of the content’s intent and meaning is needed to provide an interpretation of the content into a different medium.

Examples of recreation include:
* For a graphic novel, provide a written novel “equivalent”, based on an interpretation of a combination of the visuals and dialogue.

<a name="TheImportanceOfNaturalLanguage"></a>
## The Importance of Natural Language

One of the key principles behind providing transformable learning content is ensuring that all the base content is accompanied with a natural language equivalent. Natural language content is immensely malleable and functional in many different contexts, since text can easily be both visual and aural, and conversions between the two are automatable. Because of this, text often acts as the lowest common denominator for learning material.

Take, for instance, an image. In and of itself, the image is only of use to those with the complete combination of: a) sufficient vision ability, b) vision ability that can be used at the time to see the image (e.g., the learner isn’t distracted by something else visual, like the road while driving), and c) has no cognitive difficulty understanding the image. A textually well-described image, however, can provide alternatives to learners lacking in any of the said requirements. For learners with insufficient vision ability or whose vision ability is distracted (e.g., while driving), the text can be automatically and cheaply converted to speech. For learners with cognitive difficulty understanding the image, the text description of the image provides an alternative or supportive description.

The same idea of natural language supplementation can be applied to any piece of content: audio content (see [Audio content and learning](/AudioContentAndLearning.html)); video content (see [Video content and learning](/VideoContentAndLearning.html)); interface elements (buttons, form fields, drop-downs, etc.); diagrams and figures; and more.

## List of Example Alternatives and Preferences

The following list is not exhaustive:

<figure>
[![Mind map of Floe transformation space](/images/thumbs/240px-Floe_transformation_space-large.png)](Floe_transformation_space-large.png)
<figcaption>
*Figure:* Landscape of alternatives, transformations and customizations
</figcaption>
</figure>

* Content simplification
    * Table of contents
    * Content prioritization (excess/redundant content/functionality reduction)
* Platform independence
    * Browser independence (e.g., IE, FireFox, Safari, Chrome, Opera, etc.)
    * Device independence (e.g., mobile, tablet, desktop/laptop, telephone, feature phone, etc.)
* Language independence
* Multi-input operability (e.g. mouse, keyboard, touch, switch, etc.)
* For graphic user interfaces:
    * Size of the interactive interface elements (e.g., buttons, form fields, checkboxes, drop-down fields, etc.)
    * Contrast changes (see below, under “Contrast changes” under “For text-based content”)
    * Keyboard-only operation
    * Mouse-only operation
* For text-based content
    * Text size changes
    * Line-spacing changes (and, less commonly, word and character spacing)
    * Text style changes (read more about Font readability)
        * Serif
        * Sans-serif
        * Weighted for dyslexia (Dyslexie font)
        * Different variations of letter readability (e.g., for lowercase “a”, typeface with a “tailed ‘a’” or “hatted ‘a’”)
    * Contrast changes
        * High-contrast variations (e.g., black on white, white on black, yellow on black, black on yellow)
        * Photophobia variations (i.e., lower contrast)
        * For time-based audio media
    * Closed captions and/or subtitles
    * Transcripts
    * Annotations
    * Slowing-down and speeding-up
    * Volume adjustments (for audio-based media)
    * Visual adjustments (for video-based media)
    * Non-linear consumption
    * Visual or aural alternatives
* For any visual-based media:
    * Text-based descriptions
    * Annotations
    * Larger versions, zoomability
    * Aural alternatives
* For any aural-based media:
    * Volume control
    * Annotations
    * Text-based description or transcript (including captions or subtitles)
    * Visual alternatives

Ideally, the software we use to create learning resources should allow for and promote content alternatives and preferences.

## Case Study: Floe Learner Options

Floe’s Learner Options (also referred to as User Interface Options) provides learners with an easy way to make tweaks and adjustments to their content. It takes existing content, and instantly applies preferences to it in real-time.

The current version of Learner Options provides the following preferences:

* Legibility of text-based content: learners can adjust the text size, text style, line spacing, and contrast
* Visibility and operability of the interface: the same contrast options for adjusting text also apply to interface elements (e.g., buttons, drop-downs, etc.); interface elements and links can also be made larger for emphasis and easier clicking
* Structure transparency: makes the page content structure explicit and transparent through automated injection of a table of contents
* Media captions and localization: changes default settings of audio and video players to enable captions in a particular language

Some upcoming Learner Options features include:

* Key bindings: allowing users to assign keyboard shortcuts to actions (e.g., arrow keys for changing pages)
* Conversion of mixed-medium content to single mediums (e.g., converting a page of text and videos to purely text)
* Content simplification: reduction of excess content and interactions, with increased emphasis on core content

Also see: <a href="http://build.fluidproject.org/infusion/demos/prefsFramework/" class="link-external">demo of the current version of Floe Learner Options</a>.

<figure>
[![Screen shot of Learner Options navigation controls](/images/thumbs/359px-Learner-options-navigation.png)](/images/Learner-options-navigation.png)
<figcaption>
*Figure:* Learner Options navigation controls
</figcaption>
</figure>

<figure>
[![Screen shot of Learner Options TTS and content simplification panels](/images/thumbs/357px-Learner-options-extra.png)](/images/Learner-options-extra.png)
<figcaption>
*Figure:* Learner Options TTS and content simplification panels
</figcaption>
</figure>

## Resources

Text Simplification
* https://www.readability.com/addons
* http://www.read-able.com/

Other
* http://validator.w3.org/
* http://jigsaw.w3.org/css-validator/
* http://achecker.ca/checker/index.php
* http://colorfilter.wickline.org
* http://vischeck.com
* http://gmazzocato.altervista.org/colorwheel/wheel.php
* http://www.snook.ca/technical/colour_contrast/colour.html
* http://www.w3.org/WAI/WCAG20/quickref/
* http://webaim.org/resources/contrastchecker/
