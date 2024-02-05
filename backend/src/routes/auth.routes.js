const { Router } = require('express')

const register = require('../controllers/register.controllers.js')
const login = require('../controllers/login.controllers.js')
const logout = require('../controllers/logout.controllers.js')

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

module.exports = router