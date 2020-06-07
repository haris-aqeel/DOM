var scores, global1, global2, total, activePlayer, clickCount;

scores = [];
total = 0;
activePlayer = 1;
global1 =0;
global2 =0;
clickCount=0;

function newGame(){
    document.querySelector("#current_totalscore_1").textContent = 0;
    document.querySelector("#current_totalscore_2").textContent = 0;
    document.querySelector("#current_score_1").textContent = 0;
    document.querySelector("#current_score_2").textContent = 0;
    document.querySelector(".dices").style.display = 'none';
    document.querySelector(".")
    total = 0;
    activePlayer = 1;
    clickCount = 0;
    global2 = 0;
    global1 =0;
}


document.querySelector(".btn-new").addEventListener('click',function(){
    newGame();
    
});

document.querySelector("#current_totalscore_1").textContent = 0;
document.querySelector("#current_totalscore_2").textContent = 0;
document.querySelector("#current_score_1").textContent = 0;
document.querySelector("#current_score_2").textContent = 0;
document.querySelector(".dices").style.display = 'none';

document.querySelector(".btn-roll").addEventListener('click', function() {

    // Calculate Random number:
    var dice = Math.floor(Math.random() * 6) + 1;

    // Display The Result:
    var diceDOM = document.querySelector(".dices");
    diceDOM.src = 'images/dice-' + dice + '.png';
    diceDOM.style.display = 'block';
    total += dice;
    activePlayer === 1 ? global1+=dice : global2+=dice;
    
    

    // Click calculation
    clickCount +=1;

    // Update current score except a = 1
    if (dice !== 1) {
        document.querySelector("#current_score_" + activePlayer ).innerHTML = '<em>' + total + '</em>';

        

    
    }else{
    
        document.querySelector("#current_score_" + activePlayer ).innerHTML = '<em>' + 0 + '</em>';
        total = 0; 
        
        activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
        document.querySelector(".dices").style.display = 'none';
        document.querySelector(".player1").classList.toggle('active');
        document.querySelector(".player2").classList.toggle('active');
        
        }

});

document.querySelector(".btn-hold").addEventListener('click', function() {

        
        document.querySelector("#current_totalscore_" + activePlayer).textContent = total;
        total = 0;
        update(global1, global2);
        document.querySelector("#current_score_" + activePlayer).textContent = 0;
        activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
        
        document.querySelector(".player1").classList.toggle('active');
        document.querySelector(".player2").classList.toggle('active');
        document.querySelector(".dices").style.display = 'none';
        clickCount = 0;
    

});


function update(globala, globalb){
    activePlayer === 1 ? document.querySelector("#current_totalscore_1").textContent = globala: 
    document.querySelector("#current_totalscore_2").textContent = globalb;
    if (globala >= 100){
        document.querySelector("#one").textContent = "WINNER";
        document.querySelector("player1").classList.add("winner");
        newGame();
    }else if (globalb >= 100){
        document.querySelector("#two").textContent = "WINNER";
        document.querySelector("player2").classList.add("winner");
        newGame();
    }
}



