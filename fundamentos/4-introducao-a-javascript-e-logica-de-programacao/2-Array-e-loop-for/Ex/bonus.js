let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }


  console.log(array);

  array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] > array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
  
  console.log(array);

array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 0; i < array.length; i += 1){
    if(i === array.length-1){
        array[i] * 2;
    } else{
    array[i] = array[i] * array[i+1];
    }
}
console.log(array);

// j1 = "papel";
// j2 = "tesoura";

//     if (j1+j2 === "papeltesoura" || j1+j2 === "tesourapedra" || j1+j2 === "pedrapapel"){
//         console.log("jogador 2 venceu");
//     }else if (j1+j2 === "tesourapapel" || j1+j2 === "pedratesoura" || j+j2 === "papelpedra"){
//         console.log("jogador 1 venceu");
//     } else{
//         console.log("empate");
//     }

