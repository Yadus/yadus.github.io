var   gulp = require( 'gulp' )
    , del = require( 'del' )
    , path = require( '../package.json' ).path
    ;

var arrWhatToDel = [
    path.dist.root,
    path.pkgm.bower
];

module.exports = function( done ) {
    del( arrWhatToDel, function ( err, paths ) {
        console.log( 'Deleted files/folders:\n', paths.join( '\n' ) );
        done();
    });
}
