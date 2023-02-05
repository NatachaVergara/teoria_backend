const { createUser, createAdmin, loginUser } = require("../models/usersModel")
const jwt = require('jsonwebtoken');
const { createToken } = require("../utils/createToken");

module.exports.createUserController = async (req, res) =>
{
    const { email, password } = req.body;
    try
    {
        const data = await createUser(email, password);
        return data.created ? res.status(200).send(data) : res.status(200).send(data)
    } catch (error)
    {
        console.log(error)
        return res.status(500).send(error)
    }
}

module.exports.createAdminController = async (req, res) =>
{
    const { email, password } = req.body;
    try
    {
        const data = await createAdmin(email, password);
        return data.created ? res.status(200).send(data) : res.status(200).send(data)
    } catch (error)
    {
        console.log(error)
        return res.status(500).send(error)
    }
}

module.exports.loginUserController = async (req, res) =>
{
    const { email, password } = req.body;

    try
    {
        const data = await loginUser(email, password);
        return data.isUser ? res.status(200).send({ token: createToken(data), user: data }) : res.status(200).send({ user: data })
    } catch (error)
    {
        console.log(error)
        return res.status(500).send(error)
    }

}
