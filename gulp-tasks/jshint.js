"use strict";
import jshint from 'gulp-jshint';

/* Run scripts through jshint */
module.exports = function (gulp, config) {
    return gulp.src(config.input.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
};