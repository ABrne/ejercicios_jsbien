//Se necesita un sistema que despliegue un menú con 4 opciones,
//si se presiona la opción 1, se calculará el área de un triángulo; 
//si se presiona la opción 2, se calculará el área de un cuadrado; si se presiona la opción 3, se calculará el área de un círculo;
//si se presiona la opción 4, será la única forma de salir del sistema.

let prompt = require('prompt-sync')();
let salir = true;

while (salir){

console.log('1. Para calcular el area de un triangulo');
console.log('2. Para calcular el area de un cuadrado');
console.log('3. Para calcular el area de un circulo');
console.log('4. Para terminar el programa.');
let num = Number(prompt('Selecciona una opción: '));

switch (num) {
    case 1:
        let base =Number(prompt('Introduce la base: '));
        let altura =Number(prompt('Introduce la altura: '));
        console.log(`El área del triangulo es: ${(base*altura)/2}`);
        break;
    case 2:
        let lado =Number(prompt('Introduce el lado del cuadrado: '));
        console.log(`El área del cuadrado es: ${lado*lado}`);
        break;
    case 3:
        let radio =Number(prompt('Introduce el radio: '));
        console.log(`El área del circulo es: ${Math.PI*radio*radio}`);
        break;
    case 4:
        console.log('Programa terminado.');
        salir = false;
        break;
    default:
        console.log('Opción no valida, intentalo otra vez');
    }
    
}