import express from 'express';
import { list, post } from '../controller/faqController.js';

const faqRouter = express.Router();

faqRouter.get ('/post/', post);
faqRouter.get ('/list/', list);

export default faqRouter;
