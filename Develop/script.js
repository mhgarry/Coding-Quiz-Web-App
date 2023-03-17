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
var startButton = document.querySelector( "#start-button")
var questionDisplay = document.querySelector(".question-display")
var timerDisplay = document.querySelector("#timer-display")
var answerDisplay = document.querySelector("#answer-display")
var nextButton = document.querySelector("#next-button")
//to keep track of the the question index within the array
var currentQuestionIndex = 0
//Will hold the current question object
var question;
//will hold the current answer object
var answer;
//will store the timer count 
var count = 5

