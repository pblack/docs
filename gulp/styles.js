var gulp = require('gulp'),
      rename = require('gulp-rename'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      sourcemaps = require('gulp-sourcemaps'),
      plumber = require('gulp-plumber'),
      del = require('del');


gulp.task('sass', ['sass:clean'], function() {
  gulp.src(settings.SASSEntryPoint)
  .pipe(plumber())
  .pipe(sourcemaps.init())
    .pipe(sass({style: 'expanded'}))
    .pipe(autoprefixer("last 2 version"))
    //.pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(settings.SASSExitPoint))
});

gulp.task('sass:clean', function(){
  var dst = settings.SASSExitPoint;
  del.sync(dst);
});
