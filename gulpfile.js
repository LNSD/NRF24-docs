var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    connect     = require('gulp-connect'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    sourcemaps  = require('gulp-sourcemaps'),

    sass            = require('gulp-sass'),
    scsslint        = require('gulp-scss-lint'),
    scsslintstylish = require('gulp-scss-lint-stylish'),
    jshint          = require('gulp-jshint');


var input  = {
        'sass': 'styles/**/*.scss',
        'javascript': 'scripts/**/*.js',
        'vendorjs': 'scripts/vendor/**/*.js'
    };

var output = {
        'html': 'html',
        'stylesheets': 'html/assets/stylesheets',
        'javascript': 'html/assets/javascript'
    };


/* Run the watch task when gulp is called without arguments */
gulp.task('default', ['serve', 'watch']);

/* Run sass through scss-lint */
gulp.task('scss-lint', function() {
    return gulp.src(input.sass)
        .pipe(scsslint({ customReport: scsslintstylish }));
});

/* Compile scss files */
gulp.task('build-css', function() {
    return gulp.src(input.sass)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output.stylesheets))
        .pipe(connect.reload());
});

/* Run javascript through jshint */
gulp.task('jshint', function() {
    return gulp.src(input.javascript)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

/* Concat javascript files, minify if --type production */
gulp.task('build-js', function() {
    return gulp.src(input.javascript)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        //only uglify if gulp is ran with '--type production'
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output.javascript))
        .pipe(connect.reload());
});

/* Watch these files for changes and run the task on update */
gulp.task('watch', function() {
    gulp.watch(input.javascript, ['jshint', 'build-js']);
    gulp.watch(input.sass, ['scss-lint', 'build-css']);
});

/* Serve pages and enable livereload */
gulp.task( 'serve', function() {
    connect.server({
        root: [ output.html ],
        livereload: true
    });
});