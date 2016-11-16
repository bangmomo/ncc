'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import del from 'del';

const DIR = {
    SRC: 'src',
    DEST: 'dist'
};

const SRC = {
    JS: DIR.SRC + '/js/**/*.js',
    CSS: DIR.SRC + '/css/*.css',
    SASS: DIR.SRC + '/sass/*.scss',
    HTML: DIR.SRC + '/html/**/*.html',
    IMAGES: DIR.SRC + '/images/**/*',
    FONTS: DIR.SRC + '/resources/fonts/*',
    LIBRARY: DIR.SRC + '/resources/lib/**/*'
};

const DEST = {
     JS: DIR.DEST + '/js',
     CSS: DIR.DEST + '/css',
     HTML: DIR.DEST + '/html',
     IMAGES: DIR.DEST + '/images',
     FONTS: DIR.DEST + '/fonts',
     LIBRARY: DIR.DEST + '/lib'
 };

const option = {
    autoprefixer: ['last 2 versions', 'IE 9', 'iOS >= 6']
};

gulp.task('js', () => {
    return gulp.src(SRC.JS)
        .pipe(uglify())
        .pipe(gulp.dest(DEST.JS));
});

gulp.task('css', () => {
    return gulp.src(SRC.CSS)
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(DEST.CSS));
});

gulp.task('html', () => {
    return gulp.src(SRC.HTML)
        .pipe(htmlmin({collapseWhitespace: false}))
        .pipe(gulp.dest(DEST.HTML))
});

gulp.task('images', () => {
    return gulp.src(SRC.IMAGES)
        .pipe(imagemin())
        .pipe(gulp.dest(DEST.IMAGES));
});

gulp.task('clean', () => {
    return del.sync([DIR.DEST]);
});

gulp.task('images', () => {
    return gulp.src(SRC.IMAGES)
        .pipe(imagemin())
        .pipe(gulp.dest(DEST.IMAGES));
});

gulp.task('watch', () => {
    let watcher = {
        js: gulp.watch(SRC.JS, ['js']),
        css: gulp.watch(SRC.CSS, ['css']),
        html: gulp.watch(SRC.HTML, ['html']),
        images: gulp.watch(SRC.IMAGES, ['images'])
    };

    let notify = (event) => {
        gutil.log('File', gutil.colors.yellow(event.path), 'was', gutil.colors.magenta(event.type));
    };

    for(let key in watcher) {
        watcher[key].on('change', notify);
    }
});

gulp.task('default', ['clean', 'js', 'css', 'html', 'images', 'watch'], () => {
    gutil.log('Gulp is running');
});