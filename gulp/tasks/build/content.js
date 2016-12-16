"use strict";

import frontMatter from 'gulp-front-matter';
import markdown from 'gulp-markdown';
import layout from 'gulp-layout';
import rename from 'gulp-rename';

/* Compile individual pug files into html */
module.exports = function (gulp, config, connect) {
    return gulp.src(config.build.content.in)
        .pipe(frontMatter({
            property: 'data'
        }))
        .pipe(markdown())
        .pipe(layout(function(file) {
            // file: { 'history', 'cwd', 'base', 'stat', '_contents', 'data' }
            // console.log(file.data);
            // console.log(config.build.content.template(file.data.template));
            return {
                title: file.data.title,
                layout: config.build.content.template(file.data.template),
                project: config.project,
                website: config.website
            };
        }))
        .pipe(rename(function (path) {
            if (path.basename !== 'index') {
                path.dirname += '/' + path.basename;
                path.basename = 'index';
            }
        }))
        .pipe(gulp.dest(config.build.content.out))
        .pipe(connect.reload());
};
