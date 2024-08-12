import express from 'express'
import {signIn} from '../controller/signInController.js';
import { deleteUser } from '../controller/mypageController.js';

const signInRouter = express.Router();
signInRouter.post('/signIn', signIn);

signInRouter.delete('/deleteuser', deleteUser); 
signInRouter.post('/signIn', signIn);

export default signInRouter;