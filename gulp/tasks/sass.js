var gulp         = require('gulp')
var browserSync  = require('browser-sync')
var sass         = require('gulp-sass')
var sourcemaps   = require('gulp-sourcemaps')
var handleErrors = require('../util/handleErrors')
var config       = require('../config')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', function () {
  return gulp.src(config.sass.src)
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass.settings))
    .on('error', handleErrors)
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browserSync.reload({ stream: true }))
})