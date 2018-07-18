
var gulp = require('gulp');
var util = require('gulp-util');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

var config = {
    assetsDir: './src/css',
    production: !!util.env.production
};

gulp.task('minifyCSS', function () {
    
    if (config.production) {

        console.log('Configuração release selecionada, minificando CSS');

        gulp.src(config.assetsDir + '/*.css')
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(function (f) {
            return f.base;
        }));

    }
    else {
        console.log('Configuração debug selecionada, ignorando etapa de minificação de CSS')
    }

});

gulp.task('sass', function () {
    gulp.src(config.assetsDir + '/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function (f) {
            return f.base;
        }));
});


gulp.task('watchSass', function () {

    console.log("watching sass");
    gulp.watch(config.assetsDir + '/*.scss', ['sass']);

});

gulp.task('default', ['sass', 'minifyCSS'], function () {
    
    //Usar no VS Code
    if (util.env.watch) {

        console.log("watching");
        gulp.watch(config.assetsDir + '/*.scss', ['sass']);
    }

});
