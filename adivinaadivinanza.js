/*let prompt = require('prompt-sync')();
let numero = Number(prompt('Introduce un número: '));

while (numero>100 || numero<0) {
    numero = Number(prompt('Ese numero no esta en el rango posible,escribe otro:'));
    
} 

while (numero!==67) {
    if (numero<67) {
        console.log('-1');
    } else {
        console.log('1');
    }
    numero = Number(prompt('Inténtalo de nuevo:'));

     if (numero>100 || numero<0) {
            numero = Number(prompt('Ese numero no esta en el rango posible,escribe otro:'));
    }
    }   
    
console.log('0 (Has acertado).');*/
const prompt = require ('prompt-sync')();
// Hoisting(JS) ----> se mueve automáticamente al principio
function leerNumero(mensajePrompt) {

    Number(prompt(mensajePrompt === undefined ? 'Introduzca número:' :mensajePrompt)); 

}
//LOOP GAME
let jugar = true;
let numAdivinar = 3;
let num;
while (jugar) {
    num = validaEntradaNum();

    if (num === numAdivinar) {
        jugar = false;
        console.log('Ganas!!!');
        
    }

     if (num > numAdivinar) {
          console.log('Numero a adivinar es menor.');
        
    } else  {
        console.log('Número a adivinar es mayor.');
    }
}

function validaEntradaNum() {

let numero = leerNumero();

while (num < 1 || num > 100) {
    num=leerNumero();
    
}

return num;
}
console.log(`num = ${num}`);

//KISS Keep It Simple Stupid
//Depends on abstraction
//DRY -> Dont repeat yourself
//Single responsibility - Responsabilidad de una sola cosa