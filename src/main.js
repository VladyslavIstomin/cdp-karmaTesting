requirejs.config({
    paths: {
        'jquery': '../lib/jquery',
        'underscore': '../lib/underscore',
	    'parser': '../parser/parser',
	    'pattern': '../parser/pattern'
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

define(['app', 'parser', 'pattern', 'jquery'], function (App, Parser, pattern, $) {
    var app = new App($('body'));
    app.render();

});
