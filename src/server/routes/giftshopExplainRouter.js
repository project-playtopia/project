import express from 'express';
import { findInfo } from '../controller/giftshopExplainController.js';

const giftshopExplainRouter = express.Router();

giftshopExplainRouter.get('/findInfo', findInfo);

export default giftshopExplainRouter;