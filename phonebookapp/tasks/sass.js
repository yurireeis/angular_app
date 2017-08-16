/**
 * Created by yreis on 8/16/17.
 */

"use strict";

const gulp          = require('gulp');
const sass          = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var merge           = require('merge-stream');
var concat          = require('gulp-concat');
const conf          = require('./config').config;

console.log(conf);



const outputName = 'app.css';
const path = {
    src: ['./node_modules/bootstrap/dist/css/bootstrap.css', conf.src + 'css/*.css'],
    dest: conf.app + 'css'
};


/**
 * @name sass
 * @description realiza a inclusão de prefixos em propriedades css (multi-browser)
 */
function cssOutput() {
    var cssFiles = gulp.src(path.src)
        .pipe(autoprefixer())
        .pipe(sass()).on('error', sass.logError);

    return merge(cssFiles)
        .pipe(concat(outputName))
        .pipe(gulp.dest(path.dest));
}

function watch() {
    return gulp.watch(path.src, cssOutput);
}

exports.task = cssOutput;
exports.watch = watch;
