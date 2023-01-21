const express = require('express');
const { createUserController, createAdminController } = require('../controllers/usersControllers');
const route = express.Router();


route.post('/register', createUserController);
route.post('/register/admin', createAdminController);


module.exports = route