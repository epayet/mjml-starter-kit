require('babel-register');

// Require the custom components and get the affected engine
require('./components')
var mjmlEngine = require('mjml')

var gulp = require('gulp')
// TODO Get rid of the temporary fix when gulp-mjml is updated
//var mjml = require('gulp-mjml')
var mjml = require('./gulp/mjml')
var del = require('del')
var browserSync = require('browser-sync').create()
var path = require('path')
var nodemon = require('gulp-nodemon')
var notifier = require('node-notifier');

var mjmlFiles = './templates/*.mjml'
var htmlFiles = './dist/*.html'
var distFolder = './dist'
var port = process.env.PORT || 8001

gulp.task('default', ['serve', 'watch'])

gulp.task('watch', ['serve'], function() {
  // When HTML files change, reload browser
  gulp.watch([htmlFiles], () => browserSync.reload())

  // Watch any change for js (components) and mjml files
  // Build in another process to use last components changes
  nodemon({
    script: 'build.js',
    ext: 'js mjml',
    ignore: 'node_modules'
  })
    .on('crash', function() {
      notifier.notify({
        title: 'MJML compilation',
        message: 'It seems that something went wrong...'
      })
    })
})

gulp.task('serve', ['build'], function() {
  return browserSync.init({
    port: port,
    server: {
      baseDir: './'
    },
    reloadDelay: 2000
  })
})

gulp.task('build', ['clean'], function () {
  console.log('Building html files...')
  return gulp.src(mjmlFiles)
    .pipe(mjml(mjmlEngine))
    .pipe(gulp.dest(distFolder))
})

gulp.task('clean', function() {
  return del(distFolder)
})