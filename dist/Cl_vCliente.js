export default class Cl_vCliente {
    constructor() {
        this.controlador = null;
        this.btnAgregar = null;
        this.inNombre = document.getElementById("inNombre");
        this.inEdad = document.getElementById("inEdad");
        this.inSexo = document.getElementById("inSexo");
        this.inTipoServicio = document.getElementById("inTipoServicio");
        this.btnAgregar = document.getElementById("btnAgregar");
        if (!this.inNombre ||
            !this.inEdad ||
            !this.inSexo ||
            !this.inTipoServicio ||
            !this.btnAgregar)
            throw new Error("Elementos del DOM no encontrados");
        this.btnAgregar.onclick = () => {
            var _a;
            if (!this.controlador)
                throw new Error("Controlador no asignado");
            else
                (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.procesarCliente();
        };
    }
    get nombre() {
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
