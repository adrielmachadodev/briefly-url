const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    username:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    }
})

module.exports = mongoose.model('User', userSchema)