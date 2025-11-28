let prompt = require('prompt-sync')();

let ancho = Number(prompt('Introduzca ancho: '));

let pisos = Number(prompt('Introduzca pisos: '));

let validación=true;

if (Number.isNaN(ancho) || ancho % 2 === 1) {
    validación=false;
}

if (Number.isNaN(pisos)) {
    
    validación=false;
}
if (validación) {
    
pintarEscalera(ancho,pisos);


}

function pintarEscalera(ancho,pisos) {
     for (let i = 0; i < pisos; i++) {

    
        for (let alto = 0; alto < 3; alto++) {
            let linea = "";

            
            for (let k = 0; k < Math.floor(ancho/2)*(pisos-1-i); k++) {
                linea += " ";
            }

            
            for (let j = 0; j < ancho; j++) {
                linea += "*";
            }

            console.log(linea);
        }
    }
}