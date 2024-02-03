const mongoose = require('mongoose')

const urlSchema = mongoose.Schema({
    shortUrl:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    originUrl:{
        type:String,
        required:true,
        trim:true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }
}, {timestamps:true})

module.exports = mongoose.model('Url', urlSchema)