var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var uncss = require('gulp-uncss');
var $ = Elixir.Plugins;
var config = Elixir.config;
var GulpPaths = Elixir.GulpPaths;
var Task = Elixir.Task;

Elixir.extend('uncss', function(styles, options, output, baseDir) {
    var paths = prepGulpPaths(styles, baseDir, output);

    new Task('uncss', function() {
        return gulp.src(paths.src.path)
            .pipe(uncss(options || {}))
            .pipe($.if(config.production, $.minifyCss()))
            .pipe(gulp.dest(paths.output.baseDir));
    });
});

/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|array} src
 * @param  {string|null}  output
 * @return {object}
 */
var prepGulpPaths = function(src, baseDir, output) {
    return new GulpPaths()
        .src(src, baseDir || config.get('assets.css.folder'))
        .output(output || config.get('public.css.outputFolder'), 'all.css');
};