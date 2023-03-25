//As a coding student I would like to make a quiz to show off my knowledge on the fundementals of coding

//variables
let time = document.querySelector ("#count");
let score = document.querySelector ("#user-score");
let highScore = document.querySelector ("#high-score");
const startBtn = document.querySelector ("#start-button");
let intials = document.querySelector("#intials")
let choices = document.querySelector("#choices");
let nextBtn = document.querySelector("#next");

let correct = document.querySelector (".correct");
let incorrect = document.querySelector (".incorrect");
let container = document.querySelector("#display-box");
let title = document.querySelector("#question-title")
//created array in seperate doc with help from tutoring session with Janvier Mbilizi
//a variable to keep track of current question indexed 
let questionIndex = 0;

let timer;

startBtn.addEventListener("click", startQuiz);
//starts our quiz by hiding the start button and intro paragraph as well as starting the timer 
async function startQuiz() {
  let timer = 100;
  //hide welcome paragraph 
  let paragraph = document.getElementById("welcome-text");
  paragraph.setAttribute("class", "hide");
  //hide start button 
 startBtn.classList.add ("hide");
//start timer begins asynchornously so that wheen we deduct time off of the clock it is not deducted into our answer is called
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
    //call answer as an async function so that it can be called when the user clicks on a choice leaving this here so I remeember I need to call it later 
      // async fucntion answer() {}    
      
    