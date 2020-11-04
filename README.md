# Inclusive Learning Design Handbook

[![Netlify Status](https://api.netlify.com/api/v1/badges/45b40684-190c-4339-bde5-bd7ab28142e6/deploy-status)](https://app.netlify.com/sites/floe-handbook/deploys)

This project contains the content needed to build and deploy a copy of the Inclusive Learning Design Handbook.

## Usage

### To run locally in development mode

1. Install the required NPM packages: `npm install`
2. Run [Eleventy](http://11ty.dev) in development mode: `npm start`.

The website will be available at <http://localhost:8080>.

### To build and serve using Docker

You can build and serve the website from a [Docker](https://docs.docker.com/get-docker) container.

Once you have Docker installed, run the following commands to build a Docker image and start a container:

* Build the image: `docker build -t ildh .`
* Run the container: `docker run --name ildh -p 8000:80 ildh`

The website will be available at [http://localhost:8000](http://localhost:8000)

If you make changes to the website, repeat the steps to build the image and start a new container.

### To build for deployment to a personal web server

1. Install the required NPM packages: `npm install`
2. Run the build script: `npm run build`
3. Upload the contents of the `./dist/` directory to the web root of your server.

If you make changes to the website, repeat step 2 to build the website and upload any changed files from the `./dist/`
directory to the web root of your server.

## License Information

The Inclusive Learning Design Handbook's code is licensed under the
[BSD 3-Clause](https://github.com/fluid-project/docs-inclusive-learning/blob/main/LICENSE.md) license.

The Inclusive Learning Design Handbook's content is licensed under the
[Creative Commons Attribution 3.0](http://creativecommons.org/licenses/by/3.0/) license.
