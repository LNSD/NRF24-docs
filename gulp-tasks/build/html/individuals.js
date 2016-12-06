"use strict";

import frontMatter from 'gulp-front-matter';
import markdown from 'gulp-markdown';
import layout from 'gulp-layout';

/* Compile individual pug files into html */
module.exports = function (gulp, config, connect) {
    return gulp.src(config.input.content.individuals)
        .pipe(frontMatter({
            property: 'data'
        }))
        .pipe(markdown())
        .pipe(layout(function(file) {
            // file: { 'history', 'cwd', 'base', 'stat', '_contents', 'data' }
            // console.log(file.data);
            // console.log(`${config.dir.input.templates}/${file.data.template}.pug`);
            return {
                title: file.data.title,
                layout: `${config.dir.input.templates}/${file.data.template}.pug`,
                project: config.project,
                website: config.website
            };
        }))
        .pipe(gulp.dest(config.output.html))
        .pipe(connect.reload());
};