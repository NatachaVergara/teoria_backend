const express = require('express');
const { allAuthorsController,
    authorByIdController,
    authorDeleteController,
    authorCreateController,
    authorUpdateController } = require('../controllers/authorsControllers');
const { aunthenticateToken } = require('../middleware/tokenAutentication');
const route = express.Router()


//Controlador de la query de todos los autores no necesita autorizacion de TOKEN
route.get('/', allAuthorsController);

//Controlador de la query de 1 autor con   con middleware de autorización
route.get('/:id', aunthenticateToken, authorByIdController);

//conexión con el Controlador para crear 1 autor con middleware de autorización
route.post('/create', aunthenticateToken, authorCreateController);
//conexión con el Controlador de update de 1 autor con middleware de autorización
route.put('/update/:id',  aunthenticateToken, authorUpdateController);
//conexión con el Controlador de la query para eliminar 1 autor con middleware de autorización
route.delete('/delete/:id', aunthenticateToken, authorDeleteController);

module.exports = route;












