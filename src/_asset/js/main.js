var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// make a random number between 1 and 6
dice = Math.floor(Math.random() * 6) + 1;
// select a #current and change the text on it
document.querySelector('#current-' + activePlayer).textContent = dice;

// hide the dice

document.querySelector('.dice').style.display = 'none';