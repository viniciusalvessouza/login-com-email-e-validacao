const emailClasse= require('../libraries/email')

const generica = require('./generica')

class login extends generica{
    
    /**
     * 
     * @param {json} login paramnetros do login
     */
    constructor(login){
        super()
        let email = login.email
        let senha = login.senha

        

        const emailInstancia = new emailClasse(email)
    }
}

module.exports = login