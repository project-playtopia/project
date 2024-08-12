import express from 'express';
import { find, list } from '../controller/yearcostController.js';

const yearCostRouter = express.Router();

yearCostRouter.get('/list/', list);

yearCostRouter.get('/find/', find);

export default yearCostRouter;