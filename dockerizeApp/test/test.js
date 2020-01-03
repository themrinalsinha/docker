var supertest = require('supertest')
var app       = require('../index.js')

var server    = supertest.agent('http://127.0.0.1:1337') // port is same as in index.js file
describe('GET /', () => {
    it('should return 200', (done) => {
        server.get('/').expect(200, done)
    })
})

