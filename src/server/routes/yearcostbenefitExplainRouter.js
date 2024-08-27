import express from 'express';
import { find } from '../controller/yearcostBenefitExplainController.js';

const yearcostBenefitExplainRouter = express.Router();

yearcostBenefitExplainRouter.get('/find/', find);

export default yearcostBenefitExplainRouter;