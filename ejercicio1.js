//Lee desde entrada dos variables numéricas A y B.
//Con ellas se pide realizar un algoritmo que intercambie los valores de ambas variables y muestre cuánto valen al final las dos variables.

//https://www.npmjs.com/package/prompt-sync?activeTab=readme

let prompt = require('prompt-sync')();

let a=prompt('Introduzca a:');

console.log(typeof a);

let b=prompt('Introduzca b:');

console.log(typeof b);

//Patrón de intercambio
let bTemporal = b;
b = a;
a = bTemporal;

//Backtip `tmb sirve para declarar cadenas te permite interpolación de cadenas ${variable}
console.log(`a = ${a}, b = ${b}`);

//Sin interpolación de cadenas, uso concatenación de cadenas +
//console.log('a = ' +a+ ' , b = '+b);
