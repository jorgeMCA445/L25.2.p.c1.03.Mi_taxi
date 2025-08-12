export default class Cl_Cliente {
    private _nombre: string = "";
    private _sexo: string = "";
    private _edad: number = 0;
    private _tipoServicio: number = 0;

    constructor(n: string, s: string, e: number, tS: number) {
        this._nombre = n;
        this._sexo = s;
        this._edad = e;
        this._tipoServicio = tS;
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