import 'dotenv/config'
import app from './app.js'

const PORT = import.meta.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
