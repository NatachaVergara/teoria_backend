const express = require('express');
const app = express();
const PORT = 3001;




//app.use('/', (req, res) => res.send('Hola mundo'));


app.get('/authors', (req, res) => res.send('Obtención de autores'));
app.get('/authors/:id', (req, res) => res.send(`Obtención de un autor con id ${req.params.id}`));

app.post('/authors/create', (req, res) => res.send('Creación de un autor'));
app.post('/authors/create/:id', (req, res) => res.send(`Creación de un autor con id ${req.params.id}`));

app.put('/authors/update', (req, res) => res.send('Actualización de un autor'));
app.put('/authors/update/:id', (req, res) => res.send(`Actualizacion de un autor con id ${req.params.id}`));

app.delete('/authors/delete', (req, res) => res.send('Eliminación de un autor'));
app.delete('/authors/delete/:id', (req, res) => res.send(`Eliminación de un autor con id ${req.params.id}`));




app.listen(PORT, () => console.log('Servidor levandado en el PORT: ', PORT));

