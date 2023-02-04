const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan')
//Puerto con variable de entorno
const PORT = process.env.PORT || 3001;


//Controladores
const authorsRoute = require('./routes/authorsRoutes');
const usersRoute = require('./routes/usersRoutes')

app.use(express.json());
app.use(cors());
app.use(logger('dev'))
app.use('/', express.static(__dirname + '/public'));
app.use('/authors', authorsRoute);
app.use('/users', usersRoute);

app.listen(PORT, () => console.log('Servidor levandado en el PORT: ', PORT));

