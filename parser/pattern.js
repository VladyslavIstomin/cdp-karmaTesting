define(['parser'], function(Parser) {
	var result = {};

	return {
		txt: function(text) {
			return new Parser(function () {
				if (typeof(text) === 'string') {
					result['text'] = text;
					return result;
				}
			});
		}
	}
});

