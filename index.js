
var player1 = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];
var player2 = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];


var randPlayer1 = Math.floor(Math.random() * player1.length);
var randPlayer2 = Math.floor(Math.random() * player2.length);
var diceRolls = player1[randPlayer1] + " " + player2[randPlayer2]

function rollDice () {  

    document.querySelector(".img1").setAttribute("src", player1[randPlayer1]);  

    document.querySelector(".img2").setAttribute("src", player2[randPlayer2]);  
  }  
   rollDice()
  
// // If Player Wins


if (randPlayer1 > randPlayer2) {
    highestDiceRoll = player1;
    winner = document.querySelector("h1").innerHTML = "Player1 Won";
  } else if (randPlayer2 > randPlayer1) {
    highestDiceRoll = player2;
    winner = document.querySelector("h1").innerHTML = "Player2 Won";
  } else {
    winner = document.querySelector("h1").innerHTML = "DRAW";
  }