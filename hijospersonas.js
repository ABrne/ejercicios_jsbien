let prompt = require('prompt-sync')();
let personas = Number(prompt('Introduce el número de personas: '));
let contador = 1;
let hijostotales = 0;
let maxhijos = 0;
let minhijos = Infinity;
let pershijos = 0;
let persnohijos = 0;
let hijos = 0;
while (contador<=personas) {
    hijos = Number(prompt(`Numero de hijos de la persona ${contador}=`));
    contador++;

hijostotales+=hijos;

if (hijos > 0) {
    pershijos++;
} else {
    persnohijos++;
}

if (hijos>maxhijos) {
    maxhijos=hijos;
}
if (hijos<minhijos) {
    minhijos = hijos;
}
}
console.log(`Hay ${pershijos} que tienen hijos.`);
console.log(`Hay ${persnohijos} que no tienen hijos.`);
console.log(`La media de hijos sería ${hijostotales/personas}.`);
console.log(`El número máximo de hijos sería ${maxhijos}.`);
console.log(`El número mínimo de hijos sería ${minhijos}.`);