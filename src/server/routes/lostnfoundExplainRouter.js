import express from 'express';
import { list, post } from '../controller/lostnfoundExplainController.js';


const LostnFoundExplainRouter = express.Router();


LostnFoundExplainRouter.get ('/list/', list);
LostnFoundExplainRouter.post('/post/', post);


export default LostnFoundExplainRouter;
