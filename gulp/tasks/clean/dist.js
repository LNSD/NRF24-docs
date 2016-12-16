"use strict";

import gutil from 'gulp-util';
import del from 'del';

/* Clean output dist directory */
module.exports = function (gulp, config) {
    gutil.log('Cleaning:', gutil.colors.red(config.clean.dist.dir));
    return del(config.clean.dist.dir + '/**/*');
};
