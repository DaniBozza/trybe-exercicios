document.querySelector("#header-container").style.background = "green";
document.querySelector(".emergency-tasks").style.background = "lightsalmon";
document.querySelector(".no-emergency-tasks").style.background = "yellow";
document.querySelector(".emergency-tasks h3").style.background = "purple";
document.getElementsByTagName("h3")[1].style.background = "purple";


let tag = document.querySelectorAll(".no-emergency-tasks h3");
for(let i = 0; i< tag.length; i += 1){
    tag[i].style.backgroundColor = "black";
}
document.querySelector("#footer-container").style.background = "green";