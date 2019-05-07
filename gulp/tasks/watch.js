var gulp     = require('gulp')
var config   = require('../config')

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.sass.src, ['sass'])
  gulp.watch(config.php.src, ['reload'])
  gulp.watch(config.html.jade, ['reload'])
  gulp.watch(config.html.md, ['reload'])
  gulp.watch(config.svg.dest, ['reload'])
  gulp.watch(config.js.src, ['reload'])
})
