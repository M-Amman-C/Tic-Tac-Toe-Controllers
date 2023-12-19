/*
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
*/
var restartGame = document.getElementById("restartGame");
var turnText = document.getElementById("turnText");
var winnerId = document.getElementById("winnerId");

player1List = [];
player2List = [];

var currSymbol = "X";
var turnCount = 0;
var winner=0;
var display;

function checkwin(list){
    if (list.includes(1)){
        if (list.includes(2) && list.includes(3)){
            return "win";
        } else if(list.includes(4) && list.includes(7)){
            return "win";
        }
        else if(list.includes(5) && list.includes(9)){
            return "win";
        }
    }
    if(list.includes(2)){
        if (list.includes(5) && list.includes(8)){
            return "win";
        }
    }
    if(list.includes(3)){
        if (list.includes(6) && list.includes(9)){
            return "win";
        }
        if(list.includes(5) && list.includes(7)){
            return "win";
        }
    }
    if(list.includes(4)){
        if (list.includes(5) && list.includes(6)){
            return "win";
        }
    }
    if(list.includes(7)){
        if (list.includes(8) && list.includes(9)){
            return "win";
        }
    }
}

for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener(
      "click", 
      ()=>{
        document.getElementById(i.toString()).innerHTML = currSymbol;
        if (turnCount%2==0){
            currSymbol = "O";
            turnCount++;
            player1List.push(i);
            var status = checkwin(player1List);
            
            if(status=="win"){
                winner = 1;
            }
        } else{
            currSymbol = "X";
            turnCount++;
            turnText.innerHTML = "X TURN";
            player2List.push(i);
            checkwin(player2List);
            var status = checkwin(player2List);
            if(status=="win"){
                winner = 2;
            }
        }
        if(winner==1){
            display = "PLAYER 1 WINS";
        }
        else if(winner==2){
            display = "PLAYER 2 WINS";
        }
        if(winner==0){
            display = currSymbol+" TURN";
        }
        if(winner!=0){
            turnText.style.left = "500px";
            restartGame.style.opacity = "100%";
        }
        turnText.innerHTML = display;
        winnerId.value = winner;
        if(turnCount==9 && winner==0){
            turnText.innerHTML = "Draw!!";
        }
      }
    );
}