---
title: Techniques
subheader: Various practical tips to making learning resources more inclusive and accessible
layout: default
category: Methods
---

## Label resources to indicate what learning needs the resource addresses

An inclusive learning experience is one that matches the needs of the individual learner. Some of the needs that can affect learning include:

* sensory, motor, cognitive, emotional and social constraints;
* individual learning styles and approaches;
* linguistic or cultural preferences;
* technical, financial or environmental constraints.

One way for an OER delivery system to accommodate these needs is to flexibly adjust the properties of a resource to match the needs and preferences of the user, or in some cases, to locate alternative resources. In order to accomplish this, a system must have enough information about a resource to assess whether or not it matches the user's needs. This information can be provided using [metadata](/Metadata.html).

## Allow the creation of variations and enhancements

To better support personalization of the learning experience, learning content can be presented in several forms: textual content, visual content, tactile content and auditory content; theoretical discussions and hands-on exercises; culturally sensitive examples; rich, media-dense content and low-bandwidth content to name a few.

While it is difficult for a content creator to produce all the possible variations of a resource, OERs have the potential to do just that. An OER repository or portal can harness the power of the community by ensuring that other educators, volunteers, translators and subject matter experts have permission and tools needed to contribute alternatives and derivative works to the repository. The submission process can include built-in supports for creating AccessForAll metadata describing the relationship between a new work and the original upon which it is based.

## Support learning profiles

For a learning environment to adapt to the needs of the individual learner, those needs must be known. The resource delivery system can enable each learner, or their support team, to identify the learner’s functional learning needs and to store them in a learning profile.

The [AccessForAll](/AccessForAll.html) specification provides an interoperable format for learning profiles designed to work with the AccessForAll metadata format. By supporting both formats, an OER delivery system will be able to automatically optimize the learning experience for each individual learner according to his/her own personal needs.

## Support flexible styling

For many learners, the only barrier to accessing OERs is the presentation of the content: perhaps the text is too small, there is insufficient contrast between the foreground and background, or the navigational links are distracting. It is important for content creators to support flexible styling, so that learners can adjust the display to meet their own needs. This simple technique can reduce barriers for many users without requiring the creation of additional alternative content.

Supporting flexible styling can be as simple as using Cascading Style Sheets (CSS) to control the visual presentation of content. If the presentation is separate from the content, then alternate style-sheets can be substituted to adjust the display for each individual user according to his/her own needs. A clean separation of the semantic content from the presentation can also support more involved styling, including changing of the layout of the content (for example, linearizing or simplifying the layout for display on a mobile device).


Floe examples:
* <a href="http://build.fluidproject.org/infusion/demos/uiOptions/demo.html" class="link-external">Learner Options</a> (sometimes known as UI Options)

## Support keyboard control of functions and navigation

Many learners cannot or prefer not to use a mouse. This may be because of a mobility or visual impairment, because they are using a mobile device that only has a keypad, or perhaps they are using a laptop and find the trackpad awkward. Non-mouse users should still be able to interact with OERs.

OER creators can ensure that anything that can be accomplished using a mouse can also be accomplished using the keyboard. This includes navigation as well as any interactions with dynamic content. In HTML, for example, the tabindex attribute can be used to ensure that items are focusable using the Tab key, and any actions that happen when a learner clicks on an item should also be activatable using the `Space` or `Enter` key.

## Provide audio or text descriptions of non-text information presented in videos, graphics or images

OERs increasingly make use of video, graphics and images. However, many learners require an alternative to visual information: they may have a visual impairment, or they may learn better through auditory or textual information; they might have insufficient bandwidth to receive high-density media, or they may be using a hand-held device with a screen too small for the content.

By providing textual or auditory descriptions of any non-text information present in videos, graphics or images, OER creators will support learners who may be using technologies or configurations that can substitute or supplement the display with these descriptions, allowing learners to personalize the learning experience.

<span class="ildh-related">
Floe examples:
* [Audio content and learning](AudioContentAndLearning.html)
</span>

## Provide text captions of information presented in audio format

Some learners are unable to adequately perceive the audio content of a learning resource: they may lack speakers or headphones on their computer; they may have a hearing impairment; the language of the resource might not be their first language.

A text caption makes the information in the audio content available to these learners. Text captions have the additional benefit of being indexable and searchable, improving the discoverability of a resource.

<span class="ildh-related">
Floe examples:
* [Authoring of content](/AuthoringOfContent.html)
</span>

## Separate text that can be read in the interface from underlying code

OERs have the ability to reach learners from all parts of the world -- learners who speak many different languages. Inclusive content is translatable, and this transformation can be made possible through the automated rendering of the system in response to a user setting.

By storing all user-facing strings separately from the mark-up or code that displays it, translations of the strings can be carried out easily, and the rendering process can simply use the appropriate language strings, without requiring multiple copies of the actual mark-up or code. And the individual learner can consume content in his/her preferred language.

## Use open formats wherever possible

Open formats are typically published freely and don't require software developers or users to pay licensing royalties to use them in a variety of applications. As a result, open formats make it easier for content to be used and exchanged freely within different operating systems, applications, and software tools.

Open formats can help to make learning content more inclusive by allowing users to choose the applications and tools that suit them best. With open formats, users can transform, convert, or style the content in ways that are most appropriate for individual needs and learning styles. In contrast, proprietary formats often restrict the user's ability to convert content and produce alternative renderings, which can be a substantial accessibility barrier. Assistive technologies typically also have enhanced support for open formats—for example, content created using Web-based formats is typically more accessible than proprietary tools like Adobe's Flash.

Prominent open formats include HTML and CSS for Web-based content, as well as OpenOffice's Open Document Format (ODF) for word processing, spreadsheets, and presentations. By nature of being broadly supported across many platforms, open formats help avoid the risk of vendor lock-in, incompatibilities, and the upgrade expenses familiar with propriety formats. Additionally, they tend to be more future-proof, ensuring that content will have a greater longevity and compatibility now and into the future.

Where possible, the use of open formats will help ensure that content can meet the needs of a diverse range of users and improve its compatibility and longevity.

The <a href="http://adod.idrc.ocad.ca/" class="link-external">Accessible Digital Office Document (ADOD) Project</a> offers guidance and techniques on how to author accessible documents using common office applications.
