//Realizar algoritmo que nos diga si una persona puede acceder a cursar un ciclo formativo de grado superior o no. Para acceder a un grado superior,
//si se tiene un título de bachiller, en caso de no tenerlo, se puede acceder si hemos superado una prueba de acceso.
let prompt = require('prompt-sync')();
let formato0k = true;
let titulo = (prompt('¿Tienes el título de bachiller?(Si/No)'));
let acceso;
if (titulo=='Si') {
    console.log('Puedes acceder a un ciclo formativo de grado superior.');
    } else if (titulo=='No') {
        acceso = (prompt('¿Has superado la prueba de acceso?(Si/No)'));
        } if (acceso=='Si') {
            console.log('Puedes acceder a un ciclo formativo de grado superior.');
            } else if (acceso=='No') {
                console.log('No puedes acceder a un ciclo formativo de grado superior.');
                } 