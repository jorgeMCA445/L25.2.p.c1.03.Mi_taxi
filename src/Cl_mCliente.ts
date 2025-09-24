export default class Cl_mCliente {
    private _nombre: string = "";
    private _sexo: string = "";
    private _edad: number = 0;
    private _tipoServicio: number = 1;

    constructor({ nombre = "", sexo = "", edad = 0, tipoS = 1 }: { nombre?: string; sexo?: string; edad?: number; tipoS?: number }) {
        this._nombre = nombre;
        this._sexo = sexo;
        this._edad = edad;
        this._tipoServicio = tipoS;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public get sexo(): string {
        return this._sexo;
    }
    public get edad(): number {
        return this._edad;
    }
    public get tipoServicio(): number {
        return this._tipoServicio;
    }
    public set nombre(nombre: string) {
        this._nombre = nombre;
    }
    public set sexo(sexo: string) {
        this._sexo = sexo;
    }
    public set edad(edad: number) {
        this._edad = +edad;
    }
    public set tipoServicio(tipoS: number) {
        this._tipoServicio = +tipoS;
    }



}