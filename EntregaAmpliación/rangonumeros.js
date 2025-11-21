//Se necesita un sistema que solicita dos números, los cuales son un rango, 
//de los cuales queremos que imprima el total de la suma de todos los números que se encuentran dentro de este rango.

let prompt = require('prompt-sync')();

let num1 = Number(prompt('Introduzca el numero menor:'));
let num2 = Number(prompt('Introduzca el numero mayor:'));
let suma = 0;
let sumador=num1+1;
while (sumador<num2){
    suma += sumador;
    sumador++;
}

console.log('La suma entre los dos números es '+suma);

