var   gulp = require( 'gulp' )
    , path = require( '../package.json' ).path
    , livereload = require( 'gulp-livereload' )
    ;

var arrWhatToCopy = [
      { base: path.src.root, src: 'robots.txt', dest: path.dist.root }
    , { base: path.src.root, src: 'humans.txt', dest: path.dist.root }
    , { base: path.src.root, src: '.htaccess', dest: path.dist.root }
    , { base: path.src.assets, src: 'font/**', dest: path.dist.assets }
];

module.exports = function( done ) {

    Array.prototype.forEach.call( arrWhatToCopy, function( object ) {
        gulp.src( object.base + object.src, { base: object.base } )
            .pipe( gulp.dest( object.dest ) );
    } );

    done();
}
