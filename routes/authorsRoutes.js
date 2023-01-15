const express = require('express');
const { allAuthors, authorById } = require('../models/authorsModel');
const route = express.Router()


route.get('/', async (req, res) => {
    try {
        const data = await allAuthors()
        return res.send(data)
    } catch (error) {
        console.log(error)
        return res.send('Se produjo un error al realizar la request')
    }
});





//middleware
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
    async (req, res) => {
        const { id } = req.params
        console.log(`Routes ${id}`)
        try {
            const data = await authorById(id)
            return res.send(data)
        } catch (error) {
            console.log(error)
            return res.send('Se produjo un error al realizar la request')
        }
    }
);

route.post('/create', async (req, res) => res.send('Creación de un autor'));

route.post('/create/:id', (req, res) => res.send(`Creación de un autor con id ${req.params.id}`));

route.put('/update', (req, res) => res.send('Actualización de un autor'));
route.put('/update/:id', (req, res) => res.send(`Actualizacion de un autor con id ${req.params.id}`));

route.delete('/delete', (req, res) => res.send('Eliminación de un autor'));
route.delete('/delete/:id', (req, res) => res.send(`Eliminación de un autor con id ${req.params.id}`));

module.exports = route;