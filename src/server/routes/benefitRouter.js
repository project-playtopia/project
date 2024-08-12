import express from 'express';
import { find, list } from '../controller/benefitController.js';

const benefitRouter = express.Router();

benefitRouter.get('/list/', list);
benefitRouter.get('/find/', find);

export default benefitRouter;