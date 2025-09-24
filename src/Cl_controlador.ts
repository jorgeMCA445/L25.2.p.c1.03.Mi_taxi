import Cl_vTaxi from "./Cl_vTaxi.js";
import Cl_mTaxi from "./Cl_mTaxi.js";

export default class Cl_controlador {
    public modelo: Cl_mTaxi;
    public vista: Cl_vTaxi;
    constructor(modelo: Cl_mTaxi, vista: Cl_vTaxi) {
        this.modelo = modelo;
        this.vista = vista;

    }
    procesarCliente() {
        this.modelo.procesarCliente(this.vista.procesarCliente());
        this.vista.repotarCliente(
            this.modelo.clientesMayoresDeEdadF(),
            this.modelo.menorEdadAtendida(),
            this.modelo.promedioDEdad()
        );
    }
}
