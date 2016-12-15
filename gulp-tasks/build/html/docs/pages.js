"use strict";

import yaml from 'gulp-yaml';
//import doxygen from 'gulp-doxygen';
import layout from 'gulp-layout';
import tap from 'gulp-tap';

/* Compile docs pages files into html */
module.exports = function (gulp, config, connect) {

    return gulp.src(config.input.content.docs.yaml.pages)
        .pipe(yaml({ safe: true }))
        .pipe(tap(function(file) {
            console.log('Keys: ' + Object.keys(file));
            file.data = { doxygen: JSON.parse(file._contents) };
        }))
        /*.pipe(doxygen({
            data: config.input.content.docs.doxygen
        }))*/
        .pipe(layout(function(file) {
            // file: { 'history', 'cwd', 'base', 'stat', '_contents', 'data' }
            // console.log('data.doxygen: ' + file.data.doxygen);
            // console.log('data.doxygen.template: ' + file.data.doxygen.template);

            return {
                layout: `${config.dir.input.templates}/${file.data.doxygen.template}.pug`,
                project: config.project,
                website: config.website
            };
        }))
        .pipe(gulp.dest(config.output.html))
        .pipe(connect.reload());
};