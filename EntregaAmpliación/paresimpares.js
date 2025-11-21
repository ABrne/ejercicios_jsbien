//Necesitamos un sistema que capture 20 números y después de capturarlos que haga la revisión de estos
//para indicarnos cuantos son pares y cuántos son impares.


let prompt = require('prompt-sync')();

let par = 0;
let impar = 0;

for (let i = 1; i <= 20; i++) {
    let num = Number(prompt("Introduce el número "+i+": "));
    if (num % 2 === 0) {
        par++;
    } else {
        impar++;
    }
}

console.log("Hay " +par+ " numeros pares.");
console.log("Hay " +impar+ " numeros impares.");