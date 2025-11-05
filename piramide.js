let prompt = require('prompt-sync')();
let altura = Number(prompt('Introduce la altura de la pirámide: '));
 
  if (altura <= 0) {
    console.log(-1);
  } else {
    console.log(0);
  }

  for (let i = altura; i >= 1; i--) {
    let linea = "";

  for (let j = 0; j < altura - i; j++) {
      linea += " ";
  }

  for (let k = 0; k < (2 * i - 1); k++) {
      linea += "*";
  }

    console.log(linea);
  }

  