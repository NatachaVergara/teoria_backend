const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan')
//Puerto con variable de entorno
const PORT = process.env.PORT || 3001;


//rutas
const authorsRoute = require('./routes/authorsRoutes');
const usersRoute = require('./routes/usersRoutes');
const emailRoute = require('./routes/emailRoutes');

app.use(express.json());
app.use(cors());
app.use(logger('dev'))
/*Ruta pública*/
app.use('/', express.static(__dirname + '/public'));
app.use('/authors', authorsRoute);
app.use('/users', usersRoute);
app.use('/email', emailRoute);

app.listen(PORT, () => console.log('Servidor levandado en el PORT: ', PORT));

