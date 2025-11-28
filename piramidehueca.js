let prompt= require('prompt-sync')();
let altura= Number(prompt('Introduce la altura de la pirámide: '));

for (let i=0;i<altura;i++) {

    let linea="";  

    for (let s = 0; s < altura - 1 - i; s++) {
        linea += " ";
    }


    if (i==0) {
        linea+= '*';

    } else if (i==altura-1) {

        for (let x=0;x<(altura*2)-1;x++){
            linea+='*';
        }    

    } else {
        linea+='*';

        for (let j=0;j<2*i-1;j++) {
            linea+=' ';
        }

        linea+='*';
    }
    
   console.log(linea);
}