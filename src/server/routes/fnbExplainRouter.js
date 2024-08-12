import express from 'express';
import { findInfo } from '../controller/fnbExplainController.js';

const fnbExplainRouter = express.Router();

fnbExplainRouter.get('/', findInfo);

export default fnbExplainRouter;