
//the npm module.. not the local passport file.  
const passport = require('passport');

module.exports = (app) => {
    //Auth request to google
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
    );

    //Route for callback, Google response (with Code ID as guid )
    app.get('/auth/google/callback', passport.authenticate('google'));

};
