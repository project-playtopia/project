import express from 'express';
import connect from './connect.js';
import performanceRouter from './router.js';

const app = express();
const PORT = 3000;

connect(); // MongoDB에 연결

app.use(express.json()); // JSON 요청 본문 파싱
app.use('/api', performanceRouter); // 라우팅

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
