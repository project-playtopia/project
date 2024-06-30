import express from 'express';
import { list, find } from './benefit_controller.js';

const benefitRouter = express.Router();

benefitRouter.get('/list/', list);
benefitRouter.get('/find/', find);

export default benefitRouter;
