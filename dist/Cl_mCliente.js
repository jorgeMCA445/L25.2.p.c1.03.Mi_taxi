export default class Cl_mCliente {
    constructor({ nombre = "", sexo = "", edad = 0, tipoS = 1 }) {
        this._nombre = "";
        this._sexo = "";
        this._edad = 0;
        this._tipoServicio = 1;
        this._nombre = nombre;
        this._sexo = sexo;
        this._edad = edad;
        this._tipoServicio = tipoS;
    }
    get nombre() {
        return this._nombre;
    }
    get sexo() {
        return this._sexo;
    }
    get edad() {
        return this._edad;
    }
    get tipoServicio() {
        return this._tipoServicio;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    set edad(edad) {
        this._edad = +edad;
    }
    set tipoServicio(tipoS) {
        this._tipoServicio = +tipoS;
    }
}
