const { Router } = require('express')

// * Controllers
const {
    createUrl,
    deleteUrl,
    saveUrl,
    getUrl,
    editUrl
} = require('../controllers/urls.controllers')

// * Middlewares
const isLogged = require('../middlewares/isLogged.middleware')
const getTokenAndValidate = require('../middlewares/getTokenAndValidate.middleware')

const router = Router()

router.post('/urls', isLogged, createUrl)
router.get('/urls', getTokenAndValidate, getUrl)
router.delete('/urls/:id', getTokenAndValidate, deleteUrl)
router.put('/urls/:id', getTokenAndValidate, saveUrl)
router.patch('/urls/:id', getTokenAndValidate, editUrl)


module.exports = router