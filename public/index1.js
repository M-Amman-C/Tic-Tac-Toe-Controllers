var newGameButton = document.getElementById("newGameButton");
var playerPage = document.getElementById("playerPage");
var playerToHome = document.getElementById("playerToHome");


newGameButton.addEventListener("click",()=>{
    playerPage.style.width = "949px";
    playerPage.style.height = "567px";
    playerPage.style.opacity = "100%";
})

playerToHome.addEventListener("click",()=>{
    playerPage.style.width = "0px";
    playerPage.style.height = "0px";
    playerPage.style.opacity = "0%";
})

