const myStartButton = document.querySelector("#startButton")
const firstInput = document.getElementById("firstInput")
const secondInput = document.getElementById("secondInput")
const login = document.querySelector(".login")
const questions = document.querySelector(".questions")
const resultContainer = document.querySelector(".resultContainer")
const timer = document.getElementById("timer")
const homePageB = document.getElementById("homePageB")
const userName = document.querySelector("#userName")
const userEmail = document.querySelector("#userEmail")
const span1 = document.querySelector(".firstInput>span")
const quitButton = document.querySelector(".quitButton")
const nextButton = document.querySelector(".nextButton")
const span2 = document.querySelector(".secondInput>span")
const myForm = document.getElementById("myForm")
const myRadioButtons = document.querySelectorAll(".myRadioInputClass")
const userScore = document.getElementById("score")
const failure = document.getElementById("failure")
const success = document.getElementById("success")
const label = document.querySelectorAll(".assert")

const questionList = [
   {
      question: "Quel est le type d un fichier javascript'",
      answer1: '.ts',
      answer2: '.jsx',
      answer3: '.js',
      answer4: '.j',
      rightAnswer: 2
   },
   {
      question: "Dans quel balise HTML plaçons-nous le code JavaScript?",
      answer1: 'La balise js',
      answer2: 'La balise javascript',
      answer3: 'la balise script',
      answer4: 'la balise rel',
      rightAnswer: 2
   },
   {
      question: "Comment faire appelle à une fonction nommée « sum »?",
      answer1: 'sum()',
      answer2: 'call function sum()',
      answer3: 'call sum()',
      answer4: 'aucune bonne reponse',
      rightAnswer: 0
   },
   {
      question: "Quelle est la syntaxe correcte pour faire référence à un script externe appelé « myscript.js »?'",
      answer1: '<script href="myscript.js">',
      answer2: '<script name="myscript.js">',
      answer3: '<script src="myscript.js">',
      answer4: 'Tout les réponses sont vrais',
      rightAnswer: 2
   },
   {
      question: "Quel est le bon endroit pour insérer un code JavaScript ?",
      answer1: 'La section <head>',
      answer2: ' <head> et <body> ',
      answer3: 'La section <body>',
      answer4: 'Aucune de ces réponses n’est vraie.',
      rightAnswer: 1
   },
   {
      question: "Comment écrivez-vous « Hello World » dans une boîte d’alerte?",
      answer1: 'msg("Hello World");',
      answer2: 'alert("Hello World");',
      answer3: 'msgBox("Hello World");',
      answer4: 'alertBox("Hello World");',
      rightAnswer: 1
   },
   {
      question: "Comment écrire une condition IF en JavaScript?",
      answer1: 'if a = 2 then',
      answer2: 'if a = 2',
      answer3: 'if a == 2 else',
      answer4: 'if (a == 2)',
      rightAnswer: 3
   },
   {
      question: "Comment écrire une condition IF pour vérifier si « a » n’est PAS égal à 2?'",
      answer1: 'if a <> 2',
      answer2: 'if (a != 2)',
      answer3: 'if a =! 2 then',
      answer4: 'if (a <> 2)',
      rightAnswer: 1
   },
   {
      question: "Comment créer une fonction en JavaScript?",
      answer1: 'function f()',
      answer2: 'function = f()',
      answer3: 'function:f()',
      answer4: 'Aucune de ces réponses n’est vraie.',
      rightAnswer: 0
   },
   {
      question: "Quelle est la syntaxe correcte pour vérifier la valeur de « c » ?",
      answer1: 'if (c == "XYZ") then { } else { }',
      answer2: 'if (c = "XYZ") then { } else { }',
      answer3: 'if (c == "XYZ") { } else { }',
      answer4: 'if (c = "XYZ") { } else { }',
      rightAnswer: 2
   },
   {
      question: "Quelle est la syntaxe pour cree une constante en javascript ?",
      answer1: 'tar',
      answer2: 'constante',
      answer3: 'constan',
      answer4: 'const',
      rightAnswer: 3
   },
   {
      question: "Dans quelle balise Html est conseillé de placer le chemin du script?",
      answer1: 'html',
      answer2: 'head',
      answer3: 'body',
      answer4: 'footer',
      rightAnswer: 1
   },
   {
      question: "Pourquoi on met le script en bas dans la balyse body?",
      answer1: 'pour qu il soit lu en dernier',
      answer2: 'pour le design',
      answer3: 'pour le style',
      answer4: 'pour la forme',
      rightAnswer: 0
   },
   {
      question: "N'est pas une methode d'objet en js'?",
      answer1: 'compile()',
      answer2: 'exec()',
      answer3: 'test()',
      answer4: 'var',
      rightAnswer: 3
   },
   {
      question: "Comment declarer une expression reguliere en Js ?",
      answer1: 'let regex = /expression/',
      answer2: 'let regex = expression',
      answer3: 'let regex new = expression',
      answer4: 'let regex = "expression"',
      rightAnswer: 0
   },
   {
      question: "",
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      rightAnswer: ""
   }

]

let coutDown = document.getElementById("coutDown")

const print = console.log.bind(globalThis);

let score = 0;
let currentQuestion = -1;
let userRightAnswer;

//COUNTER

let timerWidth = 100;
let startTime = 59;
function counter() {
   if (startTime >= 0) {
      coutDown.textContent = `${startTime}`
      timerWidth = (timerWidth - (100 / 60))
      timer.style.width = `${timerWidth}%`;
      startTime--;
      ;
   } else {
      for (let i = 0; i < 4; i++) {
         if (myAnswers[i].checked) {
            userRightAnswer = i;
         }
      }
      if (questionList[currentQuestion - 1] && userRightAnswer == questionList[currentQuestion - 1].rightAnswer) {
         score++;
         print("Succeed, Your score is : " + score)
      }
      clickNextButton();
   }
}

//START BUTTON CLICK
const regex1 = /^([a-zA-Zéàèçïô]{3,50})$/;
const regex2 = /^([a-zA-Z\._\-0-9]{3,50})@([a-zA-Z0-9]{3,10})\.([a-zA-Z]{2,5})$/;
function clickCommencer() {

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
   if (!regex1.test(firstInput.value)) {
      firstInput.style.color = "red";
      span1.textContent = "N’oubliez pas de renseigner votre nom avant de commencer le Quiz."
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

   if (!regex2.test(secondInput.value)) {
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

// QUESTIONS 

const questionText = document.getElementById("questionText")
const questionNumber = document.getElementById("questionNumber")

const answer1 = document.getElementById("answer1")
const answer2 = document.getElementById("answer2")
const answer3 = document.getElementById("answer3")
const answer4 = document.getElementById("answer4")

const myAnswers = document.querySelectorAll(".myRadioInputClass")



//print the question 0/15
questionNumber.textContent = `Question ${currentQuestion + 1}/15`;



// Ckeck if a radio is selected before you press next
function checkRadioCheckedBeforeClick() {
   for (let i = 0; i < 4; i++) {
      if (myAnswers[i].checked) {
         userRightAnswer = i;
         clickNextButton();
      }
   }
}

function clickNextButton() {

   currentQuestion++;
   //Initialize the timer 
   timerWidth = 100;
   startTime = 59;
   // setInterval(counter, 1000)

   //print the question 0/15
   questionNumber.textContent = `Question ${currentQuestion + 1}/15`;


   //Go to the score page if the number of question is 15
   if (currentQuestion == 15) {
      if (score < 8) {
         success.style.display = 'none'
      } else {
         failure.style.display = 'none'
      }
      userScore.textContent = `${score}/15`
      login.style.display = "none"
      questions.style.display = "none"
      resultContainer.style.display = "block"
   } else if (currentQuestion == 14) {
      nextButton.textContent = "Terminer"
   }
   //Deselect elements
   myAnswers.forEach(element => element.checked = false);
   nextButton.style.opacity = "0.4"

   // Add score if succeed

   if (questionList[currentQuestion - 1] && userRightAnswer == questionList[currentQuestion - 1].rightAnswer) {
      score++;
   }
   //Changes of the question
   const currentQuestionData = questionList[currentQuestion]
   // print(currentQuestionData)
   questionText.textContent = currentQuestionData.question;
   answer1.textContent = currentQuestionData.answer1
   answer2.textContent = currentQuestionData.answer2
   answer3.textContent = currentQuestionData.answer3
   answer4.textContent = currentQuestionData.answer4
}

myForm.addEventListener


clickNextButton();

nextButton.addEventListener("click", checkRadioCheckedBeforeClick)

nextButton.style.opacity = "0.4"

// Enable the next button when select the radio
for (let i = 0; i < myRadioButtons.length; i++) {
   myRadioButtons[i].addEventListener("input", function () {
      nextButton.style.opacity = "1"
   })
}

//

firstInput.addEventListener("input", firstInputListen);

secondInput.addEventListener("input", secondInputListen);


myForm.addEventListener('submit', (e) => {
   e.preventDefault();
});

homePageB.addEventListener("click", function () {
   location.reload()
});

quitButton.addEventListener("click", function () {
   if (score < 8) {
      success.style.display = 'none'
   } else {
      failure.style.display = 'none'
   }
   userScore.textContent = `${score}/15`
   login.style.display = "none"
   questions.style.display = "none"
   resultContainer.style.display = "block"
});