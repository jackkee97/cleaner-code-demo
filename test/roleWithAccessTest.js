const expect = require('chai').expect
const dayInWeek = require('../roleWithAccess'); 

describe ("execute different setup by providing different user type", function () {
	it ("user provide user type admin and expect for a return of executedAdminSetup", function () {
		expect(dayInWeek('admin')).to.eql('executedAdminSetup'); 
    })

    it ("user provide user type driver and expect for a return of executedDriverSetup", function () {
		expect(dayInWeek('driver')).to.eql('executedDriverSetup'); 
    })

    it ("user provide user type customer and expect for a return of executedCustomerSetup", function () {
		expect(dayInWeek('customer')).to.eql('executedCustomerSetup'); 
    })
})