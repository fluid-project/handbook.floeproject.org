# Inclusive Learning Design Handbook

This project contains the content needed to build and deploy a copy of the Inclusive Learning Design Handbook. It is based off of the Fluid `docs-template` project.

# To Build

1. Clone this repository.
2. From within the project's directory, install DocPad if it isn't already installed: `sudo npm install -g docpad`
3. Get the required node modules: `npm install` (TODO: package.json looks for `docs-core` URL should point to Fluid's version, not jhung)
4. Run docpad: `docpad run`
5. Confirm everything is working by loading `http://localhost:9778/` in a web browser.

# Getting Updates

Periodically `docs-template` will have updates. To update:

```
git remote add docs-template  https://github.com/fluid-project/docs-template
git fetch docs-template
git merge docs-template/master
npm update
```

# Deploy to GitHub Pages

```
docpad deploy-ghpages --env static
```

*Note:* The above command will deploy to the origin of the repository. To deploy to production, you may need to be working from Master, not a fork.

# Generating a Static version
To create a static version of the site, run: `docpad generate --env static`. This will generate a version in the `./out/` directory which you can then view locally or upload to a web server.

# License Information
The Inclusive Learning Design Handbook is licensed under Creative Commons Attribution 2.5 Canada- http://creativecommons.org/licenses/by/2.5/ca/
