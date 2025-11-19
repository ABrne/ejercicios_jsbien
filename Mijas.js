let prompt = require('prompt-sync')();





function LeerVotosCandidiatoConValidación(candidato) {
    let num=0;
    do {
        num = Number(prompt(`Introduzca votos del candidato ${candidato}: `));
        if (Number.isNaN(num)){
            console.log(`Formato de números incorrecto.`)
        }
      } while (!Number.isNaN);
      return num;
    }
 let alcalde = '';
 let contador = 1;
 let votos1 = 0;
 let votos2 = 0;
 let votos3 = 0;
 let votostotales = 0;
 let max=-Infinity;


 while (contador<=3) {
    let votos = LeerVotosCandidiatoConValidación((contador));
    votostotales = votos + votostotales;
    if (votos > max) {
        alcalde =`candidato ${contador}`;
        max = votos;
    }

    switch (contador) {
        case 1:
            votos=votos1;
            break;
        case 2:
            votos=votos2;
            break;
        case 3:
            votos=votos3;
            break;
        default:
            break;
    }
    contador++;
 }



console.log(`El alcalde de Mijas es el ${alcalde}`);
console.log(`Los votos totales han sido ${votostotales}.`);
console.log(`Votos del candidato 1= ${votos1}. Porcentaje del candidato 1=${votos1*100/votostotales}%`);
console.log(`Porcentaje del candidato 2=${votos2*100/votostotales}%`);
console.log(`Porcentaje del candidato 3=${votos3*100/votostotales}%`);