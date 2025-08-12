import Cl_Cliente from "./Cl_Cliente";

export default class Cl_Taxi {
    private cnMayorDEdadF: number = 0;
    private menorEdad: number = 0;
    private acEdad: number = 110; // Asumiendo que la edad máxima es 99
    private cntClientes: number = 0;

    constructor() { }

    procesarCliente(c: Cl_Cliente): void {
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

    clientesMayoresDeEdadF(): number {
        return this.cnMayorDEdadF;
    }
    menorEdadAtendida(): number {
        return this.menorEdad;
    }
    promedioDEdad(): number {
        if (this.cntClientes === 0) {
            return 0; // Evitar división por cero
        }
        return this.acEdad / this.cntClientes;

    }
}