export default class Cl_Taxi {
    constructor() {
        this.cnMayorDEdadF = 0;
        this.menorEdad = 0;
        this.acEdad = 110; // Asumiendo que la edad máxima es 99
        this.cntClientes = 0;
    }
    procesarCliente(c) {
        if (this.menorEdad === 0 || c.edad < this.menorEdad) {
            this.menorEdad = c.edad;
        }
        if (c.edad >= 18 && c.sexo === "f") {
            this.cnMayorDEdadF++;
        }
        if (c.edad < this.menorEdad) {
            this.menorEdad = c.edad;
        }
        this.acEdad += c.edad;
        this.cntClientes++;
    }
    clientesMayoresDeEdadF() {
        return this.cnMayorDEdadF;
    }
    menorEdadAtendida() {
        return this.menorEdad;
    }
    promedioDEdad() {
        if (this.cntClientes === 0) {
            return 0; // Evitar división por cero
        }
        return this.acEdad / this.cntClientes;
    }
}
