const express = require('express');
const regCon = require('../controller/register.js'),
    logCon = require('../controller/login.js');
const mainRouter = express.Router();
require('./passportAuth.js');
const checkAuth = require('./checkAuth/checkAuthentication.js');
const checkNotAuth = require('./checkAuth/checkNotAuth.js');
const passport = require("passport");

mainRouter.post('/register', regCon.doRegister);
mainRouter.post('/login', passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login"
}));

mainRouter.get('/register',checkNotAuth, regCon.getRegister);
mainRouter.get('/login',checkNotAuth, logCon.getLogin);
mainRouter.get('/', checkAuth);
mainRouter.get('/logOut',(req,res,next) => {
    req.logout(null,() => {
        res.redirect('/login');
    })
})


module.exports = mainRouter;