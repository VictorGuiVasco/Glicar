const db = require('../database/connection')

module.exports = {
  async index(req, resp) {
    let id = 1
    try {
      const data = await db('glicemia').select('glic', 'date', 'hours').where('user_id', id)

      return resp.status(200).json(data)
    }catch (err) {
      return resp.status(401).json({ error: 'Erro ao fazer a requizição' });
    }
  },

  async create(req, resp) { 
    const {
      glic,
      date,
      hours,
      user_id
    } = req.body

    try {
      await db('glicemia').insert({
        glic,
        date,
        hours,
        user_id
      })

      return resp.status(201).send();
    } catch (err) {
      console.log(err)
      await db.rollback()

      return resp.status(400).json({ error: 'Unexpected error while creating new class.' });
    }
  }
}