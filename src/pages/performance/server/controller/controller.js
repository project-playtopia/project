import Performance from '../schemas/performanceschema.js';





exports.getPerformancesByDate = async (req, res) => {
  try {
    const performances = await Performance.findOne({ date: req.params.date });
    if (!performances) {
      return res.status(404).json({ msg: 'No performances found for this date' });
    }
    res.json(performances);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};










// 예시: controller.js 내의 getPerformancesByDate 함수
// export const getPerformancesByDate = async (req, res) => {
//     try {
//       const date = new Date(req.params.date); // 날짜 파싱
//       const performances = await Performance
//         .find({ date })
//         .sort('time') // 시간 순으로 정렬
//         .exec();
//       res.json(performances);
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   };
  