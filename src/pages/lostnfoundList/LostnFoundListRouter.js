import express from 'express';
import { list, listAll, post, update } from './LostnFoundListContoller.js';


const LostnFoundListRouter = express.Router();

LostnFoundListRouter.post ('/post/', post);
LostnFoundListRouter.get ('/list/', list);
LostnFoundListRouter.get('/list/all', listAll);
LostnFoundListRouter.put('/update', update);

export default LostnFoundListRouter;
