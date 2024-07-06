const { Router } = require('express')

const router = Router()

const {
    getLugares
} = require('../controllers/obtenerInfo.controllers.js')

router.get('/lugares', getLugares)

module.exports = router