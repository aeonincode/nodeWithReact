const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// User is model class
const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    // callback function
    (accessToken, refreshToken, profile, done) => {
      // initiate a query or search over all records inside the collection
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // we already have a record with the given profile ID
        } else {
          // we don't have a user record with this ID, make a new record!
          // inside this callback function use model class to create new instance of a user
          // then pass object that contains all the different properties this user will have
          // profile.id is the id coming from users google profile
          // to get model instance to persistence self to the users collection or to persist it self to the MongoDB database we have to call a function on that method called .save(), so when we call save it will automatically take this record it will take that model instance and it will save it to the database
          new User({ googleId: profile.id }).save();
        }
      });

      // console.log('access token', accessToken);
      // console.log('refresh token', refreshToken);
      // console.log('profile', profile);
    }
  )
);
