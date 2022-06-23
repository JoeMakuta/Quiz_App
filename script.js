

let myStartButton = document.querySelector("#startButton")
let firstInput = document.getElementById("firstInput")
let secondInput = document.getElementById("secondInput")
let login = document.querySelector(".login")
let questions = document.querySelector(".questions")
let resultContainer = document.querySelector(".resultContainer")
let timer = document.getElementById("timer")
let homePageB = document.getElementById("homePageB")
let userName = document.querySelector("#userName")
let userEmail = document.querySelector("#userEmail")
let quitButton = document.querySelector(".quitButton")
let span1 = document.querySelector(".firstInput>span")
let span2 = document.querySelector(".secondInput>span")

let timerWidth = 100;
let startTime = 59;
let coutDown = document.getElementById("coutDown")

const print = console.log.bind(globalThis);

function counter() {
   if (startTime >= 0) {
      coutDown.textContent = `${startTime}`
      timerWidth = timerWidth - (10 / 6)
      timer.style.width = `${timerWidth}%`;
      startTime--;
      ;
   }
}

function clickCommencer() {
   const regex1 = /^([a-z A-Z]{4,50})$/;
   const regex2 = /^([a-zA-Z\._\-0-9]{4,50})@([a-zA-Z0-9]{3,10})\.([a-zA-Z]{2,5})$/;
   if (regex1.test(firstInput.value) && regex2.test(secondInput.value)) {
      login.style.display = "none"
      questions.style.display = "block"
      resultContainer.style.display = "none"
      userName.textContent = firstInput.value;
      userEmail.textContent = secondInput.value
      setInterval(counter, 1000)
   }
}

function firstInputListen() {
   print("The input works ...")
   let regex = /^([a-z A-Z]{4,50})$/;
   if (!regex.test(firstInput.value)) {
      firstInput.style.color = "red";
      span1.textContent = "N’oubliez pas de renseigner votre nom avant de commencer le Quiz. ."
      span1.style.color = "red"
      span1.style.fontSize = "10px"
      firstInput.style.border = " 1px solid rgba(255, 56, 56, 1)"
   } else {
      firstInput.style.color = "black";
      span1.textContent = ""
      firstInput.style.border = " 1px solid black";

   }
}

function secondInputListen() {
   print("The input works ...")
   let regex = /^([a-zA-Z\._\-0-9]{4,50})@([a-zA-Z0-9]{3,10})\.([a-zA-Z]{2,5})$/;
   if (!regex.test(secondInput.value)) {
      secondInput.style.color = "red";
      span2.textContent = "N’oubliez pas de renseigner votre email avant de commencer le Quiz"
      span2.style.color = "red"
      span2.style.fontSize = "10px"
      secondInput.style.border = " 1px solid rgba(255, 56, 56, 1)"

   } else {
      secondInput.style.color = "black";
      span2.textContent = ""
      secondInput.style.border = " 1px solid black";
   }
}


firstInput.addEventListener("input", firstInputListen);

secondInput.addEventListener("input", secondInputListen);


myStartButton.addEventListener('click', clickCommencer);



homePageB.addEventListener("click", function () {
   window.open("index.html", "_top")
});

quitButton.addEventListener("click", function () {
   login.style.display = "none"
   questions.style.display = "none"
   resultContainer.style.display = "block"

});