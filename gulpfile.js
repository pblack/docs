var requireDir = require('require-dir'),
      fs = require('fs');

// Require all tasks in gulp, including subfolders
requireDir('./gulp', { recurse: true });

// global settings
settings = {
  theme: "forestry-doc-theme",
  //Your main javascipt files
  jsEntryPoints: ['main.js'],
  // only one of these
  SASSEntryPoint: 'main.scss'
};


// use the settings to set up convenience variables
(function(settings){
  settings.jsEntryPoints = settings.jsEntryPoints.map( x => "./themes/" + settings.theme + '/src/js/' + x);
  settings.JSExitPoint = './themes/' + settings.theme +  '/static/js/'
  settings.SASSEntryPoint = "./themes/" + settings.theme + '/src/sass/' + settings.SASSEntryPoint
  settings.SASSExitPoint = "./themes/" + settings.theme + '/static/css/'
  settings.SASSDir = "./themes/" + settings.theme + "/src/sass/"
  settings.jsDir = "./themes/" + settings.theme + "/src/js/"
})(settings);
