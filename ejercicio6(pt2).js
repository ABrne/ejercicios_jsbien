//Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una clave.
//Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrará un mensaje
//indicándonos que hemos agotado esos 3 intentos. Si acertamos la clave, saldremos directamente del programa.
let prompt = require('prompt-sync')();

let clave =(prompt('Introduzca una clave: '));
let contador=3;

while (contador>0) {
    if (clave=='eureka') {
    console.log('Has acertado, felicidades.');
    contador = 0;
    } else {
    clave =(prompt(`Has fallado, tienes ${contador} intento/s:`));
    contador--;
 }
} 


