const { Router } = require('express')

const redirectUrl = require('../controllers/redirecturl.controllers')

const router = Router()

router.get('/:url', redirectUrl)

module.exports = router