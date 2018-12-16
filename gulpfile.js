var
    gulp = require('gulp'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin'),
    htmlclean = require('gulp-htmlclean'),
    concat = require('gulp-concat'),
    deporder = require('gulp-deporder'),
    stripdebug = require('gulp-strip-debug'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    assets = require('postcss-assets'),
    autoprefixer = require('autoprefixer'),
    mqpacker = require('css-mqpacker'),
    cssnano = require('cssnano'),

    // development mode?
    devBuild = true,

    // folders
    folder = {
        src: 'src/',
        build: 'build/'
    };
;

gulp.task('images', function () {
    var out = folder.build + 'images/';
    return gulp.src(folder.src + 'images/**/*')
        .pipe(newer(out))
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(gulp.dest(out));
});


gulp.task('html', gulp.series(['images'], function () {
    var
        out = folder.build + 'html/',
        page = gulp.src(folder.src + 'html/**/*')
            .pipe(newer(out));
    if (!devBuild) {
        page = page.pipe(htmlclean());
    }
    return page.pipe(gulp.dest(out));

}));

gulp.task('js', function () {
    var out = folder.build + 'js/',
        jsbuild = gulp.src(folder.src + 'js/**/*')
            .pipe(concat('main.js'))
            .pipe(deporder())


    if (!devBuild) {
        jsbuild = jsbuild.pipe(stripdebug())
            .pipe(uglify())
    }
    return jsbuild.pipe(gulp.dest(out));

});


gulp.task('css', gulp.series(['images'], function () {

    var postCssOpts = [
        assets({ loadPaths: ['images/'] }),
        autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
        mqpacker]


    if (!devBuild) {
        postCssOpts.push(cssnano);
    }

    return gulp.src(folder.src + 'scss/main.scss')
        .pipe(sass({
            outputStyle: 'nested',
            imagePath: 'images/',
            precision: 3,
            errLogToConsole: true
        }))
        .pipe(postcss(postCssOpts))
        .pipe(gulp.dest(folder.build + 'css/'));

}));

// run all tasks
gulp.task('run', gulp.series(['html', 'css', 'js']));

gulp.task('watch', function () {


    gulp.watch(folder.src + 'images/**/*', gulp.series(['images']));
    gulp.watch(folder.src + 'html/**/*', gulp.series(['html']));
    gulp.watch(folder.src + 'js/**/*', gulp.series(['js']));
    gulp.watch(folder.src + 'scss/**/*', gulp.series(['css']));

});

gulp.task('default', gulp.series(['run', 'watch']));