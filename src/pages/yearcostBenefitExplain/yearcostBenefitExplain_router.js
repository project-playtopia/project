import express from 'express';
import { find } from './yearcostBenefitExplain_controller.js';

const yearCostBenefitExplainRouter = express.Router();

yearCostBenefitExplainRouter.get('/find/', find);

export default yearCostBenefitExplainRouter;