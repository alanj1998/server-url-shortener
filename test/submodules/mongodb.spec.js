let mocha = require('mocha'),
    chai = require('chai'),
    expect = chai.expect,
    mongodb = require('../../submodules/mongodb')

describe("Testing mongodb.js CRUD functions", () => {
    describe("Testing RETRIEVE", () => {
        it("Should retrieve facebook object when passed in 2", (done) => {
            let object = mongodb.getitem(2)
            expect(object.original_url).to.equal("www.facebook.com")
            done()
        })
        it("Should return undefined when -1 is passed in", done => {
            let object = mongodb.getitem(-1)
            expect(object).to.undefined()
            done()
        })
    })
    describe("Testing CREATE", () => {
        it("Should create a new object when passed in url", done => {
            let route = mongodb.createitem("www.test-inside.com")
            let object = mongodb.getitem(route)
            expect(object.original_url).to.equal("www.test-inside.com")
        })
    })
})