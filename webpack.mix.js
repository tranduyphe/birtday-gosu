const mix = require('laravel-mix');
var path = require('path');
const webpack = require('webpack');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('resources/js/app.js', 'public/assets/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .styles(['resources/css/style.css'], 'public/css/style.css')
    .webpackConfig({
        
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/js/'),
                "v3-infinite-loading$": path.resolve(
                    __dirname,
                    "node_modules/v3-infinite-loading/lib/v3-infinite-loading.es.js",
                ),
            },
            extensions: [".*",".wasm",".mjs",".js",".jsx",".json",".vue"]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    PUBLIC_URL: JSON.stringify(process.env.PUBLIC_URL),
                    RESOURCE_URL: JSON.stringify(process.env.RESOURCE_URL),
                }
            })
        ]
    })
    .sass('resources/assets/scss/style.scss', 'public/assets/css')
    .sass('resources/assets/scss/datatable.scss', 'public/assets/css')
    .sass('resources/assets/scss/simple-typeahead.scss', 'public/assets/css');
    mix.copyDirectory('resources/assets/images', 'public/images');