//As a coding student I would like to make a quiz to show off my knowledge on the fundementals of coding

//variables we need throughtout the entire quiz 
let time = document.querySelector ("#count");
const quizDisplay = document.getElementById("display-box");
const startBtn = document.querySelector ("#start-button");
const submitBtn = document.querySelector ("#submit");
//created array in seperate doc with help from tutoring session with Janvier Mbilizi

//a variable to keep track of score 
let score = 0;


let timer;

startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", checkAnswer);
//starts our quiz by hiding the start button and intro paragraph as well as starting the timer 
async function startQuiz() {
  let timer = 100;
  //hide welcome paragraph 
  let paragraph = document.getElementById("welcome-text");
  paragraph.setAttribute("class", "hide");
  //hide start button 
 startBtn.classList.add ("hide");
 //show quiz display 
 quizDisplay.style.display = "block";
//start timer begins asynchornously so that wheen we deduct time off of the clock it is not deducted into our answer is callled 
const countdown = setInterval(async function () {
      if (timer > 0) {
      timer--;
      time.textContent = 'Time left: ' + timer + 'seconds';
      } else {
            clearinterval(countdown);
            time.textContent = 'Time is up!' 
            
            }
    }, 1000);
      
      buildQuiz();
}

//a variable to keep track of current question indexed 

//made a funciton to put together the quiz using the questionsArr array data
function buildQuiz() {
  // get the current question and its answers from the array
      let questions = questionsArr
      let currentQuestion = [0];
  
  const currentQ = questions[currentQuestion];
  const qText = currentQ.question;
  const aChoices = currentQ.answers;
  
  // display the current question
  document.getElementById("question-title").textContent = qText;
  
  // create radio buttons for each answer choice
  const choiceDisplay = document.getElementById("choices");
  choiceDisplay.innerHTML = '';
  for (let i = 0; i < aChoices.length; i++) {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'answers' + currentQuestion;
    radio.value = aChoices[currentQuestion];
    label.appendChild(radio);
    label.appendChild(document.createTextNode(aChoices[i]));
    choiceDisplay.appendChild(label);
  }
}

// function to check the user's answer
function checkAnswer() {
  // get the selected answer
  const answer = document.querySelector('input[name="question' + currentQuestion + '"]:checked');
  
  if (answer) {
    // check if the answer is correct
    if (answer.value === questions[currentQuestion].correctAnswer) {
      score++;
    }
    
    // move to the next question or end the quiz if all questions have been answered
    currentQuestion++;
    if (currentQuestion === questions.length) {
      endQuiz();
    } else {
      buildQuiz();
    }
  }
}

// function to end the quiz
function endQuiz() {
  // hide the quiz section and display the user's score
  quizContainer.style.display = 'none';
  document.getElementById('result').textContent = 'You scored ' + score + ' out of ' + questions.length;
}
