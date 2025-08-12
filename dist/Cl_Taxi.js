"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cl_Taxi {
    constructor() {
        this.cnMayorDEdadF = 0;
        this.menorEdad = 0;
        this.acEdad = 0;
        this.cnClientes = 0;
    }
    procesarCliente(c) {
        this.cnMayorDEdadF = 0;
        this.menorEdad = 100; // Asumiendo que la edad máxima es 99
        this.acEdad = 0;
        this.cnClientes = 0;
        let cliente = c;
        if (cliente.edad >= 18) {
            if (cliente.sexo === "f") {
                this.cnMayorDEdadF++;
            }
        }
        this.cnClientes++;
        this.acEdad += cliente.edad;
    }
    clientesMayoresDeEdadF() {
        return this.cnMayorDEdadF;
    }
    menorEdadAtendida() {
        return this.menorEdad;
    }
    promedioDEdad() {
        return this.cnClientes > 0 ? this.acEdad / this.cnClientes : 0;
    }
}
exports.default = Cl_Taxi;
