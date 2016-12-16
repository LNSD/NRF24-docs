"use strict";

import path from 'path';

/**
 * Config
 */

import src from './config/src.config';
import out from './config/dest.config';
import vendor from './config/vendor.config';

import { buildSrc } from './config/util';

//region Build gulp tasks

/** BUILD **/
const build = { };

/** BUILD-CONTENT **/
build.content = {
    in: src.content,
    dest: out.content,
    template: src.templates.file
};
build.content = buildSrc(build.content);


/** BUILD-CSS **/
build.css = { bundle: {}, individuals: {} };

build.css.bundle = {
    in: src.styles.bundle,
    dest: out.stylesheets,
    css: src.css,
    vendor: [ vendor.bootstrap_sass.sass, vendor.font_awesome.sass ]
};
build.css.bundle = buildSrc(build.css.bundle);

build.css.individuals = {
    in: src.styles.individuals,
    exclude: src.styles.bundle,
    dest: out.stylesheets,
    vendor: [ vendor.bootstrap_sass.sass, vendor.font_awesome.sass ]
};
build.css.individuals = buildSrc(build.css.individuals);


/** BUILD-JS **/
build.js = { bundle: {} };

build.js.bundle = {
    in: [vendor.jquery, vendor.bootstrap_sass.dropdown],
    dest: out.scripts
};
build.js.bundle = buildSrc(build.js.bundle);


/** BUILD-TEMP **/
build.temp = { doxygen: {} };

build.temp.doxygen = {
    in: src.doxygen,
    dest: out.temp,
    basename: path.basename(src.docs.doxygen)
};
build.temp.doxygen = buildSrc(build.temp.doxygen);

//endregion

//region Copy gulp tasks

/** COPY **/
const copy = { assets: {}, fonts: {} };

copy.assets = {
    in: src.assets,
    dest: out.assets
};
copy.assets = buildSrc(copy.assets);

copy.fonts = {
    in: [ src.fonts, vendor.font_awesome.fonts ],
    dest: out.fonts
};
copy.fonts = buildSrc(copy.fonts);

//endregion

//region Clean gulp tasks

/** CLEAN **/
const clean = { dist:{}, temp:{} };

clean.dist = { dir: out.basedir };
clean.temp = { dir: out.temp };

//endregion

//region Development gulp tasks

/** WATCH **/
const watch = { content:{}, scripts:{}, styles:{} };

watch.content = [ build.content.in, src.templates.all ];
watch.styles  = [ build.css.bundle.in, build.css.bundle.css, build.css.individuals.in ];
watch.scripts = [];

/** SERVE **/
const serve = { root: out.basedir };

//endregion

export default {
    copy, build, clean, watch, serve
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
