# Inclusive Learning Design Handbook

This project contains the content needed to build and deploy a copy of the Inclusive Learning Design Handbook. It is based off of the Fluid `docs-template` project.

## To Build

1. Clone this repository.
2. From within the project's directory, install DocPad if it isn't already installed: `sudo npm install -g docpad`
3. Get the required node modules: `npm install`
4. Run docpad: `docpad run`
5. Confirm everything is working by loading [http://localhost:9778](http://localhost:9778) in a web browser.

## Getting Updates from docs-template for the Inclusive Learning Design Handbook

Periodically `docs-template` will have updates. It is suggested you keep up to date with these changes:

```shell
git remote add docs-template  https://github.com/fluid-project/docs-template
git fetch docs-template
git merge docs-template/master
npm update
```

Conflicts may occur when merging in changes from `docs-template` to your custom site. Manually resolve each conflict.

## Deploy to GitHub Pages

```shell
docpad deploy-ghpages --env static
```

*Note:* The above command will deploy to the origin of the repository. To deploy to production, you may need to be working from Master, not a fork.

## Generating a Static version

To create a static version of the site, run: `docpad generate --env static`. This will generate a version in the `./out/` directory which you can then view locally or upload to a web server.

## Generating a Docker image

You can serve the website from a [Docker](https://docs.docker.com/get-docker) container.

Once you have Docker installed, run the following commands to build a Docker image and start a container:

* Build the image: `docker build -t ildh .`
* Run the container: `docker run --name ildh -p 8000:80 ildh`

The handbook will be available at [http://localhost:8000](http://localhost:8000)

If you make changes to the Handbook, repeat the steps to build the image and start a new container.

## License Information

The Inclusive Learning Design Handbook is licensed under Creative Commons Attribution 2.5 Canada- [http://creativecommons.org/licenses/by/2.5/ca/](http://creativecommons.org/licenses/by/2.5/ca/)
