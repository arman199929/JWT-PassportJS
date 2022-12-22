const jwt = require('jsonwebtoken');
const path = require('path');
const regPath = ('./views/register.html');
const Register = require('../moduls/registerDb.js');


exports.getRegister = (req,res) => {
    res.sendFile(path.resolve(regPath))
}

exports.doRegister = (req,res) => {
    let user = req.body
    jwt.sign({user}, process.env.USER_SECRET, {expiresIn: '1d'}, (err, token) => {
        let authUser = new Register(token,user.fullName,user.email,user.password);

        authUser.register()
           .then(result => {
               if (result) return res.redirect('/login')
           })
            .catch(err => {
                console.log(err)
            })
    })

}