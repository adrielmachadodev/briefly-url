const Lugares = require('../models/Lugares.js');

const getLugares = async (req, res) => {
    try {
        const lugares = await Lugares.find();
        return res.json(lugares);
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: 'Error. Try again' });
    }
};

module.exports = {
    getLugares
}