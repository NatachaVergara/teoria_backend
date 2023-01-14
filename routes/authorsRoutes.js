const express = require('express')
const route = express.Router()

route.use((req,res,next)=>{
    const {host} = req.headers;
    res.host = host;
    next()
})


route.get('/', (req, res) => res.send('Obtención de autores'));
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
    (req, res) => res.send(`Obtención de un autor con id ${req.params.id} para el host ${res.host}`)
);

route.post('/create', (req, res) => res.send('Creación de un autor'));
route.post('/create/:id', (req, res) => res.send(`Creación de un autor con id ${req.params.id}`));

route.put('/update', (req, res) => res.send('Actualización de un autor'));
route.put('/update/:id', (req, res) => res.send(`Actualizacion de un autor con id ${req.params.id}`));

route.delete('/delete', (req, res) => res.send('Eliminación de un autor'));
route.delete('/delete/:id', (req, res) => res.send(`Eliminación de un autor con id ${req.params.id}`));

module.exports = route;