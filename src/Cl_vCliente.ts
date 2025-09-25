import Cl_controlador from "./Cl_controlador";

export default class Cl_vCliente {
    public controlador: Cl_controlador | null = null;
    private inNombre: HTMLInputElement;
    private inEdad: HTMLInputElement;
    private inSexo: HTMLInputElement;
    private inTipoServicio: HTMLInputElement;
    public btnAgregar: HTMLElement | null = null;
    constructor() {
        this.inNombre = document.getElementById("inNombre") as HTMLInputElement;
        this.inEdad = document.getElementById("inEdad") as HTMLInputElement;
        this.inSexo = document.getElementById("inSexo") as HTMLInputElement;
        this.inTipoServicio = document.getElementById("inTipoServicio") as HTMLInputElement;
        this.btnAgregar = document.getElementById("btnAgregar") as HTMLElement;
        if (
            !this.inNombre ||
            !this.inEdad ||
            !this.inSexo ||
            !this.inTipoServicio ||
            !this.btnAgregar
        )
            throw new Error("Elementos del DOM no encontrados");

        this.btnAgregar.onclick = () => {
            if (!this.controlador) throw new Error("Controlador no asignado");
            else this.controlador?.procesarCliente();
        };
    }

    get nombre(): string {
        return this.inNombre.value;
    }
    get edad() {
            return +this.inEdad.value.trim();
    }
    get sexo() {
            return this.inSexo.value;
    }
    get tipoServicio() {
            return +this.inTipoServicio.value.trim();
    }
}