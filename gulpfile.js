const browserSync = require('browser-sync').create();
var webpack       = require('webpack-stream');
var path          = require('path');
var exec          = require('child_process').exec;
var child         = require('child_process');
var sequence      = require('run-sequence');
var gulp          = require('gulp');
var gutil         = require('gulp-util');
var clean         = require('gulp-clean');
var cache         = require('gulp-cache');
var ignore        = require('gulp-ignore');
var sass          = require('gulp-sass');
var prefix        = require('gulp-autoprefixer');
var imageMin      = require('gulp-imagemin')
var sourcemaps    = require('gulp-sourcemaps');

var theme = "./themes/forestry-doc-theme/"

/*
 * All commands and directories are
 * configured from this object
 */
var config = {
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

/*
 * Handle errors and emit them to
 * prevent a gulp script crash
 *
 * @var error string
 */
function handleError(error) {
  gutil.log(error.message);
  this.emit('end');
}

/*
 * Handle launching hugo. Takes a status
 * message to handle the build type
 *
 * @var status string
 */
function hugo(status) {
  var result;
  var log = function(data) {
    gutil.log('$ hugo: ' + data);
    browserSync.reload();
  }
 
  if(status == "build") { 
    result = exec(config.hugo.build);

  } else {
    result = exec(config.hugo.serve);

  }
  
  result.stdout.on('data', log);
  result.stderr.on('data', log);
  result.on('exit', log);
}

gulp.task('hugo-serve', ['process'], function() {
  hugo();
});

gulp.task('hugo-build', ['process'], function() {
  hugo('build');
});

/*
 * Handle SASS and pulling tachyons
 * from node_modules
 */
gulp.task('sass-vendor', function() {
  return gulp.src(config.sass.vendor.src)
    .pipe(gulp.dest(config.sass.vendor.dest))
});

gulp.task('sass', ['sass-vendor'], function() {
  return gulp.src(config.sass.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['scss'],
      outputStyle: 'compressed', // expanded
      onError: browserSync.notify
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browserSync.reload({stream:true}));
});

/*
 * Handle reading javascript files
 * minifying them, and concatenating
 * them into a single file
 */
gulp.task('js-vendor', function() {
  return gulp.src(config.js.vendor.src)
    .pipe(gulp.dest(config.js.dest))
});

gulp.task('js', ['js-vendor'], function() {
  return gulp.src(config.js.src)
    .pipe(ignore(config.js.vendor.src))
    .pipe(webpack({
      output: {
        filename: '[name].min.js'
      },
    })) 
    .pipe(gulp.dest(config.js.dest))
    .pipe(gulp.dest(config.js.dest))
    .pipe(browserSync.reload({stream:true}));
});

/*
 * Optimize the images in the the
 * sites asset folder (overrites originals)
 */
gulp.task('site-images', function() {
  return gulp.src(config.siteImages.src)
    .pipe(cache(imageMin()))
    .pipe(gulp.dest(config.siteImages.dest))
    .pipe(browserSync.reload({stream:true}))   
})

/*
 * Optimize the images in the theme src
 * folder. (Doesn't overrite originals)
 */
gulp.task('theme-images', function() {
  return gulp.src(config.themeImages.src)
    .pipe(cache(imageMin()))
    .pipe(gulp.dest(config.themeImages.dest))
});

/*
 * Watches the hugo server and assets
 * for changes and reloads the browsersync
 * server. We use browsersync for cross-device
 * testing!
 */
gulp.task('watch', ['hugo-serve'], function (done) {
  browserSync.init({
    port: 4000,
    proxy: 'localhost:1313',
    open: false
  }, done());

  gulp.watch(config.sass.src, ['sass']).on('error', handleError);
  gulp.watch(config.js.src, ['js']).on('error', handleError);
  gulp.watch(config.siteImages.src, ['site-images']).on('error', handleError);
  gulp.watch(config.themeImages.src, ['theme-images']).on('error', handleError);
  gulp.watch(config.hugo.src).on('error', handleError);
});

/*
 * Handle cleaning up the theme 
 * output directories
 */
gulp.task('clean', function() {
  gulp.src([
    config.sass.dest,
    config.js.dest,
    config.themeImages.dest, // don't do siteImages, will delete originals
    config.hugo.dest
  ])
  .pipe(clean({force: true}));
});

/*
 * Run the asset pipeline
 */
gulp.task('process', ['sass', 'js', 'site-images', 'theme-images']);

/*
 * Gulp task for serving hugo
 * and running the asset pipeline
 */
gulp.task('server', ['process', 'hugo-serve', 'watch']);

/*
 * Gulp task for building hugo
 * and running the asset pipeline
 */ 
gulp.task('build', function() {
  sequence('clean', ['process', 'hugo-build']);
});

gulp.task('default', ['server']);
