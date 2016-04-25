## setup
- from the `docs` directory
- `npm install -g gulp`
- `npm install -g node-sass`
- `npm install`
- 'git clone git@github.com:forestryio/forestry-doc-theme.git hugo/themes/forestry-doc-theme' to the `./themes/` directory

## gulp commands

- `gulp`
  - The default task. Will server hugo project through browserSync, and automatically reload changes in the browser.
- `gulp draft`
  - Same as default, except drafts will be included.
- `gulp build`
  - Build the website for deployment
- `gulp build:draft`
  - Same as build, except drafts are included.
- `gulp js`
  - Build all the js files in the theme
- `gulp scss`
  - Build all the scss files in the theme
