var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
require('dotenv').config({ silent: true }) //dotenv setup for authentication
const mongoose = require('mongoose') //library for connecting to mongodb
const User = require('../models/UserG')

passport.serializeUser(function (user, done) {
  console.log('serialized', user)
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  //   User.findById(id, function (err, user) {
  //     console.log("serialized", id);
  //     done(err, user);
  //   });
  done(null, user)
})

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:4000/google/callback',
    },
    //function (accessToken, refreshToken, profile, done) {
    // console.log('this is working', profile)
    //   console.log(err);
    //return done(null, profile)
    //User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //return done(err, user)
    // })
    async function (accessToken, refreshToken, profile, done) {
      try {
        console.log(profile)
        //Check if email is already registered
        const idExist = await User.findOne({ google_id: profile.id })
        if (idExist) {
          return done(err, profile, {
            message: 'Email is already registered, log in instead',
          })
        } else {
          //Construct a user object
          const user = new User({
            google_id: profile.id,
            displayName: profile.displayName,
            firstName: profile.name['givenName'],
            lastName: profile.name['familyName'],
            img: profile.photos[0]['value'],
          })
          console.log(user)
          //Save user object to the database
          await user.save()
          return done(null, user, { message: 'Successful sign up' })
        }

        //Send the user information to the next middleware

        //Return error message
      } catch (error) {
        return done(null, false, { message: 'Registration Error' })
      }
    },
  ),
)
