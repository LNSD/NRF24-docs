"use strict";

import yaml from 'gulp-yaml';
//import doxygen from 'gulp-doxygen';
import layout from 'gulp-layout';

/* Compile docs pages files into html */
module.exports = function (gulp, config, connect) {

    return gulp.src(config.input.content.docs.yaml.pages)
        .pipe(yaml())
        /*.pipe(doxygen({
            data: config.input.content.docs.doxygen
        }))*/
        .pipe(layout(function(file) {
            // file: { 'history', 'cwd', 'base', 'stat', '_contents', 'data' }
            // console.log(file.data);
            // console.log(`${config.dir.input.templates}/${file.data.template}.pug`);
            return {
                title: file.data.title,
                layout: `${config.dir.input.templates}/${file.doxygen.template}.pug`,
                project: config.project,
                website: config.website
            };
        }))
        .pipe(gulp.dest(config.output.html))
        .pipe(connect.reload());
};