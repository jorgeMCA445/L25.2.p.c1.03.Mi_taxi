import Cl_vTaxi from "./Cl_vTaxi.js";
import Cl_mTaxi from "./Cl_mTaxi.js";
import Cl_Controlador from "./Cl_controlador.js";
export default class Cl_principal {
    constructor() {
        let vista = new Cl_vTaxi();
        let modelo = new Cl_mTaxi();
        let controlador = new Cl_Controlador(modelo, vista);
        vista.Controlador = controlador;
    }
}
