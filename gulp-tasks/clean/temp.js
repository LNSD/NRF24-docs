"use strict";

import del from 'del';

/* Clean temp dir */
module.exports = function (gulp, config, connect) {
    return del(config.basedir.temp)
};
