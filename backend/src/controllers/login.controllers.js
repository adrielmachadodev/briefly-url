const User = require('../models/user.model.js')
const bcryptjs = require('bcryptjs')
const createAccessToken = require('../libs/jwt.js')

const login = async (req, res) => {

    const { email, password } = req.body

    if(!email || !password) return res.status(400).json({message:'Invalid credentials'})
    if(!/^[a-zA-Z0-9._-]{3,35}@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}$/.test(email)) return res.status(400).json({message:'Invalid credentials'})
    if(!(17 > password.length && password.length > 5)) return res.status(400).json({message:'Invalid credentials'})
    if(!/[\d]/.test(password)) return res.status(400).json({message:'Invalid credentials'})

    try {
        
        const userFound = await User.findOne({email})
        
        if(!userFound) return res.status(400).json({message:'User not Found'})
        
        const match = await bcryptjs.compare(password, userFound.password)
        
        if(!match) return res.status(400).json({message:'Invalid credentials'})

        // Crear token y setearlo en la cookie
        const token = await createAccessToken({id: userFound._id})
        res.cookie("token", token, {
            secure: true,
            sameSite: 'Lax',
            maxAge: 30 * 24 * 60 * 60 * 1000, // convert seconds to milliseconds
          });

        res.json({
            id:userFound._id,
            email:userFound.email,
            username:userFound.username
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error, inténtalo denuevo.'})
    }
}

module.exports = login