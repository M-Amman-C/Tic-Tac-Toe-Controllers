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
    res = []
    if (list.includes(1)){
        if (list.includes(2) && list.includes(3)){
            res = [1,2,3];
            return res;
        } else if(list.includes(4) && list.includes(7)){
            res = [1,4,7];
            return res;
        }
        else if(list.includes(5) && list.includes(9)){
            res = [1,5,9];
            return res;
        }
    }
    if(list.includes(2)){
        if (list.includes(5) && list.includes(8)){
            res = [2,5,8];
            return res;
        }
    }
    if(list.includes(3)){
        if (list.includes(6) && list.includes(9)){
            res = [3,6,9];
            return res;
        }
        if(list.includes(5) && list.includes(7)){
            res = [3,5,7];
            return res;
        }
    }
    if(list.includes(4)){
        if (list.includes(5) && list.includes(6)){
            res = [4,5,6];
            return res;
        }
    }
    if(list.includes(7)){
        if (list.includes(8) && list.includes(9)){
            res = [7,8,9];
            return res;
        }
    }
    return res;
}

for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener(
      "click", 
      ()=>{
        document.getElementById(i.toString()).innerHTML = currSymbol;
        document.getElementById(i.toString()).style.pointerEvents = "none";
        if (turnCount%2==0){
            currSymbol = "O";
            turnCount++;
            player1List.push(i);
            var status = checkwin(player1List);
            if(status.length!=0){
                winner = 1;
            }
        } else{
            currSymbol = "X";
            turnCount++;
            turnText.innerHTML = "X TURN";
            player2List.push(i);
            var status = checkwin(player2List);
            if(status.length!=0){
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
        if(status.length!=0){
            for (id in status){
                document.getElementById(status[id]).style.backgroundColor = "red";
            }
        }
        turnText.innerHTML = display;
        winnerId.value = winner;
        if(turnCount==9 && winner==0){
            turnText.innerHTML = "Draw!!";
            restartGame.style.opacity = "100%";
        }
      }
    );
}