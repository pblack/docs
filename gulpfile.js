// core
var gulp = require('gulp');
var rename = require('gulp-rename');
var exec = require('child_process').execSync;
var gutil = require('gulp-util');
var path = require('path');
var del = require('del');
var runSequence = require('gulp-run-sequence');

// Dev tools
var browserSync = require("browser-sync");

// Javascript
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

// SASS
var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

////////////////////////////////////////////////////////////////////////////////////////////////////
// Javascript minification
////////////////////////////////////////////////////////////////////////////////////////////////////
gulp.task('js', function() {
  return gulp.src('./themes/forestry-doc-theme/src/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter("default"))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('./themes/forestry-doc-theme/static/js'))
  .pipe(browserSync.stream());
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// Build CSS
////////////////////////////////////////////////////////////////////////////////////////////////////
gulp.task('scss', function() {
  return gulp.src('./themes/forestry-doc-theme/src/**/*.scss')
  .pipe(sass({ style: 'expanded' }))
  .pipe(autoprefixer("last 2 version"))
  .pipe(rename({suffix: '.min'}))
//  .pipe(minifycss())
  .pipe(gulp.dest('./themes/forestry-doc-theme/static/css'))
  .pipe(browserSync.stream());
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// watch for changes
////////////////////////////////////////////////////////////////////////////////////////////////////
gulp.task('watch', function() {
  gulp.watch('./themes/**/*.scss', ['scss']);
  gulp.watch('./themes/**/*.js', ['js']);
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// Hugo
////////////////////////////////////////////////////////////////////////////////////////////////////

// function for building site
function hugo(drafts) {
    var src = path.join(process.cwd(), './');
    var dst = path.join(process.cwd(), './public');

    gutil.log('src: ' + src + ' dst: ' + dst);

    var cmd = 'hugo --config=./config.yaml -s ' + src + ' -d ' + dst;
    if (drafts) {
        cmd += ' --buildDrafts=true --verbose=true --baseUrl="http://localhost:3000/" ';
    }

    var result = exec(cmd, {encoding: 'utf-8'});
    gutil.log('hugo: \n' + result);
}

// compile website with drafts
gulp.task('hugo:draft', ['hugo:delete'], function(){
  hugo(true);
});

// clear the previous compiled version
gulp.task('hugo:delete', function() {
  var dst = path.join(process.cwd(), 'public');
  del.sync(dst);
});

// compiple site without drafts
gulp.task('hugo', ['hugo:delete'], function() {
  hugo(false);
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// build
////////////////////////////////////////////////////////////////////////////////////////////////////

// build website with drafts
gulp.task('build:draft', function(){
  runSequence(['scss', 'js'], 'hugo:draft');
});

// build website without drafts
gulp.task('build', function(){
  runSequence(['scss', 'js'], 'hugo');
});

////////////////////////////////////////////////////////////////////////////////////////////////////
// Serve the website for development
////////////////////////////////////////////////////////////////////////////////////////////////////
// Serve with drafts
gulp.task('server:draft', ['build:draft'], function() {
  browserSync({
    server:{
      baseDir: "./public/"
    },
    open: false
  });
  gulp.watch(['./archetypes/**/*', './content/**/*', './layouts/**/*'], ['hugo:draft', browserSync.reload])
  gulp.watch(['./themes/**/*.scss', './themes/**/*.js'], ['build:draft', browserSync.reload])
});

// serve without drafts
gulp.task('server', ['build'], function() {
  browserSync({
    server:{
      baseDir: "./public/"
    },
    open: false
  });
  gulp.watch(['./archetypes/**/*', 'content/**/*', './layouts/**/*'], ['hugo', browserSync.reload])
  gulp.watch(['./themes/**/*.scss', './themes/**/*.js', `./themes/**/*.md`, `./themes/**/*.html`], ['build', browserSync.reload])
});


////////////////////////////////////////////////////////////////////////////////////////////////////
// Default task
////////////////////////////////////////////////////////////////////////////////////////////////////
// no arguments, serve without drafts
gulp.task('default', ['server']);

// gulp draft to serve with drafts
gulp.task('draft', ['server:draft'])
