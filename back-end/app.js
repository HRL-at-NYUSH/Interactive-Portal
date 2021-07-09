// import and instantiate express
const express = require('express') // CommonJS import style!
const app = express() // instantiate an Express object
const axios = require('axios') //library to handle API calls
require('dotenv').config() //dotenv setup for authentication
const mongoose = require('mongoose') //library for connecting to mongodb
const bodyParser = require('body-parser') //middleware
//home route
app.get('/', (req, res) => {
  res.send('Welcome to HRL!  ')
})

app.use(express.json())
const mockDataRouter = require('./routes/routeMockdata')
app.use('/routeMockdata', mockDataRouter)

//Database connection
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cc5yp.mongodb.net/development?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('Connected to the MongoDB database'),
)

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
