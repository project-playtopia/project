import express from 'express';
import { find, list } from './yearcost_controller.js';

const yearCostRouter = express.Router();

yearCostRouter.get('/list/', list);

yearCostRouter.get('/find/', find);

export default yearCostRouter;