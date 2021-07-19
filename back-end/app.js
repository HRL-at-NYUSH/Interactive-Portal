// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const bodyParser = require("body-parser");
const axios = require("axios") //library to handle API calls
const cors = require('cors');
const passport = require('passport');
const cookiesession = require('cookie-session');
const { OAuth2Client } = require('google-auth-library') // auth library on backend to verify google users
const client = new OAuth2Client(process.env.CLIENT_ID)

app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use(passport.session())
app.use(cors())
app.use(cookiesession({
    name: 'session',
    keys: ['key1', 'key2']
}))
app.options('*', cors())
require('dotenv').config(); //dotenv setup for authentication
require('./passport-setup');

// route for HTTP GET requests to the root document
app.get("/", (req, res) => {
  res.send("<a href='/google'>Auth with Google</a>")
})

// app.get('/example-api', (req, res, next) => {
//     axios.get(`https://script.google.com/macros/s/${process.env.SCRIPT_API_ID}/exec`)
//         .then( (response) => {
//             res.json(response.data)
//         })
//         .catch( (err) => {
//             next(err)
//         })
// });

app.get("/search-page", (req, res) => {
  res.sendFile("/public/index.html", { root: __dirname })
})

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get('/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    res.redirect('/good');
});

app.get('/failed', (req, res) => {res.send("Login Failed")});

app.get('/good', (req, res) => {res.send(`Login Successful, Welcome ${req.user.displayName}`)});

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

app.post("/api/v1/auth/google", async (req, res, next) => {
    // axios.post('/api/v1/auth/google', {})
    try {
        const { token }  = req.body;
        console.log(token);
        console.log(client)
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: '838596502010-0p0p11r3amea5qojgot7j52n2pb4saf7.apps.googleusercontent.com'
        });
        console.log(ticket);
        const { name, email, picture } = ticket.getPayload();  
        console.log(name, email, picture)
        // upload user information to database  
        const user = await db.user.upsert({ 
            where: { email: email },
            update: { name, picture },
            create: { name, email, picture }
        })
        res.status(201)
        res.json(user)
    } catch (err) {
        next(err);
    }
})

module.exports = app
