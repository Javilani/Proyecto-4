
const {nombre, nombreHotel, tipoHabitacion, huespedes, checkin, checkout} = req.body;

if (!nombre || !nombreHotel || !tipoHabitacion || !huespedes || !checkin || !checkout) {
    return res.status(404).json({ mensaje: 'Faltan datos en la reserva.' })
}

const nuevaReserva = {
    id: ordenes.length + 1,
    nombre,
    nombreHotel,
    tipoHabitacion,
    huespedes,
    checkin,
    checkout, 
};
ordenes.push(nuevaReserva);

res.status(201).json({
    mensaje: "Reserva creada exitosamente",
    info: nuevaReserva,
})