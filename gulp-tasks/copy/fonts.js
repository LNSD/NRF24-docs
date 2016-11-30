"use strict";

/* Copy fonts to output assets dir */
module.exports = function (gulp, config, connect) {
    gulp.src(config.input.fonts)
        .pipe(gulp.dest(config.output.fonts))
        .pipe(connect.reload());
};
