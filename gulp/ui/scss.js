const gulp = require('gulp');
const plugin = require('gulp-load-plugins')();

gulp.task('uiScss:build', (cb) => {
  gulp.src('src/ui/css/*.*')
    .pipe(plugin.plumber())
    .pipe(plugin.sourcemaps.init({ largeFile: true }))
    .pipe(plugin.sass().on('error', plugin.sass.logError))
    .pipe(plugin.sassUnicode())
    .pipe(plugin.autoprefixer({
      cascade: false,
    }))
    .pipe(plugin.pxtorem())
    .pipe(plugin.sourcemaps.write(''))
    .pipe(gulp.dest('dist/ui/css/'));
  cb();
});
