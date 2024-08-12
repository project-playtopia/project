import express from 'express';
import { list, post } from '../controller/qnaController.js';

const qnaRouter = express.Router();

qnaRouter.post ('/post/', post);
qnaRouter.get ('/list/', list);

export default qnaRouter;