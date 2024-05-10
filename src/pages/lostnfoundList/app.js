import connect from './connect.js';
import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser';
import router from './router.js';
import LostnFoundSchema from './LostnFoundSchema.js';

// 	company: "lotteworld",
// 	company: 'seoulland',
//  company" "everland"

const port = 8010;
const app = express();
connect();

// const lostnfounddata = [
//     {
//         no: 1,
//       	item: '지갑',
//       	found: '1층 오락실',
//         result : '보관중',
//        	date:  '2024-04-01',
//         company : "lotteworld" 

//     },
//     {
//         no: 2,
//       	item: '카메라',
//       	found: '시계탑 앞',
//         result : '보관중',
//        	date:  '2024-04-02',
//         company : "lotteworld" 

//     },
//     {
//         no: 3,
//       	item: '핸드폰',
//       	found: '워니비니',
//         result : '보관중',
//        	date:  '2024-04-02',
//         company : "lotteworld" 

//     },
//     {
//         no: 4,
//       	item: '카드',
//       	found: '모로칸 게임장',
//         result : '보관중',
//        	date:  '2024-04-03',
//         company : "lotteworld" 

//     },
//     {
//         no: 5,
//       	item: '반지',
//       	found: '1층 오락실',
//         result : '보관중',
//        	date:  '2024-04-04',
//         company : "lotteworld" 

//     },
//     {
//         no: 6,
//       	item: '지갑',
//       	found: '5G 아트란티스',
//         result : '보관중',
//        	date:  '2024-04-04',
//         company : "lotteworld" 

//     },
//     {
//         no: 7,
//       	item: '지갑',
//       	found: '슬릭 스튜디오',
//         result : '보관중',
//        	date:  '2024-04-05',
//         company : "lotteworld" 

//     },
//     {
//         no: 8,
//       	item: '카메라',
//       	found: '배틀그라운드 월드 에이전트',
//         result : '보관중',
//        	date:  '2024-04-05',
//         company : "lotteworld" 

//     },
//     {
//         no: 9,
//       	item: '핸드폰',
//       	found: '카트라이더레이싱월드',
//         result : '보관중',
//        	date:  '2024-04-06',
//         company : "lotteworld" 

//     },
//     {
//         no: 10,
//       	item: '카드',
//       	found: '월드모노레일',
//         result : '보관중',
//        	date:  '2024-04-06',
//         company : "lotteworld" 

//     },
//     {
//         no: 11,
//       	item: '반지',
//       	found: '자이로드롭',
//         result : '보관중',
//        	date:  '2024-04-07',
//         company : "lotteworld" 

//     },
//     {
//         no: 12,
//       	item: '지갑',
//       	found: '자이로스윙',
//         result : '보관중',
//        	date:  '2024-04-07',
//         company : "lotteworld" 

//     },
//     {
//         no: 13,
//       	item: '지갑',
//       	found: '자이로스핀',
//         result : '보관중',
//        	date:  '2024-04-08',
//         company : "lotteworld" 

//     },
//     {
//         no: 14,
//       	item: '카메라',
//       	found: '아트란티스',
//         result : '보관중',
//        	date:  '2024-04-08',
//         company : "lotteworld" 

//     },
//     {
//         no: 15,
//       	item: '핸드폰',
//       	found: '혜성특급',
//         result : '보관중',
//        	date:  '2024-04-09',
//         company : "lotteworld" 

//     },
//     {
//         no: 16,
//       	item: '카드',
//       	found: '번지드롭',
//         result : '보관중',
//        	date:  '2024-04-10',
//         company : "lotteworld" 

//     },
//     {
//         no: 17,
//       	item: '반지',
//       	found: '회전그네',
//         result : '보관중',
//        	date:  '2024-04-11',
//         company : "lotteworld" 

//     },
//     {
//         no: 18,
//       	item: '지갑',
//       	found: '머킹의 회전목마',
//         result : '보관중',
//        	date:  '2024-04-12',
//         company : "lotteworld" 

//     },
//     {
//         no: 19,
//       	item: '카드',
//       	found: '신밧드의 모험',
//         result : '보관중',
//        	date:  '2024-04-13',
//         company : "lotteworld" 

//     },
//     {
//         no: 20,
//       	item: '반지',
//       	found: '회전목마',
//         result : '보관중',
//        	date:  '2024-04-14',
//         company : "lotteworld" 

//     },
//     {
//         no: 21,
//       	item: '지갑',
//       	found: '후룸라이더',
//         result : '보관중',
//        	date:  '2024-04-15',
//         company : "lotteworld" 

//     },
//     {
//         no: 1,
//       	item: '지갑',
//       	found: '둥실비행선',
//         result : '보관중',
//        	date:  '2024-04-01',
//         company : "seoulland" 

//     },
//     {
//         no: 2,
//       	item: '카메라',
//       	found: '빅회전목마',
//         result : '보관중',
//        	date:  '2024-04-02',
//         company : "seoulland" 

//     },
//     {
//         no: 3,
//       	item: '핸드폰',
//       	found: '월드컵',
//         result : '보관중',
//        	date:  '2024-04-02',
//         company : "seoulland" 

//     },
//     {
//         no: 4,
//       	item: '카드',
//       	found: '도깨비바람',
//         result : '보관중',
//        	date:  '2024-04-03',
//         company : "seoulland" 

//     },
//     {
//         no: 5,
//       	item: '반지',
//       	found: '쥬라기랜드',
//         result : '보관중',
//        	date:  '2024-04-04',
//         company : "seoulland" 

//     },
//     {
//         no: 6,
//       	item: '지갑',
//       	found: '언더씨킹덤',
//         result : '보관중',
//        	date:  '2024-04-04',
//         company : "seoulland" 

//     },
//     {
//         no: 7,
//       	item: '지갑',
//       	found: '킹바이킹',
//         result : '보관중',
//        	date:  '2024-04-05',
//         company : "seoulland" 

//     },
//     {
//         no: 8,
//       	item: '카메라',
//       	found: '블랙홀 2000',
//         result : '보관중',
//        	date:  '2024-04-05',
//         company : "seoulland" 

//     },
//     {
//         no: 9,
//       	item: '핸드폰',
//       	found: '라바 트위스터',
//         result : '보관중',
//        	date:  '2024-04-06',
//         company : "seoulland" 

//     },
//     {
//         no: 10,
//       	item: '카드',
//       	found: '은하열차888',
//         result : '보관중',
//        	date:  '2024-04-06',
//         company : "seoulland" 

//     },
//     {
//         no: 11,
//       	item: '반지',
//       	found: '베스트키즈',
//         result : '보관중',
//        	date:  '2024-04-07',
//         company : "seoulland" 

//     },
//     {
//         no: 12,
//       	item: '지갑',
//       	found: '시티패럿',
//         result : '보관중',
//        	date:  '2024-04-07',
//         company : "seoulland" 

//     },
//     {
//         no: 13,
//       	item: '지갑',
//       	found: '급류타기',
//         result : '보관중',
//        	date:  '2024-04-08',
//         company : "seoulland" 

//     },
//     {
//         no: 14,
//       	item: '카메라',
//       	found: '티키톡열차',
//         result : '보관중',
//        	date:  '2024-04-08',
//         company : "seoulland" 

//     },
//     {
//         no: 15,
//       	item: '핸드폰',
//       	found: '출동! 슈퍼윙스',
//         result : '보관중',
//        	date:  '2024-04-09',
//         company : "seoulland" 

//     },
//     {
//         no: 16,
//       	item: '카드',
//       	found: '브루미즈 동산',
//         result : '보관중',
//        	date:  '2024-04-10',
//         company : "seoulland" 

//     },
//     {
//         no: 17,
//       	item: '반지',
//       	found: '앨리스 원더하우스',
//         result : '보관중',
//        	date:  '2024-04-11',
//         company : "seoulland" 

//     },
//     {
//         no: 18,
//       	item: '지갑',
//       	found: '터닝메카드 레이싱',
//         result : '보관중',
//        	date:  '2024-04-12',
//         company : "seoulland" 

//     },
//     {
//         no: 19,
//       	item: '카드',
//       	found: '피터팬',
//         result : '보관중',
//        	date:  '2024-04-13',
//         company : "seoulland" 

//     },
//     {
//         no: 20,
//       	item: '반지',
//       	found: '알포스윙',
//         result : '보관중',
//        	date:  '2024-04-14',
//         company : "seoulland" 

//     },
//     {
//         no: 21,
//       	item: '지갑',
//       	found: '엑스플라이어',
//         result : '보관중',
//        	date:  '2024-04-15',
//         company : "seoulland" 

//     },
//     {
//         no: 1,
//       	item: '지갑',
//       	found: '렛츠 트위스트',
//         result : '보관중',
//        	date:  '2024-04-01',
//         company : "everland" 

//     },
//     {
//         no: 2,
//       	item: '카메라',
//       	found: '챔피온쉽 로데오',
//         result : '보관중',
//        	date:  '2024-04-02',
//         company : "everland" 

//     },
//     {
//         no: 3,
//       	item: '핸드폰',
//       	found: '휴먼 스카이(상단)',
//         result : '보관중',
//        	date:  '2024-04-02',
//         company : "everland" 

//     },
//     {
//         no: 4,
//       	item: '카드',
//       	found: '휴먼 스카이(하단)',
//         result : '보관중',
//        	date:  '2024-04-03',
//         company : "everland" 

//     },
//     {
//         no: 5,
//       	item: '반지',
//       	found: '멀린스 스낵',
//         result : '보관중',
//        	date:  '2024-04-04',
//         company : "everland" 

//     },
//     {
//         no: 6,
//       	item: '지갑',
//       	found: '판타스틱 티카페',
//         result : '보관중',
//        	date:  '2024-04-04',
//         company : "everland" 

//     },
//     {
//         no: 7,
//       	item: '지갑',
//       	found: '스낵 버스터',
//         result : '보관중',
//        	date:  '2024-04-05',
//         company : "everland" 

//     },
//     {
//         no: 8,
//       	item: '카메라',
//       	found: '알파인 레스토랑',
//         result : '보관중',
//        	date:  '2024-04-05',
//         company : "everland" 

//     },
//     {
//         no: 9,
//       	item: '핸드폰',
//       	found: '55츄',
//         result : '보관중',
//        	date:  '2024-04-06',
//         company : "everland" 

//     },
//     {
//         no: 10,
//       	item: '카드',
//       	found: '앤티앤스',
//         result : '보관중',
//        	date:  '2024-04-06',
//         company : "everland" 

//     },
//     {
//         no: 11,
//       	item: '반지',
//       	found: '커피빈',
//         result : '보관중',
//        	date:  '2024-04-07',
//         company : "everland" 

//     },
//     {
//         no: 12,
//       	item: '지갑',
//       	found: '필굿솜카페',
//         result : '보관중',
//        	date:  '2024-04-07',
//         company : "everland" 

//     },
//     {
//         no: 13,
//       	item: '지갑',
//       	found: '가든 테라스',
//         result : '보관중',
//        	date:  '2024-04-08',
//         company : "everland" 

//     },
//     {
//         no: 14,
//       	item: '카메라',
//       	found: '매직타임 레스토랑',
//         result : '보관중',
//        	date:  '2024-04-08',
//         company : "everland" 

//     },
//     {
//         no: 15,
//       	item: '핸드폰',
//       	found: '가든 테라스',
//         result : '보관중',
//        	date:  '2024-04-09',
//         company : "everland" 

//     },
//     {
//         no: 16,
//       	item: '카드',
//       	found: '매직타임 레스토랑',
//         result : '보관중',
//        	date:  '2024-04-10',
//         company : "everland" 

//     },
//     {
//         no: 17,
//       	item: '반지',
//       	found: '버거카페 아메리카',
//         result : '보관중',
//        	date:  '2024-04-11',
//         company : "everland" 

//     },
//     {
//         no: 18,
//       	item: '지갑',
//       	found: '버거카페 유럽',
//         result : '보관중',
//        	date:  '2024-04-12',
//         company : "everland" 

//     },
//     {
//         no: 19,
//       	item: '카드',
//       	found: '한가람',
//         result : '보관중',
//        	date:  '2024-04-13',
//         company : "everland" 

//     },
//     {
//         no: 20,
//       	item: '반지',
//       	found: '판다월드 카페',
//         result : '보관중',
//        	date:  '2024-04-14',
//         company : "everland" 

//     },
//     {
//         no: 21,
//       	item: '지갑',
//       	found: '한와담 소반',
//         result : '보관중',
//        	date:  '2024-04-15',
//         company : "everland" 

//     }
// ]

//   LostnFoundSchema.insertMany(lostnfounddata)
//   .then(() => {
//     console.log('등록');
//   })
//   .catch((err) => {
//     console.error('등록에러', err);
//   });

  

app.use(bodyParser.json())
app.use(cors())
app.use('/lostnfoundlist', router)  
app.listen(port, ()=>{
	console.log(`서버 오픈 ${port}`);
})


