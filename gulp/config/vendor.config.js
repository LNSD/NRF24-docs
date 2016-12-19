"use strict";

/**
 * Node-modules directory
 */
import basedir from './basedir.config';

/**
 * Vendor base directories
 */
const vbasedir = {};

vbasedir.bootstrap_sass = basedir.npm + '/bootstrap-sass';
vbasedir.font_awesome = basedir.npm + '/font-awesome';
vbasedir.jquery = basedir.npm + '/jquery';

/**
 * Vendor source files directories
 */
const dir = {};

dir.bootstrap_sass = {};
dir.bootstrap_sass.sass = vbasedir.bootstrap_sass + '/assets/stylesheets';
dir.bootstrap_sass.js = vbasedir.bootstrap_sass + '/assets/javascripts';

dir.font_awesome = {};
dir.font_awesome.sass = vbasedir.font_awesome + '/scss';
dir.font_awesome.fonts = vbasedir.font_awesome + '/fonts';

dir.jquery = {};
dir.jquery.js = vbasedir.jquery + '/dist';

/**
 * Vendor source files
 */

const bootstrap_sass = {};
bootstrap_sass.sass = dir.bootstrap_sass.sass;
bootstrap_sass.dropdown = dir.bootstrap_sass.js + '/bootstrap/dropdown.js';

const font_awesome = {};
font_awesome.sass = dir.font_awesome.sass;
font_awesome.fonts = dir.font_awesome.fonts + '/*';

const jquery = dir.jquery.js + '/jquery.js';

export default { bootstrap_sass, font_awesome, jquery };