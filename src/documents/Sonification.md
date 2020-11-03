---
title: Sonification
subheader:
category: Approaches
eleventyNavigation:
    parent: Inclusive Authoring
    key: Sonification
    order: 8
---

## What is Sonification?

Sonification is a general term for conveying information or data through non-speech audio &mdash; similar to how the
term "visualization" expresses the concept of conveying information or data graphically. Alert sounds for events such as
receiving new email or program errors are simple forms of sonification commonly used in user interfaces for computers
and other devices.

*Data sonification* is an analogous audio technique to *data visualization* where structured data is converted into
sound to try to:

* communicate aspects of often-complex information clearly and efficiently
* support specific analysis of aspects of the data
* show patterns and relationships in the data

## The Case for Sonification in Open Educational Resources

While sonification is traditionally a theoretical and experimental area, it has rich potential as a means of supporting
["the creation of variations and enhancements"](/Techniques.html#AllowTheCreationOfVariationsAndEnhancements) in OER.

Sonification's most obvious audience would seem to be the learner with visual impairments, but it can also be
appreciated by those with cognitive impairments, learning disabilities, or a preference for audio presentation. It can
help supplement data visualizations or open new areas for discussion, research and learning.

### Floe Work

The Floe team is experimenting with sonification and building authoring tools to support it as part of the project's
work in exploring multimodal content creation and presentation in OERs.

The [Floe chart authoring tool](http://build.fluidproject.org/chartAuthoring/demos/) is a multimodal authoring tool that
produces three forms of content from user-entered data:

* A pie chart (data visualization)
* A data table that also functions as the pie chart's legend
* A sonified form of the data (data sonification)

### Sonification, Visualization and Underlying Data

Placing sonification alongside the more familiar paradigm of data visualization explicitly surfaces that charts and
graphs are a derived representation of a data set.

Thus, one way OERs can support diverse learners and meet the [Accessibility
Principles](/FollowAccessibilityPrinciples.html) of perceivability and understandability is to make underlying data sets
available wherever possible when presenting information in charts, graphs or other derived forms.

When underlying data is available in OERs, this allows the possibility for others to transform the OER in ways the
content creator may not have envisioned in order to best serve individual learner needs.

## Exploring Sonification and Emerging Best Practices

Sonification research to date has been highly experimental, and we still aren't certain how best to use sonification as
part of building inclusive OERs. However, some general guidelines that have emerged:

* As with other forms of presentation, support the possibility of adaptation to individual learner needs by building
  with open frameworks and approaches, and preserving access to source data.
* Explore various facets of audio perception when building sonifications, such as:
  * pitch
  * loudness
  * duration
  * spatial arrangement (left / right, surround / virtual sound environments)
* Build tools with the expectation that diverse users will need to be able to customize sonification preferences in the
  same way they need the ability to customize visual preferences.

### Sonification Usability - Experimenting with a Pie Chart

This research aimed to explore how a pie chart could be represented with sound in order to provide users/learners with
multiple modes of understanding, accessing and using the information. A variety of sonification approaches to
representing small data sets were selected by the community and evaluated through user testing. As part of the
participatory design approach of this research, user feedback was sought not only on the specific approaches to
sonifying data, but on the general concept of sonification and how it can be used to augment one’s daily experiences.
Through analyzing the collected data, the following themes were identified. Note that these themes emerged through
limited testing with a small data set represented by a pie chart, and further research is required and is ongoing in
this field. However, the ideas presented here can be applied more broadly to inform a design approach to the
sonification of data in general.

#### User preference for style of sonification is shaped by context of information consumption

Users noted that the context in which they were consuming information might determine their preference for a particular
form of sonification. Several users distinguished between contexts where deriving precise values would be important
(e.g. a math exam or business course) and contexts where it would be sufficient to know only approximate values (e.g.
when reading a newspaper article).

Other users gave examples of contexts where they may be distracted (e.g. riding a bike, or washing dishes while
listening to changes in their stock portfolio). In this context they would prefer to have an option for a less
complicated sonification approach, such as using a consistent tone that does not require counting the beats or
memorizing different types of sound. In this case, users could approximate the relative size of each piece of
information by comparing the duration of the sound segments.

#### Users expect contextual instructions to aid interpretation of sonified data

Many users provided feedback that it was only after listening to the sonifications several times that they were able to
interpret the strategies used in different approaches. Users expected more instruction as to what they should be
listening for. They also recognized that interpreting different sonification approaches was a skill they could improve
on over time. A comparative analogy made by some screen reader users was that over time they have been able to increase
the speech rate setting in their screen reader software.

#### User preferences for sonification are varied and customization is desired

A desire to customize, control or change aspects of the sonification was repeatedly expressed. This included the ability
to control the duration of the entire sound piece or its individual segments, modify the density and rate of beats,
choose different types of sound, or personalize the sonification experience based on their unique capabilities such as
by changing the pitch, loudness, spatial arrangements, etc.

#### Sonification is new to many users resulting in a learning curve for most

Although many users were able to interpret the sonified information to some degree, comprehending chart data via sound
was a new experience for most. In several cases users expressed the need for a gradual and sequential learning process
to ensure familiarity with different concepts and approaches to sonification. Users felt that, given time to gain some
experience with and to learn the vocabulary of sonification, they would be able to more effectively interpret sonified
data and choose their preferred method of consuming information through sound. The design approach to sonification must
support this learning curve.

For further details regarding the user testing process and results please visit the article "[User Testing of Sonified
Pie Chart Data](https://wiki.fluidproject.org/pages/viewpage.action?pageId=89063433)" on the Fluid Wiki.

## Tools, technology and examples

* The Floe [Floe chart authoring tool](http://build.fluidproject.org/chartAuthoring/demos/) includes sonification
  components built using open web technologies and the [Flocking](http://flockingjs.org/) audio synthesis framework.
* The [Sonification special issue](http://www.open-shelf.ca/columns/sonification-special-issue/) of [Open
  Shelf](http://www.open-shelf.ca/) includes a number of examples sonification from the library world.
* The [Georgia Tech Sonification Lab](http://sonify.psych.gatech.edu/) has created a number of tools as part of their
  research, such as the [Sonification Sandbox](http://sonify.psych.gatech.edu/research/sonification_sandbox/index.html)

## Resources

* The [Floe Sonification wiki page](https://wiki.fluidproject.org/display/fluid/%28Floe%29+Sonification) and its
  subpages and links include much more information, including a literature review.
* The 2011 [Sonification Handbook](http://sonification.de/handbook/) is an open access book with contributions from many
  researchers.
* The [International Community for Auditory Display](http://www.icad.org/) brings together researchers from many
  different fields interested in sonification.
* The [Georgia Tech Sonification Lab](http://sonify.psych.gatech.edu/) is a research group focused on sonification.
