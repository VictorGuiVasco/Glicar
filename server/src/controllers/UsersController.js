const db = require('../database/connection')
const ValidaEmail = require('../utils/emailValidation')

module.exports = {
  async index(req, resp) {

  },

  async create(req, resp) {
    const {
      name,
      email,
      password,
      dtnasc,
      sexo,
      altura,
      peso
    } = req.body

    try {
      //validação de email
      if (!ValidaEmail(email))
        return resp.status(401).json({ error: 'Informe um email valido' });

      //Validar se o email ja esta cadastrado
      const users = await db('users').select('email').where('email', email)
      if (users.length >= 1)
        return resp.status(401).json({ error: 'Informe um email não cadastrado' });

      const imc = (peso / (altura * altura))

      await db('users').insert({
        name,
        email,
        password,
        dtnasc,
        sexo,
        altura,
        peso,
        imc
      })

      return resp.status(201).send();
    } catch (err) {
      await db.rollback()

      return resp.status(400).json({ error: 'Unexpected error while creating new class.' });
    }

  }
}