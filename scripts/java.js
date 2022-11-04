// Event One: A Powerlifitng Quiz //

// global vars
let message = "";
let score = 0;
let notDone = 0;
let done = 0;
let total = 0;
let answerList = [];

// make all the answer buttons work
const anyButton = document.querySelectorAll('#answer-buttons .butt');
anyButton.forEach(function(e) {
  // run the function named main on click
  e.addEventListener('click', main);
});
// this is the Start or Next button only
const singleButton = document.querySelector('#other-buttons .butt');
// run the function named control on click
singleButton.addEventListener('click', control);

// this runs only once
function setup() {
  total = questions.length;
  notDone = total;
  message = "How much do you know about powerlifting?";
  document.querySelector("#answer-buttons").classList.add('hide');
  document.querySelector("#other-buttons .butt").textContent = "Start";
  writeResults();
}

// this runs when any answer button is clicked
function main() {
  if (done !== total) {
  	if (this.textContent === questions[done].answer) {
    	// answer is correct
      score++;
      message = "Correct!";
    } else {
    	// answer is wrong
      message = "Sorry, the correct answer was: " + questions[done].answer;
    }
    done++
    notDone--;
    document.querySelector("#other-buttons").classList.remove('hide');
		document.querySelector("#answer-buttons").classList.add('hide');
    writeResults();
  }
}

// for the Start and Next button
function control() {
  if (done !== total) {
    document.querySelector("#other-buttons .butt").textContent = "Next";
    document.querySelector("#answer-buttons").classList.remove('hide');
    loadNewQuestion();
  } else {
  	message = "You're finished! Thanks for playing!";
  }
  document.querySelector("#other-buttons").classList.add('hide');
  writeResults();
}

// get question and answers from the array named questions
function loadNewQuestion() {
  message = questions[done].question;
  answerList = [questions[done].answer,
    questions[done].wrong_answer_1,
    questions[done].wrong_answer_2
  ];
  answerList = shuffle(answerList);
}

function writeResults() {
  document.querySelector("#narration").textContent = message;
  document.querySelector("#score").textContent = score;
  document.querySelector("#notDone").textContent = notDone;
  document.querySelector("#done").textContent = done;
  // use current contents of answerList to write text
  // into the buttons
  for (let i = 0; i < answerList.length; i++) {
    anyButton[i].textContent = answerList[i];
  }
}

// shuffle all items in an array
function shuffle(sourceArray) {
  for (let i = 0; i < sourceArray.length - 1; i++) {
    let j = i + Math.floor(Math.random() * (sourceArray.length - i));
    let temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}

// array holds all info about each question - any number
// of questions can be used
const questions = [{
    question: "What is the first main compound exercise?",
    answer: "Squat",
    wrong_answer_1: "Bench",
    wrong_answer_2: "Deadlift"
  },
  {
    question: "What does ROM stand for?",
    answer: "Range of Motion",
    wrong_answer_1: "Right of Muscle",
    wrong_answer_2: "Range of Muscle"
  },
  {
    question: "Which compound exercises targets the chest?",
    answer: "Bench Press",
    wrong_answer_1: "Squat",
    wrong_answer_2: "Deadlift"
  },
  {
    question: "What are the two deadlift stances?",
    answer: "Sumo and Conventional",
    wrong_answer_1: "Sumo and Wide Conventional",
    wrong_answer_2: "Conventional and Non-Conventional"
  },
  {
    question: "When performing a squat, where should you hinge?",
    answer: "Knees",
    wrong_answer_1: "Hips",
    wrong_answer_2: "Back"
  },
]; // end of questions array

setup();

// End of Event One: Powerlifting Quiz //

// Event Two //
const image1 = document.querySelector('#foobar img');

let deadlift = "images/deadlift.jpg";
let deadlift2 = "images/deadlift2.jpg";


image1.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', deadlift2);
};

image1.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', deadlift);
};

// Event Three //
const image2 = document.querySelector('#squat img');

image2.onmouseenter = (e) => {

  e.target.classList.remove('rotate-right');
  e.target.classList.add('rotate-left');

};

image2.onmouseleave = (e) => {

  e.target.classList.add('rotate-right');
  e.target.classList.remove('rotate-left');

};
