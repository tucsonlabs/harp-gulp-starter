var path = require('path')
var dest = path.join(__dirname, '../app')
var src = path.join(__dirname, '../app')

module.exports = {
  browserSync: {
    proxy: "http://127.0.0.1:9000/"
  },
  sass: {
    src: src + '/assets/scss/**/*.{sass,scss}',
    dest: dest + '/assets/css/',
    settings: {
      indentedSyntax: false,
      imagePath: 'assets/images',
      errLogToConsole: false,
      sourceComments : 'normal'
    }
  },
  images: {
    src: src + '/assets/images/**',
    dest: dest + '/dist/images'
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
    src: src + '/assets/js/**/*.js'
  },
  svg: {
    dest: dest + '/assets/dest/*.svg'
  }
}
