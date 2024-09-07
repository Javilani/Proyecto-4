// La clase con un constructor 
import ordenes from '../controllers/controladorOrdenes.js';

class Reserva {
    constructor(nombre, nombreHotel, tipoHabitacion, huespedes, checkin, checkout) {
        this.nombre = nombre;
        this.nombreHotel = nombreHotel;
        this.tipoHabitacion = tipoHabitacion;
        this.huespedes = huespedes;
        this.checkin = checkin;
        this.checkout = checkout;
        this.id = ordenes.length + 1;
    }

    mostrarResumen() {
        return `Reserva para ${this.nombre} en el hotel ${this.nombreHotel}, ${this.tipoHabitacion},
        para ${this.huespedes} personas con,
        Fecha de llegada: ${this.checkin},
        Fecha de salida: ${this.checkout}`;
    }
}

export default Reserva;