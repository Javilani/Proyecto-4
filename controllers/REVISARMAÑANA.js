//Patrón Controlador
// Importar librerias a utilizar
const Reservation = require(`../model/modelReserva`);
const dayjs = require(`dayjs`);
const { v4: uuidv4} = require("uuid");
 
// Crearemos un arreglo vacío donde se puedan ir agregando las reservas.
 
//1.- Crear nuevas reservas del hotel.
let reservations = [] ;
 
exports.createReservation = async (req, res) => {
    const {nameHotel, numberGuests, typeRoom, checkIn, checkOut, name, email, paymentStatus } = req.body;
     console.log( `Datos Recibidos:`, req.body);
 
     // Dar formatos a las fechas
 
    const parsedCheckIn = dayjs(checkIn).format(`DD/MM/YYYY`);
    const parsedCheckOut = dayjs(checkOut).format(`DD/MM/YYYY`);
 
     // verificar fechas convertidas
     console.log(`Fecha de llegada:`, parsedCheckIn);
     console.log(`Fecha de salida:`, parsedCheckOut);
     
     // Ocuparemos la libreria uuidv4 para agregar id a las reservas creadas.
 
    const newReservation = new Reservation (
        uuidv4 (),
        nameHotel,
        parsedCheckIn,
        parsedCheckOut,
        numberGuests,
        typeRoom,
        name,
        email,
        paymentStatus
    );
    reservations.push(newReservation);
    console.log(`Reservas:`, reservations);
 
    res.status(201).json({
        msg: `Reserva creada con éxito`,
        data: newReservation,
    });
   
};
 
//2.- Obtener lista de reservas.
 
exports.readAllReservation = async (req, res) => {
    res.json ({
        msg: `Reservas obtenidas con éxito`,
        data: reservations,
    });
};
 
//3.- Obtener información de una reserva en especifico.
exports.readOneReservationById = async (req, res) => {
    const reservationId = req.params.id;
    const reservation = reservations.find(reservation => reservation.id === reservationId);
   
    if (!reservation) {
        return res.status(404).json({msg: `Reserva no encontrada`})
    }
 
    res.json({
        msg: `Reserva obtenida con éxito.`,
        data: reservation,
    });
};
 
//4.- Actualización de información de una reserva.
 
exports.updateReservation = async (req, res) => {
    const reservationId = req.params.id;
    const reservationIndex = reservations.findIndex(reservation => reservation.id === reservationId);
 
    if (reservationIndex === -1){
        return res.status(404).json({msg: `Reserva no encontrada`});
    }
 
    // spread operator (operador de propagación)
 
    reservations[reservationIndex] = { ...reservations[reservationIndex], ...req.body}
 
    return res.json({
        msg: `Reserva modificada con éxito.`,
        data: reservations[reservationIndex],
    })
 
};
 
//5.- Eliminar una reserva del hotel
 
exports.deleteReservation = async (req, res) => {
    const reservationId = req.params.id;
    const reservationIndex = reservations.findIndex(reservation => reservation.id === reservationId);
 
    if(reservationIndex === -1) {
        return res.status(404).json({msg: `Reserva no encontrada`});
    }
 
    reservations.splice(reservationIndex, 1)
    res.json({ msg: `Reserva eliminada con éxito.`})
 
 
};
 
//6.- Realizar busqueda de reservas por filtros.
 
const filtrar = async (req, res) => {
    const {nombre, nombreHotel, tipoHabitacion, huespedes, checkout, checkin } = req.query

    const filteredRerservations = ordenes.filter((reservation) => {
        if (nombre && reservation.nombre !== nombre){
            return false;
        }
        if (nombreHotel && reservation.nombreHotel !== nombreHotel) {
            return false;
        }
        if (tipoHabitacion && reservation.tipoHabitacion !== tipoHabitacion) {
            return false;
        }
        if (huespedes && reservation.huespedes !== parseInt(huespedes)) {
            return false;
        }
        if (checkin && reservation.checkin !== checkin) {
            return false;
        }
        if (checkout && reservation.checkout !== checkout){
            return false;
        }
        return true;
    });
 
    if (filteredRerservations.length === 0) {
        return res.status(404).json({ mensaje: `Reserva no encontrada`});
    }
    res.json ({
        mensaje: `Reservaciones filtradas con éxito.`,
        info: filteredRerservations
    });
}