import express from 'express'
import { signIn, deleteUser } from './controller.js';

const router = express.Router();
router.post('/signIn', signIn);
router.delete('/deleteuser', deleteUser); 

export default router;
