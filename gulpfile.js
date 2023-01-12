let less = require('gulp-less');
const {src, dest, watch, series} = require('gulp');
let cssmin = require('gulp-cssmin');
let rename = require('gulp-rename');

function lessTask() {
    return src(['./src/style.less', './src/theme.less', './src/adaptive.less'])
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist'));
}
exports.less = lessTask;
exports.watch = function() {
    watch('./src/*.less', series('less'));
};