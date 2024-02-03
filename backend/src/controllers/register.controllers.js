const User = require('../models/user.model.js')
const bcryptjs = require('bcryptjs')
const createAccessToken = require('../libs/jwt.js')

const register = async (req, res) => {

    const { email, password, username } = req.body

    if(!email || !password) return res.status(400).json({message:'Invalid credentials'})
    if(!/^[a-zA-Z0-9._-]{3,35}@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}$/.test(email)) return res.status(400).json({message:'Invalid credentials'})
    if(!(17 > password.length && password.length > 5)) return res.status(400).json({message:'Invalid credentials'})
    if(!/[\d]/.test(password)) return res.status(400).json({message:'Invalid credentials'})
    if(!/^[a-zA-Z0-9_]{3,12}$/.test(username)) return res.status(400).json({message:'Invalid credentials'})

    try {

        const passwordHashed = await bcryptjs.hash(password, 10)

        const newUser = new User({email, password:passwordHashed, username})    
        const saveUser = await newUser.save()

        const token = await createAccessToken({id: saveUser._id})

        res.cookie('token', token)

        res.json([{message:'Todo en orden'}])

    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Error, inténtalo denuevo.'})
    }

}

module.exports = register