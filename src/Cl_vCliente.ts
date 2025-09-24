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
        this.btnAgregar.onclick = () => {
            if (!this.controlador) throw new Error("Controlador no asignado");
            this.controlador.procesarCliente();
        };
    }

    get nombre(): string {
        if (!this.inNombre.value.trim()) throw new Error("El nombre no puede estar vacio");
        return this.inNombre.value;
    }
    get edad() {
        if (!this.inEdad.value.trim() || isNaN(+this.inEdad.value.trim()) || +this.inEdad.value.trim() < 0)
            return +this.inEdad.value.trim();
    }
    get sexo() {
        if (!this.inSexo.value.trim() || (this.inSexo.value.trim().toLowerCase() !== "m" && this.inSexo.value.trim().toLowerCase() !== "f"))
            return this.inSexo.value;
    }
    get tipoServicio() {
        if (!this.inTipoServicio.value.trim() || isNaN(+this.inTipoServicio.value.trim()) || (+this.inTipoServicio.value.trim() !== 1 && +this.inTipoServicio.value.trim() !== 2))
            return +this.inTipoServicio.value.trim();
    }
}