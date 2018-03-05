
const express = require('express');
require('./services/passport');


const app = express(); //we call express() like a function as we might have multiple express servers in our application. 
//Export Function succinct
require('./routes/authRoutes')(app);

//Dynamical assign port Heroku. If runtime env config var not avail, use 5000 for local dev.  
const PORT = process.env.PORT || 5000;
//what port to listen at
app.listen(PORT);
//go to term >> node index.js
//then nav to localhost:5000
