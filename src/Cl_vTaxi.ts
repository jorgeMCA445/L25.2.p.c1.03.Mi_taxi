import Cl_vCliente from "./Cl_vCliente.js";
import Cl_mCliente from "./Cl_mCliente.js";
import Cl_Controlador from "./Cl_controlador.js";

export default class Cl_vTaxi {
    private _controlador: Cl_Controlador | null = null;
    private salida: HTMLElement
    private vCliente: Cl_vCliente;
    private mCliente: Cl_mCliente | null = null;

    constructor() {
        this.salida = document.getElementById("mainForm_salida") as HTMLElement;
        if (!this.salida) throw new Error("Elemento salida no encontrado");
        this.vCliente = new Cl_vCliente();

    }

    set Controlador(controlador: Cl_Controlador | null) {
        this._controlador = controlador;
        this.vCliente.controlador = controlador;
    }
    get controlador(): Cl_Controlador | null {
        return this._controlador;
    }
    procesarCliente(): Cl_mCliente {
        this.mCliente = new Cl_mCliente({
            nombre: this.vCliente.nombre,
            sexo: this.vCliente.sexo,
            edad: this.vCliente.edad,
            tipoS: this.vCliente.tipoServicio
        });
        return this.mCliente;
    }
    repotarCliente( 
        clientesMayoresDeEdadF: number,
        menorEdad: number,
        promedioDEdad: number,
        cantidadServicioL1: number,

    ): void {
        if (!this.mCliente) throw new Error("no hay articulo procesado");
        this.salida.innerHTML += `<br><br> el cliente feminino mayor de edad atendido es: ${clientesMayoresDeEdadF}
        <br>El cliente de menor edad tiene ${menorEdad} años.
        <br>El promedio de edad de los clientes es ${promedioDEdad.toFixed(0)} años.
        <br>La cantidad de servicios de tipo Largo es: ${cantidadServicioL1}
        `;

    }
}

