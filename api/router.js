const router = require('express').Router()
const card = require('./controller/card.controller')

router.get('/cards', card.list)

module.exports = router