var gulp = require('gulp'),
    webpack = require('webpack-stream'),
    named = require('vinyl-named'),
    del = require('del'),
    plumber = require('gulp-plumber');


gulp.task('js', ['js:clean'], function(){
  return gulp.src(settings.jsEntryPoints)
    .pipe(plumber())
    .pipe(named())
    .pipe(webpack({
      output: {
        filename: '[name].min.js'
      },
      devtool: 'source-map'
    }))
    .pipe(gulp.dest(settings.JSExitPoint));
});

gulp.task('js:clean', function(){
  var dst = settings.JSExitPoint;
  del.sync(dst);
});
