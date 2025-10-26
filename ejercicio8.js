//Realizar un algoritmo que dado un número entero, visualice en pantalla si es par o impar.
//En el caso de ser 0, debe visualizar “el número no es par ni impar”
//(para que un número sea par, se debe dividir entre dos y que su resto sea 0).
let prompt = require('prompt-sync')();
let formato0k = true;
let numero = Number(prompt('Introduzca un numero: '));

if (Number.isNaN(numero)) {
    console.log('Formato incorrecto del numero.');
    formato0k = false;
}


if (formato0k) {
    if (numero==0) {
        console.log("El número 0 no es par ni es impar");
    } else if (numero%2==1) {
        console.log(`El número ${numero} es impar.`);
    } else if (numero%2==0) {
         console.log(`El número ${numero} es par.`);
    }

}