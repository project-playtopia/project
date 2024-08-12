import express from 'express';
import { changePassword } from '../controller/changePwController.js';

const changePwRouter = express.Router();

changePwRouter.post('/changePassword', changePassword);

export default changePwRouter;
