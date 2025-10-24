//Se pide un algoritmo que lea dos números desde teclado,
//calculando y escribiendo en pantalla el valor de su suma, resta, producto y división.
let prompt = require('prompt-sync')();

let formato0k = true;

let a=Number(prompt('Introduzca a:'));

let b=Number(prompt('Introduzca b:'));

if (Number.isNaN(a)) {
    console.log('Formato incorrecto');
    formato0k = false;
}

if (Number.isNaN(b)) {
    console.log('Formato incorrecto');
    formato0k = false;
}
if (formato0k) {
console.log('La suma es '+(a+b)+' , la resta es '+(a-b)+' , la multiplicación es '+(a*b)+' y la división es '+(a/b));
} 


//También se puede hacer
//a = Number(a);
//suma = a + b;