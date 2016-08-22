var gulp        = require('gulp')
var sass        = require('gulp-sass')
var browserSync = require('browser-sync').create()
var requireDir  = require('require-dir')
var sourcemaps  = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')
var config      = require('./gulp/config')

requireDir('./gulp/tasks', { recurse: true })