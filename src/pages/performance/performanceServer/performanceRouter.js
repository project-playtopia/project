import express from 'express';
import { listByDate } from './performanceController.js';


const performanceRouter = express.Router();

performanceRouter.get('/list', listByDate);

export default performanceRouter;

