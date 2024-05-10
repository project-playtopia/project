import connect from './connect.js';
import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser';
import router from './router.js';
import LostnFoundSearchSchema from './LostnFoundSearchSchema.js';

// 	company: "lotteworld",
// 	company: 'seoulland',
//  company" "everland"

const port = 8014;
const app = express();
connect();

// const lostnfoundsearchdata = [
//     {
//         no: 1,
//       	item: '지갑',
//        	date:  '2024-04-01',
//         company : "lotteworld" 

//     },
//     {
//         no: 2,
//       	item: '카메라',
//        	date:  '2024-04-02',
//         company : "lotteworld" 

//     },
//     {
//         no: 3,
//       	item: '핸드폰',
//        	date:  '2024-04-02',
//         company : "lotteworld" 

//     },
//     {
//         no: 4,
//       	item: '카드',
//        	date:  '2024-04-03',
//         company : "lotteworld" 

//     },
//     {
//         no: 5,
//       	item: '반지',
//        	date:  '2024-04-04',
//         company : "lotteworld" 

//     },
//     {
//         no: 6,
//       	item: '지갑',
//        	date:  '2024-04-04',
//         company : "lotteworld" 

//     },
//     {
//         no: 7,
//       	item: '지갑',
//        	date:  '2024-04-05',
//         company : "lotteworld" 

//     },
//     {
//         no: 8,
//       	item: '카메라',
//        	date:  '2024-04-05',
//         company : "lotteworld" 

//     },
//     {
//         no: 9,
//       	item: '핸드폰',
//        	date:  '2024-04-06',
//         company : "lotteworld" 

//     },
//     {
//         no: 10,
//       	item: '카드',
//        	date:  '2024-04-06',
//         company : "lotteworld" 

//     },
//     {
//         no: 11,
//       	item: '반지',
//        	date:  '2024-04-07',
//         company : "lotteworld" 

//     },
//     {
//         no: 12,
//       	item: '지갑',
//        	date:  '2024-04-07',
//         company : "lotteworld" 

//     },
//     {
//         no: 13,
//       	item: '지갑',
//        	date:  '2024-04-08',
//         company : "lotteworld" 

//     },
//     {
//         no: 14,
//       	item: '카메라',
//        	date:  '2024-04-08',
//         company : "lotteworld" 

//     },
//     {
//         no: 15,
//       	item: '핸드폰',
//        	date:  '2024-04-09',
//         company : "lotteworld" 

//     },
//     {
//         no: 16,
//       	item: '카드',
//        	date:  '2024-04-10',
//         company : "lotteworld" 

//     },
//     {
//         no: 17,
//       	item: '반지',
//        	date:  '2024-04-11',
//         company : "lotteworld" 

//     },
//     {
//         no: 18,
//       	item: '지갑',
//        	date:  '2024-04-12',
//         company : "lotteworld" 

//     },
//     {
//         no: 19,
//       	item: '카드',
//        	date:  '2024-04-13',
//         company : "lotteworld" 

//     },
//     {
//         no: 20,
//       	item: '반지',
//        	date:  '2024-04-14',
//         company : "lotteworld" 

//     },
//     {
//         no: 21,
//       	item: '지갑',
//        	date:  '2024-04-15',
//         company : "lotteworld" 

//     },
//     {
//         no: 1,
//       	item: '지갑',
//        	date:  '2024-04-01',
//         company : "seoulland" 

//     },
//     {
//         no: 2,
//       	item: '카메라',
//        	date:  '2024-04-02',
//         company : "seoulland" 

//     },
//     {
//         no: 3,
//       	item: '핸드폰',
//        	date:  '2024-04-02',
//         company : "seoulland" 

//     },
//     {
//         no: 4,
//       	item: '카드',
//        	date:  '2024-04-03',
//         company : "seoulland" 

//     },
//     {
//         no: 5,
//       	item: '반지',
//        	date:  '2024-04-04',
//         company : "seoulland" 

//     },
//     {
//         no: 6,
//       	item: '지갑',
//        	date:  '2024-04-04',
//         company : "seoulland" 

//     },
//     {
//         no: 7,
//       	item: '지갑',
//        	date:  '2024-04-05',
//         company : "seoulland" 

//     },
//     {
//         no: 8,
//       	item: '카메라',
//        	date:  '2024-04-05',
//         company : "seoulland" 

//     },
//     {
//         no: 9,
//       	item: '핸드폰',
//        	date:  '2024-04-06',
//         company : "seoulland" 

//     },
//     {
//         no: 10,
//       	item: '카드',
//        	date:  '2024-04-06',
//         company : "seoulland" 

//     },
//     {
//         no: 11,
//       	item: '반지',
//        	date:  '2024-04-07',
//         company : "seoulland" 

//     },
//     {
//         no: 12,
//       	item: '지갑',
//        	date:  '2024-04-07',
//         company : "seoulland" 

//     },
//     {
//         no: 13,
//       	item: '지갑',
//        	date:  '2024-04-08',
//         company : "seoulland" 

//     },
//     {
//         no: 14,
//       	item: '카메라',
//        	date:  '2024-04-08',
//         company : "seoulland" 

//     },
//     {
//         no: 15,
//       	item: '핸드폰',
//        	date:  '2024-04-09',
//         company : "seoulland" 

//     },
//     {
//         no: 16,
//       	item: '카드',
//        	date:  '2024-04-10',
//         company : "seoulland" 

//     },
//     {
//         no: 17,
//       	item: '반지',
//        	date:  '2024-04-11',
//         company : "seoulland" 

//     },
//     {
//         no: 18,
//       	item: '지갑',
//        	date:  '2024-04-12',
//         company : "seoulland" 

//     },
//     {
//         no: 19,
//       	item: '카드',
//        	date:  '2024-04-13',
//         company : "seoulland" 

//     },
//     {
//         no: 20,
//       	item: '반지',
//        	date:  '2024-04-14',
//         company : "seoulland" 

//     },
//     {
//         no: 21,
//       	item: '지갑',
//        	date:  '2024-04-15',
//         company : "seoulland" 

//     },
//     {
//         no: 1,
//       	item: '지갑',
//        	date:  '2024-04-01',
//         company : "everland" 

//     },
//     {
//         no: 2,
//       	item: '카메라',
//        	date:  '2024-04-02',
//         company : "everland" 

//     },
//     {
//         no: 3,
//       	item: '핸드폰',
//        	date:  '2024-04-02',
//         company : "everland" 

//     },
//     {
//         no: 4,
//       	item: '카드',
//        	date:  '2024-04-03',
//         company : "everland" 

//     },
//     {
//         no: 5,
//       	item: '반지',
//        	date:  '2024-04-04',
//         company : "everland" 

//     },
//     {
//         no: 6,
//       	item: '지갑',
//        	date:  '2024-04-04',
//         company : "everland" 

//     },
//     {
//         no: 7,
//       	item: '지갑',
//        	date:  '2024-04-05',
//         company : "everland" 

//     },
//     {
//         no: 8,
//       	item: '카메라',
//        	date:  '2024-04-05',
//         company : "everland" 

//     },
//     {
//         no: 9,
//       	item: '핸드폰',
//        	date:  '2024-04-06',
//         company : "everland" 

//     },
//     {
//         no: 10,
//       	item: '카드',
//        	date:  '2024-04-06',
//         company : "everland" 

//     },
//     {
//         no: 11,
//       	item: '반지',
//        	date:  '2024-04-07',
//         company : "everland" 

//     },
//     {
//         no: 12,
//       	item: '지갑',
//        	date:  '2024-04-07',
//         company : "everland" 

//     },
//     {
//         no: 13,
//       	item: '지갑',
//        	date:  '2024-04-08',
//         company : "everland" 

//     },
//     {
//         no: 14,
//       	item: '카메라',
//        	date:  '2024-04-08',
//         company : "everland" 

//     },
//     {
//         no: 15,
//       	item: '핸드폰',
//        	date:  '2024-04-09',
//         company : "everland" 

//     },
//     {
//         no: 16,
//       	item: '카드',
//        	date:  '2024-04-10',
//         company : "everland" 

//     },
//     {
//         no: 17,
//       	item: '반지',
//        	date:  '2024-04-11',
//         company : "everland" 

//     },
//     {
//         no: 18,
//       	item: '지갑',
//        	date:  '2024-04-12',
//         company : "everland" 
//     },
//     {
//         no: 19,
//       	item: '카드',
//        	date:  '2024-04-13',
//         company : "everland" 

//     },
//     {
//         no: 20,
//       	item: '반지',
//        	date:  '2024-04-14',
//         company : "everland" 

//     },
//     {
//         no: 21,
//       	item: '지갑',
//        	date:  '2024-04-15',
//         company : "everland" 

//     }
// ]

//   LostnFoundSearchSchema.insertMany(lostnfoundsearchdata)
//   .then(() => {
//     console.log('등록');
//   })
//   .catch((err) => {
//     console.error('등록에러', err);
//   });

  

app.use(bodyParser.json())
app.use(cors())
app.use('/lostnfoundsearch', router)  
app.listen(port, ()=>{
	console.log(`서버 오픈 ${port}`);
})


