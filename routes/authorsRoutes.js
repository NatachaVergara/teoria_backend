const express = require('express');
const { allAuthorsController,
    authorByIdController,
    authorDeleteController } = require('../controllers/authorsControllers');
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

//Controlador de la query para eliminar 1 autor
route.delete('/delete/:id', authorDeleteController);

//Las veremos en la próxima clase
route.post('/create', (req, res) => res.send('Creación de un autor'));
route.put('/update/:id',
    (req, res) => res.send(`Actualizacion de un autor con id ${req.params.id}`));
module.exports = route;








