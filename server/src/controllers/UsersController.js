const db = require('../database/connection')
const ValidaEmail = require('../utils/emailValidation')

module.exports = {
    async index(req, resp) {
        const users = await db('users').where('id', id).select()

        return resp.json(users)
    },

    async aa(req, resp) {
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
            if (!ValidaEmail(email)) {
                console.log('Informe um email existente')
                return resp.status(401).json({ error: 'Informe um email valido' });
            }

            //Validar se o email ja esta cadastrado
            const users = await db('users').select('email').where('email', email)
            if(users.length >= 1){
                console.log('Email ja existe')
                return resp.status(401).json({ error: 'Informe um email que não foi cadastrado' });
            }

            //Validar tamanho da senha
            if (password.length < 6) {
                console.log('Senha muito curta')
                return resp.status(401).json({ error: 'Senha muito curta, use mais de 6 caracteres' });
            }

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
            console.log(err)
            await db.rollback()

            return resp.status(400).json({ error: 'Unexpected error while creating new class.' });
        }

    }
}