const express = require('express');
const { allAuthorsController,
    authorByIdController,
    authorDeleteController,
    authorCreateController, 
    authorUpdateController} = require('../controllers/authorsControllers');
const route = express.Router()

//Controlador de la query de todos los autores
route.get('/', allAuthorsController);

//Controlador de la query de 1 autor con middleware
route.get('/:id',
    (req, res, next) => {
        const { id } = req.params;
        const numId = Number(id);

        if (isNaN(numId) || numId < 1) {
            return res.send('El id es inválido');
        } else {
            next();
        }
    },
    authorByIdController
);

//conexión con el Controlador para crear 1 autor
route.post('/create', authorCreateController);
//conexión con el Controlador de update de 1 autor
route.put('/update/:id', authorUpdateController);
//conexión con el Controlador de la query para eliminar 1 autor
route.delete('/delete/:id', authorDeleteController);












module.exports = route;












