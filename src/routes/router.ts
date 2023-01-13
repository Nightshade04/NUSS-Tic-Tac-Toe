import { Router } from 'express';
import { getMatchHistoryHandler, setmatchHistoryHandler, signInHandler, signUpHandler } from '../controllers/userController';

export const router = Router();

router.post('/signin', signInHandler);
router.post('/signup', signUpHandler);
router.get('/:username/getmatchhistory', getMatchHistoryHandler);
router.put('/:username/setmatchhistory', setmatchHistoryHandler);
