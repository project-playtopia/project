import express from 'express';
import router from './routes/router.js';
import connect from './connect.js';
import cors from 'cors'
import bodyParser from 'body-parser'

// 커넥트 사용, 즉 몽고DB 연결
connect();

const app = express();
const port = 8000;

// 데이터와 관련 되어있는 디폴트 설정
app.use(bodyParser.json());
app.use(express.urlencoded({extended : false}));

// Cross-Origin-Resoruce 설정 브라우저에서 누가 서버에 요청했는지 정확하게 확인하여 허용해주기 위한 설정
app.use(cors({
  origin : 'http://localhost:3000',
  method : ['GET', 'POST', 'DELETE', 'PUT'],
  credentials : true,
}));

// 라우팅을 가로채어 localhost:8000/attractions/작성한 라우팅
app.use('/attraction', router)





// 서버 실행
app.listen(port, () => {
  console.log(`server is on ${port}`)
})