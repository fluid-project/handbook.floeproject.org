# Inclusive Learning Design Handbook

[![Netlify Status](https://api.netlify.com/api/v1/badges/45b40684-190c-4339-bde5-bd7ab28142e6/deploy-status)](https://app.netlify.com/sites/floe-handbook/deploys)

This project contains the content needed to build and deploy a copy of the Inclusive Learning Design Handbook.

## Usage

### To run locally in development mode

1. Install the required NPM packages: `npm install`
2. Run [Eleventy](http://11ty.dev) in development mode: `npm start`.

The website will be available at [http://localhost:8080](http://localhost:8080).

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

## Notes

Modifications can be made to any source file or directory except for the contents of the `./dist/` directory. The
`./dist/` directory is not versioned since it contains the built website that Eleventy generates from the source files,
and  files in `dist` are overwritten at build time.

### Trivet

The ILDH website is based on [Trivet](https://github.com/fluid-project/trivet), an [Eleventy](http://11ty.dev)
website starter kit.

### Previous version of the ILDH

An older version of the ILDH website used from 2011 to 2015 was previously hosted at the same repository name.
It has been archived and can be found here:
<https://github.com/fluid-project/2015-handbook.floeproject.org>

## Working with Netlify CMS

Trivet includes configuration for administering site content via [Netlify CMS](https://netlifycms.org/). This has not
been included in the ILDH, though it can be re-enabled by copying the relevant lines and files from Trivet. In particular,
the directory `src/admin` must be copied into the project and subsequently included in the `dist` directory upon building
the project.

After enabling admin functionality, the Netlify CMS configuration can be edited in [`src/admin/config.yml`](src/admin/config.yml).
For full documentation, see the [Netlify CMS documentation](https://www.netlifycms.org/docs/).

## Internationalization

The ILDH includes internationalization support. To add a language, the following changes need to be made:

1. Update the `languages` object of [`src/_data/config.json`](src/_data/config.json) to add the new language. For
   example, to add Farsi, you would use the [IETF language code](https://github.com/unicode-org/cldr-json/blob/master/cldr-json/cldr-core/availableLocales.json)
   as the key, and add the following object values:

   * a short form of the language code for use in permalinks
   * a short form of the language code that corresponds to an available message bundle locale for Infusion's
     [User Interface Options](https://github.com/fluid-project/infusion/tree/main/src/framework/preferences/messages)
   * the direction (`ltr` for left to right or `rtl` for right to left)
   * the localized language name (endonym)

   ```json
   {
      "languages": {
         "fa-IR": {
            "slug": "fa",
            "uioSlug": "fa",
            "dir": "rtl",
            "name": "فارسی"
         }
      }
   }
   ```

   You can set the site's default language by changing the `defaultLanguage` value in [`src/_data/config.json`](src/_data/config.json)
   to the [IETF language code](https://github.com/unicode-org/cldr-json/blob/master/cldr-json/cldr-core/availableLocales.json)
   of the desired default language.

2. Add sections for the new language to [`src/_data/site.json`](src/_data/site.json) and [`src/_data/translations.json`](src/_data/translations.json),
   translating the content from the English source. The key will always be the language code as used in `config.json`.
3. Add folders in each collection for translated content. For example, you would add a folder called `fa-IR` to
   [`src/collections/pages`](src/collections/pages).

For more information about how Netlify CMS works with internationalized content, see the [internationalization support documentation](https://www.netlifycms.org/docs/beta-features/#i18n-support).

## License

The Inclusive Learning Design Handbook's code is available under the [3-Clause BSD License](https://raw.githubusercontent.com/fluid-project/handbook.floeproject.org/main/LICENSE.md).

The Inclusive Learning Design Handbook's content is licensed under the
[Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/) license.

## Third Party Software in ILDH

The ILDH is based on other publicly available software, categorized by license:

### MIT License

* [Eleventastic](https://github.com/maxboeck/eleventastic)
* [eleventy-webpack](https://github.com/clenemt/eleventy-webpack)
* [Hylia](https://github.com/hankchizljaw/hylia)
* [Supermaya](https://github.com/MadeByMike/supermaya)
* [Vanilla JS Toolkit - nextUntil.js](https://vanillajstoolkit.com/helpers/nextuntil/)
