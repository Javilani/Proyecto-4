import Reserva from '../models/model.js';
var ordenes = [];

const crear = async (req, res) => {
    const nuevaReserva = new Reserva(req.body);
    nuevaReserva.id = ordenes.length + 1;
    ordenes.push(nuevaReserva);

    res.status(201).json({
        mensaje: "Reserva creada exitosamente",
        info: nuevaReserva,
    })
};

const leerTodas = async (req,res) => {
    if (ordenes.length > 0) {
        res.json({
            mensaje: "Datos obtenidos con éxito",
            info: ordenes,
        })
    } else {
        res.json({
            mensaje: "No hay ninguna reserva",
        })
    }
};

const actualizar = async (req, res) => {
    const orderId = parseInt(req.params.id);
    const orderIndex = ordenes.findIndex((orders) => orders.id === orderId);

    if (orderIndex === -1) {
        return res.status(404).json({ mensaje: 'Reserva no encontrada.' })
    };

    ordenes[orderIndex] = { ...orders[orderIndex], ...req.body }
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
        return res.status(404).json({ mensaje: 'Reserva no encontrada.' })
    };

    res.json({
        mensaje: 'Reserva obtenida con éxito.',
        data: orden,
    });
};

const filtrar = async (req, res) => {
    const { nombre, nombreHotel, tipoHabitacion, huespedes, checkin, checkout } = req.query

    const filteredOrders = ordenes.filter((orden) => {
        if (nombre && orden.nombre !== nombre) {
            return false
        }
        if (nombreHotel && orden.nombreHotel !== nombreHotel) {
            return false
        }
        if (tipoHabitacion && orden.tipoHabitacion !== tipoHabitacion) {
            return false
        }
        if (huespedes && orden.huespedes !== huespedes) {
            return false
        }
        if (checkin && orden.checkin !== checkin) {
            return false
        }
        if (checkout && orden.checkout !== checkout) {
            return false
        }
        return true
    })

    if (filteredOrders.length === 0) {
        return res.status(404).json({ mensaje: 'Reserva no encontrada.' })
    }

    res.json({
        mensaje: 'Reservas filtradas con éxito.',
        data: filteredOrders,
    })
};


export default {crear, leerTodas, actualizar, eliminar, leerUna, filtrar}