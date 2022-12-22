const connect = require('../database/databaseConnect.js');
const bcrypt = require('bcrypt');

module.exports = class Login {
    static login(email, password) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT id,token,fullName,email,password FROM users WHERE email=?';
            connect.query(sql, [email])
                .then(result => {
                    let id = result[0][0].id, pass = result[0][0].password;

                    if (id > 0) {
                        if (!bcrypt.compareSync(password, pass)) {
                            reject(false)
                            throw resolve(id)
                        }
                        resolve(result[0][0])
                    }
                })
                .catch(err => {
                    if (err) return reject(undefined)
                })
        })
    }

    static getUser() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM users';
            connect.query(sql)
                .then(result => {
                    resolve(result[0][0])
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}