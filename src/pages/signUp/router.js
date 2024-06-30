import express from 'express'
import { signUp ,checkId } from './controller.js';

const router = express.Router();
router.post('/signUp', signUp);
router.get('/checkId/:id', checkId);

export default router;