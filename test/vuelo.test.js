import { Vuelo } from "../src/entities/vuelo";
import { Avion } from "../src/entities/avion";
import { Pasajero } from "../src/entities/pasajero";

test("La capacidad de pasajeros es de 50% (avion con 4 asientos)", () => {
    const unAvion = new Avion();
    unAvion.cantAsientos = 4;

    const pasajero1 = new Pasajero();
    const pasajero2 = new Pasajero();

    const unVuelo = new Vuelo();
    unVuelo.avion = unAvion;

    unVuelo.agregarPasajero(pasajero1);
    unVuelo.agregarPasajero(pasajero2);

    const capacidadObtenida = unVuelo.capacidadOcupadaPorPasajeros();

    const capacidadEsperada = 50;
    expect(capacidadObtenida).toBe(capacidadEsperada);
});
