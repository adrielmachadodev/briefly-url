const { Router } = require('express')

// * Controllers
const {
    createUrl,
    deleteUrl,
    saveUrl,
    getUrl,
    editUrl
} = require('../controllers/urls.controllers')

const validateToken = require('../middlewares/validateToken.middleware')
const isLogged = require('../middlewares/isLogged.middleware')

const router = Router()

router.post('/urls', isLogged, createUrl)
router.get('/urls', validateToken, getUrl)
router.delete('/urls/:id', validateToken, deleteUrl)
router.put('/urls/:id', validateToken, saveUrl)
router.patch('/urls/:id', validateToken, editUrl)


module.exports = router