var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


// select a #current and change the text on it
// document.querySelector('#current-' + activePlayer).textContent = dice;

// hide the dice
document.querySelector('.dice').style.display = 'none';
// set everything to 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
  // make a random number between 1 and 6
  var dice = Math.floor(Math.random() * 6) + 1;
  // display the result
  var diceDOM = document.querySelector('.dice');
  // display back the dice
  diceDOM.style.display = 'block';
  // change the image of the dice
  diceDOM.src = 'asset/image/dice-' + dice + '.png';
  // update the round score if the rolled number was not a 1
  if(dice !== 1) {
    // add score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    // next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  }
});

