const express = require('express')
const route = express.Router()


route.get('/', (req, res) => res.send('Obtención de autores'));
route.get('/:id', (req, res) => res.send(`Obtención de un autor con id ${req.params.id}`));

route.post('/create', (req, res) => res.send('Creación de un autor'));
route.post('/create/:id', (req, res) => res.send(`Creación de un autor con id ${req.params.id}`));

route.put('/update', (req, res) => res.send('Actualización de un autor'));
route.put('/update/:id', (req, res) => res.send(`Actualizacion de un autor con id ${req.params.id}`));

route.delete('/delete', (req, res) => res.send('Eliminación de un autor'));
route.delete('/delete/:id', (req, res) => res.send(`Eliminación de un autor con id ${req.params.id}`));


module.exports = route;