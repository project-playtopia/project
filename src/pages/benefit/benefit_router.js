import express from 'express';
import { list } from './benefit_controller.js';

const benefitRouter = express.Router();

benefitRouter.get('/list/', list);

export default benefitRouter;
