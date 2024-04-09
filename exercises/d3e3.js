import express, { Router } from 'express'
import { Account } from './d3e2.js' // <-- uses Account from Exercise 2

const app = express()
app.use(express.json())

const router = Router()

router.put('/username', (req, res) => {
  /**
   * Attempt to call Account.updateUsername with the newUsername and
   * password found in the req.body
   *
   * In case this fails, use try/catch to respond with the error
   * code and message found in the error
   */
})

app.use('/account', router)

export default app
