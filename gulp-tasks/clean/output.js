"use strict";

import del from 'del';

/* Clean output dir */
module.exports = function (gulp, config, connect) {
    return del(config.basedir.output)
};
