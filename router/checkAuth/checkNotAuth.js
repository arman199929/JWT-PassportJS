module.exports = function checkNotAuth(req,res,next){
    if(req.isAuthenticated() === true){
        return res.redirect('/')
    }
    next()
}