"use strict";

import _ from 'lodash';

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