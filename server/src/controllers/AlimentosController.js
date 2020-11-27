const db = require('../database/connection')

module.exports = {
  async index(req, resp) {

  },

  async create(req, resp) {
    const {
      nome,
      calorias,
      proteinas,
      cho
    } = req.body

    try {
      await db('alimentos').insert({
        nome,
        calorias,
        proteinas,
        cho
      })

      return resp.status(201).send();
    } catch (err) {
      console.log(err)
      await db.rollback()

      return resp.status(400).json({ error: 'Unexpected error while creating new class.' });
    }
  }
}