import express from 'express';
import { list, post } from '../controller/qnaExplainController.js';

const qnaExplainRouter = express.Router();

qnaExplainRouter.post ('/post/', post);
qnaExplainRouter.get ('/list/', list);

export default qnaExplainRouter;