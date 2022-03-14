let arrayBase = [];

for (let i = 0; i < 50; i += 1){
	arrayBase.push(i + 1)
}

let maiorPrimo;

for (let i = arrayBase.length; i > 0; i -= 1) {
  let div = 0;
  for (let z = 0; z <= i; z += 1) {
    if (i % arrayBase[z] === 0) {
      div += 1;
    }
  }
  
  if (div === 2) {
    maiorPrimo = i;
    break;
  }
}

console.log(maiorPrimo)
//com os ajustes do amigo ze lucas, da tribo 21A