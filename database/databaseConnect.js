const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'localusers',
    password:'Root10000'
}).promise();

module.exports = connection;