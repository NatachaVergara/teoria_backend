const { request } = require('../db/request');

const { hashPassword, comparePassword } = require('../utils/password')

module.exports.createUser = async (email, password) => {
    const hashedPassword = hashPassword(password)
    const data = await request(`INSERT INTO users(email, password, type) VALUES("${email}", "${hashedPassword}", "NOTADMIN")`);

    return data.insertId ? { created: true, msg: 'Usuario creado, ahora puede loguearse', query: data } : { created: false, msg: 'Hubo un problema y no se pudo crear el usuario. Intente mas tarde', query: data }

};

module.exports.createAdmin = async (email, password) => {
    const hashedPassword = hashPassword(password)
    const data = await request(`INSERT INTO users(email, password, type) VALUES("${email}", "${hashedPassword}", "ADMIN")`);

    return data.insertId ? { created: true, msg: 'Admin creado satisfactoriamente', query: data } : { created: false, msg: 'Hubo un problema y no se pudo crear el usuario. Intente mas tarde', query: data }
};


module.exports.loginUser = async (email, password) => {
    const data = await request(`SELECT * FROM users WHERE email = "${email}"`);

    if (data.length && comparePassword(password, data[0].password)) {
        delete data[0].password;
        return { isUser: true, query: data[0], msg: 'Bienvenido/a' }
    } else {
        return { isUser: false, msg: 'Email y/o contraseña equivocada. ¿Ya tiene cuenta?' }
    }
};