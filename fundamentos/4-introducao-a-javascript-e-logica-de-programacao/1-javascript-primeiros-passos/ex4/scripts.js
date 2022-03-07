
//Exercício de && E

const curentHour = 10;
var message = "";

if(curentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir"

}
else if(curentHour >= 18 && curentHour < 22) {
    message = "Rango da noite, vamos jantar :D"
 
}
else if(curentHour >= 14 && curentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?"

}
else if(curentHour >= 11 && curentHour < 14) {
    message = "Hora do almoço!!!"
  
}
else if(curentHour >= 4 && curentHour < 11) {
    message = "Hmmm, cheiro de café recém passado"
    
}
console.log(message);

//Exercício de || OU

var weekDay = "ter"

if (weekDay === "sabado" || weekDay === "domingo") {
    console.log("FINALMENTE, descanso merecido UwU")
}
else {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}

//NOT !

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); 