var   gulp = require( 'gulp' )
    , runSequence = require( 'run-sequence' )
    ;

module.exports = function( done ) {
    return runSequence(
        'clean',
        'bower',
        'imagemin',
        'copy',
        'sass',
        'browserify',
        'html-include',
        done
    );
}
