var gulp = require('gulp'),
    config_path = './gulp_config/',
    tasks = [
        'bower',
        'build',
        'browserify',
        'clean',
        'copy',
        'default',
        'html-include',
        'imagemin',
        'jshint',
        'scsslint',
        'sass',
        'watch'
    ];

for(i in tasks) {
    var task = tasks[i];

    gulp.task(
        task,
        require(config_path + task + '.task.js')
    );
}
