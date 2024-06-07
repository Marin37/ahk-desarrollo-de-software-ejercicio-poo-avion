import { Aeropuerto } from "../src/entities/aeropuerto";
import { Vuelo } from "../src/entities/vuelo";

test("Dos vuelos salen el <fecha> de <aeropuerto>", () => {
    const aeropuertoBsAs = new Aeropuerto();

    const unVuelo = new Vuelo(40);
    unVuelo.aeropuertoPartida = aeropuertoBsAs;
    unVuelo.fechaHoraPartida = "2024-06-07";
    aeropuertoBsAs.agregarVuelo(unVuelo);

    const otroVuelo = new Vuelo(50);
    otroVuelo.aeropuertoPartida = aeropuertoBsAs;
    otroVuelo.fechaHoraPartida = "2024-06-07";
    aeropuertoBsAs.agregarVuelo(otroVuelo);

    const cantObtenida = aeropuertoBsAs.cantVuelosQuePartenDeMi("2024-06-07");

    expect(cantObtenida).toBe(2);
});

test("Un vuelo llego el <fecha> a <aeropuerto>", () => {
    const aeropuertoTucuman = new Aeropuerto();
    const unVuelo = new Vuelo(100);
    unVuelo.aeropuertoDestino = aeropuertoTucuman;
    unVuelo.fechaHoraArribo = "2024-06-07";
    aeropuertoTucuman.agregarVuelo(unVuelo);

    const cantObtenida =
        aeropuertoTucuman.cantVuelosQueArribanEnMi("2024-06-07");

    expect(cantObtenida).toBe(1);
});
