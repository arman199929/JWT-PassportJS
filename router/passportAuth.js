const passport = require('passport');
const passportLocal = require('passport-local');
const Login = require('../moduls/login.js')


module.exports = passport.use(new passportLocal.Strategy({
    usernameField: "email"
}, async (email, password, done) => {
    Login.login(email, password)
        .then(result => {
            return done(null, result)
        })
        .catch(err => {
            if (err === undefined) {
                done(null, null, {message: "Incorrect email"});
            } else if (err === false) {
                done(null, null, {message: "Incorrect password"})
            }
        })
}));
passport.serializeUser((result, done) => {
    done(null, Login.getUser()
        .then(result => {
            result.id
        }));
});
passport.deserializeUser((id, done) => {
    done(null, Login.getUser()
        .then(result => {
            return result.id === id
        }));
});