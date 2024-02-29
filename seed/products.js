import { faker } from '@faker-js/faker'
import connect from '../db/index.js'

const createFakeProduct = () => ({
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(),
  stockQuantity: faker.number.int({ min: 10, max: 100 }),
  imageURL: faker.image.urlPicsumPhotos()
})

async function insertFakeProducts(n) {
  const db = connect()
  const fakeProducts = new Array(n).fill(null).map(createFakeProduct)

  try {
    await db.batchInsert('products', fakeProducts, 100)
  } finally {
    db.destroy()
  }
}

export default insertFakeProducts
