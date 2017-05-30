// Provide the theme directory for this hugo install
var theme = "./themes/forestry-doc-theme/"

/*
 * All commands and directories are
 * configured from this object
 */
module.exports = exports = {
  hugo: {
    serve: 'hugo server --config=config.yaml -v --log --disableLiveReload -DF -d public/docs/ -b http://localhost:4000/docs/',
    build: 'hugo --config=config.yaml',
    src: ['./content/**/*.md', './layouts/**/*.html', theme + 'layouts/**/*.html'],
    dest: './public'
  },
  sass: {
    vendor: {
      src: ['./node_modules/tachyons/css/tachyons.min.css'],
      dest: theme + "src/sass/vendor"
    },
    src: theme + "src/sass/**/*.+(scss|sass)",
    dest: theme + "static/assets/css/"
  },
  js: {
    vendor: {
      src: ['./node_modules/jquery/dist/jquery.min.js'],
    },
    src: theme + "src/js/**/*.js",
    dest: theme + "static/assets/js/"
  },
  siteImages: {
    src: "./static/assets/images/**/*.+(png|jpg|jpeg|gif|svg)",
    dest: "./static/assets/images/"
  },
  themeImages: {
    src: theme + "src/images/**/*.+(png|jpg|jpeg|gif|svg)",
    dest: theme + "static/assets/images/"
  }
}
