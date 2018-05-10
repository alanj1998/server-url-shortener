let mocha = require('mocha'),
    chai = require('chai'),
    expect = chai.expect,
    chaihttp = require('chai-http'),
    url = 'http://localhost:8080',
    mongodb = require('../../submodules/mongodb')

chai.use(chaihttp)

describe("Testing mongodb.js routing", () => {
    it("GET /2 should redirect to www.google.com", (done) => {
        chai.request(url)
            .get('/2')
            .end((err, res) => {
                expect(res.status).to.equal(302)
                expect(res.header("Location")).should.include("google.com")
                done()
            })
    })
    it("GET /-1 should redirect to error page", (done) => {
        chai.request(url)
            .get('/-1')
            .end((err, res) => {
                expect(res.status).to.equal(302)
                expect(res.header("Location")).should.include("/error")
                done()
            })
    })
    it("PUT / should add to database and redirect to success page", (done) => {
        chai.request(url)
            .put('/')
            .send({
                original_url: "www.test.com",
            })
            .end((err, res) => {
                expect(res.status).to.equal(302)
                expect(res.header("Location")).should.include("/success")
            })
    })
})