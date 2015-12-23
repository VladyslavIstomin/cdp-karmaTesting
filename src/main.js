requirejs.config({
    paths: {
        'jquery': '../lib/jquery',
        'underscore': '../lib/underscore',
        'parser': '../parser/parser'
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    }
});

define(['app', 'parser', 'jquery'], function (App, parser, $) {
    var app = new App($('body'));
    app.render();

});
