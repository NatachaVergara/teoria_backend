const { allAuthors, authorById, deleteAuthor, createAuthor, updateAuthor } = require('../models/authorsModel');


module.exports.allAuthorsController = async (req, res) => {
    try {
        const data = await allAuthors();
        return res.send(data)
    } catch (error) {
        console.log(error)
        return res.send('Se produjo un error al realizar la request');
    }
}

module.exports.authorByIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await authorById(id)
        return res.send(data)
    } catch (error) {
        console.log(error)
        return res.send('Se produjo un error al realizar la request');
    }
}


module.exports.authorCreateController = async (req, res) => {
    const { name, lastName, alive } = req.body;
    //Le envio a mi modelo los datos del body
    try {
        const data = await createAuthor(name, lastName, alive)
        return data.created ?
            res.send(data) : res.send(data)
    } catch (error) {
        return res.send('Se produjo un error al realizar la request');
    }
};


module.exports.authorUpdateController = async (req, res) => {
    const { id } = req.params;
    const { name, lastName, alive } = req.body;
    //Le envio a mi modelo los datos del body y de params
    try {
        const data = await updateAuthor(id, name, lastName, alive)
        return data.updated ? res.send(data) : res.send(data)

    } catch (error) {
        console.log(error)
        return res.send('Se produjo un error al realizar la request');
    }
};












module.exports.authorDeleteController = async (req, res) => {
    //console.log(`MODELO ${id}`)
    const { id } = req.params
    try {
        const data = await deleteAuthor(id)
        return data.deleted ? res.send(data) : res.send(data)
    } catch (error) {
        console.log(error)
        return res.send('Se produjo un error al realizar la request');
    }
}


