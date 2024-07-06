const mongoose = require('mongoose');

const lugaresSchema = mongoose.Schema({
    vehicle: {
        type: String,
        default: null
    },
    horaDeIngreso: {
        type: Number,
        default: null
    },
    indice: {
        type: Number
    }
}, { versionKey: false });

module.exports = mongoose.model('Lugares', lugaresSchema);
