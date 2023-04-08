//our global variables
let firstPage = document.getElementById("first-page");
let mainHeader = document.getElementById("main-header");
let highScore = document.getElementById("stats");
let timer = document.getElementById("time");
let welcomeText = document.getElementById("welcome");
let startBtn = document.getElementById("start-button");
let quizContainer = document.getElementById("quiz-container");
let questionTitles = document.getElementById("question-titles");
let answerChoices = document.getElementById("answer-choices");
let nextBtn = document.getElementById("next");
let submitBtn = document.getElementById("log-score");

//array variables
let currentQuestionIndex = 0;
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
  answerChoices.removeAttribute("class");
  nextBtn.removeAttribute("class");
  submitBtn.removeAttribute("class");
  startTimer();
  renderQuestion();
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
//take time of the timer
function countDown() {
  time--;
}
//render qustions with show question
function showQuestions() {
  questionTitles.textContent = questionsArr[currentQuestionIndex].question;

}

function renderQuestion() {
  showQuestions();
}
//start the quiz with quiz button
document.addEventListener("click", startQuiz);

