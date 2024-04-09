// Import necessary modules
import assert from 'assert'
import supertest from 'supertest'
import { describe, it } from 'mocha'
import { z } from 'zod'
import app from '../../exercises/d2e3.js'

const alarmSchema = z.object({
  time: z.string(),
  message: z.string()
})

const alarmsArraySchema = z.array(alarmSchema)

const request = supertest(app)

describe('Alarms API endpoints', function () {
  it('GET /alarms should return all alarms', async function () {
    const response = await request
      .get('/alarms')
      .expect('Content-Type', /json/)
      .expect(200)

    assert.strictEqual(
      alarmsArraySchema.safeParse(response.body).success,
      true,
      'Response should match the alarm schema'
    )
  })

  it('GET /alarms/:index should return a specific alarm', function () {
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

  it('POST /alarms should add a new alarm', async function () {
    const newAlarm = {
      time: '14:00',
      message: 'Lunch break!'
    }

    const postResponse = await request(app)
      .post('/alarms')
      .send(newAlarm)
      .expect(201)

    const getResponse = await request(app)
      .get('/alarms')
      .expect('Content-Type', /json/)
      .expect(200)

    const found = getResponse.body.some(
      alarm =>
        alarm.time === newAlarm.time && alarm.message === newAlarm.message
    )
    assert.strictEqual(found, true, 'New alarm should be added to the list')
  })
})
