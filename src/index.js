'use strict';
module.exports = function not(val) {
	return Promise.resolve(val).then(function (val) {
		return !val;
	});
};
