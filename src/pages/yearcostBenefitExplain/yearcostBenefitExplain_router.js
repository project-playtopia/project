import express from 'express';
import { find } from './yearcostBenefitExplain_controller.js';

const yearcostBenefitExplainRouter = express.Router();

yearcostBenefitExplainRouter.get('/find/', find);

export default yearcostBenefitExplainRouter;