const browserSync = require('browser-sync').create();
var child         = require('child_process');
var config        = require('./gulp.config');
var clean         = require('gulp-clean');
var cache         = require('gulp-asset-cache');
var exec          = require('child_process').exec;
var gulp          = require('gulp');
var gutil         = require('gulp-util');
var ignore        = require('gulp-ignore');
var imageMin      = require('gulp-imagemin')
var named         = require('vinyl-named');
var path          = require('path');
var prefix        = require('gulp-autoprefixer');
var sass          = require('gulp-sass');
var sequence      = require('run-sequence');
var sourcemaps    = require('gulp-sourcemaps');
var webpack       = require('webpack-stream');

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
  return hugo();
});

gulp.task('hugo-build', ['process'], function() {
  return hugo('build');
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
    .pipe(named())
    .pipe(webpack({
      output: {
        filename: '[name].min.js'
      },
    })) 
    .pipe(gulp.dest(config.js.dest))
    .pipe(browserSync.reload({stream:true}));
});

/*
 * Optimize the images in the the
 * sites asset folder (overrites originals)
 */
gulp.task('site-images', function() {
  return gulp.src(config.siteImages.src)
    .pipe(cache.filter(config.siteImages.dest + '.image-cache'))
    .pipe(imageMin({verbose: true}))
    .pipe(gulp.dest(config.siteImages.dest))
    .pipe(cache.cache())
    .pipe(browserSync.reload({stream:true}));
})

/*
 * Optimize the images in the theme src
 * folder. (Doesn't overrite originals)
 */
gulp.task('theme-images', function() {
  return gulp.src(config.themeImages.src)
    .pipe(cache.filter(config.themeImages.dest + '.image-cache'))
    .pipe(imageMin({verbose: true}))
    .pipe(gulp.dest(config.themeImages.dest))
    .pipe(cache.cache())
    .pipe(browserSync.reload({stream:true}));
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
  return gulp.src([
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
gulp.task('process', ['sass', 'js', 'theme-images']);

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
  sequence('clean', 'site-images', ['process', 'hugo-build']);
});

gulp.task('default', ['server']);
