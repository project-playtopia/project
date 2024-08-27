import express from 'express';
import { find, list } from '../controller/fnbController.js';

const fnbRouter = express.Router();

fnbRouter.get('/list/', list);
fnbRouter.get('/find/', find);

export default fnbRouter;