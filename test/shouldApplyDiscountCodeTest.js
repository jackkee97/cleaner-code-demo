const expect = require('chai').expect
const shouldApplyDiscountCode = require('../shouldApplyDiscountCode'); 

describe ("#shouldApplyDiscountCode", function () {
	it ("user has to spend more than 30 to be eligible for a discount", function () {
		expect(shouldApplyDiscountCode(4000)).to.be.true; 
	})

	it ("if total amount is less than 30 there is no discount code", function () {
		expect(shouldApplyDiscountCode(2999)).to.be.false; 
	})
})