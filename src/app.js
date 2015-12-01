define(function() {

    var App = function(el) {
        this.el = el;
    };

    App.prototype.render = function() {
        this.el.html('require.js up and running');
    };

	App.prototype.sum = function(a, b) {
		return a + b;
	};

    return App;

});
