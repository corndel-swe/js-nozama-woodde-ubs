import express from 'express'

const app = express()
app.use(express.json()) // <-- important!

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
  // TODO 1
  // Sends back all the alarms as a JSON response
})

app.get('/alarms/:index', (req, res) => {
  // TODO 2
  // Sends back the alarm from the alarms array with the given index as a
  // JSON response
})

app.post('/alarms', (req, res) => {
  // TODO 3
  // Adds a new alarm to the list
  // The new alarm will be sent in the request body as a JSON object
  // Push it onto the end of the `alarms` array
  // Remember to set the appropriate status code in your response
})

// don't change below
export default app
