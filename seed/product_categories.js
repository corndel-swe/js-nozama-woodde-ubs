import { faker } from '@faker-js/faker'
import connect from '../db/index.js'

async function insertFakeProductCategories(m, n) {
  const db = connect()
  const rows = []

  for (let productId = 1; productId <= m; productId++) {
    const count = faker.number.int({ min: 1, max: 4 })
    const categories = faker.helpers.uniqueArray(
      () => faker.number.int({ min: 1, max: n }),
      count
    )

    for (let categoryId of categories) {
      rows.push({ productId, categoryId })
    }
  }

  try {
    await db.batchInsert('product_categories', rows, 100)
  } finally {
    db.destroy()
  }
}

export default insertFakeProductCategories
