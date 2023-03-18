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
//first container to show intial page
const firstContainer = document.getElementById (".first-cointer")
const showTimer = document.getElementById ("#count")
const userScore = documet.getElementById ("#current-score")
const highScore = document.getElementsByName ("#high-score")
const startButton = document.getElementById ("#start-button")
//universal selectors for hidden page
//second container to unhide
const showQuiz = document.querySelector(".quiz-box")
const showQuestion = document.querySelector("#questions-display")
const showAnwser = doucmnet.querySelector(".anwsers-display")
const choiceA = document.getElementById("#A")
const choiceB = document.getElementById("#B")
const choiceC = document.getElementById("#C")
const choiceD = document.getElementById("#D")
const nextButton = doucment.querySelector("#next")
const secondContainer = document.getelementyByclass ('.secoond-container')
const correct = document.getElementsByClassName (".correct")
const incorrect = document.getElementsByClassName (".incorrect")
//to keep track of the the question index within the array
const arrIndex = qAndA[0];
//Will hold the current question object
let questions;
//will hold the current answer object
let anwser;
//will store the timer count 
const count = 5
//output array
const output = []
//array we will be selectiong questions and answers from
//create questions array
const qAndA = [
  {
    question: "What is HTML's main use in Wev Development?",
      answers:{   A: "Scripting",
                  B: "Styling",
                  C: "Debugging",
                  D: "Structuring"

           },
            correctAnswer: "D"
  },
  
  {
    question: 'What is it called when Web Developers organize code in a readable and functional manner?',
      answers: 
              {
                  A: 'Refactoring',
                  B: 'JavaScript',
                  C: 'API',
                  D: 'Interfacing'
              },
              
              correctAnswer: "A"
  },
  //https://www.w3schools.com/java/java_data_types_non-prim.asp#:~:text=A%20primitive%20type%20has%20always,have%20all%20the%20same%20size.
  { 
    question: "In JavaScript which of the following is not a primative values?",
      answers: {
              A: "Number", 
              B: "Function",
              C: "Boolean",
              D: "String"
           },
              correctAnswer: "B"
          
  },
  
  {
      question: "In CSS which of the following are used as selectors?",
        anwsers:  {
              A: "ID",
              B: "Class",
              C: "They're all selectors",
              D: "Global",

              correctAnswer: "C",
          
          },
          
  },

  {
      question: "What is the planning and drawing out the design of a website before being built called?",
          answers: {
                      A: "Keyframing",
                      B: "Githubbing",
                      C: "Storyboarding",
                      D: "Wireframing"
                  },
                  correctAnswer: "D"
  },
  
  {
      //paraphrased and forumlated from https://developer.mozilla.org/en-US/docs/Glossary/Element
      question: "What is a typical element in Web Design?",
          answers: { A: "A key value pair",
                     B: "Any part of a webpage that includes an opening tag with attributes, enclosed text content, and a closing tag",
                     C: "A Boolean",
                     D: "A google"
                  },
                  correctAnswer: "B"
          },
      //paraphrased from https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories
      {
          question: "A github repository is?",
          answers:  {
              A: "Contains all of your project's files and revision history",
              B: "Syntax",
              C: "A mystery",
              D: "A container for trash"
          },
          
          correctAnswer: "A"
      },
      //https://www.hackreactor.com/blog/what-is-javascript-used-for paraphrased and referenced
      {   
          question: "JavaScript is?",
          answers: { A: "A cilent-side and server-side programming language that allows you to make web pages interactive",
                     B: "A web application",
                     C: "A node",
                     D: "A cup of coffee"
                  },

                  correctAnswer: "A"

      },
     //https://www.git-tower.com/learn/git/faq/git-bash#:~:text=Git%20Bash%2C%20quite%20simply%2C%20is,built%20for%20Unix%2Dstyle%20environments. referenced
      {
          question: "What is Git Bash?",
          answers: { 
                  A: "A Mac OSX application",
                  B: "A server designated for party chat",
                  C: "A Windows application designed for Git version control",
                  D: "A website",

                  correctAnswer: "C"
      }

      },
      //https://www.stackpath.com/edge-academy/what-is-a-web-application/ referenced 
      {
          question: "What is a web application?",
           answers: { A: "A program downloaded from the internet that runs on your local system",
                      B: "A browser based flash file",
                      C: "An iphone accesory", 
                      D: "A computer program that runs in a web browsers and perfroms taask over the internet",
                      },
                  correctAnswer: D
      }
]

// Create a variable reference to the current question and object from array 
function displayQuiz(){
  secondContainer.classList.remove("hide")
  
  questions = question[questionIndex]

  

  showQuestion.innerText = questions.question 
  firstContainer.classList.add("hide")
  nextButton.classList.add("hide")
  startTimer()
}

// Create a function that grabs the current indexxed quiz question and answer selection objecst and displays
// the questions and answers to the window
// Instructor JD helped with functions and paraphrased them
function startQuiz (String, Any)

 

  //hide start button and call showQuiz function



// Hide the start button and call displayQuestions
//Taught by instructor JD and paraphrased
