/**
 * Created by gilmillasseau on 04/06/16.
 */

'use strict';

import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import gulpif      from 'gulp-if';
import imagemin    from 'gulp-imagemin';
import browserSync from 'browser-sync';

gulp.task('translations', function() {

    return gulp.src(config.i18n.src)
        .pipe(gulp.dest(config.i18n.dest))
        .pipe(browserSync.stream());

});
