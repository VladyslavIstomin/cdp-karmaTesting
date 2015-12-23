define(['app', 'parser', 'pattern', 'jquery', 'underscore'], function(App, Parser, Pattern, $, _) {

    describe('just checking', function() {
	    var el = $('<div></div>');

	    var app = new App(el);

        it('works for app', function() {
            app.render();

            expect(el.text()).toEqual('Run CDP project');
        });

        it('works for underscore', function() {
            // just checking that _ works
            expect(_.size([1,2,3])).toEqual(3);
        });

	    it('show sum', function() {
		    expect(app.sum(2, 3)).toEqual(5)
	    });

    });

	describe('check Parser', function() {
		var pars = new Parser('string');

		it('init Parser', function() {
			expect(pars.exec).toEqual('string')
		});

		it('Pattern txt', function() {
			expect(Pattern.txt('world').exec()).toEqual({text: 'world'})
		});

		it('Pattern select', function() {
			expect(Pattern.select('SELECT column1, column2 FROM table1, table2').exec()).toEqual({text: 'world', selectCol: ['column1','column2']})
		});

		it('Pattern from', function() {
			var request = Pattern.from('SELECT column1, column2 FROM table1, table2').exec();
			expect(request).toEqual({text: 'world', selectCol: ['column1','column2'], fromTable: ['table1','table2']})
		});
	});

});
