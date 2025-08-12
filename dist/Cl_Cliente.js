"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cl_Cliente {
    constructor(nombre, sexo, edad, tipoServicio) {
        this._nombre = "";
        this._sexo = "";
        this._edad = 0;
        this._tipoServicio = 0;
        this._nombre = nombre;
        this._sexo = sexo;
        this._edad = edad;
        this._tipoServicio = tipoServicio;
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
exports.default = Cl_Cliente;
