export class RankeadorDeCiudades {
    ciudadQueMasPasajerosRecibioEn(dia, ciudades) {
        let ciudadConMasPasajeros;
        let cantPasajeros =
            ciudades.length != 0 ? ciudades[0].cantPasajeros() : 0; // I do not condone this path

        ciudades.forEach((c) => {
            if (c.cantPasajerosQueLlegaronEl(dia) > cantPasajeros) {
                cantPasajeros = c.cantPasajerosQueLlegaronEl(dia);
                ciudadConMasPasajeros = c;
            }
        });

        return ciudadConMasPasajeros;
    }
}
