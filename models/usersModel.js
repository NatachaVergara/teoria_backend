const { request } = require('../db/request');

module.exports.createUser = async (email, password) => {
    const data = await request(`INSERT INTO users(email, password, type) VALUES("${email}", "${password}", "NOTADMIN")`)

    return data.insertId ? { created: true, msg: 'Usuario creado, ahora puede loguearse' } : { created: false, msg: 'Hubo un problema y no se pudo crear el usuario. Intente mas tarde' }

}

module.exports.createAdmin = async (email, password) => {
    const data = await request(`INSERT INTO users(email, password, type) VALUES("${email}", "${password}", "ADMIN")`)

    return data.insertId ? { created: true, msg: 'Admin creado satisfactoriamente', query: data } : { created: false, msg: 'Hubo un problema y no se pudo crear el usuario. Intente mas tarde', query: data }
}


module.exports.loginUser = async (email, password) => {
    const data = await request(`SELECT * FROM user WHERE email = "${email}"`)

    if (data.length) {
        return { isUser: true, query: data[0], msg: 'Bienvenido/a' }
    } else {
        return { isUser: false, msg: 'Email y/o contraseña equivocada. ¿Ya tiene cuenta?' }
    }

}