'use strict';

const gulp = require('gulp');
const template = require('gulp-template');
const rename = require('gulp-rename');
const argv = require('yargs').argv;

const env = (argv.env === undefined) ? 'dev' : argv.env;

gulp.task('config', () => {
    gulp.src(`env/${env}.config`)
        .pipe(template())
        .pipe(rename('.env'))
        .pipe(gulp.dest(''));
});
