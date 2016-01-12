var   gulp = require( 'gulp' )
    , path = require( '../package.json' ).path
    , jshint = require( 'gulp-jshint' )
    ;

module.exports = function() {
    return gulp.src( path.src.js )
        .pipe( jshint() )
        .pipe( jshint.reporter( 'default' ) );
}
