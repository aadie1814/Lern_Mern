const express = require('express')
const services = require('../controllers/service-controllers')
const router = express.Router()

router.get('/service', services)

module.exports = router