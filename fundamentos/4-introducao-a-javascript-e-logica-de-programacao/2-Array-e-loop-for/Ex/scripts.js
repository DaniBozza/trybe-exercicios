// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// // for(let i = 0; i < numbers.length; i += 1) {
// //     console.log(numbers[i]);
// // }

// let soma = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   soma += numbers[i];
// }
// console.log(soma);

// soma = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//   soma += numbers[i];
// }
// let media = soma/numbers.length
// console.log(media);

// if (media > 20) {
//     console.log('Valor maior que 20');
// }else{
//     console.log('Menor que 20');
// }

// let maior = numbers[0];
// for (let i = 0; i < numbers.length; i += 1){
//     if(maior < numbers[i]){
//         maior = numbers[i]
//     }
// }
//  console.log(maior);

// let impar = 0;
// for(let i = 0; i < numbers.length; i += 1){
//     if(numbers[i] % 2 === 1){
//         impar += 1;
//     }
// }
// if(impar > 1){
// console.log(impar);
// } else{
//     console.log("nenhum valor ímpar encontrado");
// }

// let menor = numbers[0];
// for (let i = 0; i < numbers.length; i += 1){
//     if(menor > numbers[i]){
//         menor = numbers[i]
//     }
// }
//  console.log(menor);

let array = [];
for(let i=1; i<=25; i+=1) {
    array.push(i);
}
console.log(array);

for(let i=0; i<=24; i+=1){
    array[i] = array[i]/2;
}
console.log(array);
