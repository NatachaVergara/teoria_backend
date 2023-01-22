const express = require('express');
const {
    createUserController,
    createAdminController,
    loginUserController } = require('../controllers/usersControllers');
const route = express.Router();


route.post('/register', createUserController);
route.post('/register/admin', createAdminController);
route.post('/login', loginUserController);

module.exports = route