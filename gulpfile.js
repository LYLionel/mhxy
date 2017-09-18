var gulp = require("gulp");

var uglify = require("gulp-uglify"); //压缩模块

var babel = require("gulp-babel");  //es6的转译

var rename = require("gulp-rename"); //重新命名模块

var sass = require("gulp-ruby-sass"); //sass

var connect = require("gulp-connect"); // 热部署
gulp.task("JS",function(){
	gulp.src("./plug/*.js").pipe(babel({
		presets: ["es2015"]
	})).pipe(uglify()).pipe(rename({suffix:".min"})).pipe(gulp.dest("./minjs"));
})

gulp.task("compilesass",function(){
	sass("./scss/*.scss",{
		style : "expanded"
	}).pipe( gulp.dest("./css/"));
})

gulp.task("refreshHTML",function(){
	gulp.src('./html/*.html').pipe(connect.reload());
})

gulp.task("listen",function(){
	
	connect.server({
		livereload:true
	});
	
	gulp.watch("./scss/*.scss",["compilesass"]);
	gulp.watch("./css/*.css",["refreshHTML"]);
	gulp.watch("./plug/*.js",["JS"]);
	gulp.watch("./html/*.html",["refreshHTML"]);
})
