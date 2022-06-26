
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


let coutDown = document.getElementById("coutDown")

const print = console.log.bind(globalThis);

//COUNTER

let timerWidth = 100;
let startTime = 59;
function counter() {
   if (startTime >= 0) {
      coutDown.textContent = `${startTime}`
      timerWidth = timerWidth - (100 / 60)
      timer.style.width = `${timerWidth}%`;
      startTime--;
      ;
   }
}

//CHECK RADIO BUTTONS


// function radionButtonChecked() {
//    for (let i = 0; i < myRadioButtons.length; i++) {
//       if (myRadioButtons[i].checked) {
//          print(myRadioButtons[i])
//       }
//    }
// }
// for (let i = 0; i < myRadioButtons.length; i++) {
//    myRadioButtons[i].addEventListener("input", radionButtonChecked)
//    // print(myRadioButtons[i])  
// }
// // radionButtonChecked()



//START BUTTON CLICK

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

// QUESTIONS 

const questionText = document.getElementById("questionText")
const questionNumber = document.getElementById("questionNumber")

const answer1 = document.getElementById("answer1")
const answer2 = document.getElementById("answer2")
const answer3 = document.getElementById("answer3")
const answer4 = document.getElementById("answer4")

const myAnswers = document.querySelectorAll(".myRadioInputClass")

let score = 0;
let currentQuestion = 0;
let userRightAnswer;

//print the question 0/15
questionNumber.textContent = `Question ${currentQuestion + 1}/15`;

const questionList = [
   {
      question: "Quel est le type d un fichier javascript'",
      answer1: '.ts',
      answer2: '.jsx',
      answer3: '.js',
      answer4: '.j',
      rightAnswer: "myRadioInput2"
   },
   {
      question: "Dans quel balise HTML plaçons-nous le code JavaScript?",
      answer1: 'La balise js',
      answer2: 'La balise javascript',
      answer3: 'la balise script',
      answer4: 'la balise rel',
      rightAnswer: "myRadioInput2"
   },
   {
      question: "Comment faire appelle à une fonction nommée « sum »?",
      answer1: 'sum()',
      answer2: 'call function sum()',
      answer3: 'call sum()',
      answer4: 'aucune bonne reponse',
      rightAnswer: "myRadioInput1"
   },
   {
      question: "Quelle est la syntaxe correcte pour faire référence à un script externe appelé « myscript.js »?'",
      answer1: '<script href="myscript.js">',
      answer2: '<script name="myscript.js">',
      answer3: '<script src="myscript.js">',
      answer4: 'Tout les réponses sont vrais',
      rightAnswer: "myRadioInput2"
   },
   {
      question: "Quel est le bon endroit pour insérer un code JavaScript ?",
      answer1: 'La section <head>',
      answer2: 'Les deux sections <head> et <body> sont correctes',
      answer3: ' La section <body>',
      answer4: 'Aucune de ces réponses n’est vraie.',
      rightAnswer: "myRadioInput1"
   },
   {
      question: "Comment écrivez-vous « Hello World » dans une boîte d’alerte?",
      answer1: 'msg("Hello World");',
      answer2: 'alert("Hello World");',
      answer3: 'msgBox("Hello World");',
      answer4: 'alertBox("Hello World");',
      rightAnswer: "myRadioInput1"
   },
   {
      question: "Comment écrire une condition IF en JavaScript?",
      answer1: 'if a = 2 then',
      answer2: 'if a = 2',
      answer3: 'if a == 2 else',
      answer4: 'if (a == 2)',
      rightAnswer: "myRadioInput2"
   },
   {
      question: "Comment écrire une condition IF pour vérifier si « a » n’est PAS égal à 2?'",
      answer1: 'if a <> 2',
      answer2: 'if (a != 2)',
      answer3: 'if a =! 2 then',
      answer4: 'if (a <> 2)',
      rightAnswer: "myRadioInput1"
   },
   {
      question: "Comment créer une fonction en JavaScript?",
      answer1: 'function f()',
      answer2: 'function = f()',
      answer3: 'function:f()',
      answer4: 'Aucune de ces réponses n’est vraie.',
      rightAnswer: "myRadioInput"
   },
   {
      question: "Quelle est la syntaxe correcte pour vérifier la valeur de « c » ?",
      answer1: 'if (c == "XYZ") then { } else { }',
      answer2: 'if (c = "XYZ") then { } else { }',
      answer3: 'if (c == "XYZ") { } else { }',
      answer4: 'if (c = "XYZ") { } else { }',
      rightAnswer: "myRadioInput2"
   },
   {
      question: "Quelle est la syntaxe pour cree une constante en javascript ?",
      answer1: 'tar',
      answer2: 'constante',
      answer3: 'constan',
      answer4: 'const',
      rightAnswer: "myRadioInput3"
   },
   {
      question: "Dans quelle balise Html est conseillé de placer le chemin du script?",
      answer1: 'html',
      answer2: 'head',
      answer3: 'body',
      answer4: 'footer',
      rightAnswer: "myRadioInput2"
   },
   {
      question: "Pourquoi on met le script en bas dans la balyse body?",
      answer1: 'pour qu il soit lu en dernier',
      answer2: 'pour le design',
      answer3: 'pour le style',
      answer4: 'pour la forme',
      rightAnswer: "myRadioInput"
   },
   {
      question: "N'est pas une methode d'objet en js'?",
      answer1: 'compile()',
      answer2: 'exec()',
      answer3: 'test()',
      answer4: 'var',
      rightAnswer: "myRadioInput3"
   },

]


function loadQuiz() {
   clickNextButton()
}

loadQuiz();

// Ckeck if a radio is selected before you press next
function checkRadioCheckedBeforeClick() {
   let oneSelected;
   clickNextButton();
   myAnswers.forEach(elt => {
      if (elt.checked) {
         oneSelected = true;
         // print("One is selected")
      } else {
         oneSelected = false;
      }
   });
   if (oneSelected) {
      clickNextButton();
   } else {
      // alert("Select one element")
   }
}

function clickNextButton() {
   //Initialize the timer 
   clearInterval(counter, 1000)
   timerWidth = 100;
   startTime = 59;
   // setInterval(counter, 1000)
   //Take the right answer
   myAnswers.forEach(answer => {
      if (answer.checked) {
         userRightAnswer = answer.id;
      }
   });
   //Deselect elements
   myAnswers.forEach(element => element.checked = false);
   //Changes of the question
   const currentQuestionData = questionList[currentQuestion]
   print(currentQuestionData)
   questionText.textContent = currentQuestionData.question;
   answer1.textContent = currentQuestionData.answer1
   answer2.textContent = currentQuestionData.answer2
   answer3.textContent = currentQuestionData.answer3
   answer4.textContent = currentQuestionData.answer4

   // Add score if succeed
   if (userRightAnswer == currentQuestionData.rightAnswer) {
      score++;
      print(score)
   }
   //print the question 0/15
   questionNumber.textContent = `Question ${currentQuestion + 1}/15`;
   currentQuestion++;
}


nextButton.addEventListener("click", checkRadioCheckedBeforeClick)



nextButton.style.cursor = "not-allowed";
nextButton.style.opacity = "0.4"

firstInput.addEventListener("input", firstInputListen);

secondInput.addEventListener("input", secondInputListen);


myForm.addEventListener('submit', (e) => {
   e.preventDefault();
   print("Submitted")

});

homePageB.addEventListener("click", function () {
   window.open("index.html", "_top")
});

quitButton.addEventListener("click", function () {

   login.style.display = "none"
   questions.style.display = "none"
   resultContainer.style.display = "block"

});