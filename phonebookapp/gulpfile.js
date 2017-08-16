const gulp = require('gulp');

"use strict";

// tasks
const fonts = require('./tasks/fonts');
const sass  = require('./tasks/sass');
const html  = require('./tasks/sass');


/**
 * @name watch
 * @description tarefa que tem como finalidade monitorar os diretórios para executar determinada task
 */
gulp.task('default', gulp.series(
    fonts.watch,
    sass.watch,
    html.watch
));
