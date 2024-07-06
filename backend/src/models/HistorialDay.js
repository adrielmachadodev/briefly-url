const mongoose = require('mongoose');

const historialDaySchema = mongoose.Schema({
    fecha: {
        type: Number,
        default: Date.now
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

module.exports = mongoose.model('HistorialDay', historialDaySchema);
