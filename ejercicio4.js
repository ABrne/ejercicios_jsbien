//Solicita por teclado tres números; si el primero es negativo, 
//muestra el producto de los tres y si no lo es, muestra la suma.
let prompt = require('prompt-sync')();
let formato0k = true;
let A = Number(prompt('Introduzca A: '));
let B = Number(prompt('Introduzca B: '));
let C = Number(prompt('Introduzca C: '))

if (Number.isNaN(A)) {
    console.log('Formato incorrecto de A');
    formato0k = false;
}

if (Number.isNaN(B)) {
    console.log('Formato incorrecto de B');
    formato0k = false;
}
    if (Number.isNaN(C)) {
    console.log('Formato incorrecto de C');
    formato0k = false;
}
if (formato0k) {
    if (A<0) {
        console.log(`El producto de los tres numeros es= ${A*B*C}`);
    } else {
        console.log(`La suma de los tres numeros es = ${A+B+C}`);
    }
  }
