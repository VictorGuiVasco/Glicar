const express = require('express')

const UsersControllers = require('./controllers/UsersController')
const SignInControllers = require('./controllers/SignInController')
const GlicemiaControllers = require('./controllers/GlicemiaController')
const AlimentosControllers = require('./controllers/AlimentosController')
const RequestPasswordControllers = require('./controllers/RequestPasswordController')

const routes = express.Router();

routes.get('/users', UsersControllers.index)
routes.post('/users', UsersControllers.create)

routes.get('/glicemia', GlicemiaControllers.index)
routes.post('/glicemia', GlicemiaControllers.create)

routes.post('/alimentos', AlimentosControllers.create)

routes.post('/logon', SignInControllers.create)

routes.post('/password', RequestPasswordControllers.create)

module.exports = routes