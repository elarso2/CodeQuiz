//variables
var secondsLeft = 75;
var timeEl = document.querySelector(".time");
var endMessage = "Quiz is complete!";
//timer countdown function
function timer() {
  var timerInterval = setInterval(function () {
    timeEl.textContent = secondsLeft + " seconds remaining";
    secondsLeft--;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

timer();

// function to start quiz
function startQuiz() {}

// array of questions + their answers
var questAns = [
  "Which of the following is not a data type?",
  "Boolean",
  "Integer",
  "String",
  "Null",
  "The item found within a tag, which can be used to identify a specific tag is called a(n) ______.",
  "Element",
  "Object",
  "Attribute",
  "Style",
  "Which major language would you use to style and position content on your webpage?",
  "JavaScript",
  "HTML",
  "CSS",
  "C++",
  "Which flex property aligns properties on the horizontal axis?",
  "Flex-direction",
  "Justify-content",
  "Align-items",
  "Align-self",
  "What does HTML stand for?",
  "Hypertext Markup Language",
  "Hypertype Markup Language",
  "Hypertext Making Language",
  "Hypertext Market Language",
];

//array of answers
var answers = [
  questAns[2],
  questAns[8],
  questAns[13],
  questAns[17],
  questAns[21],
];

console.log(answers[2]);
console.log(answers);
