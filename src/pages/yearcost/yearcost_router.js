import express from 'express';
import { list } from './yearcost_controller.js';

const yearCostRouter = express.Router();

yearCostRouter.get('/list/', list);

export default yearCostRouter;