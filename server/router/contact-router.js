const express = require('express')
const contactForm = require('../controllers/contact-controllers')
const router = express.Router()

router.post('/contact',contactForm)

module.exports = router