let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3 );
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}  😏`;
}

function loss(userChoice, computerChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertToWord(userChoice)} loses from ${convertToWord(computerChoice)}  🤬`;
}

function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertToWord(userChoice)} is equal to ${convertToWord(computerChoice)}  😴`;
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
      break;

      case "rp":
      case "sr":
      case "ps":
        loss(userChoice, computerChoice);
      break;

      case "rr":
      case "ss":
      case "pp":
        draw(userChoice, computerChoice);
      break;
    }
}


function main () {

  rock_div.addEventListener('click', function() {
   game("r");
  })

  paper_div.addEventListener('click', function() {
   game("p");
  })

  scissors_div.addEventListener('click', function() {
   game("s");
  })

}

main ();
