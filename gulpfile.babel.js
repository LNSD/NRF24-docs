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
    gulp.watch([config.input.content.individuals, config.input.templates], ['lint-pug', 'build-html']);
    gulp.watch(config.input.scripts, ['lint-js', 'build-js']);
    gulp.watch([config.input.styles.bundle, config.input.css, config.input.styles.individuals], ['build-css']);
    gulp.watch(config.input.fonts, ['copy-fonts']);
    gulp.watch(config.input.assets, ['copy-assets']);
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
