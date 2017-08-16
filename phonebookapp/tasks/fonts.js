/**
 * Created by yreis on 8/16/17.
 */

"use strict";

const gulp  = require('gulp');
const conf  = require('./config').config;


const extensions = 'eot,svg,ttf,woff,woff2';
const path  = {
    src: ['./node_modules/bootstrap/fonts/*.{' + extensions + '}', conf.src + 'fonts/**'],
    dest: conf.app + 'fonts'
};


/**
 * @name moveFonts
 * @description move as fontes adicionadas no diretório de desenvolvimento para o diretório padrão da aplicação
 */
function moveFonts() {
    return gulp.src(path.src)
        .pipe(gulp.dest(path.dest));
}

function watch() {
    return gulp.watch(path.src, moveFonts);
}

exports.task = moveFonts;
exports.watch = watch;
