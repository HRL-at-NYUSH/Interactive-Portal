// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const bodyParser = require("body-parser");
const axios = require("axios") //library to handle API calls
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library') // auth library on backend to verify google users
const client = new OAuth2Client(process.env.CLIENT_ID)

// set up body parser and cors for local development
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
require('dotenv').config(); //dotenv setup for authentication

// route for HTTP GET requests to the root document
app.get("/", (req, res) => {
  res.send("Home page!")
})

app.get('/example-api', (req, res, next) => {
    axios.get(`https://script.google.com/macros/s/${process.env.SCRIPT_API_ID}/exec`)
        .then( (response) => {
            res.json(response.data)
        })
        .catch( (err) => {
            next(err)
        })
});

app.get("/search-page", (req, res) => {
  res.sendFile("/public/index.html", { root: __dirname })
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
