var   gulp = require( 'gulp' )
    , scsslint = require( 'gulp-scss-lint' )
    , watch = require( 'gulp-watch' )
    , bower = require( 'bower' )
    , livereload = require( 'gulp-livereload' )
    , path = require( '../package.json' ).path
    ;

module.exports = function() {
    livereload.listen();

    var arrToBeWatched = [
          { path: path.src.js + '**/*.js', task: [ 'jshint', 'browserify' ] }
        , { path: path.src.scss + '**', task: [ 'scsslint', 'sass' ] }
        , { path: [ path.src.assets + '**', '!' + path.src.assets + 'img' ], task: [ 'copy' ] }
        , { path: path.pkgm.bower + '**', task: [ 'bower' ] }
        , { path: path.src.html + '**.html', task: [ 'html-include' ] }
        , { path: path.src.img + '**', task: [ 'imagemin' ] }
    ];

    Array.prototype.forEach.call( arrToBeWatched, function( objWatch ) {
        watch( objWatch.path, function() {
            Array.prototype.forEach.call( objWatch.task, function( strTask ) {
                gulp.start( strTask );
            } );
        } );
    } );
};
