'use strict';

import config from '../config';
import gulp   from 'gulp';
import CacheBreaker from 'gulp-cache-breaker';

let cb = new CacheBreaker();

gulp.task('cache', ['vendor-js'], function() {
    console.log(gulp.src('app/index.html'));

    return gulp.src('app/index.html')
        .pipe(cb.gulpCbPath(config.sourceDir))
        .pipe(gulp.dest(config.buildDir));
});
