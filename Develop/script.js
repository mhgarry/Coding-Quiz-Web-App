///my global variable list to define variables I will manipulate in quiz
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
const submitBtn = document.getElementById("submit");
const finalScreen = document.getElementById("end-quiz")
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
	timerId = setInterval(function () {
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
//inputs each choice and adds 5 points for correct answer and takes away 5 seconds for incorrect answer
function choiceInput(choice) {
  const selectedChoice = choice.currentTarget.choice;
  if (selectedChoice === questionsArr.answer) {
    score += 5;
  } else {
    time -= 5;
  }
	//goes to next question
  currentQuestionIndex++;
	//tells quiz want to do at end of quiz
  if (currentQuestionIndex === questionsArr.length) {
    endQuiz();
  } else {
    showQuestions();
  }
}
//ends the quiz and shows the end quiz to save the score
function endQuiz() {
  clearInterval(timerId);
  quizContainer.setAttribute("class", "hidden");
  questionTitles.setAttribute("class", 'hidden');
  choiceList.setAttribute("class", "hidden");
  nextBtn.setAttribute("class","hidden");
  finalScreen.removeAttribute("class", "hidden");
  submitBtn.addEventListener("click", logScore);
}
//adds an event listener to each choice to keep track of score
choiceBtn.forEach(function (choice) {
  choice.addEventListener("click", choiceInput);
});

//will be a function to log score in local storage
function logScore(){

}

//start the quiz with quiz button
startBtn.addEventListener("click", startQuiz);
