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

/** CONTENT **/
const content  = dir.content  + '/**/*.md';

/** EXAMPLES **/

/** DOCS **/
const docs = {};
docs.doxygen = basedir.tmp + '/doxygen.json';

/** TEMPLATES **/
const templates = {};
templates.all = dir.templates + '/**/*.pug';
templates.file = (layout) => path.join(dir.templates, layout) + '.pug';

/** STYLES **/
const styles = {};
styles.bundle      = dir.styles + '/bundle.scss';
styles.individuals = dir.styles + '/**/*.scss';

const css = dir.fonts + '/arduino/css/arduino-style.css';

/** SCRIPTS **/

/** ASSETS & FONTS **/
const assets = dir.assets + '/**/*';
const fonts = dir.fonts + '/arduino/font/*';

/** TEMP **/
const doxygen = basedir.doxygen + '/doxygen.xml';

export default {
    basedir: basedir.src,
    content, docs, css, styles, assets, fonts,
    doxygen,
    templates
};