// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const axios = require("axios") //library to handle API calls
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

module.exports = app
