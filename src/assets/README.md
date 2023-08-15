# Asset Handling

The ILDH uses [eleventy-plugin-fluid](https://github.com/fluid-project/eleventy-plugin-fluid) to process JavaScript and CSS or [Sass](http://sass-lang.com) stylesheets. For more information, see the [`eleventy-plugin-fluid` docs](https://github.com/fluid-project/eleventy-plugin-fluid#asset-handling).

#### Caveats

- This example configuration will only process files in the root of the [`/src/assets/scripts`](scripts) or
  [`/src/assets/styles`](styles) directories. If you need to process files in subdirectories (rather than importing them
  into the main files), this might not be the right approach for you.
- If you add a new JavaScript, CSS, or Sass file to the appropriate directory while Eleventy is running (after
  calling `npm run start`), the new file will not be processed immediately. You'll need to restart the build for the new
  file to be processed.

### Automatic Loading

The [`scripts.njk`](../_includes/partials/scripts.njk) and [`stylesheets.njk`](../_includes/partials/stylesheets.njk)
template partials can be modified to automatically load all JavaScript and CSS files from the asset manifest as follows.

1. Modify the [`scripts.njk`](../_includes/partials/scripts.njk) template partial to automatically load all JavaScript
   files listed in the asset manifest:

    ```diff
    - <script type="text/javascript" src="/assets/scripts/app.js" defer></script>
    - <script type="text/javascript" src="/assets/scripts/matomo.js" defer></script>
    + {% set jsPattern = r/.*\.js$/ %}
    + {% for key, value in assets %}
    + {% if jsPattern.test(key) %}
    + <script type="text/javascript" src="/assets{{ value }}" defer></script>
    + {% endif %}
    + {% endfor %}
    ```

2. Modify the [`stylesheets.njk`](../_includes/partials/stylesheets.njk) template partial to automatically load all CSS
   files listed in the asset manifest:

    ```diff
    - <link href="/assets/styles/main.css" rel="stylesheet" />
    + {% set cssPattern = r/.*\.css$/ %}
    + {% for key, value in assets %}
    + {% if cssPattern.test(key) %}
    + <link href="/assets{{ value }}" rel="stylesheet" />
    + {% endif %}
    + {% endfor %}
    ```

#### Caveats

If you need to selectively load some assets on some pages and not on others, this technique isn't suitable.
