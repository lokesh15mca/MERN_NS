const passport = require('../config/Passport');

const express = require('express');
const route = express.Router();
// const app = express();
// app.use(passport.initialize());
passport.serializeUser(function({user, token}, done) {
    done(null, {user, token}); 
  });
  passport.deserializeUser(function({user, token}, done) {
    done(err, {user, token});
  });

  route.get("/auth/google/failure", function(req, res){
    return res.send("somthing went wrong")
  })

  route.get('/auth/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
    ));

    route.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/auth/google/failure'
}),

function(req, res){
    const {user, token} = req.user;
    return res.status(200).json({user, token})
});


module.exports = route;