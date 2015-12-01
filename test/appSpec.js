define(['app', 'jquery', 'underscore'], function(App, $, _) {

    describe('just checking', function() {
	    var el = $('<div></div>');

	    var app = new App(el);

        it('works for app', function() {
            app.render();

            expect(el.text()).toEqual('require.js up and running');
        });

        it('works for underscore', function() {
            // just checking that _ works
            expect(_.size([1,2,3])).toEqual(3);
        });

	    it('show sum', function() {
		    expect(app.sum(2, 3)).toEqual(5)
	    });

    });

});
