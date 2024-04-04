import { describe, test } from 'mocha'
import assert from 'assert'
import User from '../../models/User.js'

describe('Day 1 Exercise 3', function () {
  test('User.findById returns an object', async function () {
    const user = await User.findById(13)
    assert.strictEqual(typeof user, 'object', 'Method should return an object')
  })

  test('User.findById finds a user by their id', async function () {
    const user = await User.findById(13)
    assert.strictEqual(user.id, 13, 'User id should be 13')
  })

  test('User.findByFirstName returns an array', async function () {
    const users = await User.findByFirstName('Ally')
    assert.strictEqual(
      Array.isArray(users),
      true,
      'Method should return an array'
    )
  })

  test('User.findByFirstName finds users by their first name', async function () {
    const users = await User.findByFirstName('Ally')
    assert.ok(
      users.length > 0,
      'There should be many users with the first name Ally'
    )
  })
})
