"use strict";

/* Copy fonts to output assets directory */
module.exports = function (gulp, config, connect) {
    gulp.src(config.copy.fonts.in)
        .pipe(gulp.dest(config.copy.fonts.out))
        .pipe(connect.reload());
};
