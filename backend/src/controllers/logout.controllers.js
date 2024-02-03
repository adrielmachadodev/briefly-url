const logout = (req, res) => {

    try {
        res.cookie('token', "", {
            expires: new Date(0)
        })
    
        return res.sendStatus(200)
    } catch (error) {
        console.log(error);
        res.status(400).json({message:'Error, inténtalo denuevo.'})
    }
}

module.exports = logout