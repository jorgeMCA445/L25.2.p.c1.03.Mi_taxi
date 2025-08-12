import Cl_Cliente from "./Cl_Cliente.js";
import Cl_Taxi  from "./Cl_Taxi.js";

let cliente1: Cl_Cliente = new Cl_Cliente("Juan", "m", 20, 2);
let cliente2: Cl_Cliente = new Cl_Cliente("Mary", "f", 15, 1);
let cliente3: Cl_Cliente = new Cl_Cliente("Lin", "f", 18, 2);
let cliente4: Cl_Cliente = new Cl_Cliente("Ana", "f", 19, 1);

let taxi: Cl_Taxi = new Cl_Taxi();

taxi.procesarCliente(cliente1);
taxi.procesarCliente(cliente2);
taxi.procesarCliente(cliente3);
taxi.procesarCliente(cliente4);

let salida: HTMLElement | null = document.getElementById("salida");

if (salida) {
  salida.innerHTML += `<p>Clientes mayores de edad y sexo femenino: ${
  taxi.clientesMayoresDeEdadF()}</p>`;
  salida.innerHTML += `<p>Menor edad atendida: ${
  taxi.menorEdadAtendida()}</p>`;
  salida.innerHTML += `<p>Promedio de edad: ${
  taxi.promedioDEdad()}</p>`;
} else {    
    console.log("No se encontró el elemento con el id 'salida'");
    }

