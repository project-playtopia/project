import express from 'express';
import { findInfo } from './benefitExplain_controller.js'

const benefitExplainRouter = express.Router();

benefitExplainRouter.get('/', findInfo);

export default benefitExplainRouter;