import express from 'express';
import homeController from '../controllers/homeController.js';


var player1 = "";
var player2 = "";
var player1Score = 0;
var player2Score = 0;
    

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});


router.post('/', homeController);

export default router;