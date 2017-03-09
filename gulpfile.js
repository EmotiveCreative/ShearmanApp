(function() {
    var gulp = require('gulp');
    var $ = require('gulp-load-plugins')({
        lazy: true
    });

    gulp.task('compile-sass', function() {
        return gulp
            .src('app/styles/scss/**/*.scss')
            .pipe($.plumber())
            .pipe($.sass())
            .pipe($.autoprefixer({
                browsers: ['last 2 version', '> 5%']
            }))
            .pipe(gulp.dest('app/styles/css/'));
    });

    gulp.task('watch-sass', function() {
        gulp.watch('app/styles/scss/', ['compile-sass']);
    });

})();