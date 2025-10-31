//Dada una secuencia de números leídos por teclado, que acabe con un –1, por ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,……,-1;
//Realizar el algoritmo que calcule la media aritmética.
//Suponemos que el usuario no insertará números negativos.
let prompt = require('prompt-sync')();
let contador = 0;
let acumulador = 0;
let N;
do {
    N = Number(prompt('Introduzca un número: '));
    if (N>-1) {
        acumulador+=N;
        contador++;
    }
    
} while (N!==-1);
    console.log(`La media actual es ${(acumulador)/(contador)}`);
    console.log("Has escrito -1.");


 

