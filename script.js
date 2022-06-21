

let myButton = document.querySelector(".startButton")
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


let timerWidth = 100;
let startTime = 59;
let coutDown = document.getElementById("coutDown")
function counter() {
   if (startTime >= 0) {
      coutDown.textContent = `${startTime}`
      timerWidth = timerWidth - (10 / 6)
      timer.style.width = `${timerWidth}%`;
      startTime--;
      ;
   }
}

myButton.addEventListener('click', function () {

   if (firstInput.value == "" || secondInput.value == "") {
      if (firstInput.value == "") {
         let span1 = document.querySelector(".firstInput>span")
         span1.textContent = "N’oubliez pas de renseigner votre nom avant de commencer le Quiz. ."
         span1.style.color = "red"
         span1.style.fontSize = "10px"
         document.querySelector("#firstInput").style.border = " 1px solid rgba(255, 56, 56, 1)"
      } else if (secondInput.value == "") {
         let span2 = document.querySelector(".secondInput>span")
         span2.textContent = "N’oubliez pas de renseigner votre email avant de commencer le Quiz"
         span2.style.color = "red"
         span2.style.fontSize = "10px"
         document.querySelector("#secondInput").style.border = " 1px solid rgba(255, 56, 56, 1)"
      }

   }
   else {
      login.style.display = "none"
      questions.style.display = "block"
      resultContainer.style.display = "none"
      userName.textContent = firstInput.value;
      userEmail.textContent = secondInput.value
      setInterval(counter, 1000)
   }
});

homePageB.addEventListener("click", function () {
   window.open("index.html", "_top")
});

quitButton.addEventListener("click", function () {
   login.style.display = "none"
   questions.style.display = "none"
   resultContainer.style.display = "block"
   
});