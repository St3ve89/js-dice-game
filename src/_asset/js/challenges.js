var scores, roundScore, activePlayer, gamePlaying;

init();
// select a #current and change the text on it
// document.querySelector('#current-' + activePlayer).textContent = dice;

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying){
    // make a random number between 1 and 6
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    // display the result
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    // change the image of the dice
    document.getElementById('dice-1').src = 'asset/image/dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'asset/image/dice-' + dice2 + '.png';
    // update the round score if the rolled number was not a 1
    // if (dice === 6 && lastDice === 6) {
    //   // player lose score
    //   scores[activePlayer] = 0;
    //   document.querySelector('#score-' + activePlayer).textContent = '0';
    //   nextPlayer();
    // } else if(dice !== 1) {
    //   // add score
    //   roundScore += dice;
    //   document.querySelector('#current-' + activePlayer).textContent = roundScore;
    // } else {
    //   // next player
    //   // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //   // roundScore = 0;
    //   // document.getElementById('current-0').textContent = '0';
    //   // document.getElementById('current-1').textContent = '0';
  
    //   // // remove and add class
    //   // // document.querySelector('.player-0-panel').classList.remove('active');
    //   // // document.querySelector('.player-1-panel').classList.add('active');
    //   // document.querySelector('.player-0-panel').classList.toggle('active');
    //   // document.querySelector('.player-1-panel').classList.toggle('active');
    //   // document.querySelector('.dice').style.display = 'hide';
    //   nextPlayer();
    // }
    if(dice1 !== 1 && dice2 !==1) {
      // add score
      roundScore += dice1 + dice2;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
    lastDice = dice;
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if(gamePlaying) {
    // add a current score to the global score
    scores[activePlayer] += roundScore;
    // update the ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('.final-score').value;
    var winnigScore;
    // undefinned, 0 , null or "" are coerced to false
    // anything else is coerced to true
    if(input) {
      winnigScore = input;
    } else {
      winnigScore = 100;
    }

    // check if player won the game
    if(scores[activePlayer] >= winnigScore) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    } else {
      // next player
      nextPlayer();
    }
  }
});

// add a next player function
function nextPlayer() {
  // next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // remove and add class
  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  // hide the dice
  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
  // set everything to 0
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
};

