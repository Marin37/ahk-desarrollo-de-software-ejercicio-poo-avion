export class Aeropuerto {
    nombre;
    vuelos = [];
    escalas = [];

    agregarVuelo(vuelo) {
        this.vuelos.push(vuelo);
    }
    agregarEscala(escala) {
        this.escalas.push(escala);
    }

    vuelosQuePartenAqui() {
        return this.vuelos.filter((v) => v.parteDesde(this));
    }

    vuelosQueArribanAqui() {
        return this.vuelos.filter((v) => v.arribaEn(this));
    }

    vuelosQueArribanAquiElDia(fecha) {
        return this.vuelosQueArribanAqui().filter((v) =>
            v.llegasteEnFecha(fecha)
        );
    }

    cantVuelosQuePartenDeMi(fecha) {
        const vuelosDeLaFecha = this.vuelosQuePartenAqui().filter((v) =>
            v.salisteEnFecha(fecha)
        );
        return vuelosDeLaFecha.length;
    }

    cantVuelosQueArribanEnMi(fecha) {
        return this.vuelosQueArribanAquiElDia(fecha).length;
    }

    cantVuelos() {
        return this.vuelos.length;
    }
    cantEscalas() {
        return this.escalas.length;
    }
}
