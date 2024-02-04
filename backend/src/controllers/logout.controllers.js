const logout = (req, res) => {

    res.clearCookie('token');
    return res.sendStatus(200)
    
}

module.exports = logout