var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
require('dotenv').config({ silent: true }) //dotenv setup for authentication
const mongoose = require('mongoose') //library for connecting to mongodb
const User = require('../models/UserG')
// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
module.exports = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:4000/google/callback',
      },
      async function (request, accessToken, refreshToken, profile, done) {
        try {
          const user = await User.findOne({ googleId: profile.id })
          //Check if email is already registered
          if (user) {
            return done(null, user)
          } else {
            const newUser = new User({
              google_id: profile.id,
              displayName: profile.displayName,
              firstName: profile.name['givenName'],
              lastName: profile.name['familyName'],
              img: profile.photos[0]['value'],
            })
            console.log(newUser)
            //Save user object to the database
            await newUser.save()
            return done(null, newUser)
          }
        } catch (err) {}
      },
    ),
  )

  passport.serializeUser(function (user, done) {
    console.log('serialized', user)
    done(null, user)
  })

  passport.deserializeUser(function (user, done) {
    User.findById(googleId, function (err, user) {
      console.log('deserialized', googleId)
      done(err, user)
    })
  })
}
