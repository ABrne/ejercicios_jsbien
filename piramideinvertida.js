let prompt = require('prompt-sync')();
let altura = Number(prompt('Introduce la altura de la pirámide: '));

//Divide y vencerás - Napoleón

if (altura<=0) {
    console.log('-1');
} else {
    console.log('0');
}
let numasterisco = 1;
let contador = 0;
while (contador < altura) {
    //process.stdout.write(' '.repeat(contador));
    process.stdout.write(' '.repeat(altura-1 - contador));

    //process.stdout.write('*'.repeat(altura-(altura-1) -2*contador));

    process.stdout.write('*'.repeat(numasterisco));
    process.stdout.write('\n');

    numasterisco+=2;
    contador++;
    
}




    