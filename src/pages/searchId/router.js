import express from 'express';
import { findByPhone } from './controller.js';

const router = express.Router();

router.post('/findByPhone', findByPhone);

export default router;
