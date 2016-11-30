"use strict";

/* Build everything */
module.exports = {
    dep: [
        'lint-pug', 'build-html',
        'build-css',
        'lint-js', 'build-js',
        'copy-fonts',
        'copy-assets'
    ]
};