"use strict";
import pugLinter from 'gulp-pug-linter';

/* Run templates through pug-lint */
module.exports = function (gulp, config, connect) {
    return gulp.src(config.input.templates)
        .pipe(pugLinter())
        .pipe(pugLinter.reporter('puglint-stylish'));
};
