const { Router } = require('express')

const router = Router()

router.get('/pruebas', (req, res) => {
    return res.json({message:'Pruebass'})
})

module.exports = router