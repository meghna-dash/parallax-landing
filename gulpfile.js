const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const browsersync = require('browser-sync').create();
const cached = require('gulp-cached');
const clean = require('gulp-clean');
const cleancss = require('gulp-clean-css');
const fileinclude = require('gulp-file-include');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const npmdist = require('gulp-npm-dist');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');

const gtag = '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-156446909-3"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "UA-156446909-3");</script>';

const paths = {
  src: {
    html: {
      files: './src/html/**/*.html'
    },
    js: {
      files: './src/js/**/*.js'
    },
    partials: {
      files: './src/html/partials/**/*.html'
    },
    scss: {
      files: './src/scss/**/*.scss'
    }
  },
  dist: {
    base: {
      dir: './dist'
    },
    css: {
      dir: './dist/assets/css',
      files: './dist/assets/css/**/*.css',
      minFiles: './dist/assets/css/**/*.min.css',
    },
    html: {
      files: './dist/**/*.html'
    },
    js: {
      dir: './dist/assets/js',
      files: './dist/assets/js/**/*.js',
      minFiles: './dist/assets/js/**/*.min.js'
    },
    libs: {
      dir: './dist/assets/libs'
    }
  },
  node: {
    dir: './node_modules'
  },
  package: {
    files: './package.json'
  }
};

gulp.task('browsersync', callback => {
  browsersync.init({
    server: {
      baseDir: paths.dist.base.dir
    }
  });
  callback();
});

gulp.task('browsersyncReload', callback => {
  browsersync.reload();
  callback();
});

gulp.task('clean', () => {
  return gulp.src([paths.dist.css.dir, paths.dist.html.files, paths.dist.js.dir, paths.dist.libs.dir], {
      allowEmpty: true,
      read: false
    })
    .pipe(clean());
});

gulp.task('clean:css', () => {
  return gulp.src([paths.dist.css.files, `!${paths.dist.css.minFiles}`], {
      read: false
    })
    .pipe(clean())
});

gulp.task('clean:js', () => {
  return gulp.src([paths.dist.js.files, `!${paths.dist.js.minFiles}`], {
      read: false
    })
    .pipe(clean())
});

gulp.task('html', () => {
  return gulp
    .src([paths.src.html.files, `!${paths.src.partials.files}`])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      indent: true
    }))
    .pipe(cached())
    .pipe(gulp.dest(paths.dist.base.dir));
});

gulp.task('js', () => {
  return gulp
    .src(paths.src.js.files)
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(gulp.dest(paths.dist.js.dir))
});

gulp.task('npmdist', () => {
  return gulp.src(npmdist(), {
    base: paths.node.dir
  }).pipe(gulp.dest(paths.dist.libs.dir))
});

gulp.task('useref', () => {
  return gulp
    .src(paths.dist.html.files)
    .pipe(useref())
    .pipe(cached())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', cleancss()))
    .pipe(gulp.dest(paths.dist.base.dir));
});

gulp.task('useref:preview', () => {
  return gulp
    .src(paths.dist.html.files)
    .pipe(replace('</head>', '  <!-- Global site tag (gtag.js) - Google Analytics -->\n    ' + gtag + '\n\n  </head>'))
    .pipe(useref())
    .pipe(cached())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', cleancss()))
    .pipe(gulp.dest(paths.dist.base.dir));
});

gulp.task('scss', () => {
  return gulp
    .src(paths.src.scss.files)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.dist.css.dir))
    .pipe(browsersync.stream());
});

gulp.task('watch', () => {
  gulp.watch(paths.src.html.files, gulp.series('html', 'browsersyncReload'));
  gulp.watch(paths.src.js.files, gulp.series('js', 'browsersyncReload'));
  gulp.watch(paths.src.scss.files, gulp.series('scss'));
  gulp.watch(paths.package.files, gulp.series('npmdist', 'browsersyncReload'));
});

gulp.task('build', gulp.series('clean', gulp.parallel('html', 'js', 'npmdist', 'scss'), 'useref', gulp.parallel('clean:css', 'clean:js')));

gulp.task('build:preview', gulp.series('clean', gulp.parallel('html', 'js', 'npmdist', 'scss'), 'useref:preview', gulp.parallel('clean:css', 'clean:js')));

gulp.task('default', gulp.series('clean', gulp.parallel('html', 'js', 'npmdist', 'scss'), gulp.parallel('browsersync', 'watch')));
