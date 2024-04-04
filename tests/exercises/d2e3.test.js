// Import necessary modules
import assert from 'assert'
import supertest from 'supertest'
import { describe, it } from 'mocha'
import app from '../../exercises/d2e3.js'

const request = supertest(app)

describe('Alarms API endpoints', function () {
  it('GET /alarms should return all alarms', function (done) {
    request
      .get('/alarms')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        assert.strictEqual(res.body.length, 2, 'Should return all alarms')
        done()
      })
  })

  it('GET /alarms/:index should return a specific alarm', function (done) {
    request
      .get('/alarms/0')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err)
        assert.strictEqual(
          res.body.time,
          '08:30',
          'Should return the first alarm'
        )
        assert.strictEqual(
          res.body.message,
          'Wake up!',
          'Should return the correct message'
        )
        done()
      })
  })

  it('POST /alarms should add a new alarm', function (done) {
    const newAlarm = {
      time: '14:00',
      message: 'Lunch break!'
    }

    request
      .post('/alarms')
      .send(newAlarm)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err)
        // Optionally, you could get /alarms again here to verify the new alarm was added
        request
          .get('/alarms')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err)
            const found = res.body.some(
              alarm =>
                alarm.time === newAlarm.time &&
                alarm.message === newAlarm.message
            )
            assert.strictEqual(
              found,
              true,
              'New alarm should be added to the list'
            )
            done()
          })
      })
  })
})
