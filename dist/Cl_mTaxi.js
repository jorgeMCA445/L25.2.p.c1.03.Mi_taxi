export default class Cl_mTaxi {
    constructor() {
        this.cnMayorDEdadF = 0;
        this.menorEdad = 100; // Asumiendo que la edad mínima es
        this.acEdad = 0;
        this.cntClientes = 0;
        this.cnServicioL1 = 0;
    }
    procesarCliente(cliente) {
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
    cantidadServicioL1() {
        return this.cnServicioL1;
    }
}
