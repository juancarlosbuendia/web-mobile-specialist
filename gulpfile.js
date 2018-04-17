'use strict';

/****************
 *   Gulp : Default
 *   message : Survey of application in development or production environment
 *   created : full-stack team  more detail in README.md
 */

require('dotenv').config();

const gulp = require('gulp');
const template = require('gulp-template');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const argv = require('yargs').argv;

/*
* @desc Configure file of enviorement
* @file .env
*/
let env = argv.config ;

/*
 * @desc assignation of environment variables obtained from the command
 * @params --config with yargs
 * */
gulp.task('config', () => {
    'use strict';
    gulp.src(`env/${env}.config`)
        .pipe(template())
        .pipe(rename('.env'))
        .pipe(gulp.dest(''));
});


/**
 * @desc gulp default triggers variable levnations and begin the survey of the app with browserSync
 * @param argv  - variable of enviorement
 */
gulp.task('default', ['config'], () => {
    'use strict';
    browserSync.init({
        server: {
            baseDir: './'
        },
        port:  process.env.PORT
    });
});

/*
* @desc browserSync Reload Daemon
* @params config
* */
gulp.task('server-watch', ['config'], (done) => {
    'use strict';
    browserSync.reload();
    done();
});


gulp.watch('src/**/*.*', ['server-watch']);
