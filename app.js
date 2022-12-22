const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express();
const Router = require('./router/router.js');

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/',Router)
app.listen(process.env.PORT,() => {
    console.log('Server has started...')
})