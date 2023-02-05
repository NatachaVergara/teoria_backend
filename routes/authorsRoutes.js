const express = require('express');
const jwt = require('jsonwebtoken');
const { allAuthorsController,
    authorByIdController,
    authorDeleteController,
    authorCreateController,
    authorUpdateController } = require('../controllers/authorsControllers');
const route = express.Router()


const aunthenticateToken = (req, res, next) =>
{
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined')
    {
        const bearerToken = bearerHeader.split(' ')[1];
        req.token = bearerToken;
        next()
    } else
    {
        return res.status(403).send('No autorizado');
    }
}




//Controlador de la query de todos los autores
route.get('/', allAuthorsController);

//Controlador de la query de 1 autor con middleware
route.get('/:id', aunthenticateToken, authorByIdController);

//conexión con el Controlador para crear 1 autor
route.post('/create', authorCreateController);
//conexión con el Controlador de update de 1 autor
route.put('/update/:id', authorUpdateController);
//conexión con el Controlador de la query para eliminar 1 autor
route.delete('/delete/:id', authorDeleteController);





module.exports = route;












