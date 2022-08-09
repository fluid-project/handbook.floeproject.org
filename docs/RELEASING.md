# ILDH Release Process

This guide provides instructions outlining the release process for the ILDH as hosted in its [primary fork](https://github.com/fluid-project/handbook.floeproject.org). The `git` commands shown in this guide assume that the [remote structure](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) includes the upstream fork as `upstream`.

## Step I — Merge the new changes

1. Check out the `dev` branch:
   - `git checkout --track upstream/dev` if you don't have a local branch tracking the remote `dev` branch, or
   - `git checkout dev` if you already have such a local branch set up
2. Merge `main` into `dev`:

   ```bash
   git merge upstream/main
   ```

3. Address any merge conflicts that may have arisen
4. Push the changes to the remote branch:

   ```bash
   git push
   ```

### Test the deploy preview

1. Test the dev branch deploy site using various OS and browser combinations: <https://dev--floe-handbook.netlify.app/>
   - e.g. Chrome and Firefox in Windows 10 (multiple window sizes), Safari in macOS, mobile devices and so on
   - test UIO with various combinations of preferences, making sure to set text size and line height to the maximum possible values
2. Use an assistive technology like a screen reader (NVDA, TalkBack, VoiceOver, etc.) to ensure all content is perceivable and ARIA roles are correctly set
3. Run some representative pages through an HTML validator such as the W3C's Nu HTML Checker: <https://validator.w3.org/nu/>
4. On the same pages, run an automated accessibility tester such as WebAIM's WAVE plugin or Lighthouse in Chrome DevTools

#### Suggested test pages (any new pages should also be included)

| Page | URL |
|------|-----|
| Home page | <https://dev--floe-handbook.netlify.app/> |
| A root page (Approaches) | <https://dev--floe-handbook.netlify.app/approaches/> |
| Perspectives | <https://dev--floe-handbook.netlify.app/perspectives/> |
| Article pages | <https://dev--floe-handbook.netlify.app/techniques/inclusive-epub-3/>, <https://dev--floe-handbook.netlify.app/perspectives/the-three-dimensions-of-inclusive-design-part-two/> |

## Step II — Publish a release

1. Check for any remaining differences between the upstream `dev` and `main` branches. There should be no commits in `main` which are not in `dev`, though if differences are noted then please repeat the "Merge" instructions at the beginning of this guide.
   1. `git log main ^dev` to show what is in `main` that is not in `dev`. This command should produce no results.
   2. `git log dev ^main` to show what is in `dev` that is not in `main`. This command should list the commits encompassing the work to be released.
2. Push the `dev` branch directly into `main`: `git push upstream dev:main`
3. Wait until the [GitHub CI Actions](https://github.com/fluid-project/handbook.floeproject.org/actions) finish running. If any errors occur during this process, now is the time to address them. Investigating these will likely require exploring the build logs on Netlify.com
   - There may be build errors related to which version of Node.js or NPM are used by Netlify, since updating the build image has, in the past, not seemed to have any effect on that. At the time of writing this guide, the environment variable NODE_VERSION has been set to override the build settings to use a particular Node version.
4. Test the production site to confirm everything is working as expected: <https://handbook.floeproject.org/>
5. The `release-please` GitHub Action will prepare a pull request with an automatically-generated entry in `CHANGELOG.md`. Review the changelog and, when satisfied, merge the PR. The release will automatically be tagged and published.
