"use strict";

import _ from 'lodash';
import intersect from  'glob-intersection';

/**
 * Gulp config util functions
 */

export function buildSrc (task) {
    task.src = [];

    if (_.isArray(task.in)) {
        task.src = task.in;
    } else {
        task.src = [task.in];
    }

    if (!_.isUndefined(task.exclude)) {
        if (!_.isArray(task.exclude)) task.exclude = [task.exclude];

        for (let glob of task.exclude) {
            task.src.push('!' + glob);
        }
    }

    return task;
}


export function buildWatchList () {
    let tasks = _.uniq(Array.prototype.slice.call(arguments));

    const tasklist = [];
    for (let item of tasks) {
        tasklist.push(parseBuildWatchListArgument(item));
    }

    tasks = _.flattenDeep(tasklist);

    const task = tasks.shift();
    const watchtask = { in:task.in, exclude:task.exclude };

    for (let task of tasks) {

        // If task.in[item] is in watchtask.exclude -> remove task.in[item] from watchtask.exclude
        for (let item of task.in) {
            if (_.indexOf(watchtask.exclude, item) >= 0) {
                watchtask.exclude = _.without(watchtask.exclude, item);
            }
        }

        // If task.exclude[item] is not in watchtask.in -> add task.exclude[item] to watchtask.exclude
        for (let item of task.exclude) {
            if (_.indexOf(watchtask.in, item) < 0) {
                watchtask.exclude = _.concat(watchtask.exclude, item);
            }
        }

        // Append task.in[all] to watchtask.in
        watchtask.in = _.concat(watchtask.in, task.in);
        watchtask.in = _.uniq(watchtask.in);

    }

    // Simplify watchtask.in
    watchtask.in = _.uniq(watchtask.in);
    watchtask.in = simplifyGlobList(watchtask.in);

    // Simplify watchtask.exclude
    watchtask.exclude = _.uniq(watchtask.exclude);
    watchtask.exclude = simplifyGlobList(watchtask.exclude);

    return buildSrc(watchtask).src;
}

const parseBuildWatchListArgument = function (arg) {
    const tasklist = [];

    if (_.isArray(arg)) {
        for (let item of arg) {
            tasklist.push(parseBuildWatchListArgument(item));
        }
        return tasklist;
    }

    if (_.isString(arg)) {
        const task = { in: [], exclude:[] };

        if(_.startsWith(arg, '!')) {
            task.exclude = [arg.slice(1)];
        }
        else {
            task.in = [arg];
        }

        tasklist.push(task);
        return tasklist;
    }

    // Normalize task
    if (!_.isUndefined(arg.in)) {
        if (!_.isArray(arg.in)) arg.in = [arg.in];
        if (_.isUndefined(arg.exclude)) arg.exclude = [];
        else if (!_.isArray(arg.exclude)) arg.exclude = [arg.exclude];

        tasklist.push(arg);
        return tasklist;
    }

    throw Error('Unknown input argument type');
};

const simplifyGlobList = function (globs) {

    let globlist = [];

    // Simplify globlist
    for (let i = 0; i < globs.length; i++) {
        let glob = globs[i];

        for (let j = i+1; j < globs.length; j++) {
            let item = globs[j];

            globlist.push((!intersect(glob, item) || intersect(glob, item) === glob) ? item : glob);

        }
    }

    if (globlist.length <= 1) globlist = globs;

    return _.uniq(globlist);
};