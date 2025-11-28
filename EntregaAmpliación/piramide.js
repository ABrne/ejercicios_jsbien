let prompt = require('prompt-sync')();
let altura = Number(prompt('Introduce la altura de la pirámide: '));
 
  if (altura <= 0) {
    console.log(-1);
  } else {
    console.log(0);
  }
let contador=0;
  for (let i = altura; i >= 1; i--) {
      let linea = "";

  for (let j = 0; j <= i-1; j++) {
      linea += " ";
  }

  for (let k = 0; k <= contador ; k++) {
      linea += "*";
      
  }
  contador=contador+2;
    console.log(linea);
  }

  