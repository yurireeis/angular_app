/**
 * Created by yreis on 8/16/17.
 */

"use strict";

const gulp      = require('gulp');
const config    = require('./config').config;


const path = {
    src: [config.src + 'js/**', config.src + 'lib/**.js'],
    dest: config.app + 'js'
};

function watch() {
    return gulp.watch(path.src);
}

exports.watch = watch;