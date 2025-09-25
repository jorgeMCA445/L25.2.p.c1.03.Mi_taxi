export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarCliente() {
        this.modelo.procesarCliente(this.vista.procesarCliente());
        this.vista.repotarCliente(this.modelo.clientesMayoresDeEdadF(), this.modelo.menorEdadAtendida(), this.modelo.promedioDEdad(), this.modelo.cantidadServicioL1());
    }
}
