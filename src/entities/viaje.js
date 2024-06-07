export class Viaje {
    vuelos = [];
    escalas = [];

    agregarVuelo(vuelo) {
        this.vuelos.push(vuelo);
    }
    agregarEscala(escalas) {
        this.escalas.push(escalas);
    }

    duracionTotalVuelos() {
        let duracionTotal = 0;

        for (let i = 0; i < this.vuelos.length; i++) {
            duracionTotal += this.vuelos[i].duracionAproxEnMins;
        }

        return duracionTotal;
    }

    duracionTotalEscalas() {
        let duracionTotal = 0;

        this.escalas.forEach((unaEscala) => {
            duracionTotal += unaEscala.duracionAproxEnMins;
        });

        return duracionTotal;
    }

    duracionTotalAproxEnMin() {
        let duracionTotal = 0;
        const duracionTotalEscalas = this.duracionTotalEscalas();
        const duracionTotalVuelos = this.duracionTotalVuelos();

        duracionTotal += duracionTotalEscalas;
        duracionTotal += duracionTotalVuelos;

        return duracionTotal;
    }
}
