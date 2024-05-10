// import express from 'express';
// import { getPerformancesByDate } from './controller.js';

// const router = express.Router();

// // 날짜별 성능 데이터 조회
// router.get('/performances/:date', getPerformancesByDate);

// export default router;


const express = require('express');
const router = express.Router();
const { getPerformancesByDate } = require('./controller');

router.get('/performances/:date', getPerformancesByDate);

module.exports = router;

