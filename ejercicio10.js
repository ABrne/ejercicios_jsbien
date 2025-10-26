//Leer tres números que denoten una fecha (día, mes, año). Comprobar que es una fecha válida. Si no es válida escribir un mensaje de error.
//Si es válida escribir la fecha cambiando el número del mes por su nombre.
//Ej. si se introduce 1 2 2006, se deberá imprimir “1 de febrero de 2006”.
//El año debe ser mayor que 0.
let prompt = require('prompt-sync')();
let formato0k = true;
let dia = Number(prompt('Introduzca dia: '));
let mes = Number(prompt('Introduzca mes: '));
let año = Number(prompt('Introduzca año: '));

if (Number.isNaN(dia)) {
    console.log('Formato incorrecto de dia');
    formato0k = false;
}


if (Number.isNaN(mes)) {
    console.log('Formato incorrecto de mes');
    formato0k = false;
}

if (Number.isNaN(año)) {
    console.log('Formato incorrecto de año');
    formato0k = false;

 
}
if (año<=0) {
    console.log('El año no es válido.');
    formato0k = false;
}   
if (formato0k) {
    switch (mes) {
        case 1:
            if (dia>31 || dia<=0) {
                console.log('El día no es válido');
            } else if (dia<=31) {
                console.log(`La fecha es: ${dia} de enero de ${año}`);
            }
            break;

        case 2:
             if (dia>29 || dia<=0) {
                console.log('El día no es válido');
            } else if (dia<=29) {
                console.log(`La fecha es: ${dia} de febrero de ${año}`);
            }
            break;

        case 3:
             if (dia>31 || dia<=0) {
                console.log('El día no es válido');
            } else if (dia<=31) {
                console.log(`La fecha es: ${dia} de marzo de ${año}`);
            }
            break;

        case 4:
             if (dia>30 || dia<=0) {
                console.log('El día no es válido');
            } else if (dia<=30) {
                console.log(`La fecha es: ${dia} de abril de ${año}`);
            }
            break;

        case 5:
             if (dia>31 || dia<=0) {
                console.log('El día no es válido');
            } else if (dia<=31) {
                console.log(`La fecha es: ${dia} de mayo de ${año}`);
            }
            break;

        case 6:
             if (dia>30 || dia<=0) {
                console.log('El día no es válido');
            } else if (dia<=30) {
                console.log(`La fecha es: ${dia} de junio de ${año}`);
            }
            break;

        case 7:
             if (dia>31 || dia<=0) {
                console.log('El día no es válido');
            } else if (dia<=31) {
                console.log(`La fecha es: ${dia} de julio de ${año}`);
            }
            break;

        case 8:
             if (dia>31 || dia<=0) {
                console.log('El día no es válido');
            } else if (dia<=31) {
                console.log(`La fecha es: ${dia} de agosto de ${año}`);
            }
            break;

        case 9:
             if (dia>30 || dia<=0) {
                console.log('El día no es válido');
            } else if (dia<=30) {
                console.log(`La fecha es: ${dia} de septiembre de ${año}`);
            }
            break;

        case 10:
             if (dia>31 || dia<=0) {
                console.log('El día no es válido');
            } else if (dia<=31) {
                console.log(`La fecha es: ${dia} de octubre de ${año}`);
            }
            break;

        case 11:
             if (dia>30 || dia<=0) {
                console.log('El día no es válido');
            } else if (dia<=30) {
                console.log(`La fecha es: ${dia} de noviembre de ${año}`);
            }
            break;
            
        case 12:
              if (dia>31 || dia<=0) {
                console.log('El día no es válido');
            } else if (dia<=31) {
                console.log(`La fecha es: ${dia} de diciembre de ${año}`);
            }
            break;
    
        default:
            console.log('El mes no es válido');
            break;
    }
}
