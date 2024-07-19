import express from 'express'
import User from '../models/User.js'
import Product from '../models/Product.js'
// import Review from '../models/Review.js'

const app = express()
app.use(express.json())

// You can delete this endpoint
app.get('/', (req, res) => {
  res.send({ msg: 'Welcome to Nozama!', time: Date.now() })
})

// All users
app.get('/users', async (req, res) => {
  const users = await User.findAll(req.query.limit)
  res.json(users)
})

// TODO: add endpoints during the workshop
// Users endpoint
app.get('/users/:UID', async (req, res) => {
  const user = await User.findById(req.params.UID)

  if (!user) {
    res.sendStatus(404)
    return
  }

  res.json(user)
})

app.get('/users/:username', async (req, res) => {
  const user = await User.findByUsername(req.params.username)

  if (!user) {
    res.sendStatus(404)
    return
  }

  res.json(user)
})

// createUser endpoint
app.post('/users', async (req, res) => {
  const newUser = req.body
  await User.createUser(
    newUser.username,
    newUser.password,
    newUser.firstName,
    newUser.lastName,
    newUser.email,
    newUser.avatar
  )
  res.json(newUser)
})

// delete user
app.delete('/users/:userId', async (req, res) => {
  const userId = req.params.userId
  await User.deleteUser(userId)
  res.sendStatus(204)
})

// login user


// Product

app.get('/products', async (req, res) => {
  const products = await Product.findAll()
  res.json(products)
})

// Product ID

app.get('/products/:productId', async (req, res) => {
  const productId = req.params.productId
  const product = await Product.findById(productId)
  res.json(product)
})

// Category id

app.get('/products/category/:categoryId', async (req, res) => {
  const categoryId = req.params.categoryId
  const products = await Product.findByCategoryId(categoryId)
  res.json(products)
})

// Create Product


app.post('/products', async (req, res) => {
  const newProduct = req.body
  await Product.create(
    newProduct.name,
    newProduct.description,
    newProduct.price,
    newProduct.stockQuantity,
    newProduct.imageURL
  )
  res.json(newProduct)
})

export default app
