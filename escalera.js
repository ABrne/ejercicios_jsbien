let prompt = require('prompt-sync')();

let ancho = Number(prompt('Introduzca ancho: '));

let pisos = Number(prompt('Introduzca pisos: '));

let validación=true;

if (Number.isNaN(ancho) || ancho % 2 === 1) {
    //si no es numero o es impar -> no válido
    validación=false;
}

if (Number.isNaN(pisos)) {
    //si no es numero o es impar -> no válido
    validación=false;
}
if (validación) {
    
pintarEscalera(ancho,pisos);


}
//HOIST = las funciones se mueven automaticamente al principio del scr
function pintarEscalera(ancho,pisos) {
    for (let i = 0;i<pisos;i++) {
    //i es indice de piso
    //Pinto escalera
    for(let j = 0; j < 3;j++) {
        //j es indice de altura de escalón
        process .stdout.write('-'.repeat((ancho/2)*(pisos-1-i)));
        process .stdout.write('*'.repeat(ancho));
        process .stdout.write('\n');
    }

}

}