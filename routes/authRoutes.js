
//the npm module.. not the local passport file.  
const passport = require('passport');

module.exports = (app) => {
    //Auth request to google
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
    );

    //Route for callback, Google response (with Code ID as guid )
    //redirect to /surveys after g authing.  
    app.get('/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
        res.redirect('/surveys');
    }    
    );

    //Route to logout the user 
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    //Test Route, to verify User auth'd and returned.  
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

};
