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

describe('_.subtract', function() {

	it('subtracts the first number it\'s given from the second', function() {
		expect(_.subtract([5, 3])).to.eql(2);
	})

	it('rejects three numbers inputted', function() {
		expect(_.subtract([5, 3, 12])).to.eql('This program can only subtract one number from another.');
	})
})
