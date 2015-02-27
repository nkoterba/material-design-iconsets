var gulp = require('gulp');
var mkdirp = require('mkdirp');
var git = require('gulp-git');
var exec = require('child_process').exec;

var rename = require('gulp-rename');
var print = require('gulp-print');
var replace = require('gulp-replace');
var concat = require('gulp-concat');
var xmlEdit = require('gulp-edit-xml');
var insert = require('gulp-insert');
var fs = require('fs');
var path = require('path');
var es = require('event-stream');
var tap = require('gulp-tap');
var gulpif = require('gulp-if');
var del = require('del');

var ICONSRC = "material-design-icons";
var ORIGIN = "git://github.com/google/material-design-icons.git";
var ICONDEST = "iconsets";

gulp.task('init', function () {
	mkdirp.sync(ICONSRC);
	process.chdir(ICONSRC);
	exec(
		'git init; ' +
		'git config core.sparsecheckout true; ' +
		'echo "*/svg/production/*_24px.svg" >> .git/info/sparse-checkout; ' +
		'git remote add -f origin ' + ORIGIN);
});

gulp.task('pull', function (cb) {
	git.pull('origin', 'master', {cwd: ICONSRC}, function (err) {
		if (err)
			throw err;
		else
			cb();
	});
});

gulp.task('build', ['pull'], function() {
	var folders = getFolders(ICONSRC);

	var tasks = folders.map(function (folder) {
		return gulp.src(path.join(ICONSRC, folder, '**', '*.svg'))
			//.pipe(print())
			.pipe(xmlEdit(function (doc) {
				delete doc.svg.$;

				var test = {
					g: doc.svg
				};

				test.g.$ = {id: 'REPLACEME'};

				return test;
			}))
			.pipe(tap(function (file,t) {
				var iconName = path.basename(file.path).replace(/ic_|_..px.svg/g, '');

				file.contents = new Buffer(file.contents.toString().replace('REPLACEME', iconName));
			}))
			.pipe(concat(folder + '-icons.svg'))
			.pipe(insert.wrap('<svg>\n<defs>\n', '\n</defs>\n</svg>'))
			.pipe(gulp.dest(ICONDEST))
	});

	return es.concat.apply(null, tasks);
});

gulp.task('clean', function(cb) {
	del(ICONDEST, cb);
});

gulp.task('cleanAll', function(cb) {
	del([ICONSRC, ICONDEST], cb);
});

function getFolders(dir){
	return fs.readdirSync(dir)
		.filter(function(file){
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
}