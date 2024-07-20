const getGame = (req, res) => {
    const player1 = req.session.player1;
    const player2 = req.session.player2;
    const player1Score = req.session.player1Score;
    const player2Score = req.session.player2Score;
    res.render('game', { title: 'Game Page', player1, player2,player1Score,player2Score});
};

const handleGameAction = (req, res) => {
    var winnerId = req.body.winnerId;
    
    if (winnerId==1){
        req.session.player1Score++;
    }
    if (winnerId==2){
        req.session.player2Score++;
    }
    res.redirect("/game")
};


export default { getGame, handleGameAction };