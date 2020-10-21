const db = require('../database/connection')

module.exports = {
    async create(req, resp) {
        console.log('entrou')

        const {
            email,
        } = req.body

        const userEmail = await db('users').select('email').where('email', email)
        if (!userEmail.length >= 1) {
            console.log('Email não existe')
            return resp.status(401).json({ error: 'Informe um email existente' });
        }
        const password = await db('users').select('password').where('email', email)
        return resp.status(200).json( password )
    },
}
