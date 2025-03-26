const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const uuid = require('uuid');
const Login = require('../model/Login.model');
const {newToken} = require('../controller/Login.controller')
passport.use(new GoogleStrategy({
    clientID:     "900521022285-6oldpgqj0u9a23oogbv7geigb691dh7j.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:2345/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {
    const email = profile?._json?.email
    let user;
    try{
        user = await Login.findOne({email}).lean().exec();
        if(!user){
            user = await Login.create({
                email: email,
                password: uuid()
            })
        }
        const token = newToken(user);
        return done(null, {user, token});
    }
    catch(err){
        console.log("err ",err);
        
    }
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
  }
));

module.exports = passport;