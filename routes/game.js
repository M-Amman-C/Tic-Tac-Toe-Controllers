import express from 'express';
import gameController from '../controllers/gameController.js';

const router = express.Router();

router.get('/', gameController.getGame);

router.post('/', gameController.handleGameAction);

export default router;