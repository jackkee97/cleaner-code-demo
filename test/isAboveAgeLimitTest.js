const expect = require('chai').expect
const isAboveAgeLimit = require('../isAboveAgeLimit'); 

describe ("#isAboveAgeLimit", function () {
	it ("user has to be above 18 years old", function () {
		expect(isAboveAgeLimit(18)).to.be.true; 
	})

	it ("if user is below 18, return false", function () {
		expect(isAboveAgeLimit(17)).to.be.false; 
	})
})