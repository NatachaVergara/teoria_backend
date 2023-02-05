const jwt = require('jsonwebtoken');

module.exports.verifyToken = (token, res) =>{

    jwt.verify(token, '65465465654654', (error, data) =>
    {
        if (error) return res.status(403);
        // console.log(data)
        let type = data.query.type
        if (type !== "ADMIN") return res.status(403).send('Usuario no autorizado')
    })

}
