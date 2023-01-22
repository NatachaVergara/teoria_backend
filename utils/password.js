const bcrypt = require('bcrypt');

module.exports.hashPassword = (password) => {
    return bcrypt.hashSync(password, 10);
}

module.exports.comparePassword = (passwordToCompare, hashedPassword) => {
    return bcrypt.compareSync(passwordToCompare, hashedPassword)
}