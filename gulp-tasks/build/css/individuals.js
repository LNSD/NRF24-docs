'use strict';

import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

/* Compile individual sass files into css */
module.exports = function (gulp, config, connect) {
    return gulp.src(config.input.styles.individuals)
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths: config.vendor.sass}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.output.css))
        .pipe(connect.reload());
};