const mongoose = require('mongoose');

const historialSchema = mongoose.Schema({
    fecha: {
        type: Number
    },
    vehiculosIngresados: {
        type: [
            {
                horaDeIngreso: { type: String, required: true },
                horaDeEgreso: { type: String, required: true },
                vehiculo: { type: String, required: true },
                totalPagado: { type: Number, required: true }
            }
        ]
    },
    totalAmount: {
        type: Number,
        default: 0
    }
}, { versionKey: false });

module.exports = mongoose.model('Historial', historialSchema);
