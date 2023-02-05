const { allAuthors, authorById, deleteAuthor, createAuthor, updateAuthor } = require('../models/authorsModel');
const jwt = require('jsonwebtoken');
const { verifyToken } = require('../utils/verifyToken');


module.exports.allAuthorsController = async (req, res) =>
{
    try
    {
        const data = await allAuthors();
        return res.send(data)
    } catch (error)
    {
        console.log(error)
        return res.send('Se produjo un error al realizar la request');
    }
}

module.exports.authorByIdController = async (req, res) =>
{
    verifyToken(req.token)
    const { id } = req.params;
    try
    {
        const data = await authorById(id)
        return res.send(data)
    } catch (error)
    {
        console.log(error)
        return res.send('Se produjo un error al realizar la request');
    }
}

module.exports.authorCreateController = async (req, res) =>
{
    //utilizo la función que compara el token
    verifyToken(req.token, res)

    const { name, lastName, alive } = req.body;
    try
    {
        const data = await createAuthor(name, lastName, alive)
        return data.created ?
            res.status(201).send(data) : res.status(201).send(data)
    } catch (error)
    {
        return res.send('Se produjo un error al realizar la request');
    }
};




module.exports.authorUpdateController = async (req, res) =>
{
    verifyToken(req.token, res)
    const { id } = req.params;
    const { name, lastName, alive } = req.body;
    //Le envio a mi modelo los datos del body y de params
    try
    {
        const data = await updateAuthor(id, name, lastName, alive)
        return data.updated ? res.status(201).send(data) : res.status(201).send(data)
    } catch (error)
    {
        console.log(error)
        return res.send('Se produjo un error al realizar la request');
    }
};


module.exports.authorDeleteController = async (req, res) =>
{
    verifyToken(req.token, res)
    const { id } = req.params
    try
    {
        const data = await deleteAuthor(id)
        return data.deleted ? res.status(201).send(data) : res.status(201).send(data)
    } catch (error)
    {
        console.log(error)
        return res.send('Se produjo un error al realizar la request');
    }
}


