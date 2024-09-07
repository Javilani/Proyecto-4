exports.obtenerReservas = (req, res) => {
    const { hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado, num_huespedes } = req.query;
    let result = reservas;
 
   
    if (hotel) result = result.filter(r => r.hotel === hotel);
    if (fecha_inicio && fecha_fin) result = result.filter(r => r.fechaInicio >= fecha_inicio && r.fechaFin <= fecha_fin)
        else if (fecha_inicio || fecha_fin) {
            return res.status(400).send('Faltan datos');
        }
    if (tipo_habitacion) result = result.filter(r => r.tipoHabitacion === tipo_habitacion);
    if (estado) result = result.filter(r => r.estado === estado);
    if (num_huespedes) result = result.filter(r => r.numHuespedes === parseInt(num_huespedes));
 
   
    if (result.length === 0) {
        return res.status(404).send('Reserva no encontrada');
    }
 
   
    res.json(result);
};