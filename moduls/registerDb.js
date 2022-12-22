const connect = require('../database/databaseConnect.js');
const bcrypt = require('bcrypt');

module.exports = class Register{
    constructor(token,fullName,email,password) {
        this.token = token;
        this.fullName = fullName;
        this.email = email;
        this.password = password
    }

    register(){
        let hash = bcrypt.hashSync(this.password,10)
        let regArr = [this.token, this.fullName, this.email, hash];
        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO users(token,fullName,email,password) VALUES (?,?,?,?)';
            connect.query(sql,regArr)
                .then(result => {
                    resolve(result[0].insertId)
                })
                .catch(err => {
                    reject(false)
                })
        })
    }
}