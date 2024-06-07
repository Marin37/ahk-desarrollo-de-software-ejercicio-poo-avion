export class RankeadorDeAeropuertos {
    aeropuertoConMenorCantDeEscalas(aeropuertos) {
        let aeropuertoConMenorCantEscalas;
        let cantMenorEscalas =
            aeropuertos.length != 0 ? aeropuertos[0].cantEscalas() : 999999; // I do not condone this path

        aeropuertos.forEach((aep) => {
            if (aep.cantEscalas() < cantMenorEscalas) {
                cantMenorEscalas = aep.cantEscalas();
                aeropuertoConMenorCantEscalas = aep;
            }
        });
    }
}
