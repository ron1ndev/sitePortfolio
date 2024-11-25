const {src,dest, watch, parallel, series} = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');


	// // Подключаем модуль gulp-clean-css
  // const cleancss = require('gulp-clean-css');
 
 
function scripts(){
  return src('app/js/main.js',)
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
  .pipe(browserSync.stream());
}

function styles(){

  // Создаем не минифицированный файл
  src(['app/scss/style.scss'])
    .pipe(scss({ outputStyle: 'expanded' }))
    .pipe(concat('style.css'))               // Создаст единый style.css
    .pipe(dest('app/css'))                   
    .pipe(browserSync.stream());

  // Создаем минифицированный файл
  return src(['app/scss/style.scss'])
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(concat('style.min.css'))           // Создаст единый style.min.css
    .pipe(dest('app/css'))
    .pipe(browserSync.stream());
  
}

function watching(){
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/**/*.js','!app/**/*.min.js'],scripts)
  watch(['app/*.html']).on('change', browserSync.reload)
}

function browsersync(){
  browserSync.init({
    server: {
        baseDir: "app/",
        notify: false, // Отключаем уведомления
        online: true // Режим работы: true или false
    }
});
}

function cleanDist (){
  return src('docs')
  .pipe(clean());
}

function copyImages() {
  return src('app/img/**/*', {encoding: false}) // Берем все изображения
    .pipe(dest('docs/img')); // Копируем в docs/img
}

function building(){
  return src([
    'app/css/style.min.css',
    'app/css/style.css',
    'app/js/main.min.js',
    'app/*.html',
  ],{base:'app'})
  .pipe(dest('docs'))
}


exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;

exports.build = series(cleanDist, parallel(building, copyImages));
exports.default = parallel(styles,scripts,browsersync,watching);