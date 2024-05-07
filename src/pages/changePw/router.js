import express from 'express';
import { changePassword } from './controller.js';

const router = express.Router();

router.post('/changePassword', changePassword);

export default router;
