"use strict";

import rename from 'gulp-rename';
import xml2json from 'gulp-xml2json';
import jsonFormat from 'gulp-json-format';
import {processors} from 'xml2js';

/* Compile doxygen generated xml files into json */
module.exports = function (gulp, config) {
    return gulp.src(config.build.temp.doxygen.src)
        .pipe(xml2json({
            explicitArray: false,
            mergeAttrs: true,
            trim: true,
            valueProcessors: [processors.parseBooleans, processors.parseNumbers],
            attrValueProcessors: [processors.parseBooleans, processors.parseNumbers]
        }))
        .pipe(jsonFormat(2))
        .pipe(rename(config.build.temp.doxygen.basename))
        .pipe(gulp.dest(config.build.temp.doxygen.dest));
};
