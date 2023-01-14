const express = require('express');
const app = express();
const PORT = 3001;

const authorsRoute = require('./routes/authorsRoutes');

app.use('/static', express.static(__dirname + '/public'));
app.get('/', (req, res) => res.send('Hola mundo'));
app.use('/authors', authorsRoute);

app.listen(PORT, () => console.log('Servidor levandado en el PORT: ', PORT));

