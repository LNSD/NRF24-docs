"use strict";

/* Copy assets to output dir */
module.exports = function (gulp, config, connect) {
    gulp.src(config.input.assets)
        .pipe(gulp.dest(config.output.assets))
        .pipe(connect.reload());
};
