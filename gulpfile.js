var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    sequence    = require('gulp-sequence'),
    connect     = require('gulp-connect'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    filter      = require('gulp-filter'),
    sourcemaps  = require('gulp-sourcemaps'),

    pug             = require('gulp-pug'),
    sass            = require('gulp-sass'),
    scsslint        = require('gulp-scss-lint'),
    scsslintstylish = require('gulp-scss-lint-stylish'),
    jshint          = require('gulp-jshint');

var config = require('./gulp.config');


/* Run the watch task when gulp is called without arguments */
gulp.task('default', sequence('build', ['serve', 'watch']));

/* Build everything */
gulp.task('build', ['build-pug', 'scss-lint', 'build-css', 'jshint', 'build-js', 'copy-assets']);


/* Compile pug files */
gulp.task('build-pug', function () {

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

/* Run styles through scss-lint */
gulp.task('scss-lint', function() {
    return gulp.src(config.input.styles)
        .pipe(scsslint({ customReport: scsslintstylish }));
});

/* Compile scss files */
gulp.task('build-css', function() {
    return gulp.src(config.input.styles)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.output.css))
        .pipe(connect.reload());
});

/* Run scripts through jshint */
gulp.task('jshint', function() {
    return gulp.src(config.input.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

/* Concat scripts files, minify if --type production */
gulp.task('build-js', function() {
    return gulp.src(config.input.scripts)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        //only uglify if gulp is ran with '--type production'
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.output.js))
        .pipe(connect.reload());
});

/* Copy assets to output dir */
gulp.task('copy-assets', function () {
    return gulp.src(config.input.assets)
        .pipe(gulp.dest(config.output.assets))
        .pipe(connect.reload());
});


/* Watch these files for changes and run the task on update */
gulp.task('watch', function() {
    gulp.watch(config.input.templates, ['build-pug']);
    gulp.watch(config.input.scripts, ['jshint', 'build-js']);
    gulp.watch(config.input.styles, ['scss-lint', 'build-css']);
    gulp.watch(config.input.assets, ['copy-assets']);
});

/* Serve pages and enable livereload */
gulp.task( 'serve', function() {
    connect.server({
        root: config.basedir.output,
        livereload: true
    });
});