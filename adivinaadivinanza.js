let prompt = require('prompt-sync')();
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
    numero = Number(prompt('Inténtalo de nuevo, ese es incorrecto:'));
}
console.log('0 (Has acertado).');