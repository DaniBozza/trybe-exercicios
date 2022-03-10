// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// console.log(tasksList.length);
// // 3


// let searchForFirstTask = tasksList[0];
// console.log(searchForFirstTask);
// // Tomar café

// let searchForLastTask = tasksList[tasksList.length - 1];
// console.log(searchForLastTask);
// // Brincar com o cachorro

// tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
// console.log(tasksList);

// // ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// tasksList.unshift('dormir');  // adiciona mais uma tarefa
// console.log(tasksList);


// tasksList.pop();  // remove a última tarefa
// console.log(tasksList);

// // [ 'Tomar café', 'Reunião' ]


// tasksList.shift();  // remove a última tarefa
// console.log(tasksList);

// // [ 'Tomar café', 'Reunião' ]


// let indexOfTask = tasksList.indexOf('Reunião');
// console.log(indexOfTask);

// // 1

// //Ex1
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

// //Ex2
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);


// //Ex3
// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.push('Contato');
// console.log(menu);

// //Ex4
// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index = 0; index < cars.length; index += 1) {
//   console.log(cars[index]);
// }

// //Ex 5
// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let i = 0; i < groceryList.length; i += 1) {
//     console.log(groceryList[i]);
// }

// //Ex6
// let numeros = [1,2,3,4,5];
// for(let numero of numeros) {
//   console.log(numero);
// }

// // resultado: 
// //1
// //2
// //3
// //4
// //5

// //Ex7
// let word = 'Hello';
// for (let letter of word) {
//   console.log(letter);
// }
// // resultado:
// // "H"
// // "e"
// // "l"
// // "l"
// // "o"

// //Ex8

// let arrOfNumbers = [10, 20, 30];
// for (let sum of arrOfNumbers) {
//   sum += 1;
//   console.log(sum);
// }
// // 11
// // 21
// // 31

//Ex9
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for( let name of names) {
    console.log(name);
}




