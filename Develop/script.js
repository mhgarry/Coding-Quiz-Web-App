

//my global variable list to define variables I will manipulate in quiz
const firstPage = document.getElementById("first-page");
const mainHeader = document.getElementById("main-header");
const highScore = document.getElementById("stats");
const timer = document.getElementById("time");
const welcomeText = document.getElementById("welcome");
const startBtn = document.getElementById("start-button");
const quizContainer = document.getElementById("quiz-container");
const questionTitles = document.getElementById("question-title");
const choiceList = document.getElementById("choice-list");
const choiceBtn = document.querySelectorAll(".choice-btn")
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("log-score");

//array variables setting question index to move through our array. Score to add and subtract scores. and time for 10 seconds each question
//we make a timerId to store our current time
let currentQuestionIndex = 0;
let score = 0;
let time = questionsArr.length * 10;
let timerId;
//make function to hide elements I want hidden on dom and start timer and show questions
function startQuiz() {
  firstPage.setAttribute("class", "hidden");
  mainHeader.setAttribute("class", "hidden");
  welcomeText.setAttribute("class", "hidden");
  startBtn.setAttribute("class", "hidden");
  quizContainer.removeAttribute("class");
  questionTitles.removeAttribute("class");
  choiceList.removeAttribute("class");

	nextBtn.removeAttribute("class")
	startTimer();
}

//make function to start timer and count by one second each interval
function startTimer() {
  timerId = setInterval(function() {
    time--;
    timer.textContent = time;
    if (time <= 0) {
      clearInterval(timerId);
    }
  }, 1000);
}
//function to create the elements that will go onto the HTML of the questions and answer choices using a a for loop to loop through the array's entire length generatng questions
function showQuestions() {
  const currentQuestion = questionsArr[currentQuestionIndex]
	questionTitles.textContent = currentQuestion.question
	for (let i = 0; i < choiceBtn.length; i++) {
		choiceBtn[i].textContent = currentQuestion.choices[i]
	}
}
//call to show our first question
showQuestions();
// loop through each question and choices in questionsArr and add event listener for all of the choice buttons
choiceBtn.forEach(function(button) {
  button.addEventListener("click", function(event) {
    const selectedChoice = event.target.textContent
    const currentQuestion = questionsArr[currentQuestionIndex]
    //if user gets the answer correct add 5 points to their score
		if (selectedChoice === currentQuestion.answer) {
      score += 5;
    //if a user gets a question incorrect deduct five points from their score
		} else {
      time -= 5;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === questionsArr.length) {
      // quiz is over, show the score submission form
      // and stop the timer
      clearInterval(timerId);
      quizContainer.setAttribute("class", "hidden");
      submitBtn.removeAttribute("class");
      submitBtn.addEventListener("click", logScore);
    } else {
      // show the next question
      showQuestions();
    }
  });
});


//start the quiz with quiz button
startBtn.addEventListener("click", startQuiz);
