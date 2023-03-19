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

//https://www.google.com/search?q=how+to+make+a+multiple+choice+question+and+answer+box+in+javascript+array&rlz=1C1VDKB_enUS1049US1049&sxsrf=AJOqlzXtNfIudP-ls65VX08RyPEn5RKuEg%3A1679078537217&ei=ibQUZObxDLrk5NoP6bmAkAU&ved=0ahUKEwim2or-zuP9AhU6MlkFHekcAFIQ4dUDCBE&uact=5&oq=how+to+make+a+multiple+choice+question+and+answer+box+in+javascript+array&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzoKCAAQRxDWBBCwA0oECEEYAFCtAViZCmDMDWgBcAF4AIABS4gBkwOSAQE2mAEAoAEByAEIwAEB&sclient=gws-wiz-serp#fpstate=ive&vld=cid:53977a99,vid:49pYIMygIcU
//referred to for ideas and process
//instructor JD Tadlock helped with processes 
//universal selector variables 
//first container to show intial page to select elements they are constant variables because they are running throughout script
const firstContainer = document.querySelector (".first-container")
const showTimer = document.querySelector ("#count")
const userScore = document.querySelector ("#user-score")
const highScore = document.querySelector ("#high-score")
const startButton = document.querySelector ("#start-button")
//universal selectors for hidden page
//second container to unhide to select elements 
const showQuiz = document.querySelector(".quiz-box")
const showQuestion = document.querySelector("#questions-display")
const answer = document.querySelector(".anwsers-display")
const choiceA = document.querySelector("#A")
const choiceB = document.querySelector("#B")
const choiceC = document.getElementById("#C")
const choiceD = document.getElementById("#D")
const nextButton = document.querySelector("#next")
const secondContainer = document.querySelector ('.secoond-container')
const correct = document.querySelector (".correct")
const incorrect = document.querySelector (".incorrect")
//created new array to display the questions from previos qAndA array and give them correct and incorrect variables with reference from https://www.google.com/search?q=how+to+make+a+multiple+choice+question+and+answer+box+in+javascript+array&rlz=1C1VDKB_enUS1049US1049&sxsrf=AJOqlzXtNfIudP-ls65VX08RyPEn5RKuEg%3A1679078537217&ei=ibQUZObxDLrk5NoP6bmAkAU&ved=0ahUKEwim2or-zuP9AhU6MlkFHekcAFIQ4dUDCBE&uact=5&oq=how+to+make+a+multiple+choice+question+and+answer+box+in+javascript+array&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzoKCAAQRxDWBBCwA0oECEEYAFCtAViZCmDMDWgBcAF4AIABS4gBkwOSAQE2mAEAoAEByAEIwAEB&sclient=gws-wiz-serp#fpstate=ive&vld=cid:53977a99,vid:49pYIMygIcU


let questionsArr = [
            {
              showQuestion: "What is HTML's main use in Wev Development?",
              choiceA: "incorrect",
              choiceB: "incorrect",
              choiceC: "incorrect",
              choiceD: "correct",
              correct: "D"
            },
            {
              question: 'What is it called when Web Developers organize code in a readable and functional manner?',
              choiceA: "correct",
              choiceB: "incorrect",
              choiceC: "incorrect",
              choiceD: "incorrect",
              correct: "A"
            },
            {
              question: 'In JavaScript which of the following is not a primative values?',
              choiceA: "incorrect",
              choiceB: "incorrect",
              choiceC: "correct",
              choiceD: "incorrect",
              correct: "C"
            },
            {
              question: 'In CSS which of the following are used as selectors?',
              choiceA: "incorrect",
              choiceB: "incorrect",
              choiceC: "correct",
              choiceD: "incorrect",
              correct: "C"
            },
            {
              question: 'What is the planning and drawing out the design of a website before being built called?',
              choiceA: "incorrect",
              choiceB: "incorrect",
              choiceC: "incorrect",
              choiceD: "correct",
              correct: "D"
            },
            {
              question: 'What is a typical element in Web Design?',
              choiceA: "incorrect",
              choiceB: "incorrect",
              choiceC: "correct",
              choiceD: "incorrect",
              correct: "B"
            },
            {
              question: 'A github repository is?',
              choiceA: "correct",
              choiceB: "incorrect",
              choiceC: "incorrect",
              choiceD: "incorrect",
              correct: "A"
            },
            {
              question: 'JavaScript is?',
              choiceA: "correct",
              choiceB: "incorrect",
              choiceC: "incorrect",
              choiceD: "incorrect",
              correct: "A"
            },
            {
              question: '"What is Git Bash?"',
              choiceA: "correct",
              choiceB: "incorrect",
              choiceC: "incorrect",
              choiceD: "incorrect",
              correct: "C"
            },
            {
              question: "What is a web application?",
              choiceA: "correct",
              choiceB: "incorrect",
              choiceC: "incorrect",
              choiceD: "incorrect",
              correct: "D"
            },
          ]
         
//variables for array
//new index for new array and the index is the last queston -1 it will be constant becuase it always subtracts 1 from index
const lastQuestion = questionsArr.length -1
//a variable to keep track of current question indexed 
let questionIndex = 0
//a function to keep track of the question that's currently displaying
function getQuestion( )
  {
  //index 
  let thisQuestion = questionsArr [questionIndex]
  //shows question and answer choices that are indexxed in "questionArr"
  showQuestion.innerText = thisQuestion.questionIndex
  choiceA.thisQuestion = choiceA.thisQuestion
  choiceB.thisQuestion = choiceB.thisQuestion
  choiceC.thisQuestion = choiceC.thisQuestion
  choiceD.thisQuestion = choiceD.thisQuestion
}

//stored old JS in text file for reference 

//Will hold the current question object

//will hold the current answer object
