// import and instantiate express
const express = require('express') // CommonJS import style!
const app = express() // instantiate an Express object
const axios = require('axios') //library to handle API calls
const mongoose = require('mongoose') //library for connecting to mongodb
const cors = require('cors') //library for connecting frontend to backend
const passport = require('passport') //Auth library
const cookiesession = require('cookie-session') //library for cookies
const session = require('express-session')
const { OAuth2Client } = require('google-auth-library') // auth library on backend to verify google users
const client = new OAuth2Client(process.env.CLIENT_ID)
require('./passport/passport-setup')
require('dotenv').config({ silent: true }) //dotenv setup for authentication

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(session({ secret: 'cats' }))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())
// app.use(
//   cookiesession({
//     name: "session",
//     keys: ["key1", "key2"],
//   })
// );
app.options('*', cors())

//home route
app.get('/', (req, res) => {
  res.send(
    "Welcome to HRL Express app!",
  )
})

app.get('/login', (req, res) => {
  res.send(
    "<div>Welcome to HRL!</div> <a href='/google'>Authenticate Here!</a>",
  )
})

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

// -----ADDITIONAL AUTHENTICATION (TWO METHODS – MOST CURRENT IS ONLY UPDATED WITH PASSPORT)------

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get(
  '/google',
  passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login'],
  }),
)

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected to the failed page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the good page.
app.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/good',
    failureRedirect: '/failed',
  }),
)

// middle function to check if logged in
function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401)
}

// case of failure
app.get('/failed', (req, res) => {
  res.send('Login Failed')
})
// case of success
app.get('/good', isLoggedIn, (req, res) => {
  console.log('THIS IS THE REQ', req.user)
  res.send(`Login Successful, Welcome ${req.user.displayName}`)
})

// logout route
app.get('/logout', (req, res) => {
  req.session = null
  req.logout()
  res.redirect('/')
})

// ADDITIONAL AUTH METHOD OPTION

// app.post("/api/v1/auth/google", async (req, res, next) => {
//     // axios.post('/api/v1/auth/google', {})
//     try {
//         const { token }  = req.body;
//         console.log(token);
//         console.log(client)
//         const ticket = await client.verifyIdToken({
//             idToken: token,
//             audience: '838596502010-0p0p11r3amea5qojgot7j52n2pb4saf7.apps.googleusercontent.com'
//         });
//         console.log(ticket);
//         const { name, email, picture } = ticket.getPayload();
//         console.log(name, email, picture)
//         // upload user information to database
//         const user = await db.user.upsert({
//             where: { email: email },
//             update: { name, picture },
//             create: { name, email, picture }
//         })
//         res.status(201)
//         res.json(user)
//     } catch (err) {
//         next(err);
//     }
// })

module.exports = app

app.listen(4000, console.log('Express app listening on port 4000'))
