//Algoritmo que nos calcule la suma de los N primeros números naturales. N se leerá por teclado.

let prompt = require('prompt-sync')();
let N = Number(prompt('Introduzca un número: '));
let contador = 0;
let acumulador = 0;

while (contador < N){
    acumulador = acumulador +(contador+1);
    console.log(`La suma es ${acumulador}`);
    contador++;
}