import express from 'express';
import { findInfo } from './fnbExplain_controller.js';

const fnbExplainRouter = express.Router();

fnbExplainRouter.get('/', findInfo);

export default fnbExplainRouter;