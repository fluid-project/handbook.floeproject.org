---
title: Metadata
layout: default
category: Methods
---

## AccessForAll Metadata

Content authors can use metadata to provide information about what needs a resource can accommodate. [AccessForAll](/AccessForAll.html) metadata provides an interoperable framework for providing this information. It can be used to describe, among other things:

* what the technical/environmental requirements are for a given resource (e.g. is a mouse required to interact with the resource?);
* what sensory modalities are required to perceive the content of the resource (e.g. does the learner need to be able to hear the content?);
* what learning style the resource accommodates (e.g. is this a highly visual learning resource?).

AccessForAll also provides a mechanism for associating resources with each other, supporting discovery of resources required for augmentation or substitution (for example, adding a text caption to a video).

Describing OERs with AccessForAll metadata allows a delivery system to automatically personalize the content and its delivery to meet the unique needs of each learner.

AccessForAll metadata is typically recorded in a metadata record separate from the resource itself. Schema.org, which defines microdata properties that can be embedded directly into web resources, has recently incorporated several accessibility properties based on the AccessForAll metadata. This allows search engines such as Google, Yahoo, etc. to improve search results by not only matching search terms but also filtering results based on the learner's expressed needs and preferences.

More information:
* [Schema.org Accessibility Properties](/SchemaOrgAccessibilityProperties.html)

## Case Study: Floe Tools for Automatic Metadata Creation

The Floe project partnered with <a href="http://www.oercommons.org/" class="link-external">OER Commons</a> to create a prototype of metadata authoring supports. The supports were built in to the OER Commons authoring system, Open Author, which was designed to help educators create and share high-quality open educational resources (OERs). The initial prototype added to the Open Author interface visual feedback of the accessible features, alternatives, etc. in the content. The prototype created <a href="http://imsglobal.org/accessibility/" class="link-external">IMS AccessForAll-compliant metadata</a>.

<figure>
![The Open Author accessibility metadata sidebar, showing icons indicating the accessibility features and alternatives in the content](/images/A4A_adaptions_sidebar.png)
<figcaption>
*Figure:* The Open Author accessibility metadata sidebar
</figcaption>
</figure>

<figure>
[![The Open Author accessibility metadata sidebar, shown in the context of the Open Author interface](/images/A4A_adaptions_sidebar_in_context.png)](/images/A4A_adaptions_sidebar_in_context.png)
<figcaption>
*Figure:* The Open Author interface, including the accessibility metadata sidebar
</figcaption>
</figure>

The Floe team is building upon the real-world results of the OER Commons prototype to create reusable, independent software modules that can be integrated into any authoring environment:

1. a module that can automatically generate accessibility metadata as part of the authoring process, making assumptions and inferences based on the nature of the content itself;
2. a module that presents accessibility metadata as part of the authoring interface, allowing the author to edit the metadata;
3. a module that displays a summary of existing metadata, for use both while authoring and while viewing the content.

The current modules embed <a href="http://schema.org/" class="link-external">Schema.org-compatible attributes</a> directly into the authored HTML.

See a <a href="http://metadata.floeproject.org/demos/html/" class="link-external">live demo of the current version of the Floe metadata authoring tools</a>.

<figure>
[![The Floe Metadata authoring demo, showing the metadata sidebar to the right of the editing interface](/images/Metadata-authoring-full.png)](/images/Metadata-authoring-full.png)
<figcaption>
*Figure:* Screen from the Floe Metadata authoring demo.
<figcaption>
</figure>

<figure>
[![Screen from the Floe Metadata Authoring Tool](/images/Metadata-generated.png)](/images/Metadata-generated.png)
<figcaption>
*Figure:* Screen from the Floe Metadata authoring demo showing the Schema.org metadata attributes and generated HTML.
</figcaption>
</figure>
