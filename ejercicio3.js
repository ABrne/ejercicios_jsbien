//Se pide realizar un algoritmo que lea dos números e indique el mayor, o si son iguales

//https://www.npmjs.com/package/prompt-sync?activeTab=readme
//Forma nativa de importar módulos en node
//           create________________()
let prompt = require('prompt-sync')();
let formato0k = true;
let A = Number(prompt('Introduzca A: '));
let B = Number(prompt('Introduzca B: '));

if (Number.isNaN(A)) {
    console.log('Formato incorrecto de A');
    formato0k = false;
}

if (Number.isNaN(B)) {
    console.log('Formato incorrecto de B');
    formato0k = false;
}
if (formato0k) {
    if (A>B) {
        //Backtip ` se realiza interpolación de cadena, frente a concatenación.
        console.log(`${A} es mayor que ${B}`);
    } else if (B>A) {
        console.log(`${B} es mayor que ${A}`);
    } else 
        console.log(`${A} es igual que ${B}`);
}
