

//our global variables
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

//array variables
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

//make function to start timer
function startTimer() {
  timerId = setInterval(function() {
    time--;
    timer.textContent = time;
    if (time <= 0) {
      clearInterval(timerId);
    }
  }, 1000);
}
//function to create the html for the questions
function showQuestions() {
  const currentQuestion = questionsArr[currentQuestionIndex]
	questionTitles.textContent = currentQuestion.question
	for (let i = 0; i < choiceBtn.length; i++) {
		choiceBtn[i].textContent = currentQuestion.choices[i]
	}
}
showQuestions();


//start the quiz with quiz button
startBtn.addEventListener("click", startQuiz);
