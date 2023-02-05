const mysql = require('mysql');
require('dotenv').config()




module.exports.request = (query) => new Promise((res, rej) => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });

    connection.query(query, (error, data, fields) => {
        if (error) rej(error)

        connection.end((err) => {
            if (err) rej(err)
            res(data)
        })

    });
})