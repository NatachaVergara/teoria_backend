const express = require('express');
const app = express();
const PUERTO = 3001;
app.use('/', (req, res) => res.send('Funcionando'));





app.listen(PUERTO, ()=> console.log('Servidor levandado en el puerto: ', PUERTO));

