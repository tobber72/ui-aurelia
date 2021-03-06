var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

// outputs changes to files to the console
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function() {
  gulp.watch(paths.source.js,        ['source:js'     , browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.source.html,      ['source:html'   , browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.plugins.style, ['plugins:stylus', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.plugins.styl.all, browserSync.reload).on('change', reportChange);
});
