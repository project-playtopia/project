import express from 'express';
import { list } from '../controller/faqExplainController.js';

const faqExplainRouter = express.Router();

faqExplainRouter.get ('/list/', list);

export default faqExplainRouter;
