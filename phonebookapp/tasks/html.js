/**
 * Created by yreis on 8/16/17.
 */

"use strict";

const conf              = require('tasks/config');
const gulp              = require('gulp');
var injectPartials      = require('gulp-inject-partials');


const PATH = {
    src: [conf.SRC + '*.html'],
    partialHtmlSrc: conf.SRC + 'partial/*.html',
    dest: conf.APP
};


/**
 * @name html
 * @description Realiza a injeção de fragmentos html que são boilerplate
 */

function html () {
    return gulp.src(PATH.partialHtmlSrc)
        .pipe(injectPartials())
        .pipe(gulp.dest(conf.APP));
}

function watch() {
    return gulp.watch(PATH.src, html);
}

exports.task = html;
exports.watch = watch;