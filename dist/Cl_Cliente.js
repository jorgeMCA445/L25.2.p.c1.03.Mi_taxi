export default class Cl_Cliente {
    constructor(n, s, e, tS) {
        this._nombre = "";
        this._sexo = "";
        this._edad = 0;
        this._tipoServicio = 0;
        this._nombre = n;
        this._sexo = s;
        this._edad = e;
        this._tipoServicio = tS;
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
    set nombre(n) {
        this._nombre = n;
    }
    set sexo(s) {
        this._sexo = s;
    }
    set edad(e) {
        this._edad = +e;
    }
    set tipoServicio(tS) {
        this._tipoServicio = +tS;
    }
}
