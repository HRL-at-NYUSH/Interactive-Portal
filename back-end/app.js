// import and instantiate express
const express = require('express') // CommonJS import style!
const app = express() // instantiate an Express object
const axios = require('axios') //library to handle API calls
const mongoose = require('mongoose') //library for connecting to mongodb
const cors = require('cors') //library for connecting frontend to backend
const passport = require('passport') //Auth library
const session = require('express-session')
const { ensureAuth } = require('./middleware/auth')

app.use(passport.initialize())
app.use(passport.session())
const { OAuth2Client } = require('google-auth-library') // auth library on backend to verify google users
const client = new OAuth2Client(process.env.CLIENT_ID)
require('./passport/passport-setup')(passport)
require('dotenv').config({ silent: true }) //dotenv setup for authentication

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const MongoDbStore = require('connect-mongo')

app.use(passport.initialize())
app.use(passport.session())
app.use(cors())
app.use(
  session({
    secret: 'cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
    store: MongoDbStore.create({
      mongoUrl: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cc5yp.mongodb.net/mockdata?retryWrites=true&w=majority`,
    }),
  }),
)
app.options('*', cors())

//Mock data routes
const mockDataRouter = require('./routes/routeMockdata')
app.use('/routeMockdata', mockDataRouter)

//User routes
const userRouter = require('./routes/routeUsers')
// const { session } = require("passport");
app.use('/routeUsers', userRouter)

//Database connection

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.cc5yp.mongodb.net/mockdata?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log('Connected to the MongoDB database'),
)

app.get('/', (req, res, next) => {
  res.send('home')
})

app.get('/profile', ensureAuth, (req, res, next) => {
  res.send('home')
})
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

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  }),
)

app.get('/profile', ensureAuth, (req, res, next) => {
  res.send('login')
})

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected to the failed page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the good page.
app.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failed',
  }),
  function (req, res) {
    res.redirect('http://localhost:3000/profile')
  },
)

// middle function to check if logged in
function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401)
}

// case of failure
app.get('/failed', (req, res) => {
  res.send('Login Failed')
})

// logout route
app.get('/logout', (req, res, next) => {
  req.logout()
  res.redirect('/')
})
/*
app.use((req, res, next) => {
  if (req.isAuthenticated) {
    console.log('Now we can set global variable')
    res.locals.user = req.user
    next()
  } else {
    console.log('Now we can not set global variable')
    res.locals.user = null
    next()
  }
})
*/
module.exports = app

app.listen(4000, console.log('Express app listening on port 4000'))
