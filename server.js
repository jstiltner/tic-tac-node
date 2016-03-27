'use strict';

// some functions and constants to begin

let gameBoard = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
//initialize first game
let game = gameBoard;
clearBoard();
let marker = 'X';


function checkForWin (){  //eslint-disable-line
  // Diagonal win conditions
  if (game[0][0] === game[1][1] === game[2][2] ||
    game[2][0] === game[1][1] === game[0][2]){
    gameOver();
  }

  //loop to check through for non-diagonal victories
  for (i=0; i<3; i++) {
    if (game[i][0] === game[i][1] === game[i][2] ||
      game[0][i] === game[1][i] === game[2][i]){
    gameOver();
    }
  }
}


function gameOver () {

}

function clearBoard () {
gameBoard = game;
let counter = 0;  //eslint-disable-line
}


//Inputs on the following model:
//A0B0  A0B1 A0B2
//A1B0  A1B1 A1B2
//A2B0  A2B1 A2B2
function runTurn(a,b){  //eslint-disable-line
  //Alter game array based upon inputs
  game[a][b] = marker;
 console.log("gameBoard", game );
  //Flip the marker
  marker=='O' ? marker='X' : marker = 'O';
  console.log("Player", marker, ", it is your turn." );
}




console.log("game", game );


