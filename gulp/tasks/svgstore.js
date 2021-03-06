var gulp = require('gulp')
var svgstore = require('gulp-svgstore')
var svgmin = require('gulp-svgmin')
var path = require('path')
var src = path.join(__dirname, '../../app')

gulp.task('svgstore', function () {
    return gulp
        .src( src + '/assets/svg/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative))
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            };
        }))
        .pipe(svgstore())
        .pipe(gulp.dest( src + '/assets/dest'))
});
