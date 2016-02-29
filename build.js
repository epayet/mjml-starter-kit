// Run gulp build task from a node file

var gulp = global.gulp  = require('gulp');
require('./gulpfile')

gulp.start('build')