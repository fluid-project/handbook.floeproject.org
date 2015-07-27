---
title: Inclusive EPUB 3
layout: default
category: Inclusive EPUB 3
---

The Inclusive EPUB 3 guide is intended for content creators and educators who wish to use EPUB 3 and are interested in making their published content broadly usable by a full spectrum of users.

This guide covers a broad range of topics that will help make an EPUB 3 book more usable in different contexts. The information provided illustrates how concepts may be applied but won't make you an "expert" - you are encouraged use this guide as a starting point and to follow the resources provided to gain additional insight.

## What is Inclusivity and how is it different from accessibility? ##

Technology has enabled users, of all abilities, access to information in many different environments and contexts - they are no longer limited in where and how they access information. Because of this freedom, users are now finding themselves in a wide range of situations where their ability to access information depends on many factors - both internal and external:

* Is the user in a library where she can not listen to audio at a reasonable volume without being disruptive?
* Is the user on a noisy, cramped subway train where network connectivity is limited, there is a lot of ambient noise, and mobility is restricted?
* Is the user unable to concentrate fully to the task but still needs a particular piece of information on his mobile device - how can this be done?

Inclusiveness, or the practice of inclusivity, is the belief that the design of a "thing" – whether it is a piece of technology, an everyday object, or even information itself – should be mindful of a broad range of users, their variable abilities, their variety of environments, situations, and contexts.

Inclusiveness is different from accessibility in that inclusivity doesn't specifically address a particular need or problem - rather inclusivity provides a spectrum of tools and features that the end user can choose from to fit his or her requirements in the given context. In short, Inclusiveness is not prescriptive since the user chooses how best to help themselves.

The challenge for content creators is: How do you create content that allows for flexible usage?

EPUB 3 is an open content distribution format which has many features that allow a broad range of users to consume content in a variety of situations. This guide outlines some of the different features of EPUB 3 that will make your content usable, robust, and resilient.

## What is EPUB? ##

EPUB is an ebook format which is a container for web content that can be distributed as a whole and interpreted by supporting EPUB reader systems. At its most basic, EPUB is a ZIP archive of:

* HTML containing the structure and text content,
* CSS defining the visual and audio style,
* audio and visual media,
* scripts that add some interactivity (Note: scripting is optional in EPUB, therefore the content must be accessible if scripting is disabled), and
* XML data that define the EPUB container and describe its contents using metadata.

What does EPUB offer?

* Special semantics which help give basic HTML elements additional functions or meaning when used in an EPUB reading system.
* A "spine" which defines the author's intended path through the content. This may be different than a table of contents, as a table of contents may include references to content not considered part of the author's primary path. An example of this scenario would be a textbook with diagrams in boxes or content in the sidebar - the EPUB spine may choose to skip over this material, even though it may appear in the book's table of content.
* Metadata which describe the content (i.e. author, language, etc.). This metadata typically contains <a href="http://dublincore.org/" class="link-external">Dublin Core metadata</a>, but can contain any metadata as long as the schema is defined. <a href="http://www.idpf.org/accessibility/guidelines/content/meta/schema.org.php" class="link-external">Schema.org accessibility metadata</a>, which describes accessibility features and modalities of the EPUB book, is supported.

EPUB is an open format managed by the <a href="http://idpf.org/" class="link-external">International Digital Publishing Forum</a> (or IDPF) - a group of industry stakeholders who are primarily technology and content providers. The latest version of the EPUB specification is EPUB 3.

## Why Choose EPUB 3 over HTML5? ##

EPUB 3 is a way to package and distribute HTML 5 content. Therefore EPUB 3 can be perceived as a way to distribute web content offline and includes unique features that make the EPUB 3 format more suitable for page-by-page consumption and academic settings. Whether you choose straight HTML 5 over EPUB 3 largely depends on your requirements and your content.

EPUB 3 is a viable content distribution format because it:

* allows ease of offline access to content,
* provides native content ordering and navigation,
* is being consumed by an increasingly large group of people, at an increasing rate, as a result of the prominence of e-readers ([source](http://www.emarketer.com/Article/Tablets-Ereaders-Lead-More-Book-Reading/1010307)),
* offers additional semantics that help describe text structure and function, and
* helps give content authors a platform to seamlessly include rich features such as text-to-speech, content narration, and media alternatives.

## Building Inclusive EPUB 3 ##

EPUB 3 books are increasingly diverse and complex; similarly, so are its end users. Due to the wide variety of personal devices available, the different environments in which users consume content, and the varying ability of each user given their context and environment, publishing a single book that can be used across this spectrum can be challenging.

To improve an EPUB 3 book's utility across all these devices, environments, and contexts - the following is a guide to help an EPUB 3 author create more inclusive publications.

Broadly, the approach to making an inclusive EPUB 3 publicaion takes the following into account (we will go into more detail on each point shortly):

* Content is composed and structured in well-formed HTML 5 using standards-compliant formatting and appropriate usage of HTML 5 semantic markup and tags.
* Visual styling is done using CSS 2.1 with sensitivity to reader platforms with monochromatic, aural, or tactile displays.
* Embedded graphical, audio, and video media are accompanied by alternate formats and textual descriptions.
* Interactive content through scripting is accessible if scripting is disabled or unsupported by the user's reader platform.
* Media overlays are used to give voiced narrations.
* Text-to-speech is facilitated and enhanced by using special audio markup and aural styles.
* Content is translated to other languages.
* Good descriptive metadata is available that includes accessibility information.
