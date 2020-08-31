const express = require('express')

const UsersControllers = require('./controllers/UsersController')

const routes = express.Router();

routes.get('/users', UsersControllers.index)
routes.post('/users', UsersControllers.aa)

module.exports = routes