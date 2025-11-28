let prompt = require('prompt-sync')();
let altura = Number(prompt('Introduce la altura de la pirámide: '));
let contador=0;

for (let i = altura; i >= 1; i--) {
    let linea = ""; 
 for (let j = 0; j < i-1; j++) {
     linea +=" ";
}
for (let k = 0; k <=contador; k++) {
     linea+="*";
}
contador=contador+2;
    console.log(linea);
}

let altura2=altura

for (let i=0;i<altura;i++) {
 let linea2="";
    for (let j=0;j<i;j++) {
       linea2+=" ";
    }
    for (let k=0;k<(altura2*2)-1;k++) {
       linea2+="*";
       
    }
    altura2--;
    console.log(linea2);
}

