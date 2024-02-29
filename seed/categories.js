import { faker } from '@faker-js/faker'
import connect from '../db/index.js'

const createFakeCategories = n => {
  const names = faker.helpers.uniqueArray(faker.commerce.department, n)
  return names.map(name => ({ name }))
}

async function insertFakeCategories(n) {
  const db = connect()
  const fakeCategories = createFakeCategories(n)

  try {
    await db.batchInsert('categories', fakeCategories, 100)
  } finally {
    db.destroy()
  }
}

export default insertFakeCategories
