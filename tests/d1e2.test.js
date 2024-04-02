import { describe, test } from 'mocha'
import assert from 'assert'
import knex from 'knex'

describe('Day 1 Exercise 2', function () {
  let dbModule
  let db

  before(async function () {
    dbModule = await import('../db/index.js')
    db = dbModule.default
  })

  test('db/index.js should have a default export', function () {
    assert.ok('default' in dbModule, 'db is not exported')
  })

  test('db/index.js default export should be an instance of Knex', function () {
    assert.ok(
      typeof db.select === 'function',
      'db does not have a select method'
    )
    assert.ok(typeof db.table === 'function', 'db does not have a table method')
    assert.ok(typeof db.raw === 'function', 'db does not have a raw method')
  })

  test('db connection shuold connect successfully to db/db.sqlite', async function () {
    try {
      const hasUsersTable = await db.schema.hasTable('users')
      assert.strictEqual(
        hasUsersTable,
        true,
        'The database does not have the expected "users" table'
      )
    } finally {
      await db.destroy()
    }
  })
})
