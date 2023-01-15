const { allAuthors, authorById, deleteAuthor } = require('../models/authorsModel');


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

module.exports.authorDeleteController = async (req, res) => {
    //console.log(`MODELO ${id}`)
    const { id } = req.params
    try {
        const data = await deleteAuthor(id)
        return data.deleted ? res.send(data.message) : res.send(data.message)
    } catch (error) {
        console.log(error)
        return res.send('Se produjo un error al realizar la request');
    }
}


