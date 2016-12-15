"use strict";

import frontMatter from 'gulp-front-matter';
import markdown from 'gulp-markdown';
import layout from 'gulp-layout';

/* Compile docs index file into html */
module.exports = function (gulp, config, connect) {

    return gulp.src(config.input.content.docs.doxygen)
        .pipe(frontMatter({ property: 'mdheader' }))
        .pipe(markdown())
        /*.pipe(doxygen({
             data: config.input.content.docs.doxygen
         }))*/
        .pipe(layout(function(file) {
            // file: { 'history', 'cwd', 'base', 'stat', '_contents', 'data' }
            // console.log(file.data);
            // console.log(`${config.dir.input.templates}/${file.data.template}.pug`);
            return {
                title: file.data.title,
                layout: `${config.dir.input.templates}/${file.mdheader.template}.pug`,
                project: config.project,
                website: config.website
            };
        }))
        .pipe(gulp.dest(config.output.html))
        .pipe(connect.reload());
};

