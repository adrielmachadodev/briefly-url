const Url = require('../models/url.model')

const { FRONTEND_URL } = require('../config')

const redirectUrl = async (req, res) => {
    const { url } = req.params
    
    const findUrl = await Url.findOne({shortUrl:url})

    if(findUrl) return res.redirect(findUrl.originUrl)
    else return res.redirect(FRONTEND_URL)
}

module.exports = redirectUrl