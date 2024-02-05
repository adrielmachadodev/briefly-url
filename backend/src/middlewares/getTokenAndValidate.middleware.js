const jwt = require('jsonwebtoken')

const { TOKEN_SECRET } = require('../config.js')

const getTokenFrom = request => {

    const authorization = request.get('authorization')
    
    if(authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

const validateToken = (req, res, next) => {

    const token = getTokenFrom(req)
    if(!token) return res.status(401).json({message:'Token missing or invalid'})

    jwt.verify(token, TOKEN_SECRET, (error, user) => {
        if(error) return res.status(401).json({message:'Unauthorized'})
        req.user = user
        next()
    })
}

module.exports = validateToken