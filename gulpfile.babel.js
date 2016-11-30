'use strict';
import gulp from 'gulp';
import gutil  from 'gulp-util';
import sequence from 'gulp-sequence';
import merge from 'merge-stream';
import connect from 'gulp-connect';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import filter from 'gulp-filter';
import sourcemaps from 'gulp-sourcemaps';

import pug from 'gulp-pug';
import sass from 'gulp-sass';
import jshint from 'gulp-jshint';

import config from './gulp.config';


/* Run the watch task when gulp is called without arguments */
gulp.task('default', sequence('build', ['serve', 'watch']));

/* Build everything */
gulp.task('build', ['build-html', 'build-css', 'jshint', 'build-js', 'copy-fonts', 'copy-assets']);


/* Compile pug files into html */
gulp.task('build-html', () => {

    /* function callback(file) {
     if (file.path.search('index') !== -1) {
     return output.basedir + output.html;
     }
     var folder = path.basename(file.path).replace(/\..*html/, '/');
     return output.basedir + output.html + folder;
     }*/

    return gulp.src(config.input.templates)
        .pipe(filter(function (file) { return !/\/_/.test(file.path) && !/^_/.test(file.relative); }))
        .pipe(pug())
        .pipe(gulp.dest(config.output.html))
        .pipe(connect.reload());
});

/* Compile scss files */
gulp.task('build-css', ['build-bundle-css', 'build-single-css']);

gulp.task('build-bundle-css', () => {
    const sassStream = gulp.src(config.input.styles.bundle)
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths: config.vendor.sass}).on('error', sass.logError));

    const cssStream = gulp.src(config.input.css);

    return merge(cssStream, sassStream)
        .pipe(concat('bundle.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.output.css))
        .pipe(connect.reload());
});

gulp.task('build-single-css', () => {
    gulp.src(config.input.styles.single)
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths: config.vendor.sass}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.output.css))
        .pipe(connect.reload());
});

/* Run scripts through jshint */
gulp.task('jshint', () => {
    gulp.src(config.input.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

/* Concat scripts files (minify if --type production) */
gulp.task('build-js', () => {
    gulp.src(config.input.scripts)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        //only uglify if gulp is ran with '--type production'
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.output.js))
        .pipe(connect.reload());
});

/* Copy fonts to output dir */
gulp.task('copy-fonts', () => {
    gulp.src(config.input.fonts)
        .pipe(gulp.dest(config.output.fonts))
        .pipe(connect.reload());
});

/* Copy assets to output dir */
gulp.task('copy-assets', () => {
    gulp.src(config.input.assets)
        .pipe(gulp.dest(config.output.assets))
        .pipe(connect.reload());
});


/* Watch these files for changes and run the task on update */
gulp.task('watch', () => {
    gulp.watch(config.input.templates, ['build-html']);
    gulp.watch(config.input.scripts, ['jshint', 'build-js']);
    gulp.watch([config.input.styles.bundle, config.input.css, config.input.styles.single], ['build-css']);
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