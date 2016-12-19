"use strict";

/* Copy fonts to output assets directory */
module.exports = function (gulp, config) {
    gulp.src(config.copy.fonts.src)
        .pipe(gulp.dest(config.copy.fonts.dest));
};
