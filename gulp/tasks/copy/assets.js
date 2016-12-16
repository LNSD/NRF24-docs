"use strict";

/* Copy assets to output assets directory */
module.exports = function (gulp, config, connect) {
    gulp.src(config.copy.assets.in)
        .pipe(gulp.dest(config.copy.assets.out))
        .pipe(connect.reload());
};
