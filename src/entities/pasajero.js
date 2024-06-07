export class Pasajero {
    nombre;
    apellido;
    vuelos = [];

    agregarVuelo(unVuelo) {
        this.vuelos.push(unVuelo);
    }

    cantVuelos() {
        return this.vuelos.length;
    }

    cantVecesQueVisitaste(unaCiudad) {
        // COnsideramos un pasajero que visita una ciudad
        // solo si parte de un aeropuerto de esa ciudad

        return this.vuelos.filter((v) =>
            unaCiudad.tenesAeropuerto(v.aeropuertoPartida)
        ).length;
    }
}
