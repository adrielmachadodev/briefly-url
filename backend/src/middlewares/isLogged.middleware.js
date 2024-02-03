const jwt = require('jsonwebtoken')

const { TOKEN_SECRET } = require('../config.js')

const isLogged = (req, res, next) => {

    const { token } = req.cookies;
    if(!token) return next()

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if(err) {
            return next()
        }
        req.user = user
        next()
    })

}

module.exports = isLogged;