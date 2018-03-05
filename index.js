
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express(); //we call express() like a function as we might have multiple express servers in our application. 

passport.use(
        new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        accessToken => {
            console.log(accessToken);
        }
    )
);

//Auth request to google
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
})
);

//Route for callback, Google response (with Code ID as guid )
app.get('/auth/google/callback', passport.authenticate('google'));




//Dynamical assign port Heroku. If runtime env config var not avail, use 5000 for local dev.  
const PORT = process.env.PORT || 5000;
//what port to listen at
app.listen(PORT);
//go to term >> node index.js
//then nav to localhost:5000
