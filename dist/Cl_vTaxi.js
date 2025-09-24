import Cl_vCliente from "./Cl_vCliente.js";
import Cl_mCliente from "./Cl_mCliente.js";
export default class Cl_vTaxi {
    constructor() {
        this._controlador = null;
        this.mCliente = null;
        this.salida = document.getElementById("mainForm_salida");
        if (!this.salida)
            throw new Error("Elemento salida no encontrado");
        this.vCliente = new Cl_vCliente();
    }
    set Controlador(controlador) {
        this._controlador = controlador;
        this.vCliente.controlador = controlador;
    }
    get controlador() {
        return this._controlador;
    }
    procesarCliente() {
        this.mCliente = new Cl_mCliente({
            nombre: this.vCliente.nombre,
            sexo: this.vCliente.sexo,
            edad: this.vCliente.edad,
            tipoS: this.vCliente.tipoServicio
        });
        return this.mCliente;
    }
    repotarCliente(clientesMayoresDeEdadF, menorEdad, promedioDEdad) {
        if (!this.mCliente)
            throw new Error("no hay articulo procesado");
        this.salida.innerHTML += `<br><br> el cliente feminino mayor de edad atendido es: ${clientesMayoresDeEdadF}
        <br>El cliente de menor edad tiene ${menorEdad} años.
        <br>El promedio de edad de los clientes es ${promedioDEdad.toFixed(2)} años.`;
    }
}
