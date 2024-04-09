import assert from 'assert'
import supertest from 'supertest'
import { describe, it } from 'mocha'
import app from '../../exercises/d2e2.js'

const request = supertest(app)

describe('Day 2 Exercise 2', function () {
  describe('GET /sumup endpoint', function () {
    it('should return the sum of numbers from 1 to n when n is provided', async function () {
      const res = await request
        .get('/sumup?n=5')
        .expect(200)
        .expect('Content-Type', /text/)

      assert.strictEqual(
        res.text,
        '15',
        'Response does not match the sum from 1 to 5'
      )
    })

    it('should return 0 when no query parameter is provided', async function () {
      const res = await request
        .get('/sumup')
        .expect(200)
        .expect('Content-Type', /text/)

      assert.strictEqual(res.text, '0', 'Response does not match the sum for 0')
    })
  })

  describe('GET /multiply/:x/:y endpoint', function () {
    it('should return the product of x and y when both are positive numbers', async function () {
      const res = await request
        .get('/multiply/5/4')
        .expect(200)
        .expect('Content-Type', /text/)

      assert.strictEqual(
        res.text,
        '20',
        'Response does not match the product of 5 and 4'
      )
    })

    it('should return 0 when one of the parameters is 0', async function () {
      const res = await request
        .get('/multiply/0/5')
        .expect(200)
        .expect('Content-Type', /text/)

      assert.strictEqual(
        res.text,
        '0',
        'Response does not match the product of 0 and 5'
      )
    })

    it('should handle negative numbers', async function () {
      const res = await request
        .get('/multiply/-5/4')
        .expect(200)
        .expect('Content-Type', /text/)

      assert.strictEqual(
        res.text,
        '-20',
        'Response does not match the product of -5 and 4'
      )
    })
  })
})
