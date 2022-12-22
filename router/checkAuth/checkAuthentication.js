const path = require('path');
const welPath = ('./views/index.html');

module.exports = function checkAuth(req, res, next) {
    if (req.isAuthenticated() === false) {
        return res.redirect('/login')
    }
    res.sendFile(path.resolve(welPath))
}
