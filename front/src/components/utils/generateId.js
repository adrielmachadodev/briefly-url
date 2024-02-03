import { v4 as uuidv4 } from 'uuid';

function generateShortId() {
    // Generar un UUID único
    const uuidVal = uuidv4();

    // Truncar el UUID a entre 4 y 8 caracteres
    const truncatedId = uuidVal.replace(/-/g, '').slice(0, 8);

    return truncatedId;
}

export default generateShortId;