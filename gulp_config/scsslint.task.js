var   gulp = require( 'gulp' )
    , scsslint = require( 'gulp-scss-lint' )
    , path = require( '../package.json' ).path
    ;


module.exports = function( done ) {

    gulp.src( path.src.scss + '**' )
        .pipe( scsslint() )
        .on( "end", done );

}
