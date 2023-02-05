const { allAuthors, authorById, deleteAuthor, createAuthor, updateAuthor } = require('../models/authorsModel');
const jwt = require('jsonwebtoken');


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
    const { id } = req.params;
    try
    {
        const data = await authorById(id)
        jwt.verify(req.token, '65465465654654', (error, data) =>
        {
            if (error) return res.status(403);
            console.log(data)
            let type = data.query.type
            if (type !== "ADMIN") return res.status(403).send('Usuario no autorizado')
        })
        return res.send(data)
    } catch (error)
    {
        console.log(error)
        return res.send('Se produjo un error al realizar la request');
    }
}

module.exports.authorCreateController = async (req, res) =>
{
    jwt.verify(req.token, '65465465654654', (error, data) =>
    {
        if (error) return res.status(403);
        // console.log(data)
        let type = data.query.type
        if (type !== "ADMIN") return res.status(403).send('Usuario no autorizado')
    })


    const { name, lastName, alive } = req.body;
    //Le envio a mi modelo los datos del body
    try
    {
        const data = await createAuthor(name, lastName, alive)
        return data.created ?
            res.status(201).send(data) : res.send(data)
    } catch (error)
    {
        return res.send('Se produjo un error al realizar la request');
    }
};




module.exports.authorUpdateController = async (req, res) =>
{
    jwt.verify(req.token, '65465465654654', (error, data) =>
    {
        if (error) return res.status(403);
        // console.log(data)
        let type = data.query.type
        if (type !== "ADMIN") return res.status(403).send('Usuario no autorizado')
    })

    const { id } = req.params;
    const { name, lastName, alive } = req.body;
    //Le envio a mi modelo los datos del body y de params
    try
    {
        const data = await updateAuthor(id, name, lastName, alive)
        return data.updated ? res.send(data) : res.send(data)
    } catch (error)
    {
        console.log(error)
        return res.send('Se produjo un error al realizar la request');
    }
};


module.exports.authorDeleteController = async (req, res) =>
{
    jwt.verify(req.token, '65465465654654', (error, data) =>
    {
        if (error) return res.status(403);
        // console.log(data)
        let type = data.query.type
        if (type !== "ADMIN") return res.status(403).send('Usuario no autorizado')
    })

    const { id } = req.params
    try
    {
        const data = await deleteAuthor(id)
        return data.deleted ? res.send(data) : res.send(data)
    } catch (error)
    {
        console.log(error)
        return res.send('Se produjo un error al realizar la request');
    }
}


