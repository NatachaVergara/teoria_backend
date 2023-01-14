const expres = require('express')
const route = expres.Router()


route.get('/', (req, res)=>{
    res.send('Todos los libros')
}) 

