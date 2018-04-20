const gulp = require('gulp');

const template = require('gulp-template');
const argv = require('yargs').argv;
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

const env = (argv.env === undefined) ? 'dev' : argv.env;


// Begins enviroment config

gulp.task('config', () => {
    'use strict';
    gulp.src(`env/${env}.config`)
        .pipe(template())
        .pipe(rename('.env'))
        .pipe(gulp.dest(''));
});

// Ends enviroment config

// Begins BrowserSync

gulp.task('server-watch', ['config'], (done) => {
    'use strict';
    browserSync.reload();
    done();
});

gulp.task('default', ['config'], () => {
    'use strict';
    browserSync.init({
        server: {
            baseDir: './',

        },
    });
});

gulp.watch('src/**/*.*', ['server-watch']);

// Ends BrowserSync
