//As a coding student I would like to make a quiz to show off my knowledge on the fundementals of coding

//variables
let time = document.querySelector ("#count");
const quizDisplay = document.getElementById("display-box");
const startBtn = document.querySelector ("#start-button");
const submitBtn = document.querySelector ("#submit-button");
//created array in seperate doc with help from tutoring session with Janvier Mbilizi
//a variable to keep track of current question indexed 



let timer;

startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", checkAnswer);
//starts our quiz by hiding the start button and intro paragraph as well as starting the timer 
function startQuiz() {
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
            await answer();
            }
    }, 1000);

}

// let questions = questionsArr
//made a funciton to put together the quiz using the questionsArr array data
