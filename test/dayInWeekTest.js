const expect = require('chai').expect
const dayInWeek = require('../dayInWeek'); 

describe ("accept an integer from 0 to 6 and return string of day", function () {
	it ("user provide value 0 and expect for a return of Sunday", function () {
		expect(dayInWeek(0)).to.eql('Sunday'); 
    })

    it ("user provide value 1 and expect for a return of Monday", function () {
		expect(dayInWeek(1)).to.eql('Monday'); 
    })
    
    it ("user provide value 5 and expect for a return of Friday", function () {
		expect(dayInWeek(5)).to.eql('Friday'); 
    })
    
    it ("user provide value aside from 0 to 6 and expect for a return of Invalid Value", function () {
		expect(dayInWeek(7)).to.eql('Invalid Value'); 
	})
})