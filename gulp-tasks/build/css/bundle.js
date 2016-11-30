'use strict';

import sass from 'gulp-sass';
import merge from 'merge-stream';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';

/* Compile vendor sass files and concat vendor css files into bundle.css */
module.exports = function (gulp, config, connect) {
    const sassStream = gulp.src(config.input.styles.bundle)
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths: config.vendor.sass}).on('error', sass.logError));

    const cssStream = gulp.src(config.input.css);

    return merge(cssStream, sassStream)
        .pipe(concat('bundle.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.output.css))
        .pipe(connect.reload());
};