const express = require('express');
const router =  express.Router();

const loginController = require('../controllers/login')
const dashboardController = require('../controllers/dashboard')

const route = express.Router()



route.get('/',(req,res,next)=>{
    new loginController(req,res,next)
})


module.exports = route