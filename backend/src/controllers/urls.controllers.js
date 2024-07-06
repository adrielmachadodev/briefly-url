const Url = require('../models/url.model')

const createUrl = async (req, res, next) => {

    // URLS
    const { originUrl, shortUrl } = req.body

    if(!originUrl || !/^https:\/\/.*[\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{3,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(originUrl)) return res.status(404).json({message:'Ingresa una URL original válida.'})
    if(!shortUrl || !/^[a-zA-Z0-9]{3,16}$/.test(shortUrl)) return res.status(404).json({message:'Ingresa una URL customizada válida.'})

    try {

        const shortUrlFound = await Url.findOne({shortUrl})
        if(shortUrlFound) return res.status(400).json({message:'Esa URL customizada ya existe.'})

        const url = new Url({
            shortUrl,
            originUrl
        })
        await url.save();
        res.json(url)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error, inténtalo denuevo.' });
    }
}

const deleteUrl = async (req, res) => {
    const user = req.user
    try {
        const url = await Url.findById(req.params.id);

        if (!url) return res.status(404).json({ message: "url not found" });
        if(!url?.user?._id.equals(user.id)) return res.status(401).json({message:'Unauthorized'})

        await Url.deleteOne(url)
        const newUrls = await Url.find({user:user.id})

        return res.json(newUrls);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error, inténtalo denuevo.' });
      }
}

const saveUrl = async (req, res) => {
    
    const { id } = req.user

    if(!id) return res.status(400).json({message:'Unauthorized'})

    try {
        await Url.findOneAndUpdate({_id:req.params.id}, {user:id})
        res.json({message:'Guardado con éxito'})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error, inténtalo denuevo.'})
    }
}

const getUrl = async (req, res) => {
    try {
        const urlsFound = await Url.find({user:req.user.id}).populate("user")
        res.json(urlsFound)
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error, inténtalo denuevo.'})
    }
}

const editUrl = async (req, res) => {

    const { id } = req.params
    const { newUrl } = req.body

    if(!id || !newUrl) return res.status(400).json({message:'Invalid URL'})

    try {
        const response = await Url.findOneAndUpdate({_id:id}, {originUrl:newUrl}, {new:true})
        res.json({newUrl:response})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error, inténtalo denuevo.'})
    }
}



module.exports = {
    createUrl,
    deleteUrl,
    saveUrl,
    getUrl,
    editUrl
}