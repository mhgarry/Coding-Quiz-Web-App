//psuedo-code
//User Story: As a coding student I want to take a timed quiz on JavaScript fundementals 
//User Story conti.. so I must make a coding quiz web application using JavaScript, CSS, and HTML 
//How I will code this and what I need to do in JS
//1. Define my variable: a timer with set amount of time counting down, quiz questions that interact with timer, a clickable button that starts timer and shows questions, 
//    buttons for quiz questions to submit answers: if true go to next question: if false subtract time, a place to save intials and score when time reachs zero
//1. Create a functional start button using querySelector to select button created in HTML
//1a. Create quiz questions as array and make answers into clickable buttons using addEventListener for onclick functions 
//1b. Create a timer by creating a function to using setTimeout and setInterval
//1c. Create a function to subtract time if the answer value to question is false
//1d. create a function to proceed to next question if answer to question in array if question is true
//1e. create a function to tally score for each true answer
//2. Create a prompt to end quiz when all questions are answered or time reaches zero 
//3. Create a box to enter intials when timer reaches zero 
//4. create a button to log score and intials together 
//5. create a high score log


//selection variables 
//a selector for my start button using querySelector to target it
var startButton = document.querySelector( "#start")
var questionsDisplay = document.querySelector(".question-wrap")
var timerDisplay = document.querySelector("#timer-display")
var answerDisplay = document.querySelector("#display-answers")
var nextButton = document.querySelector("#next-button")
var mainHeader = document.querySelector("#main-header")
var frontPage = document.querySelector(".front-page-text")
var answerChoice = document.querySelector(".lists")
//to keep track of the the question index within the array
var currentQuestionIndex = 0
//Will hold the current question object
var question;
//will hold the current answer object
var answer;
//will store the timer count 
var count = 5

var output = []


// Create a function that grabs the current card object and displays
// the question to the window
// Instructor helped with functions and paraphrased them
function displayQuestions() {
    // Create a variable reference to the current question ard object from the cards array

    var question = qAndA[currentQuestionIndex]
    questionsDisplay.classList.remove("hide")
    answerChoice.classList.remove("hide")
    nextButton.classList.remove('hide')
    lists.classList.remove('hide')
    
    questionsDisplay.innerText = question.question
    answerChoice.innerText = question.answers


    //hide start button and call showAnswers
    
   
}


// Hide the start button and call displayQuestions
//Taught by instructor JD and paraphrased
function startQuestions () {
  
  
  
  startButton.classList.add('hide')
    
  mainHeader.classList.add('hide')
  frontPage.classList.add('hide')
      displayQuestions()
    }

  // When user clicks start button, show the first question

  nextButton.addEventListener('click', displayQuestions)
  startButton.addEventListener("click", startQuestions)