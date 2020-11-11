const db = require('../database/connection')

module.exports = {
  async index(req, resp) {
    let id = 1
    const data = await db('glicemia').select('glic', 'datehours').where('user_id', id)
    console.log(data)
  },

  async create(req, resp) {
    const {
      glic,
      datehours,
      user_id
    } = req.body

    try {
      await db('glicemia').insert({
        glic,
        datehours,
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