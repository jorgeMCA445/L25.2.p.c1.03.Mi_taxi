import Cl_mCliente from "./Cl_mCliente";

export default class Cl_mTaxi {
    private cnMayorDEdadF: number;
    private menorEdad: number; // Asumiendo que la edad mínima es 0
    private acEdad: number;
    private cntClientes: number;
    private cnServicioL1: number;

    constructor() {
        this.cnMayorDEdadF = 0;
        this.menorEdad = 100; // Asumiendo que la edad mínima es
        this.acEdad = 0;
        this.cntClientes = 0;
        this.cnServicioL1 = 0;
    }

    procesarCliente(cliente: Cl_mCliente): void {
        if (cliente.edad < this.menorEdad) {
            this.menorEdad = cliente.edad;
        }
        if (cliente.edad >= 18 && cliente.sexo === "f") {
            this.cnMayorDEdadF++;
        }
        this.acEdad += cliente.edad;
        this.cntClientes++;
        if (cliente.tipoServicio === 1) {
            this.cnServicioL1++;
        }
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
    cantidadServicioL1(): number {
        return this.cnServicioL1;
    }
}