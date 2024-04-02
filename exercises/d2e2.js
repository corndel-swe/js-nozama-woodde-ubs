import express from 'express'
const app = express()

// Hint: res.send() will not accept numbers - you will need to convert your
// result to a string before sending it

app.get('/sumup', (req, res) => {
  // TODO
  // Responds with the sum of all numbers from 1 to n
  // If no param is provided, respond with the number 0
  // e.g.: GET /sumup?n=5 should respond with '15'
  // e.g.: GET /sumup should respond with '0'
})

app.get('/multiply/:x/:y', (req, res) => {
  // TODO
  // Responds with the product of x and y
  // e.g.: GET /multiply/5/4 should respond with '20'
})

// don't change below:
export default app
