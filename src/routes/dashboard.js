const express = require('express');
const router =  express.Router();

const loginController = require('../controllers/login')
const dashboardController = require('../controllers/dashboard')

const route = express.Router()

route.post('/dashboard',(req,res,next)=>{
    new dashboardController(req,res,next)
})

module.exports = route