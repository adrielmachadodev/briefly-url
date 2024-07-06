const mongoose = require('mongoose');

const estacionamientoStatusSchema = mongoose.Schema({
    status: {
        type: Boolean,
        default: false
    },
    totalAmount: {
        type: Number,
        default: 0
    },
    time: {
        type: Number,
        default: 0
    }
}, { versionKey: false });

module.exports = mongoose.model('Status', estacionamientoStatusSchema);
