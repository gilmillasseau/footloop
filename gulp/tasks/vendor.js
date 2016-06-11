'use strict';

import config        from '../config';
import gulp          from 'gulp';
import concat         from 'gulp-concat-sourcemap';

gulp.task('vendor', function () {

    return gulp.src(config.bowerStylesDir)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(config.styles.dest));

});
