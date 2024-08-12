import express from 'express';
import { find, list } from '../controller/giftshopController.js';

const giftshopRouter = express.Router();

giftshopRouter.get('/list/', list);
giftshopRouter.get('/find/', find);



export default giftshopRouter;