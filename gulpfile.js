var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

// build for dist

var sourceFile = './src/app.js';
var destFolder = './build/';
var destFile = 'CloverBasic.js';

gulp.task('browserify-build', function() {

    var bundler = browserify({
        // Required watchify args
        cache: {}, 
        packageCache: {}, 
        fullPaths: true,
        // Browserify Options
        entries: sourceFile,
        debug: true
    });
    
    var bundle = function() {
        return bundler
        .bundle()
        .on('error', function(err){
            console.log(err.message);
            this.emit('end');
        })
        .pipe(source(destFile))
        .pipe(gulp.dest(destFolder));
    };

    return bundle();

});

gulp.task('default',['browserify-build'],function(){
    
});
