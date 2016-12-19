"use strict";

import gutil from 'gulp-util';
import del from 'del';

/* Clean output temp directory */
module.exports = function (gulp, config) {
    gutil.log('Cleaning:', gutil.colors.red(config.clean.temp.dir));
    return del(config.clean.temp.dir + '/**/*')
};
