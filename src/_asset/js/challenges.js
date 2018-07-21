var scores, roundScore, activePlayer, gamePlaying;

init();
// select a #current and change the text on it
// document.querySelector('#current-' + activePlayer).textContent = dice;

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying){
    // make a random number between 1 and 6
    var dice = Math.floor(Math.random() * 6) + 1;
    // display the result
    var diceDOM = document.querySelector('.dice');
    // display back the dice
    diceDOM.style.display = 'block';
    // change the image of the dice
    diceDOM.src = 'asset/image/dice-' + dice + '.png';
    // update the round score if the rolled number was not a 1
    if (dice === 6 && lastDice === 6) {
      // player lose score
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = '0';
      nextPlayer();
    } else if(dice !== 1) {
      // add score
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      // next player
      // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      // roundScore = 0;
      // document.getElementById('current-0').textContent = '0';
      // document.getElementById('current-1').textContent = '0';
  
      // // remove and add class
      // // document.querySelector('.player-0-panel').classList.remove('active');
      // // document.querySelector('.player-1-panel').classList.add('active');
      // document.querySelector('.player-0-panel').classList.toggle('active');
      // document.querySelector('.player-1-panel').classList.toggle('active');
      // document.querySelector('.dice').style.display = 'hide';
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
    // check if player won the game
    if(scores[activePlayer] >= 100) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
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
  document.querySelector('.dice').style.display = 'hide';
};

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  // hide the dice
  document.querySelector('.dice').style.display = 'none';
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

