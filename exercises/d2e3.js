import express from 'express'

const app = express()
app.use(express.json())

const alarms = [
  {
    time: '08:30',
    message: 'Wake up!'
  },
  {
    time: '17:00',
    message: 'Go home!'
  }
]
// don't change above

app.get('/alarms', (req, res) => {
  // TODO
  // Sends back all the alarms as a JSON response
})

app.get('/alarms/:index', (req, res) => {
  // TODO
  // Sends back the alarm with the given index as a JSON response
})

app.post('/alarms', (req, res) => {
  // TODO
  // Adds a new alarm to the list
  // The new alarm will be sent in the request body as a JSON object
  // Remember to set the appropriate status code
})

// don't change below
export default app
