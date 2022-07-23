const generica = require('./generica')


class login extends generica{

    constructor(req,res,next){
        let dados = super('login','login')

        res.send(generica.html)
    }

}

module.exports = login