var   gulp = require( 'gulp' )
    , browserify = require( 'gulp-browserify' )
    , path = require( '../package.json' ).path
    , livereload = require( 'gulp-livereload' )
    , uglify = require( 'gulp-uglify' )
    , rename = require( 'gulp-rename' )
    ;

module.exports = function( done ) {
    gulp.src( path.src.js + 'app.js' )
        .pipe( browserify( {
            insertGlobals : false,
            debug : false
        } ) )
        .pipe( gulp.dest( path.dist.js ) )
        .pipe( uglify() )
        .pipe( rename('app.min.js' ) )
        .pipe( gulp.dest( path.dist.js ) )
        .pipe( livereload() )
        .on( 'end', done );
};
