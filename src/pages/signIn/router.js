import express from 'express'
import {signIn} from './controller.js';
import { deleteUser } from '../myPage/controller.js';

const router = express.Router();
router.post('/signIn', signIn);

router.delete('/deleteuser', deleteUser); 
router.post('/signIn', signIn);


export default router;