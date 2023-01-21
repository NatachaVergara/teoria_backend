const { createUser } = require("../models/usersModel")

module.exports.createUserController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const data = await createUser(email, password);
        return data.created ? res.status(200).send(data) : res.status(200).send(data)
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}

module.exports.createAdminController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const data = await createUser(email, password);
        return data.created ? res.status(200).send(data) : res.status(200).send(data)
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}