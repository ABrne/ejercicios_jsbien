//Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares.
//Es decir, si insertamos un 5, tendremos la suma de 2+4+6+8+10.
const prompt= require('prompt-sync')();

let N = Number(prompt('Introduzca un número: '));
let contador = 0;
let suma=0;
if (!Number.isNaN(N)) {
    
while (contador<=N*2) {
    suma += contador;
    contador += 2;
    
}
 console.log(`${suma}`)
 console.log(`Total de números pares = ${(contador/2)-1}`);
} else {
    console.log("No has introducido un número.");
}    

//if (contador % 2 === 0) {
//acumulador = acumulador + contador (acumulador += contador)
//}