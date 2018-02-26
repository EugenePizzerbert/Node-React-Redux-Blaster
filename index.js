
const express = require('express');

const app = express(); //we call express() like a function as we might have multiple express servers in our application. 

//a route handler
app.get('/', (req, res) => {
    //response as JSON
    res.send({ bye: 'buddy' });
});

//Dynamical assign port Heroku. If runtime env config var not avail, use 5000 for local dev.  
const PORT = process.env.PORT || 5000;
//what port to listen at
app.listen(PORT);
//go to term >> node index.js
//then nav to localhost:5000