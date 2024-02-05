const jwt = require('jsonwebtoken')

const { TOKEN_SECRET } = require('../config.js')

const getTokenFrom = request => {

    const authorization = request.get('authorization')
    if(authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

const isLogged = (req, res, next) => {

    const token = getTokenFrom(req)

    if(!token) return next()

    jwt.verify(token, TOKEN_SECRET, (error, user) => {
        if(error) return next()
        req.user = user
        next()
    })
}

module.exports = isLogged;