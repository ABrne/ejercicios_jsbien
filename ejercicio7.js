//Una tienda ofrece un descuento del 15% sobre el total de la compra durante el mes de octubre.
//Dado un mes y un importe, calcular cuál es la cantidad que se debe cobrar al cliente.


let prompt = require('prompt-sync')();
let formato0k = true;
let total = Number(prompt('Introduzca total de compra: '));
let mes = (prompt('Introduzca mes: '));

if (Number.isNaN(total)) {
    console.log('Formato incorrecto del total.');
    formato0k = false;
}


if (formato0k) {
    switch (mes) {
        case 'Octubre':
            total=total-((total*15)/100);
            console.log(`El total de la compra es de ${total} euros`);
            break;
    
        default:
            console.log(`El total de la compra es de ${total}`);
            break;
    }
}
