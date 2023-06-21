---
title: How to integrate Sign Language into your website
eleventyNavigation:
    parent: Authoring Content
    key: Integrating Sign Language into Your Website
    order: 3
---

This article will outline a rough process on how to integrate Sign Language like
ASL and LSQ into your website. This is an emerging practice; what we have
written here provides a starting point rather than a best practice.

## Find Sign Language translators

If possible, hire translators who are Deaf. If your website uses
industry-specific language (such as healthcare jargon) consider finding
translators who specialize in or are familiar with the industry or context. You
may also want to find translators with video production capabilities or who have
access to video production support. It is also best to find translators with
diverse experiences and identities, and who reflect your intended user groups.

## Prepare your translation documents

Translation documents contain all the content that needs to be translated as
well as any supporting information. They are shared with the translators at the
beginning of the project. Work with the translators you’ve hired to determine
their preferred format for the documents, and to agree on how they’d like to
communicate any questions. Here are a few suggestions for content to include in
your documents:

### Include all the possible user pathways

Document all the possible pathways a user can take through the website, not just
the ideal ones. Be sure to include any error flows or alternative flows. A user
flow document could be useful for this.

### Determine how much information goes into each video

If your website has a lot of content, you’ll probably need more than one video
to capture all the content on a single page. When determining how much content
can fit into one video, here are some suggestions:

* Paragraphs: Create one video per paragraph. If the paragraph is short, the
  heading can be included in the video
* Input fields:
  * Create one video per input field set. For example, address (street address,
    city and town, postal code)
  * Create one video for a question with under 5 options
  * Create multiple videos for questions with more than 5 options, or in cases
    where there are less than 5 but each option has a long label. Have one video
    for the question and a separate video for the options
* Buttons: Create one video per button

### Reference the website, not just a static document

When translations are based only on static documents, a lot of the content is
taken out of context and may result in inaccurate translations. This is
especially true if your website is highly interactive. If your content is being
sent over in a static document like a word document or spreadsheet, include a
link to the related webpage so that the translation team can cross check the
content.

### Don’t forget the dynamic content

If your website is a highly interactive website with many flows and forms,
remember to include the following content to be translated:

* Input fields that only appear in certain instances
* Content hidden under accordions, tool tips, or dropdown input fields
* Success, warning, and error notifications
* Different content depending on the user’s roles and permissions
* Content not on the website, like email notifications sent to the user

## Translate the content

This step is for the translators, but here are a few things you can do to make
sure the translations are as accurate and user-friendly as possible.

### Make sure translators understand the context of the website

Translators should understand the background of your website, who will be using
it, and what they may be trying to achieve. This will help the translators use
signs that are appropriate for the given context and the right level of
formality. If there is jargon, explain the meaning to them.

### Create a glossary of key terms

If there are multiple translators working on your website, make sure they are
using the same signs for the key terms on the website by writing up a glossary
and its definitions. Check in with the translators to make sure they are using
the identical sign for these key terms.

### Outline the structure of long lists

If multiple options are being listed, have the translator sign the total number
of options before going into each of the options. This creates structure and
makes the options easier to remember for users.

## Edit the translation videos

Editing the videos should be done by the translators, or an editor who knows ASL
and/or LSQ. There are things that can be done when editing that increase the
usability and accessibility of these videos.

### Use images and icons

Pairing the translation with images and icons can be particularly helpful for
remembering a list of options or dense content. Use them in the ASL/LSQ video
background to reference the options being signed, and match them in the list of
options or content in the interface.

### Type out important information

If there is important information that the user needs to remember, such as a
phone number, email address, or a specific deadline, add that as text to the
video’s background.

### Use website screenshots

If the translator is talking about a specific part of the webpage, include a
screenshot of what the translator is referring to.

### Consider colour contrast

Make sure there is sufficient colour contrast between the translator’s hands and
the background it’s on (whether that be the background of the video, or the
translator’s clothing) to help users with vision loss.

## Integrate the translation videos

Here are a few suggestions for successful integration of the translation videos
into your site.

### Label the videos

Be sure to use a consistent and well-considered labeling convention. If you are
not an ASL or LSQ user it may be difficult to know what the video content is.
When labeling, consider:

* How will you know what text is being translated in the video?
* How will you label new versions of a video that may be revised and updated
  later?
* If you need to reorder content on your website, how does that impact the
  labeling of your videos if you use a numbering system?

### Consider the placement of the videos on the website

Users who can also read English or French prefer to watch the ASL/LSQ videos and
scan the related written content at the same time. Here are some options for how
the ASL/LSQ video and written text can appear together:

* Place the ASL/LSQ videos side by side with the written text.
* Have a fixed location on the screen to play the ASL/LSQ video. Hovering over a
  certain written content can trigger the translation video of that text to
  play. (Example: [Signly](https://signly.co/))
* If there is a heading followed by a paragraph, place the video between the
  heading and the paragraph.

### Consider the size of the videos

Provide a way for users to adjust the size of the videos. Large videos that lead
to more scrolling is especially laborious for users who use assistive
technologies like switches and head trackers. However, some Deaf viewers with
vision loss need a larger video.

### Create a way to open or close the videos

If the website loads all the videos on the page at once, loading may take a long
time for those who don’t have stable or reliable internet connection. Consider
having buttons or thumbnails of the video that open and close the videos one at
a time.

### Offer different colour modes

Deaf users with vision loss may need different website background colours to
help them see the video and the translations better. Consider offering different
colour modes, like light mode, dark mode, high contrast mode, etc.

### Consider how to chunk content in the code

When adding translations for written languages (e.g. English to French), a
single block of text is usually replaced with another. This rarely spans across
HTML elements, with the exception of links and simple formatting like bold and
emphasis. This however, is not the case with Sign Languages. Rather than
replacing text, a signed video accompanies the existing text. This video may
represent multiple blocks of text such as a heading, list of items, set of
buttons and etc.

Some of the considerations above, like how much content is in each video, where
the video sits on the page, and how users can interact with the videos will
affect your technical approach.

Some technical things to also consider:

* Where the videos will be stored/hosted
* If the video player meets the needs of the users

## Test your website

Since integrating Sign Language into websites is an emerging practice, it’s
important to test out your website with Deaf users. Here are some suggestions on
what to test for:

1. **Amount of information:** How was the amount of content in the video? Was it
   too much or too little?
2. **Placement of the video:** Was the placement of the videos on each page
   appropriate? Was the size of the video too big, or too small?
3. **Interacting with the video:** Was the user interaction for opening,
   closing, and adjusting the size of the videos intuitive and usable?
4. **Quality of the video:** How was the quality of the video and the
   translations in it?

When an issue comes up, you can use it as an opportunity to discuss possible
solutions with your test participant. You can share these ideas with other
participants to improve your understanding of the issue and get a different
perspective.

## Maintaining and updating videos

After integrating your Sign Language videos, consider how you want to maintain
and update them as time goes on.

* How will you know when a video is out of date or not lining up with the copy?
* What’s the process for updating a video when any copy is changed?
* How will you flag a video needing updating?
* How will you know when a video is missing?
