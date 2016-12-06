"use strict";

import sequence from 'gulp-sequence';

/* Compile doxygen files and build all doc files */
module.exports = {
    nativeTask: sequence('build-temp', ['build-html-docs-index', 'build-html-docs-pages'])
};

