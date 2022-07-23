class dashboard{

    constructor(req, res, next) {
        console.log('chegou na controller dashboard')
        console.log(req.body)

    }
}


module.exports = dashboard