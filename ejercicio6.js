//Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso actual.
//Diseñar un algoritmo para este propósito.
let prompt = require('prompt-sync')();
let formato0k = true;
let niños = Number(prompt('Introduzca numero de niños: '));
let niñas = Number(prompt('Introduzca numero de niñas: '));

if (Number.isNaN(niños)) {
    console.log('Formato incorrecto de niños');
    formato0k = false;
}

if (Number.isNaN(niñas)) {
    console.log('Formato incorrecto de niñas');
    formato0k = false;
}

if (formato0k) {
    let total= niños + niñas;
    porcniños= ((niños*100)/total);
    porcniñas= ((niñas*100)/total);
    console.log(`En una clase de ${total} alumnos: Niños= ${porcniños}%, Niñas= ${porcniñas}%`);
}