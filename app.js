let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



function getComputerChoice(){
	
	const choices=['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];

}

function convertCase(letter) {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  return 'Scissors';
}

function win(userChoice,computerChoice){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertCase(userChoice)}${smallUserWord} beats ${convertCase(computerChoice)}${smallCompWord} , You Win !! 🔥🔥`;
    userChoice_div.classList.add('green-glow');
    setTimeout(()=> userChoice_div.classList.remove('green-glow'), 500); 
}
// setTimeout(function() { console.log("Hello")}, 3000)
function lose(userChoice,computerChoice){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertCase(userChoice)}${smallUserWord} looses to ${convertCase(computerChoice)}${smallCompWord} , You Lost...... 💩💩`;
	userChoice_div.classList.add('red-glow');
    setTimeout(()=> userChoice_div.classList.remove('red-glow'), 500);
}
function draw(userChoice,computerChoice){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convertCase(userChoice)}${smallUserWord} equals ${convertCase(computerChoice)}${smallCompWord} , It's a Draw!!`;
	userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  // console.log('Game function: user choice is = ' + userChoice);
  // console.log('Game function: computer choice is = ' + computerChoice);

  switch (userChoice + computerChoice) {
    case 'pr':
    case 'rs':
    case 'sp':
      win(userChoice, computerChoice);
      // console.log("user wins");
      break;
    case 'rp':
    case 'sr':
    case 'ps':
      lose(userChoice, computerChoice);
      // console.log("computer wins");
      break;
    case 'rr':
    case 'ss':
    case 'pp':
      draw(userChoice, computerChoice);
      // console.log("draw");
      break;
  }
}


function main(){
rock_div.addEventListener('click', () => game("r"));
paper_div.addEventListener('click', () => game("p"));
scissors_div.addEventListener('click', () => game("s"));
}
main();
