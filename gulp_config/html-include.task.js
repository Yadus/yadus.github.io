var   gulp = require( 'gulp' )
    , include = require( 'gulp-html-tag-include' )
    , livereload = require( 'gulp-livereload' )
    , path = require( '../package.json' ).path
    ;

module.exports = function() {
    return gulp.src( path.src.html + '*.html' )
        .pipe( include() )
        .pipe( gulp.dest( path.dist.root ) )
        .pipe( livereload() );
};
