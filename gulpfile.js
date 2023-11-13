const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat'); // перейминовує декілька файлів та додає в один
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');

// мініфікуємо css (style.min.css)
function convertScss() {
  return src(['app/scss/styles.scss']) // якщо декілька scss файлів, то пишемо return src(['app/scss/styles.scss'], ['app/scss/button.scss']) і т.д.
    .pipe(concat('style.min.css'))
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
}

// мініфікуємо main.js
function convertJS() {
  return src(['app/js/main.js']) // якщо декілька js файлів, то пишемо return src(['app/js/main.js'], ['app/js/main.js']) і т.д.
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream());
}

// стиснення зображення
function compressImage() {
  clearImg();
  return src('app/images/*') // шлях до папки із зображеннями
    .pipe(imagemin()) // використовуємо плагін для стиснення зображень
    .pipe(dest('app/imagesCompressed'))
    .pipe(browserSync.stream());
}

function watching() {
  watch(['app/js/main.js'], convertJS);
  watch(['app/scss/styles.scss'], convertScss);
  watch(['app/index.html']).on('change', browserSync.reload);
  watch(['app/images/*'], compressImage);
}

function browserAutoUpdate() {
  browserSync.init({
    server: {
      baseDir: 'app',
    },
  });
}

function createBuild() {
  return src(
    [
      'app/css/style.min.css',
      'app/js/main.min.js',
      'app/*.html', // всі файли з розширенням .html
      'app/imagesCompressed/*',
    ],
    { base: 'app' }
  ).pipe(dest('dist'));
}

function clearDist() {
  return src('dist').pipe(clean());
}
function clearImg() {
  return src('app/imagesCompressed/*').pipe(clean());
}

exports.convertScss = convertScss;
exports.convertJS = convertJS;
exports.watching = watching;
exports.browserAutoUpdate = browserAutoUpdate;
exports.createBuild = createBuild;
exports.compressImage = compressImage;

// послідовне виконання функцій, які будуть вказані, після очистки dist
exports.build = series(clearDist, createBuild);

// одночасинй виклик watching та browserAutoUpdate
exports.default = parallel(
  convertScss,
  convertJS,
  compressImage,
  browserAutoUpdate,
  watching
);
