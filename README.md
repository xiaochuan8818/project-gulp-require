
---
title: gulp+reqiure.js�����ĸ�����ҳ��Ŀ
tags: gulp,require.js
grammar_cjkRuby: true
---

## ��ĿĿ¼��

 	 -dist
         -images
         -js
         -audio
         -video
         -css
      -src
         -images
         -js
         -audio
         -video
         -css
       -node_modules
       -package.json
       -gulpfile.js
       -config.js

***
## gulp.js���ò���б�
``` stylus
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
//���������
    rename = require('gulp-rename'),
//������Զ�ˢ�²��
    browserSync = require('browser-sync'),
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
```
***

## ʹ��˵����

 1. ����Ŀʹ��gulp+require.js����������ҳ����Ŀ����������������node_modules�¡�
 2. �������ص�����ʹ��npm install ��װģ��������
 3. Ŀǰ����Ŀ�ڿ����У����������������¡�

