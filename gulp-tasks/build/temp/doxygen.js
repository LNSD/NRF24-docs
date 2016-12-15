"use strict";

import path from 'path';
import rename from 'gulp-rename';
import xml2json from 'gulp-xml2json';
import jsonFormat from 'gulp-json-format';
import {processors} from 'xml2js';

/* Compile doxygen generated xml files into json */
module.exports = function (gulp, config, connect) {
    return gulp.src(config.input.content.docs.xml)
        .pipe(xml2json({
            explicitArray: false,
            mergeAttrs: true,
            trim: true,
            valueProcessors: [processors.parseBooleans, processors.parseNumbers],
            attrValueProcessors: [processors.parseBooleans, processors.parseNumbers]
        }))
        .pipe(jsonFormat(2))
        .pipe(rename(path.basename(config.input.content.docs.doxygen)))
        .pipe(gulp.dest(config.output.temp));
};