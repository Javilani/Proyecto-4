var ordenes = [];

const crear = async (req, res) => {
    const { nombre, nombreHotel, tipoHabitacion, huespedes, checkin, checkout } = req.body;

    if (!nombre || !nombreHotel || !tipoHabitacion || !huespedes || !checkin || !checkout) {
        return res.status(404).json({ mensaje: 'Faltan datos en la reserva.' })
    }

    const nuevaReserva = {
        id: ordenes.length + 1,
        nombre,
        nombreHotel,
        tipoHabitacion,
        huespedes: parseInt(huespedes, 10),
        checkin,
        checkout,
    };
    ordenes.push(nuevaReserva);

    res.status(201).json({
        mensaje: "Reserva creada exitosamente",
        info: nuevaReserva,
    })
};

const leerTodas = async (req, res) => {
    if (ordenes.length > 0) {
        res.json({
            mensaje: "Datos obtenidos con éxito",
            info: ordenes,
        })
    } else {
        res.json({
            mensaje: "No se ha ingresado ninguna reserva",
        })
    }
};

const actualizar = async (req, res) => {
    const orderId = parseInt(req.params.id);
    const orderIndex = ordenes.findIndex((orders) => orders.id === orderId);

    if (orderIndex === -1) {
        return res.status(404).json({ mensaje: 'Reserva no encontrada.' })
    };

    ordenes[orderIndex] = { ...ordenes[orderIndex], ...req.body }
    res.json({
        mensaje: 'Reserva actualizada con éxito.',
        info: ordenes[orderIndex],
    });
};

const eliminar = async (req, res) => {
    const orderId = parseInt(req.params.id);
    const orderIndex = ordenes.findIndex((orders) => orders.id === orderId);

    if (orderIndex === -1) {
        return res.status(404).json({ mensaje: 'Reserva no encontrada.' })
    };

    ordenes.splice(orderIndex, 1);
    res.json({ mensaje: 'Reserva eliminada con éxito.' });
};

const leerUna = async (req, res) => {
    const orderId = parseInt(req.params.id);
    const orden = ordenes.find((o) => o.id === orderId);

    if (!orden) {
        return res.status(404).json({ mensaje: 'Esa reserva no existe.' })
    };

    res.json({
        mensaje: 'Reserva obtenida con éxito.',
        data: orden,
    });
};

const filtrarOrdenes = async (req, res) => {
    const { nombre, nombreHotel, tipoHabitacion, huespedes, checkin, checkout } = req.query
    let result = ordenes;

    if (nombre) result = result.filter(r => r.nombre == nombre);
    if (nombreHotel) result = result.filter(r => r.nombreHotel == nombreHotel);
    if (tipoHabitacion) result = result.filter(r => r.tipoHabitacion == tipoHabitacion);
    if (huespedes) result = result.filter(r => r.huespedes == parseInt(huespedes));
    if (checkin) result = result.filter(r => r.checkin == checkin);
    if (checkout) result = result.filter(r => r.checkout == checkout);

    if (result.length === 0) {
        return res.status(404).json({ mensaje: 'No se encontró ninguna reserva.' })
    }

    res.json({
        mensaje: 'Reservas filtradas con éxito.',
        data: result,
    })
};

export default { crear, leerTodas, actualizar, eliminar, leerUna, filtrarOrdenes }