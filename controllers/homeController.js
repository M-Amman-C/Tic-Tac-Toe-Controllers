const homeController = (req, res) => {
    var player1 = req.body.player1;
    var player2 = req.body.player2;
    var player1Score = 0;
    var player2Score = 0;
    req.session.player1 = player1;
    req.session.player2 = player2;
    req.session.player1Score = player1Score;
    req.session.player2Score = player2Score;
    res.redirect("/game");
};

export default homeController;
