const gulp=require("gulp");
const htmltidy=require("gulp-htmltidy");
const autoprefixer = require('gulp-autoprefixer');
const csslint = require('gulp-csslint');
const{series}=require("gulp");
const babel = require('gulp-babel');
const jshint = require('gulp-jshint');

var axe = require('gulp-axe-webdriver');


exports.default=function(cb){
    console.log("Gulp running");
    cb();
}

function html(cb){
    return gulp.src("./src/html-files/home.html")
    .pipe(htmltidy())
    .pipe(gulp.dest("build"));
    cb();
}
function css(cb) {
    return gulp.src('./src/style.css')
        .pipe(csslint())
        .pipe(csslint.formatter('compact'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('build'));
    cb();
}
function js(cb) {
    return gulp.src('./src/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('build'));
        cb();
}
function axeFunc (cb) {
    var options = {
      saveOutputIn: 'allHtml.json',
      urls: ['./src/html-files/home.html']
    };
    return axe(options);	
  }
exports.html=html;

exports.css = css;
exports.js = js;
exports.axeFunc = axeFunc;


exports.default = series(html, css, js,axeFunc);

