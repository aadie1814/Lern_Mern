const express = require('express')
const verifyToken = require('../middlewares/auth-middleware')
const authcontroller = require('./../controllers/auth-controllers')
const router = express.Router()

router.post('/register',(authcontroller.register))
router.post('/login',(authcontroller.login) )
router.get('/user', verifyToken,  authcontroller.getUser)

module.exports =router