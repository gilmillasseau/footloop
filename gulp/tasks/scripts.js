'use strict';

import config        from '../config';
import gulp          from 'gulp';
import concat        from 'gulp-concat-sourcemap';

gulp.task('vendor-js', function () {

    return gulp.src(config.bowerJsDir)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(config.scripts.dest));

});
