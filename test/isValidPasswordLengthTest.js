const expect = require('chai').expect
const isValidPasswordLength = require('../isValidPasswordLength'); 

describe ("#isValidPasswordLength", function () {
	it ("password length is valid if it's greater than or equal to 6 characters", function () {
		expect(isValidPasswordLength('helloWorld')).to.be.true; 
	})

	it ("password length is invalid if it's less than 6 characters", function () {
		expect(isValidPasswordLength('hello')).to.be.false; 
	})
})