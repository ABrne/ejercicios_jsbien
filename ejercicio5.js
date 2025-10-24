//Algoritmo que lea un número por teclado. En caso de que ese número sea 0 o menor que 0,
//se saldrá del programa imprimiendo antes un mensaje de error.
//Si es mayor que 0, se deberá calcular su cuadrado y la raíz cuadrada del mismo, visualizando
//el número que ha tecleado el usuario y su resultado («Del número X, su potencia es X y su raíz X» ). 
let prompt = require('prompt-sync')();
let formato0k = true;
let A = Number(prompt('Introduzca A: '));

if (Number.isNaN(A)) {
    console.log('Formato incorrecto de A');
    formato0k = false;
}

if (formato0k) {
    console.log(`Del número ${A}, su potencia es ${Math.pow(A,2)} y su raiz es ${Math.sqrt(A)}`);
}