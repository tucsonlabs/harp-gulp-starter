var path = require('path')
var dest = path.join(__dirname, '../app')
var src = path.join(__dirname, '../app')

module.exports = {
  browserSync: {
    proxy: "http://127.0.0.1:9000/"
  },
  sass: {
    src: src + '/assets/sass/**/**/*.{sass,scss}',
    dest: dest + '/assets/css/',
    settings: {
      indentedSyntax: true,
      imagePath: 'assets/img',
      errLogToConsole: false,
      sourceComments : 'normal'
    }
  },
  images: {
    src: src + '/img/**',
    dest: dest + 'dist/img'
  },
  production: {
    cssSrc: '../*.css',
    jsSrc: src + '/js/*.js',
    dest: dest + '/dist/js'
  },
  php: {
    src: dest + '/**/*.php'
  },
  html: {
    jade: src + '/**/*.jade',
    md: src + '/**/*.md'
  },
  js: {
    src: src + '/js/**/*.js'
  },
  svg: {
    dest: dest + '/assets/dest/*.svg'
  }
}