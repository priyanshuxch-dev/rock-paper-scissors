const score = JSON.parse(localStorage.getItem('score')) || {wins: 0, loses: 0, ties: 0};

// if(!score) {
//   score = {
//     wins: 0,
//     loses: 0, 
//     ties: 0
//   }
// };

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if(playerMove === 'scissors') {
    if(computerMove === 'rock') {
      result = 'You lose.';
    } else if(computerMove === 'paper') {
      result = 'You win.';
    } else if(computerMove === 'scissors') {
      result = 'Tie.';
    }   
  } else if(playerMove === 'paper') {
    if(computerMove === 'rock') {
      result = 'You win.';
    } else if(computerMove === 'paper') {
      result = 'Tie.';
    } else if(computerMove === 'scissors') {
      result = 'You lose.';
    } 
  } else if(playerMove === 'rock') {
    if(computerMove === 'rock') {
      result = 'Tie.';
    } else if(computerMove === 'paper') {
      result = 'You lose.';
    } else if(computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if(result === 'You win.') {
    score.wins++;
  } else if(result === 'You lose.') {
    score.loses++;
  } else if(result === 'Tie.') {
    score.ties++;
  }

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
  <img src="/emojis/${playerMove}-emoji.png" class="move-icon" />
  <img src="/emojis/${computerMove}-emoji.png" class="move-icon" />
  Computer`;

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\nWins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`);
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if(randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if(randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  return computerMove;
}