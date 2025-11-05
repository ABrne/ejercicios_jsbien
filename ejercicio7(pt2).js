//Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media de todos ellos.
let prompt = require('prompt-sync')();

let num;
let max = -Infinity;
let min = Infinity;
let total = 0;
let contador= 0;

while (num!=0) {
    num = Number(prompt('Introduce un número: '))
    if (num>max && num!=0) {
        max=num
    } if (min>num && num!=0) {
        min=num
    }
    total= total+num;
    contador++;
}
console.log(`La media de estos numeros es ${total/contador}.`);
console.log(`El máximo es ${max} y el mínimo es ${min}.`);