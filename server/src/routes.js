const express = require('express')

const UsersControllers = require('./controllers/UsersController')
const SignUpControllers = require('./controllers/SignUpController')
const RequestPasswordControllers = require('./controllers/RequestPasswordController')

const routes = express.Router();

routes.get('/users', UsersControllers.index)
routes.post('/users', UsersControllers.create)

routes.post('/logon', SignUpControllers.create)

routes.post('/password', RequestPasswordControllers.create)

module.exports = routes