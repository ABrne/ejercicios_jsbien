let prompt = require('prompt-sync')();

let trabajadores = Number(prompt('Introduce el número de trabajadores: '));

let contador = 1;

let validación=true;

if (trabajadores<=0) {
    validación=false;
    console.log('No se pueden incluir valores negativos o 0.');
}

if (validación) {
while (contador<=trabajadores) {
    let horas = Number(prompt(`Introduce el número de horas trabajadas del trabajador ${contador}: `));
    let puesto = (prompt(`Introduce el puesto del trabajador ${contador}: `));
    let salario1=0;
    let salariototal=0;

    switch (puesto) {
        case 'licenciado':
            salario1=horas*100;
        break;
        case 'técnico':
             salario1=horas*100;
        break;
        case 'obrero':
             salario1=horas*100;
        break;
    
        default:
            console.log('Ese oficio no esta registrado.');
            salario1=salario1*0;
            break;
    }
    let turno = (prompt(`Introduce el turno de trabajo del trabajador ${contador}: `));

    switch (turno) {
        case 'primero':
            salariototal=salario1+200;
            break;
        case 'segundo':
            salariototal=salario1+100;
            break;
        case 'tercero':
            salariototal=salario1+300;
            break;
        default:
            console.log('Ese turno no existe.');
            salariototal=salario1;
            break;
    }

    console.log(`El sueldo del trabajador ${contador} es ${salariototal} euros.`);
    contador++;
}
}