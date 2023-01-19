const mysql = require('mysql');

module.exports.request = (query) => new Promise((res, rej) => {
    const connection = mysql.createConnection({
        host: 'mysql-websitebackend.alwaysdata.net',
        port: 3306,
        user: '296653_backenddb',
        password: 'Elisabet1986!',
        database: 'websitebackend_db'
    });

    connection.query(query, (error, data, fields) => {
        if (error) rej(error)

        connection.end((err) => {
            if (err) rej(err)
            res(data)
        })

    });


})