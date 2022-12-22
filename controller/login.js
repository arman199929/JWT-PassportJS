const path = require('path');
const logPath = ('./views/login.html');

exports.getLogin = (req,res) => {
    res.sendFile(path.resolve(logPath))
}


