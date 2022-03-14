// //Bonus1
// let n = 2;
// let array = [];
// for(let i = 1; i <= n; i += 1){
//     array.push("*");
// }
// for(let i = 1; i <=n; i += 1){
// console.log(array.join(""));
// }

// //Bonus2
// let n = 5;
// let array = [];
// for(let z = 1; z <= n; z += 1){
//         array.push("*");
//     for(let i = 1; i <=n; i += 1){
//     }
//     console.log(array.join(""));
// }

// //Bonus3
// let n = 5;
// let array = [];
// let arraysub = [];
// for(let z = 1; z <= n; z += 1){
//         array.push(" ");
// }
// for(let i = n; i >= 0; i -= 1){
//     let y = 1;
//     y += 1;
    
//     array.splice(i-1, y, arraysub.join(""));
//     arraysub.push("*");
//     console.log(array);
//     console.log(array.join(''));
// }

// //Bonus3
// let n = 5;
// let array = [];
// for(let i = 1; i <= n; i += 1){
//     array.push(" ");
// }

// for(let i = n; i >=0; i -= 1){
//     console.log(array.join(""));
//     array[i] = "*";

// }


// //Bonus4
// let n = 5;
// let array = [];
// for(let i = 1; i <= n; i += 1){

//     array.push(" ");
// }

// for(let i = 0; i <= n; i += 1){
//     console.log(array.join(""));
//     array[i] = "*";

// }

// //Ex1.1
// let word = "";
// let n = 5;
// for (let i = 1; i <= n; i += 1){
//     word += "*";
// }
// for(let i = 1; i <= n; i += 1){
//     console.log(word);
// }

// //Ex2.2
// let word = "";
// let n = 5;
// for (let i = 1; i <= n; i += 1){
//     word += "*";
//     console.log(word);
// }


// //Ex3.1
// let array3 = [];
// let n = 5;
// for (let i = 1; i <= n; i += 1){
//     array3.push(" ");  
// }
// for(let i = n-1; i >= 0; i -= 1){
//     array3[i] = "*"
//     console.log(array3.join(""));
// }

//Ex3.2
let n = 5;
let word = ""
for(let lin = 0; lin < n; lin += 1){
    for(let col = 0; col <= n; col += 1){
        if (col < n){
            word = word + " ";
        } else {
            word = word + "*";
        }
    }
    console.log(word);
    word = "";
    n -= 1;
}









