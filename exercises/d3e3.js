// https://tech-docs.corndel.com/express/sending-errors.html
import express, { Router } from 'express'
import { Account } from './d3e2.js' // <-- uses Account from Exercise 2

const app = express()
app.use(express.json())

const router = Router()

const account = new Account('legolas', 'legolas@thefellowship.com', 'elf4life')

router.put('/username', (req, res) => {
  /**
   * Use try/catch to attempt account.updateUsername with the newUsername and
   * password found in the req.body.
   *
   * On success, respond with the newUsername in the response,
   * e.g. { username: 'NewUsername'}
   *
   * In case this fails, set the status of the response to the error code
   * and send a useful message.
   */
})

app.use('/account', router)

export default app
