const {request} = require('./request');

request(`SELECT * FROM authors`)
.then(data => console.log(data))
.catch(err => console.log(err))