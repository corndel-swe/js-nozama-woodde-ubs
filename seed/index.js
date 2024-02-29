import insertFakeProducts from './products.js'
import insertFakeUsers from './users.js'
import insertFakeCategories from './categories.js'
import insertFakeProductCategories from './product_categories.js'
import insertFakeReviews from './reviews.js'

async function seed() {
  const NUM_PRODUCTS = 200
  const NUM_USERS = 200
  const NUM_CATEGORIES = 10
  const NUM_REVIEWS = 1000

  await insertFakeUsers(NUM_USERS)
  await insertFakeProducts(NUM_PRODUCTS)
  await insertFakeCategories(NUM_CATEGORIES)
  await insertFakeProductCategories(NUM_PRODUCTS, NUM_CATEGORIES)
  await insertFakeReviews(NUM_USERS, NUM_PRODUCTS, NUM_REVIEWS)
}

seed()
