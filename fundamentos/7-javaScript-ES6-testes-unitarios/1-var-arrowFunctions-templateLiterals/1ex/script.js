// 1
// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);
     
// function testingScope(escopo) {
//     console.log(escopo 
//         ? 'Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !'
//         : 'Não devo ser utilizada fora meu escopo (else)');
// }

// testingScope(true);




// 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const selecionaMaior = (maior, listaDeNumeros) => {
    let index = 0;
    for (let i = 0; i < listaDeNumeros.length; i += 1) {
        if (maior <= listaDeNumeros[i]) {
            maior = listaDeNumeros[i];
            index = i;
        }
    }
    return {maior, index};
}
    
const ordenaArray = (listaDeNumeros) => {
    let arrayCrescente = [];
    let objeto = {};
    for (let j = listaDeNumeros.length - 1; j >= 0; j -= 1) {
        let maior = listaDeNumeros[j];
        objeto = selecionaMaior(maior, listaDeNumeros);
        listaDeNumeros.splice(objeto.index, 1);
        arrayCrescente.unshift(objeto.maior);
    }
        
    return arrayCrescente;
}

console.log(ordenaArray(oddsAndEvens)); // será necessário alterar essa linha 😉



