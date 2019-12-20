const expect = require('chai').expect
const remappingInCallback = require('../remappingInCallback'); 

const inputArray = [
    {
        id: 1,
        price: 12,
    },
    {
        id: 2,
        price: 50,
    }
]

describe ("remappingInCallback ", function () {
	it ("user provide value 0 and expect for a return of Sunday", function () {
		expect(remappingInCallback(inputArray)).to.eql([12, 50]); 
    })
})
