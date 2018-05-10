let mocha = require('mocha'),
    chai = require('chai'),
    expect = chai.expect,
    chaihttp = require('chai-http')

chai.use(chaihttp)

describe("Testing index.js", () =>{
    it("GET / should display main page", (done) => {
        chai.request('localhost:8080')
        .get('/')
        .end((err, res) => {
            expect(res.status).to.equal(200)
            expect(res.body).to.not.null
            done()
        })
    })
})