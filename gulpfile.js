var gulp = require('gulp')
	,gutil = require('gulp-util')
	,clean = require('gulp-clean')
	,concat = require('gulp-concat')
	,sourcemaps = require('gulp-sourcemaps')
	,rename = require('gulp-rename')
	,minifycss = require('gulp-minify-css')
	,minifyhtml = require('gulp-minify-html')
	,prcesshtml = require('gulp-prcesshtml')
	,jshint = require('gulp-jshint')
	,uglify = require('gulp-uglify')
	,connect = require('gulp-connect')
	,paths;

paths = {
	assets:'src/assets/**/*',
	css:   'src/css/*.css',
	libs:   [
			'src/three/thres'
	]
	js: 	['src/js/*.js']
	dist:    './dist'

}

gulp.task('clean',function(){
	var steam = gulp.src(paths.dist,{read:false})
		.pipe(clean({force:true}))
		.on('error',gutil.log);

	return steam;
});

gulp.task('uglify',['clean','lint']function(){
	
})