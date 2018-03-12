
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);


const app = express(); //we call express() like a function as we might have multiple express servers in our application. 
//Export Function succinct

//set cookie session, max expiry age and encryted key
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
//tell passport we using cookies.
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);

//Dynamical assign port Heroku. If runtime env config var not avail, use 5000 for local dev.  
const PORT = process.env.PORT || 5000;
//what port to listen at
app.listen(PORT);
//go to term >> node index.js
//then nav to localhost:5000
