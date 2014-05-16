var chai = require('chai');
var expect = chai.expect;
var _ = require('../index');

describe('_.add', function() {

	it('accepts an array input', function() {
		expect(_.add([1, 2])).to.eql([1, 2]);
	})

	it('adds all items in an array', function() {
		expect(_.add([1, 2])).to.eql(3);
	})
});
