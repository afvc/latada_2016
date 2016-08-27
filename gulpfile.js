'use strict';

 
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
   return gulp.src('./scss/allExmple.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});


//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});