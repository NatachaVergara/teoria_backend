const express = require('express');
const app = express();
const cors = require('cors');

//Puerto con variable de entorno
const PORT = process.env.PORT || 3001;


//Controladores
const authorsRoute = require('./routes/authorsRoutes');

app.use(express.json());
app.use(cors());
app.use('/', express.static(__dirname + '/public'));
app.use('/authors', authorsRoute);

app.listen(PORT, () => console.log('Servidor levandado en el PORT: ', PORT));

