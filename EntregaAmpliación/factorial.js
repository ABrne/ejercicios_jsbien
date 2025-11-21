//Se necesita un programa para calcular el factorial de un número dado,
//que corresponda a la fórmula: N! = N*(N-1)*(N-2)* ... *(N-(N-1))
let prompt = require('prompt-sync')();


let numero = Number(prompt('Introduzca un numero: '));

let contador=numero;
let factorialtotal=1;



while (contador>1) {
    
    factorialtotal=factorialtotal*contador;
    contador--;
    

}
console.log(`El factorial de ${numero} es: ${factorialtotal}.`);