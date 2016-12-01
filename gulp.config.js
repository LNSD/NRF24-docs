`use strict`;

/**
 * Base directories
 */
exports.basedir = {
    input: '.',
    output: './html',
    npm: './node_modules',
    gulp: './gulp'
};

/**
 * Vendor assets directories
 */
exports.vendor = {
    sass: [
        `${exports.basedir.npm}/bootstrap-sass/assets/stylesheets`,
        `${exports.basedir.npm}/font-awesome/scss`
    ],
    js: {
        bootstrap: `${exports.basedir.npm}/bootstrap-sass/assets/javascripts`
    },
    fonts: {
        fa: `${exports.basedir.npm}/font-awesome/fonts`
    }
};

/**
 * - input: Sources directories
 * - output: Built files destination directories
 */
exports.dir = {
    input: {
        content: `${exports.basedir.input}/content`,
        templates: `${exports.basedir.input}/templates`,
        styles: `${exports.basedir.input}/styles`,
        scripts: `${exports.basedir.input}/scripts`,
        assets: `${exports.basedir.input}/assets`,
        fonts: `${exports.basedir.input}/fonts`
    },
    output: {
        html: `${exports.basedir.output}/`,
        css: `${exports.basedir.output}/assets/stylesheets/`,
        js: `${exports.basedir.output}/assets/scripts/`,
        assets: `${exports.basedir.output}/assets/`,
        fonts: `${exports.basedir.output}/assets/fonts/`
    }
};

/**
 * Input sources
 */
exports.input = {
    content: {
        individuals: [
            `${exports.dir.input.content}/index.md`,
            `${exports.dir.input.content}/usage.md`,
        ],
        examples: [],
        docs: []
    },
    templates: `${exports.dir.input.templates}/**/*.pug`,
    styles: {
        bundle: `${exports.dir.input.styles}/bundle.scss`,
        individuals: [
            `${exports.dir.input.styles}/**/*.scss`,
            `!${exports.dir.input.styles}/bundle.scss`
        ]
    },
    css: [
        `${exports.dir.input.fonts}/arduino/css/arduino-style.css`
    ],
    scripts: `${exports.dir.input.scripts}/**/*.js`,
    assets: `${exports.dir.input.assets}/**/*`,
    fonts: [
        `${exports.vendor.fonts.fa}/*`,
        `${exports.dir.input.fonts}/arduino/font/*`
    ]
};

/**
 * Built files destination
 */
exports.output = exports.dir.output;

/**
 * Import project info into configuration
 */
exports.project = require('./config/project.config.js');

/**
 * Import website config into configuration
 */
exports.website = require('./config/website.config');