// import and instantiate express
const express = require('express') // CommonJS import style!
const app = express() // instantiate an Express object
const axios = require('axios') //library to handle API calls
const mongoose = require('mongoose') //library for connecting to mongodb
require('dotenv').config({ silent: true }) //dotenv setup for authentication

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//home route
app.get('/', (req, res) => {
  res.send('Welcome to HRL!  ')
})
//Mock data routes
const mockDataRouter = require('./routes/routeMockdata')
app.use('/routeMockdata', mockDataRouter)

//User routes
const userRouter = require('./routes/routeUsers')
app.use('/routeUsers', userRouter)

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

app.listen(4000, console.log('Express app listening on port 4000'))
