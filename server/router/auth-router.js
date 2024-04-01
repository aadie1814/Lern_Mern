const express = require('express')
const router = express.Router()
const authconteoller = require('./../controllers/auth-controllers')

router.post('/register',(authconteoller.register))
router.post('/login',(authconteoller.login) )

module.exports =router