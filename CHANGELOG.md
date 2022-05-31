# Changelog

All notable changes to this project will be documented in this file.
See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.0.0 (2022-03-10)

### ⚠ BREAKING CHANGES

* This release implements the ILDH site redesign described in this [Figma file](https://www.figma.com/file/JVjWAROz9jZBbDaemwom2y/ILDH?node-id=0%3A1).
  The previous Eleventy conversion (which has no official release) has been replaced with a structure based on [Trivet](https://github.com/fluid-project/trivet),
  including switching Stylus out for Sass as the CSS preprocessor. Additionally, the Sass 7-1 directory structure and
  BEM have been used to organize styling rules. Some content (editorial) and tooling updates have also been incorporated
  into this release.

  This update represents a work in progress, and further issues were filed to complete the work of implementing the design
  to its exact specifications. This further work is to form the basis of the future `v1.1.0`.
