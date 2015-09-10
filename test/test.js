'use strict';
var test = require('ava');
var not = require('../src');

test('false', function (assert) {
	assert.plan(1);
	return not(Promise.resolve(false))
		.then(function (actual) {
			var expected = true;
			assert.is(actual, expected);
		});
});

test('true', function (assert) {
	assert.plan(1);
	return not(Promise.resolve(true))
		.then(function (actual) {
			var expected = false;
			assert.is(actual, expected);
		});
});

test('non-promise value', function (assert) {
	assert.plan(1);
	return not(false)
		.then(function (actual) {
			var expected = true;
			assert.is(actual, expected);
		});
});
