// // Ex1

// let fatorial = 1;
// // for(let i = 1; i <= 10; i += 1){
//     fatorial *= i;
// }
// console.log(fatorial);

// let word = 'tryber';
// for(letter of word){
//     console.log(letter);
// }

// //Ex2
// let word = 'poligono';
// let arrayWord = word.split("")
// console.log(arrayWord);
// let arrayWord2 = [];
// for(let i = arrayWord.length - 1; i >= 0; i -= 1){
//     arrayWord2.push(arrayWord[i]);

// }
// console.log(arrayWord2);
// word = arrayWord2.join("");
// console.log(word);

// //Ex3
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maior = array[0];
// for(let i = 0; i < array.length; i += 1) {
//     if(maior.length < array[i].length){
//         maior = array[i];
//     }
// }
// console.log(maior);

// let menor = array[0];
// for(let i = 0; i < array.length; i += 1) {
//     if(menor.length > array[i].length){
//         menor = array[i];
//     }
// }
// console.log(menor);

//Ex4

let maiorPrimo = 0;
let arrayBase = [];
let arrayPrimos = [];
let div = 0;
for (let i = 0; i <= 50; i += 1) {
  arrayBase.push(i);
  div = 0;
  for (let z = 0; z <= i; z += 1) {
    if (arrayBase[z] != 0) {
      if (i % arrayBase[z] === 0) {
        div += 1;
      }
    }
  }
  if (div === 2) {
    maiorPrimo = i;
    arrayPrimos.push(maiorPrimo);
  }
}
console.log(arrayPrimos);
console.log(maiorPrimo);
