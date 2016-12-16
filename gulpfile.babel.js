'use strict';

import gulp from 'gulp';
import sequence from 'gulp-sequence';
import connect from 'gulp-connect';
import requireTasks from 'gulp-require-tasks';

import config from './gulp/gulp.config';

requireTasks({
    path: __dirname + '/gulp/tasks',
    separator: '-',
    arguments: [config, connect],
    passCallback: false
});

/* Watch these files for changes and run the task on update */
gulp.task('watch', () => {
    console.log(JSON.stringify(config.watch.styles, null, 4));
    gulp.watch(config.watch.content, ['build-content']);
    gulp.watch(config.watch.styles,  ['build-css']);
    gulp.watch(config.watch.scripts, ['build-js']);
});

/* Serve pages and enable livereload */
gulp.task('serve', () => {
    connect.server({
        root: config.basedir.output,
        livereload: true
    });
});

/* Run the watch task when gulp is called without arguments */
gulp.task('default', sequence('clean', ['build', 'serve', 'watch']));
