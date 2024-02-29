import { faker } from '@faker-js/faker'
import connect from '../db/index.js'

const createFakeReview = (userId, productId) => ({
  userId: userId,
  productId: productId,
  rating: faker.number.int({ min: 1, max: 5 }),
  reviewText: faker.lorem.sentences(),
  reviewDate: faker.date.past({ years: 3 }).toISOString()
})

async function insertFakeReviews(num_users, num_products, num_reviews) {
  const db = connect()
  const reviews = []

  for (let i = 0; i < num_reviews; i++) {
    const userId = faker.number.int({ min: 1, max: num_users })
    const productId = faker.number.int({ min: 1, max: num_products })

    const review = createFakeReview(userId, productId)
    reviews.push(review)
  }

  try {
    await db.batchInsert('reviews', reviews, 100)
  } finally {
    db.destroy()
  }
}

export default insertFakeReviews
