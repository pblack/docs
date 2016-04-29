var gulp = require('gulp'),
      browserSync = require('browser-sync'),
      watch = require('gulp-watch'),
      batch = require('gulp-batch');

gulp.task('server', ['build:all'], function(){
  browserSync({
    server:{
      baseDir: './public/'
    },
    open: false,
  });
  watch(['./archetypes/**/*', './content/**/*', './layouts/**/*', './themes/**/*.html', './themes/**/*.html'],
    batch(function (events, done){
      console.log("Building Content");
      gulp.start('build:content', done)
    }));

  watch([settings.jsDir + '**/*.js', settings.SASSDir + '**/*.scss'], batch(function (events, done) {
          gulp.start('build:all', done);
      }));
});
