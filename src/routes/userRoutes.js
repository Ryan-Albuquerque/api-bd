const express = require('express');

const userController = require('../controllers/userController.js');
const userValidator = require('../middlewares/validators/userValidator.js');

const routes = express.Router();

routes.get('/users', userController.list);
routes.get('/user/:id', userValidator.get, userController.get);
routes.post('/user', userValidator.create, userController.create);
routes.patch('/user/:id', userValidator.update, userController.update);
routes.delete('/user/:id', userValidator.delete, userController.delete);

module.exports = routes;