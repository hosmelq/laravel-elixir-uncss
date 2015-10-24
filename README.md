# laravel-elixir-uncss

> Remove unused CSS with [UnCSS][uncss].

This is a simple [gulp-uncss][gulp-uncss] wrapper around Laravel Elixir. Add it to your Elixir-enhanced Gulpfile, like so:


## Install

With [npm](https://npmjs.org/package/laravel-elixir-uncss) do:

```
npm install laravel-elixir-uncss --save-dev
```

## Example

```js
var elixir = require('laravel-elixir');

require('laravel-elixir-uncss');

elixir(function(mix) {
    mix.uncss('main.css', {
        html: ['index.html']
    });
});
```

## Options

Please see the [gulp-uncss documentation][docs] for all of the options you can use.

## Contributing

Pull requests are welcome.

## License

MIT © [Hosmel Quintana](http://hosmelq.com)

[uncss]:        https://github.com/giakki/uncss
[gulp-uncss]:   http://badge.fury.io/js/gulp-uncss
[docs]:         https://github.com/ben-eb/gulp-uncss#example