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

/*Configure file of enviorement .env */
let env = argv.config ;

/*assignation of environment variables obtained from the command --config with yargs*/
gulp.task('config', () => {
    'use strict';
    gulp.src(`env/${env}.config`)
        .pipe(template())
        .pipe(rename('.env'))
        .pipe(gulp.dest(''));
});

/*gulp default triggers variable levnations and begin the survey of the app with browserSync */
gulp.task('default', ['config'], () => {
    'use strict';
    browserSync.init({
        server: {
            baseDir: './'
        },
        port:  process.env.PORT
    });
});

/*browserSync Reload Daemon */
gulp.task('server-watch', ['config'], (done) => {
    'use strict';
    browserSync.reload();
    done();
});


gulp.watch('src/**/*.*', ['server-watch']);