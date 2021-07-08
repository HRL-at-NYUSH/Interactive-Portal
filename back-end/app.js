// import and instantiate express
const express = require('express') // CommonJS import style!
const app = express() // instantiate an Express object
const axios = require('axios') //library to handle API calls
require('dotenv').config() //dotenv setup for authentication
const mongoose = require('mongoose') //library for connecting to mongodb
const bodyParser = require('body-parser') //middleware
//home route
app.get('/', (req, res) => {
  res.send('HRL page!')
})

//Database connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to MongoDB database...'))

app.use(express.json())
const mockDataRouter = require('./routes/mockdata')
app.use('/mockdata', mockDataRouter)
//route displaying script API
app.get('/example-api', (req, res, next) => {
  axios
    .get(`https://script.google.com/macros/s/${process.env.SCRIPT_API_ID}/exec`)
    .then((response) => {
      res.json(response.data)
    })
    .catch((err) => {
      next(err)
    })
})

//route displaying sample html page
app.get('/search-page', (req, res) => {
  res.sendFile('/public/index.html', { root: __dirname })
})

app.use
app.listen(4000, console.log('Express app listening on port 4000'))
