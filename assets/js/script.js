// Assignment code
var quizSection = document.querySelector("#quiz-section");
var startBtn = document.querySelector(".start-button");
var quizQuestion = document.querySelector("#question");
var ansOne = document.querySelector("#ansOptionOne");
var ansTwo = document.querySelector("#ansOptionTwo");
var ansThree = document.querySelector("#ansOptionThree");
var ansFour = document.querySelector("#ansOptionFour");
var nextQuestion = document.querySelector("#nextBtn");

var selectedQuestion = null; // Global variable to save the currents question state
var score = 0;
var currentQuestionIndex = -1;


// An array of objects to store Questions and Answers

  var codeQuiz = [
    {
      questionText: "Arrays in Javascript are used to store:",
      answers: [
        { optionText: "Numbers and Strings", correct: false },
        { optionText: "Boolean", correct: false },
        { optionText: "Other arrays", correct: false },
        { optionText: "All of the above", correct: true },
      ],
    },

    {
      questionText:
        "Which one of these is a primitive data type in Javascript?:",
      answers: [
        { optionText: "String", correct: false },
        { optionText: "Boolean", correct: false },
        { optionText: "Number", correct: false },
        { optionText: "All of the above", correct: true },
      ],
    },

    {
      questionText: "Strings in Javascript should be enclosed within _______:",
      answers: [
        { optionText: "Quotes", correct: true },
        { optionText: "Question Marks", correct: false },
        { optionText: "Parenthesis", correct: false },
        { optionText: "Curly braces", correct: false },
      ],
    },

    {
      questionText: "The if...else condition is enclosed within _______:",
      answers: [
        { optionText: "Quotes", correct: false },
        { optionText: "Question Marks", correct: false },
        { optionText: "Parenthesis", correct: true },
        { optionText: "Curly braces", correct: false },
      ],
    },
  ];
 

function randomQuestionGenerator(codeQuiz) {
  return codeQuiz[Math.floor(Math.random() * codeQuiz.length)];
}

// Render a random question on click of start button

startBtn.addEventListener("click", startQuiz);

// Function start game

function startQuiz(){
  document.querySelector(".quiz-introduction").style.display = "none";
  document.querySelector(".quiz-questions").style.display = "block";
  document.querySelector(".quiz-result").style.display = "none";
  displayNextQuestion();
}

// Fucntion to render the question and answers

function displayNextQuestion() {
 
  currentQuestionIndex++;
  if(currentQuestionIndex >= codeQuiz.length){
    document.querySelector(".quiz-introduction").style.display = "none";
    document.querySelector(".quiz-questions").style.display = "none";
    document.querySelector(".quiz-result").style.display = "block";

  }else{
  selectedQuestion = codeQuiz[currentQuestionIndex];
  quizQuestion.textContent = selectedQuestion.questionText;
  ansOne.innerHTML = selectedQuestion.answers[0].optionText;
  ansTwo.innerHTML = selectedQuestion.answers[1].optionText;
  ansThree.innerHTML = selectedQuestion.answers[2].optionText;
  ansFour.innerHTML = selectedQuestion.answers[3].optionText;
}
}

// Check if answer button clicked

ansOne.addEventListener("click", function () {
  userChoice(0);
});

ansTwo.addEventListener("click", function () {
  userChoice(1);
});

ansThree.addEventListener("click", function () {
  userChoice(2);
});

ansFour.addEventListener("click", function () {
  userChoice(3);
});

function userChoice(answerIndex) {
  if (selectedQuestion.answers[answerIndex].correct) {
    score += 10;
    document.querySelector("#answerResult").textContent = "Correct!" + score;
    
  } else {
    score -= 5;
    document.querySelector("#answerResult").textContent = "Wrong!" + score;
  }
  displayNextQuestion();
}

// Function

function getHighScore(){
  var highScrore = localStorage.getItem("score");
  if(highScrore==null){
    score=0;
  }
  
  function setHighScore(){
    var highScrore = localStorage.setItem("score",score);
    document.querySelector("#highScore").textContent = highScrore;
  }
}
