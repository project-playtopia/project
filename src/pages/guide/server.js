// server.js
import express from 'express';
import connect from './connect.js';
import cors from 'cors'
import bodyParser from 'body-parser'
import guidemapschema from './guidemapschema.js';
import router from './router.js';

connect();
const app = express();
const port = 8000;


app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true,
}));

// const guideMapData = [
//   {
//     "id": 0,
//     "attraction": [
//       {
//         "title": "자이로스윙",
//         "content": "동계운휴"
//       },
//       {
//         "title": "슬릭스튜디오",
//         "content": "동계운휴"
//       }
//     ],
//     "startTime": "08:00",
//     "endTime": "22:00"
//   },
//   {
//     "id": 1,
//     "attraction": [
//       {
//         "title": "아틀란티스",
//         "content": "동계운휴"
//       },
//       {
//         "title": "회전 목마",
//         "content": "동계운휴"
//       }
//     ],
//     "startTime": "09:00",
//     "endTime": "22:00"
//   },
//   {
//     "id": 2,
//     "attraction": [
//       {
//         "title": "플라이벤처",
//         "content": "정기 점검"
//       },
//       {
//         "title": "슬릭스튜디오",
//         "content": "정기 운휴"
//       }
//     ],
//     "startTime": "09:00",
//     "endTime": "22:00"
//   },
//   {
//     "id": 3,
//     "attraction": [
//       {
//         "title": "아틀란티스",
//         "content": "우천 운휴"
//       },
//       {
//         "title": "회전 그네",
//         "content": "우천 운휴"
//       }
//     ],
//     "startTime": "10:00",
//     "endTime": "21:00"
//   },
//   {
//     "id": 4,
//     "attraction": [
//       {
//         "title": "회전목마",
//         "content": "정기 점검"
//       },
//       {
//         "title": "아틀란티스",
//         "content": "우천 운휴"
//       }
//     ],
//     "startTime": "10:00",
//     "endTime": "22:00"
//   },
//   {
//     "id": 5,
//     "attraction": [
//       {
//         "title": "후렌치 레볼루션",
//         "content": "정기 점검"
//       },
//       {
//         "title": "아틀란티스",
//         "content": "우천 운휴"
//       }
//     ],
//     "startTime": "10:00",
//     "endTime": "22:00"
//   },
//   {
//     "id": 6,
//     "attraction": [
//       {
//         "title": "후렌치 레볼루션",
//         "content": "정기 점검"
//       },
//       {
//         "title": "아틀란티스",
//         "content": "우천 운휴"
//       }
//     ],
//     "startTime": "10:00",
//     "endTime": "22:00"
//   },
//   {
//     "id": 7,
//     "attraction": [
//       {
//         "title": "황야의 무법자",
//         "content": "정기 점검"
//       },
//       {
//         "title": "자이로스윙",
//         "content": "동계 운휴"
//       }
//     ],
//     "startTime": "11:00",
//     "endTime": "20:00"
//   },
//   {
//     "id": 8,
//     "attraction": [
//       {
//         "title": "자이로드롭",
//         "content": "정기 점검"
//       },
//       {
//         "title": "파라오의 분노",
//         "content": "정기 점검"
//       }
//     ],
//     "startTime": "10:00",
//     "endTime": "20:00"
//   },
//   {
//     "id": 9,
//     "attraction": [
//       {
//         "title": "혜성특급",
//         "content": "정기 점검"
//       },
//       {
//         "title": "파라오의 분노",
//         "content": "정기 점검"
//       }
//     ],
//     "startTime": "11:00",
//     "endTime": "21:00"
//   }
// ];


// guidemapschema.insertMany(guideMapData)
// .then(() => {
//       console.log('등록');
//     })
//     .catch((err) => {
//       console.error('등록에러', err);
//     });


app.use(bodyParser.json())
app.use('/guide', router)  
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
