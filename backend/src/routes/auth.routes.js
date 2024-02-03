const { Router } = require('express')

const verifyToken = require('../controllers/verifyToken.controllers.js')
const register = require('../controllers/register.controllers.js')
const login = require('../controllers/login.controllers.js')
const logout = require('../controllers/logout.controllers.js')

const router = Router()

router.get('/verify', verifyToken)
router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

module.exports = router