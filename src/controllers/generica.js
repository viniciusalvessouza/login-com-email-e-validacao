//const model = require('../model/generica')
const fs = require('fs')


class generica {

    constructor(nomeModel,nomeHtml){
        
        const model = require(`../models/${nomeModel}`)
        const  html= fs.readFileSync(`${__dirname}/../views/index.html`) //`${__dirname}/assets/index.html`)
        
        const controlador = {
            model: model,
            html: html.toString()
        }

        return controlador
    }


}

module.exports = generica