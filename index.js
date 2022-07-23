require('dotenv').config()

const express = require('express')
const app = express()

const loginController = require('./src/controllers/login')

const loginRouter = require('./src/routes/login')
const loginDashboard = require('./src/routes/dashboard')


app.use(express.static(process.env.PUBLIC))




app.use('/login',loginRouter)
app.use('/dasboard',loginDashboard)




app.listen(8080, function(){
    console.log("servidor rodando na url http://localhost:8080/")

});



