let adviceIndex = document.querySelector("small");
let advice = document.querySelector("p");
let dice = document.querySelector(".dice");
let xmlhttp = new XMLHttpRequest();
function generate(){
       let  response = JSON.parse(xmlhttp.responseText);
       adviceIndex.textContent = response.slip.id;
        advice.textContent = response.slip.advice;
        console.log(response.slip.advice);
        console.log(xmlhttp.responseText);
}

xmlhttp.open("get", "https://api.adviceslip.com/advice");
xmlhttp.send();

// generate();
dice.addEventListener("click", generate);
