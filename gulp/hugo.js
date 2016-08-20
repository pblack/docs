var ipResolver = require('./ipResolver'),
      gulp = require('gulp'),
      path = require('path')
      gutil = require('gulp-util')
      exec = require('child_process').execSync;
// function for building site
function hugo(drafts) {
  ipResolver(function(add){
    var src = path.join(process.cwd(), './');
    var dst = path.join(process.cwd(), './public');

    gutil.log('src: ' + src + ' dst: ' + dst);

    var cmd = 'hugo --config=./config.yaml -s ' + src + ' -d ' + dst;
    if (drafts === true) {
        cmd += ' --buildDrafts=true --verbose=true --baseUrl="http://' + add + ':3000/docs/" ';
    }else if (drafts === false){
      cmd += ' --baseUrl="http://' + add + ':3000/docs/" ';
    }
    console.log(add)
    var result = exec(cmd, {encoding: 'utf-8'});
    gutil.log('hugo: \n' + result);
  })

}

gulp.task('hugo', function(){
  hugo(false);
});

gulp.task('hugo:draft', function(){
  hugo(true);
})

gulp.task('hugo:live', function(){
  hugo();
})
