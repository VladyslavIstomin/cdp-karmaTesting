define(['parser'], function(Parser) {
	var result = {};

	return {
		txt: function(text) {
			return new Parser(function() {
				if (typeof(text) === 'string') {
					result['text'] = text;

					return result;
				}
			});
		},
		select: function(req) {
			return new Parser(function() {
				var regexp = /^select.*from/gi,
					regSelect = /select\s/i,
					regFrom = /\sfrom/i;

				var regexpResult = req.match(regexp)[0],
					reqResult = regexpResult.replace(regSelect, "").replace(regFrom, ""),
					selectArr = reqResult.split(', ');

				result['selectCol'] = selectArr;
				return result;
			})
		},
		from: function(req) {
			return new Parser(function() {
				var regexp = /from.*/gi,
					regFrom = /from\s/i;

				var regexpResult = req.match(regexp)[0],
					reqResult = regexpResult.replace(regFrom, ""),
					selectArr = reqResult.split(', ');

				result['fromTable'] = selectArr;
				return result;
			})
		}
	}
});

