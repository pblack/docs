var gulp = require("gulp"),
      runSequence = require('gulp-run-sequence'),
      browserSync = require('browser-sync');



gulp.task('build:all', function(){
  runSequence(['sass', 'js'], 'hugo:draft', browserSync.reload);
});

gulp.task('build:content', ['hugo:draft'], browserSync.reload);

gulp.task('build', function(){
  runSequence(['sass', 'js'], 'hugo');
});
