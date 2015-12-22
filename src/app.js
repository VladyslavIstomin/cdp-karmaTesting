define(function() {

    var App = function(el) {
        this.el = el;
    };

    App.prototype.render = function() {
        this.el.html('Run CDP project');
    };

	App.prototype.sum = function(a, b) {
		return a + b;
	};

    return App;

});
