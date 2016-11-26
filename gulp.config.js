exports.basedir = {
    input: '.',
    output: './html'
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
        assets: exports.basedir.output + '/assets/'
    }
};

exports.input = {
    templates: exports.dir.input.templates + '/**/*.pug',
    styles: exports.dir.input.styles + '/**/*.scss',
    scripts: exports.dir.input.scripts + '/**/*.js',
    assets: exports.dir.input.assets + '/**/*'
};

exports.output = exports.dir.output;

exports.vendor = {};