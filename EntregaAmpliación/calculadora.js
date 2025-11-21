//9. Realiza una calculadora de menú. El algoritmo mostrará un menú de operaciones aritméticas (+-*/,raíz) y
//seguidamente a la elección de una operación solicitará los 2 operandos, mostrando el resultado
// por pantalla e informando de nuevo con el menú.
//El menú además de las operaciones básicas tendrá que tener una opción de salida que se indicará con la letra q.

let prompt = require('prompt-sync')();
let salir = true;

while (salir){

console.log('1. Para sumar');
console.log('2. Para restar');
console.log('3. Para multiplicar');
console.log('4. Para dividir.');
console.log('5. Para hacer la raíz.');
console.log('q. Para terminar el programa.');

let opción = prompt('Selecciona una opción: ');

if (opción === 'q'){
    salir = false;
    console.log('Programa terminado.')
    break;
}

switch (opción) {
    case '1':
        let num1 =Number(prompt('Introduce el primer numero: '));
        let num2 =Number(prompt('Introduce el segundo numero: '));
        console.log(`La suma es: ${num1+num2}`);
        break;
    case '2':
        let num3 =Number(prompt('Introduce el primer numero: '));
        let num4 =Number(prompt('Introduce el segundo numero: '));
        console.log(`La resta es: ${num3-num4}`);
        break;
    case '3':
        let num5 =Number(prompt('Introduce el primer numero: '));
        let num6 =Number(prompt('Introduzce el segundo numero: '));
        console.log(`La multiplicación es: ${num5*num6}`);
        break;
    case '4':
        let num7 =Number(prompt('Introduce el primer numero: '));
        let num8 =Number(prompt('Introduce el segundo numero: '));
        console.log(`La división es: ${num7/num8}`);
        break;
    case '5':
        let num9 =Number(prompt('Introduce un numero: '));
        console.log(`La raíz es: ${Math.sqrt(num9)}`);
        break;
    default:
        console.log('Opción no valida, intentalo otra vez.');
    }
    
}