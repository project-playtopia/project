import express from 'express';
import { listByDate } from '../controller/performanceController.js';


const performanceRouter = express.Router();

performanceRouter.get('/list', listByDate);

export default performanceRouter;

