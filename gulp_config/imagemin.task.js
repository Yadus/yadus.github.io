var   gulp = require( 'gulp' )
    , imagemin = require( 'gulp-imagemin' )
    , newer = require( 'gulp-newer' )
    , pngquant = require( 'imagemin-pngquant' )
    , path = require( '../package.json' ).path
    , livereload = require( 'gulp-livereload' )
    ;

module.exports = function ( done ) {
    gulp.src( path.src.img + '**' )
        .pipe( newer( path.dist.img ) )
        .pipe( imagemin( {
            progressive: true,
            svgoPlugins: [ { removeViewBox: false } ],
            use: [ pngquant() ]
        }))
        .pipe( gulp.dest( path.dist.img ) )
        .pipe( livereload() )
        .on( 'end', done );
};
