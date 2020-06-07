// Variables Declaration:

var newGame, rollDice, hold;

var dice, random;

var main, player_1_score, player_2_score, player_1_totalscore, player_2_totalscore;

// Variable Assignments:

newGame = document.getElementsByClassName("btn-new");

rollDice = document.getElementsByClassName("btn-roll");

hold = document.getElementsByClassName("btn-hold");

player_1_score = document.getElementById("player_1_score").innerHTML;

player_2_score = document.getElementById("player_2_score").innerHTML;

player_1_totalscore = document.getElementById("player_1_totalscore").innerHTML;

player_2_totalscore = document.getElementById("player_2_totalscore").innerHTML;

random = Math.floor(Math.random() * 6) + 1;

dice = document.getElementsByClassName("dice").setAttribute("src","'images/dice-' + random + '.png'");

console.log(dice);

// ******************************************************************************
// Functions
// *****************************************************************************

// NEW GAME FUNCTION

function buttonNewGame(newGame,onClick) {

    main = 0;

    if (main === 0) {
        player_1_score = 0;
        player_2_score = 0;
        player_1_totalscore = 0;
        player_2_totalscore = 0;
    }
    
    
}
var bg_css = document.getElementsByClassName("player1");

console.log(bg_css);
