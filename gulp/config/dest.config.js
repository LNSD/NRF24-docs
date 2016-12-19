"use strict";

/**
 * Output base directory
 */
import basedir from './basedir.config';

/**
 * Destination directories
 */
const content     = basedir.out + '/';
const examples    = basedir.out + '/examples';
const docs        = basedir.out + '/docs';

const stylesheets = basedir.out + '/assets/stylesheets';
const scripts     = basedir.out + '/assets/scripts';
const assets      = basedir.out + '/assets';
const fonts       = basedir.out + '/assets/fonts';

export default {
    basedir: basedir.out,
    content, examples, docs, stylesheets, scripts, assets, fonts,
    temp: basedir.tmp
};