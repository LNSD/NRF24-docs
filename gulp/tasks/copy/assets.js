"use strict";

/* Copy assets to output assets directory */
module.exports = function (gulp, config) {
    gulp.src(config.copy.assets.src)
        .pipe(gulp.dest(config.copy.assets.dest));
};
