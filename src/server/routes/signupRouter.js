import express from 'express'
import { signUp } from '../controller/signupContorller.js';

const signUpRouter = express.Router();
signUpRouter.post('/signUp', signUp);

export default signUpRouter;