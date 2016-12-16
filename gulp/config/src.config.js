"use strict";

import path from 'path';

/**
 * Sources base directory
 */
import basedir from './basedir.config';

/**
 * Source directories
 */
const dir = {};

dir.content   = basedir.src + '/content';
dir.examples  = basedir.src + '/examples';
dir.docs      = basedir.src + '/docs';

dir.templates = basedir.src + '/templates';
dir.styles    = basedir.src + '/styles';
dir.scripts   = basedir.src + '/scripts';
dir.assets    = basedir.src + '/assets';
dir.fonts     = basedir.src + '/fonts';

/**
 * Source files
 */

const content  = dir.content  + '/**/*.md';
const examples = dir.examples + '/**/*.md';

const docs = {};
docs.doxygen = basedir.tmp + '/doxygen.json';

const css = dir.fonts + '/arduino/css/arduino-style.css';

const styles = {};
styles.bundle      = dir.styles + '/bundle.scss';
styles.individuals = dir.styles + '/**/*.scss';

const assets = dir.assets + '/**/*';
const fonts = dir.fonts + '/arduino/font/*';

const doxygen = basedir.doxygen + '/doxygen.xml';

const template = (layout) => path.join(dir.templates, layout) + '.pug';

export default {
    basedir: basedir.src,
    content, examples, docs, css, styles, assets, fonts,
    doxygen,
    template
};