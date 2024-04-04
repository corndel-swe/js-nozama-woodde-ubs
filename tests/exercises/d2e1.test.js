import assert from 'assert'
import supertest from 'supertest'
import { describe, it } from 'mocha'
import app from '../../exercises/d2e1.js'

const request = supertest(app)

describe('Day 2 Exercise 1', function () {
  it('app should be an instance of an Express application', function () {
    assert.ok(app, 'app is not defined')
    assert.strictEqual(
      typeof app,
      'function',
      'app is not an Express application'
    )
    assert.ok(app.listen, 'app does not have a listen method')
  })

  it('GET /ping endpoint should exist and return "pong"', function (done) {
    request
      .get('/ping')
      .expect(200)
      .expect('Content-Type', /text/)
      .expect('pong')
      .end((err, res) => {
        if (err) return done(err)
        assert.strictEqual(res.text, 'pong', 'Response is not "pong"')
        done()
      })
  })
})
