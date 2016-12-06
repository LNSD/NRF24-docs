"use strict";

import gutil  from 'gulp-util';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';

/* Concat scripts files (minify if --type production) */
module.exports = function (gulp, config, connect) {
    return gulp.src(config.input.scripts)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        //only uglify if gulp is ran with '--type production'
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.output.js))
        .pipe(connect.reload());
};
