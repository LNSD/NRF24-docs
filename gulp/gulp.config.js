"use strict";

import path from 'path';

/**
 * Config
 */

import src from './config/src.config';
import out from './config/out.config';
import vendor from './config/vendor.config';


/** COPY **/
const copy = { assets: {}, fonts: {} };

copy.assets = {
    in: src.assets,
    out: out.assets
};
copy.fonts = {
    in: [ src.fonts, vendor.font_awesome.fonts ],
    out: out.fonts
};

/** BUILD **/
const build = { };

/** BUILD-CONTENT **/
build.content = {
    in: src.content,
    out: out.content,
    template: src.templates.file
};

/** BUILD-CSS **/
build.css = { bundle: {}, individuals: {} };

build.css.bundle = {
    in: src.styles.bundle,
    out: out.stylesheets,
    css: src.css,
    vendor: [ vendor.bootstrap_sass.sass, vendor.font_awesome.sass ]
};
build.css.individuals = {
    in: src.styles.individuals,
    exclude: '!' + src.styles.bundle,
    out: out.stylesheets,
    vendor: [ vendor.bootstrap_sass.sass, vendor.font_awesome.sass ]
};

/** BUILD-JS **/
build.js = { bundle: {} };

build.js.bundle = {
    in: [vendor.jquery, vendor.bootstrap_sass.dropdown],
    out: out.scripts
};

/** BUILD-TEMP **/
build.temp = { doxygen: {} };

build.temp.doxygen = {
    in: src.doxygen,
    basename: path.basename(src.docs.doxygen),
    out: out.temp
};

/** CLEAN **/
const clean = { dist:{}, temp:{} };

clean.dist = { dir: out.basedir };
clean.temp = { dir: out.temp };


/** WATCH **/
const watch = { content:{}, scripts:{}, styles:{} };

watch.content = [ build.content.in, src.templates.all ];
watch.styles  = [ build.css.bundle.in, build.css.bundle.css, build.css.individuals.in ];
watch.scripts = [];



/**
* Import project info into configuration
*/
const project = require('./config/project.config.js');

/**
* Import website config into configuration
*/
const website = require('./config/website.config');


export default {
    project,
    website,
    copy, build, clean, watch
};

/*
/!**
 * Input sources
 *!/
exports.input = {
    content: {
        individuals: [
            `${exports.basedir.input.content}/index.md`,
            `${exports.basedir.input.content}/get-started.md`,
            `${exports.basedir.input.content}/library-stack.md`,
            `${exports.basedir.input.content}/hardware.md`,
            `${exports.basedir.input.content}/advanced.md`,
            `${exports.basedir.input.content}/contribute.md`
        ],
        examples: [
            `${exports.basedir.input.content}/examples.md`,
            `${exports.basedir.input.content}/examples/!**!/!*.md`
        ],
        docs: {
            markdown: `${exports.basedir.input.content}/docs.md`,
            xml: `${exports.basedir.input.doxygen}/doxygen.xml`,
            yaml: {
                index: `${exports.basedir.input.content}/docs/index.yaml`,
                pages: [
                    `${exports.basedir.input.content}/docs/!*.yaml`,
                    `!${exports.basedir.input.content}/docs/index.yaml`
                ]
            },
            doxygen: `${exports.basedir.temp}/doxygen.json`
        }
    },
    templates: `${exports.basedir.input.templates}/!**!/!*.pug`,
    styles: {
        bundle: `${exports.basedir.input.styles}/bundle.scss`,
        individuals: [
            `${exports.basedir.input.styles}/!**!/!*.scss`,
            `!${exports.basedir.input.styles}/bundle.scss`
        ]
    },
    css: [
        `${exports.basedir.input.fonts}/arduino/css/arduino-style.css`
    ],
    scripts: [
        `${exports.vendor.js.jquery}/jquery.js`,
        `${exports.vendor.js.bootstrap}/bootstrap/dropdown.js`,
        `${exports.basedir.input.scripts}/!**!/!*.js`
    ],
    assets: `${exports.basedir.input.assets}/!**!/!*`,
    fonts: [
        `${exports.vendor.fonts.fa}/!*`,
        `${exports.basedir.input.fonts}/arduino/font/!*`
    ]
};

/!**
 * Built files destination
 *!/
exports.output = exports.basedir.output;

/!**
 * Import project info into configuration
 *!/
exports.project = require('./config/project.config.js');

/!**
 * Import website config into configuration
 *!/
exports.website = require('./config/website.config');
*/
