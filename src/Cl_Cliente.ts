export default class Cl_Cliente {
    private _nombre: string = "";
    private _sexo: string = "";
    private _edad: number = 0;
    private _tipoServicio: number = 0;

    constructor(nombre: string, sexo: string, edad: number, tipoServicio: number) {
        this._nombre = nombre;
        this._sexo = sexo;
        this._edad = edad;
        this._tipoServicio = tipoServicio;
    }

    get nombre(): string {
        return this._nombre;
    }
    get sexo(): string {
        return this._sexo;
    }
    get edad(): number {
        return this._edad;
    }
    get tipoServicio(): number {
        return this._tipoServicio;
    }
    set nombre(n: string) {
        this._nombre = n;
    }
    set sexo(s: string) {
        this._sexo = s;
    }
    set edad(e: number) {
        this._edad = +e;
    }
    set tipoServicio(tS: number) {
        this._tipoServicio = +tS;
    }



}