export class Vuelo {
    tripulacion = [];
    pasajeros = [];
    avion;
    fechaHoraPartida;
    fechaHoraArribo;
    aeropuertoPartida;
    aeropuertoDestino;
    duracionAproxEnMins;

    constructor(duracionAproxEnMins) {
        this.duracionAproxEnMins = duracionAproxEnMins;
    }

    //ya que tiene una colección de pasajeros, solamente esta clase los deberia manipular
    agregarPasajero(pasajero) {
        this.pasajeros.push(pasajero);
    }

    capacidadOcupadaPorPasajeros() {
        //porcentaje (regla de tres)
        return (this.pasajeros.length * 100) / this.avion.cantAsientos;
    }

    cantPasajeros() {
        return this.pasajeros.length();
    }

    parteDesde(unAeropuerto) {
        return (this.aeropuertoPartida = unAeropuerto);
    }

    arribaEn(unAeropuerto) {
        return (this.aeropuertoDestino = unAeropuerto);
    }

    salisteEnFecha(fecha) {
        return this.fechaHoraPartida == fecha;
    }

    llegasteEnFecha(fecha) {
        return this.fechaHoraArribo == fecha;
    }
}
