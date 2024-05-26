import express from 'express';
import { getPerformancesByDate } from './controller.js';
import { Performance } from '../schemas/performanceschema.js';


const router = express.Router();

// 날짜별 성능 데이터 조회
router.get('/performances/:date', getPerformancesByDate);



// 예시: 'performance' 모델을 사용하는 라우트
router.get('/performances', async (req, res) => {
  try {
    const performances = await Performance.find();
    res.json(performances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// 날짜별 성능 데이터 조회를 처리하는 함수 예시
// 실제 구현에서는 데이터베이스 쿼리 또는 다른 로직에 따라 달라질 수 있습니다.
// async function getPerformancesByDate(req, res) {
//   try {
//     const date = req.params.date; // URL에서 날짜를 가져옵니다.
//     // 날짜에 해당하는 성능 데이터를 조회합니다. 예시로, 모든 데이터를 조회하고 있습니다.
//     // 실제로는 날짜를 기준으로 필터링하는 로직이 필요합니다.
//     const performances = await Performance.find({ 'date': date });
//     res.json(performances);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// }

export default router;

