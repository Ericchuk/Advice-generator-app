let adviceIndex = document.querySelector("small");
let advice = document.querySelector("p");
let dice = document.querySelector(".dice");
// let xmlhttp = new XMLHttpRequest();
// xmlhttp.onload = function(){
//        let  response = JSON.parse(xmlhttp.responseText);
//        adviceIndex.textContent = response.slip.id;
//         advice.textContent = `"${response.slip.advice}"`;
//         adviceIndex.textContent = response.slip.id;
//         dice.onclick = function(){
//               window.location.reload();
//               console.log("www");
//               advice.textContent = response.slip.advice;
//               adviceIndex.textContent = response.slip.id;
//         }
       
// }

// xmlhttp.send();

let url = "https://api.adviceslip.com/advice";

async function getData(){
       let response = await fetch(url)
       let result = await response.json();
       // console.log(result);
       advice.textContent = `"${result.slip.advice}"`;
       adviceIndex.textContent = result.slip.id;
}

getData();
dice.addEventListener("click", getData);