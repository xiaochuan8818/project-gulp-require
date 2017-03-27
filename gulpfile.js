/**
 * Created by Administrator on 2017/3/25 0025.
 */
var gulp = require('gulp'),
//�ϲ����
    concat = require('gulp-concat'),
//ѹ��js���
    uglify = require('gulp-uglify'),
//ѹ��ͼƬ���
    imagemin = require('gulp-imagemin'),
//����ļ��в��
    clean = require('gulp-clean'),
//ѹ��css���
    csso = require('gulp-csso'),
//js��������
    jshint = require('gulp-jshint'),
//��Ӱ汾�Ų��
    rev = require('gulp-rev'),
//��������
    rename = require('gulp-rename'),
//�����в��
    shell = require('gulp-shell'),
//������Զ�ˢ�²��
    browserSync = require('browser-sync'),
//
    sourcemaps = require('gulp-sourcemaps'),
//ѹ��html���
    htmlmin = require('gulp-htmlmin'),
//html�ļ�����·���滻���
    htmlreplace = require('gulp-html-replace'),
//�Զ�������������ǰ׺���
    prefixer = require('gulp-autoprefixer'),
//����urlͼƬת����base64
    base64 = require('gulp-base64'),
//����������������Ϣ���
    map = require("map-stream"),
//����config.js
    config = require('./config.js'),
    reload = browserSync.reload;

//����·��
var path = {
    basePath : 'dist/',
    videoPath : 'dist/video',
    audioPath : 'dist/audio',
    script : 'src/js/*.js',
    otherjs : 'src/js/**/*.js',
    images : 'src/images/**/*',
    cssPath : 'src/css/*.css',
    othercss : 'src/css/**/*.css',
    libPath : 'src/lib/*.js',
    htmlPath : 'src/*.html',
    watchhtmlPath : 'dist/*.html'
}
// ѹ�� JS
gulp.task('js-optimize', function() {
    return gulp.src([path.script,path.otherjs])
        .pipe(uglify())
        .pipe(sourcemaps.init({loadMaps: true})) 
    	.pipe(sourcemaps.write()) 
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());

    console.log('js �ļ��Ż�������ϣ�');
});

//ͼƬѹ��
gulp.task('img-optimize', function() {

    return gulp.src(['src/images/**/*.{png,jpg,gif}'])
        .pipe(imagemin({      // ֻѹ���޸ĵ�ͼƬ��û���޸ĵ�ͼƬֱ�Ӵӻ����ļ���ȡ
            progressive: true,
        }))
        .pipe(gulp.dest('dist/images'));

    console.log('ͼƬѹ����ϣ�');
});
//cssѹ��
gulp.task('css-optimize', function () {
    return gulp.src([path.cssPath,path.othercss])
        .pipe(prefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //�Ƿ���������ֵ Ĭ�ϣ�true
            remove:true //�Ƿ�ȥ������Ҫ��ǰ׺ Ĭ�ϣ�true
        }))
        .pipe(base64(config.base64))
        .pipe(concat('index.css'))
        .pipe(rename('index.min.css'))
        .pipe(csso())
        .pipe(gulp.dest('dist/css'))
        .pipe(sourcemaps.init({loadMaps: true})) 
    	.pipe(sourcemaps.write()) 
        .pipe(browserSync.stream());
});
//�������ѹ���ϲ�
gulp.task('js-common', function () {
    return gulp.src(path.libPath)
        .pipe(uglify())
        .pipe(gulp.dest('dist/lib'))
        .pipe(reload({stream: true}));   //������ִ��reload����ҳ���޸�֮������ˢ��ҳ��
});
//html�ļ�ѹ�����滻�����ļ�·��
gulp.task('html-optimize', function() {
    var options = {
        removeComments: true,//���HTMLע��
        collapseWhitespace: true,//ѹ��HTML
        collapseBooleanAttributes: true,//ʡ�Բ������Ե�ֵ <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//ɾ�����пո�������ֵ <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//ɾ��<script>��type="text/javascript"
        removeStyleLinkTypeAttributes: true,//ɾ��<style>��<link>��type="text/css"
        minifyJS: true,//ѹ��ҳ��JS
        minifyCSS: true//ѹ��ҳ��CSS
    };
    return gulp.src(path.htmlPath)
        .pipe(htmlreplace({
            'css'     : 'css/index.min.css'
        }))
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
});
//���js���뷽��
var customerReporter = map(function(file,cb){
    config.jshintFn(file,cb);
});
//���js��������
gulp.task('js-hint', function() {
    return gulp.src(path.script)
        .pipe(jshint())
        .pipe(customerReporter);
});
//�������ط����������ļ��仯�Զ�ˢ��ҳ��
gulp.task('server',function() {
    browserSync.init({
        server: "./dist"
    });
    gulp.watch(path.cssPath, ['css-optimize']);
    //������watch�������on('change',browserSync.reload)�������ˢ��ҳ����ѹ���ļ���ʵ�ֲ���ͬ�����£�
    gulp.watch(path.htmlPath, ['html-optimize']);
    gulp.watch(path.script, ['js-optimize']);
});
//gulp�����ļ���Ŀ��·��
gulp.task('copy-video',  function() {
    return gulp.src('src/video/*')
        .pipe(gulp.dest(path.videoPath))
});
gulp.task('copy-audio',  function() {
    return gulp.src('src/audio/*')
        .pipe(gulp.dest(path.audioPath))
});
//Ĭ��ִ�е�����
gulp.task('default',
    [
        'js-hint',
        'css-optimize',
        'img-optimize',
        'js-optimize',
        'html-optimize',
        'js-common',
        'copy-video',
        'copy-audio',
        'server'
    ],
    function() {
        console.log('���ѹ���������');
        var info = prefixer().info();
        console.log(info);
    }
);
//������д���ļ�
gulp.task('clean', function() {
    return gulp.src('dist/*')
        .pipe(clean())
});