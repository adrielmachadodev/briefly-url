const { Router } = require('express')

const register = require('../controllers/register.controllers.js')
const login = require('../controllers/login.controllers.js')

const router = Router()

router.post('/register', register)
router.post('/login', login)

module.exports = router