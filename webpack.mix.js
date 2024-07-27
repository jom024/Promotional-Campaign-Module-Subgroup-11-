const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js').postCss('resources/css/app.css', 'public/css', []).vue()
;  

mix.js('resources/js/cart.js', 'public/js').postCss('resources/css/cart.css', 'public/css', []).vue()
;  