exports.basedir = {
    input: '.',
    output: './html',
    npm: './node_modules'
};

exports.vendor = {
    sass: [
        exports.basedir.npm + '/normalize-scss/sass/',
        exports.basedir.npm + '/bootstrap-sass/assets/stylesheets/',
        exports.basedir.npm + '/font-awesome/scss/'
    ],
    js: {
        bootstrap: exports.basedir.npm + '/bootstrap-sass/assets/javascripts/'
    },
    fonts: {
        fa: exports.basedir.npm + '/font-awesome/fonts'
    }
};

exports.dir = {
    input: {
        templates: exports.basedir.input + '/templates',
        styles: exports.basedir.input + '/styles',
        scripts: exports.basedir.input + '/scripts',
        assets: exports.basedir.input + '/assets'
    },
    output: {
        html: exports.basedir.output + '/',
        css: exports.basedir.output + '/assets/stylesheets/',
        js: exports.basedir.output + '/assets/scripts',
        assets: exports.basedir.output + '/assets/',
        fonts: exports.basedir.output + '/assets/fonts/'
    }
};

exports.input = {
    templates: exports.dir.input.templates + '/**/*.pug',
    styles: exports.dir.input.styles + '/**/*.scss',
    scripts: exports.dir.input.scripts + '/**/*.js',
    assets: exports.dir.input.assets + '/**/*',
    fonts: exports.vendor.fonts.fa + '/*'
};

exports.output = exports.dir.output;