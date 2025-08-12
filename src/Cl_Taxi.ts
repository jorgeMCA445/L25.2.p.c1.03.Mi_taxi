import Cl_Cliente from './Cl_Cliente';

export default class Cl_Taxi {
    private cnMayorDEdadF: number = 0;
    private menorEdad: number = 0;
    private acEdad: number = 0;
    private cnClientes: number = 0;

    constructor() {}

    procesarCliente(c: Cl_Cliente): void {
        this.cnMayorDEdadF = 0;
        this.menorEdad = 100; // Asumiendo que la edad máxima es 99
        this.acEdad = 0;
        this.cnClientes = 0;

        if (c.edad >= 18)  {
            if (c.sexo === "f") {
                this.cnMayorDEdadF++;
            }   
        }
            this.cnClientes++;
            this.acEdad += c.edad;
    }

    clientesMayoresDeEdadF(): number {
        return this.cnMayorDEdadF;
    }
    menorEdadAtendida(): number {
        return this.menorEdad;
    }
    promedioDEdad(): number {
        return this.cnClientes > 0 ? this.acEdad / this.cnClientes : 0;
    }





}