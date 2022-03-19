function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
//Ex1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for(let i = 0; i < dezDaysList.length; i += 1) {
    let dias = document.createElement('li');
    dias.classList = 'day';
    dias.innerText = dezDaysList[i];
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
        dias.className += ' holiday';
    }
    if (dezDaysList[i] === 4 || dezDaysList[i] === 25 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
        dias.className += ' friday';
    }
    document.getElementById('days').appendChild(dias);
}

//EX2
    let button = document.createElement('button');
function botao(Feriados) {
    button.innerText = Feriados;
    document.getElementsByClassName('buttons-container')[0].appendChild(button);
}

//EX3
button.addEventListener('click', corFeriados)
let feriados = document.querySelectorAll('.holiday');
function corFeriados() {
    for(let i = 0; i < feriados.length; i += 1) {
        if (feriados[i].className.includes('alter')) {
            feriados[i].style.backgroundColor = "rgb(238,238,238)"
            feriados[i].classList.remove('alter');
        }
        else{
        feriados[i].style.backgroundColor = "rgb(220,338,300)"
        feriados[i].className += ' alter';
        }
    }
}

//EX4
let BTNSexta = document.createElement('button');
function criarBTNSexta(string) {
    BTNSexta.id = "btn-friday";
    BTNSexta.innerText = string;
    document.getElementsByClassName('buttons-container')[0].appendChild(BTNSexta);
}

//EX5
BTNSexta.addEventListener('click', sextou);
let sextas = document.getElementsByClassName('friday');
let sextasArray = [];
for(let i = 0; i < sextas.length; i += 1) {
    let item = sextas[i].innerText;
    sextasArray.push(item);
}
function sextou() {
    for(let i = 0; i < sextas.length; i += 1) {
        if (sextas[i].innerText.includes('SEXTOU')) {
            sextas[i].innerHTML = sextasArray[i];
        }
        else {
            sextas[i].innerText = 'SEXTOU !';
        }
    }
}

// EX5 NAO ENTENDI PQ NAO DEU
// BTNSexta.addEventListener('click', sextou);
// let sextas = document.getElementsByClassName('friday');
// let newtxt = 'SEXTOU !'
// function sextou() {
//     for(let i = 0; i < sextas.length; i += 1) {
//         if (sextas[i].innerText.includes('SEXTOU')) {
//             sextas[i].innerHTML = document.getElementsByClassName('friday')[i];
//             sextas[i].classList.remove('alter');
//         }
//         else {
//             sextas[i].innerText = newtxt;
//             sextas[i].className += ' alter';
//         }
//     }
// }


botao('Feriados')
criarBTNSexta("Sexta-feira")

