const { request } = require('../db/request');

module.exports.createUser = async (email, password) => {
    const data = await request(`INSERT INTO users(email, password) VALUES("${email}", "${password}", "NOTADMIN")`)

    return data.insertId ? { created: true, msg: 'Usuario creado, ahora puede loguearse' } : { created: false, msg: 'Hubo un problema y no se pudo crear el usuario. Intente mas tarde' }

}

module.exports.createAdmin = async (email, password) => {
    const data = await request(`INSERT INTO users(email,password)VALUES("${email}", "${password}", "ADMIN")`)

    return data.insertId ? { created: true, msg: 'Admin creado satisfactoriamente' } : { created: false, msg: 'Hubo un problema y no se pudo crear el usuario. Intente mas tarde' }

}