var   gulp = require( 'gulp' )
    , minifyCss = require( 'gulp-minify-css' )
    , rename = require( 'gulp-rename' )
    , autoprefixer = require( 'gulp-autoprefixer' )
    , sass = require( 'gulp-sass' )
    , uncss = require( 'gulp-uncss' )
    , livereload = require( 'gulp-livereload' )
    , path = require( '../package.json' ).path
    ;

function swallowError ( error ) {
    console.log( error.toString() );
    this.emit( 'end' );
}

module.exports = function( done ) {
  gulp.src( path.src.scss + 'screen.scss' )
    .pipe( sass() )
    .on( 'error', swallowError )
    // .pipe( uncss( {
    //     html: [ path.src.html + '**/*' ],
    //     ignore: [ '.button.is-active' ]
    // } ) )
    .pipe( autoprefixer( {
        browsers: [ 'last 2 versions' ],
        cascade: false
    } ) )
    .pipe( gulp.dest( path.dist.css ) )
    .pipe( minifyCss( {
        keepSpecialComments: 0
    } ) )
    .pipe( rename( { extname: '.min.css' } ) )
    .pipe( gulp.dest( path.dist.css ) )
    .pipe( livereload() )
    .on( 'end', done );
}
