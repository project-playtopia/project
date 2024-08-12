import express from 'express';
import { findInfo } from '../controller/benefitInfoController.js';

const benefitExplainRouter = express.Router();

benefitExplainRouter.get('/', findInfo);

export default benefitExplainRouter;