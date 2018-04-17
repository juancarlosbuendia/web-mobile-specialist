'use strict';

require('dotenv').config();

const gulp = require('gulp');
const template = require('gulp-template');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const argv = require('yargs').argv;

let env = argv.config ;


gulp.task('config', () => {
    'use strict';
    gulp.src(`env/${env}.config`)
        .pipe(template())
        .pipe(rename('.env'))
        .pipe(gulp.dest(''));
});

gulp.task('default', ['config'], () => {
    'use strict';
    browserSync.init({
        server: {
            baseDir: './'
        },
        port:  process.env.PORT
    });
});



gulp.task('server-watch', ['config'], (done) => {
    'use strict';
    browserSync.reload();
    done();
});


gulp.watch('src/**/*.*', ['server-watch']);