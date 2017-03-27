---
# gulp+reqiure.js创建的个人网页项目

***

## 项目目录：

 	 -dist                        
         -images                 
         -js
         -lib
         -audio
         -video
         -css
      -src
         -images
         -js
         -lib
         -audio
         -video
         -css
       -node_modules
       -package.json
       -gulpfile.js
       -config.js
 	
***
## gulp.js引用插件列表：
``` stylus
	var gulp = require('gulp'),
//合并插件
    concat = require('gulp-concat'),
//压缩js插件
    uglify = require('gulp-uglify'),
//压缩图片插件
    imagemin = require('gulp-imagemin'),
//清除文件夹插件
    clean = require('gulp-clean'),
//压缩css插件
    csso = require('gulp-csso'),
//js代码检查插件
    jshint = require('gulp-jshint'),
//重命名插件
    rename = require('gulp-rename'),
//浏览器自动刷新插件
    browserSync = require('browser-sync'),
//压缩html插件
    htmlmin = require('gulp-htmlmin'),
//html文件引用路径替换插件
    htmlreplace = require('gulp-html-replace'),
//自动添加浏览器兼容前缀插件
    prefixer = require('gulp-autoprefixer'),
//背景url图片转换成base64
    base64 = require('gulp-base64'),
//检索代码具体错误信息插件
    map = require("map-stream"),
//引入config.js
    config = require('./config.js'),
    reload = browserSync.reload;
```
***

## 使用说明：

 1. 本项目使用gulp+require.js开发个人主页，项目中所有依赖库存放在node_modules下。
 2. 如需下载到本地使用npm install 安装模块依赖。
 3. 目前此项目在开发中，后续代码会持续更新。

