

import express from 'express';
// import { getPerformancesByDate } from './controller.js';
// 이름이 지정된 import 사용
import { Performance } from './performanceschema.js';




// 날짜별 성능 데이터 조회
// router.get('/performances/:date', getPerformancesByDate);

const router = express.Router();

// 예시: 'performance' 모델을 사용하는 라우트
router.get('/performances', async (req, res) => {
  try {
    const performances = await Performance.find();
    res.json(performances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
