import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs"; 

const app = express();
const port = 9001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var player1 = "";
var player2 = "";
var player1Score = 0;
var player2Score = 0;

app.get("/",(req,res)=>{
    player1 = "";
    player2 = "";
    player1Score = 0;
    player2Score = 0;
    res.render("home.ejs");
});

app.post("/",(req,res)=>{
    player1 = req.body.player1;
    player2 = req.body.player2;
    res.redirect("/game");
})

app.get("/game",(req,res)=>{
    /*if (player1=="" || player2==""){
        res.redirect("/home");
    }*/
    res.render("game.ejs",{player1: player1,player2: player2,player1Score: player1Score,player2Score: player2Score});
})

app.post("/game",(req,res)=>{
    var winnerId = req.body.winnerId;
    if (winnerId==1){
        player1Score++;
    }
    if (winnerId==2){
        player2Score++;
    }
    res.redirect("/game")
})

app.listen(port,()=>{
    console.log("Server running on port "+port+"...");
});