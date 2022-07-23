class email{
    _email
    constructor(enderecoEmail){
        this._email = enderecoEmail.toLowerCase();
        
    }

    validaEmail(){
        let teste = this._email.matches(/@/g)

        console.log(teste)
    }
}

module.exports = email