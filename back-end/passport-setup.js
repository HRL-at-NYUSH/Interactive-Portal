var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser(function(user, done) {
  console.log("serialized", user);
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    console.log("serialized", id);
    done(err, user);
  });
});

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: "838596502010-0p0p11r3amea5qojgot7j52n2pb4saf7.apps.googleusercontent.com",
    clientSecret: "BIAryS6XKkEVzhsqLzitJeOD",
    callbackURL: "http://localhost:4000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("this is working", profile);
       User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
));