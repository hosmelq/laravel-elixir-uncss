var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var Elixir = require('laravel-elixir');
var uncss = require('gulp-uncss');

var config = Elixir.config;

Elixir.extend('uncss', function(styles, options, output, baseDir) {
    var paths = prepGulpPaths(styles, baseDir, output);

    new Elixir.Task('uncss', function() {
        this.log(paths.src, paths.output);

        return gulp.src(paths.src.path)
            .pipe(uncss(options || {}))
            .pipe(Elixir.Plugins.if(config.production, cssnano()))
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
    return new Elixir.GulpPaths()
        .src(src, baseDir || config.get('assets.css.folder'))
        .output(output || config.get('public.css.outputFolder'), 'all.css');
};