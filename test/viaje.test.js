import { Viaje } from "../src/entities/viaje";
import { Escala } from "../src/entities/escala";
import { Vuelo } from "../src/entities/vuelo";

test("viaje dura 200 min", () => {
    const primerEscala = new Escala(null, 40);
    const segundaEscala = new Escala(null, 40);
    const primerVuelo = new Vuelo(60);
    const segundoVuelo = new Vuelo(60);

    const viaje = new Viaje();
    viaje.agregarEscala(primerEscala);
    viaje.agregarEscala(segundaEscala);
    viaje.agregarVuelo(primerVuelo);
    viaje.agregarVuelo(segundoVuelo);
});
