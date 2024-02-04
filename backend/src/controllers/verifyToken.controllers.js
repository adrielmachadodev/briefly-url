const jwt = require('jsonwebtoken')

const { TOKEN_SECRET } = require('../config')

const User = require('../models/user.model')

const verifyToken = (req, res, next) => {

    const { token } = req.cookies

    if(!token) return res.status(401).json({message:'Unauthorized'})

    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
        if(error) return res.status(401).json({message:'Unauthorized'})
        const userFound = await User.findById(user.id)
        if(!userFound) return res.status(401).json({message:'Unauthorized'})

        return res.json({
            id:userFound._id, 
            email:userFound, 
            username:userFound.username
        })
    })
}

module.exports = verifyToken