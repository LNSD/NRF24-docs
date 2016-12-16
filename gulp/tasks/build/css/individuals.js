'use strict';

import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

/* Compile individual sass files into css */
module.exports = function (gulp, config, connect) {
    return gulp.src([config.build.css.individuals.in, '!'+config.build.css.individuals.exclude])
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths: config.build.css.bundle.vendor})
            .on('error', sass.logError)
        )
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.build.css.individuals.out))
        .pipe(connect.reload());
};