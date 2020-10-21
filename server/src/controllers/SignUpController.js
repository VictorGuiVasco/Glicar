const db = require('../database/connection')

module.exports = {
    async create(req, resp) {
        const {
            email,
            senha
        } = req.body

        const userEmail = await db('users').select('email').where('email', email)
        if (!userEmail.length >= 1) {
            console.log('Email não existe')
            return resp.status(401).json({ error: 'Informe um email existente' });
        }
        
        const userPassword = await db('users').select('password').where('email', email)
        const password = userPassword[userPassword.length - 1]
        if(senha == password.password) {
            const user = await db('users').select('*').where('email', email)

            return resp.status(200).json( user[0] )
        } else return resp.status(401).json({ error: 'senha errada' })
        
    },
}