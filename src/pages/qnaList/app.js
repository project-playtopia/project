import connect from './connect.js';
import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser';
import router from './router.js';
import QnaSchema from './QnaSchema.js';



const port = 8004;
const app = express();
connect();

// const qnadatas = [
//     {
//  		no: 1,
//  		title: '이용정보',
//  		content: '아쿠아리움/서울스카이 이용 시 어드벤처 주차장을 이용할 수 있나요?',
//   		date:  '2024-04-01' 
// 	},
//     {
// 	 	no: 2,
// 	  	title: '온라인예매/우대정보',
// 	  	 content: '매직패스 프리미엄 사전 예매는 어떻게 하나요?',
// 	   	 date:  '2024-04-01'
// 	},
//      {
// 	 	no: 3,
// 	  	title: '연간이용',
// 	  	 content: '환불기준은 어떻게 되나요?', 
// 	  	 date:  '2024-04-02'
// 	},
//     { 
// 		no: 4,
// 		title: '연간이용',
// 		content: '연간이용권을 가족이나 친구에게 양도할 수 있나요?',
// 		date:  '2024-04-03'
// 	},
//     {
// 	 	no: 5,
// 		title: '이용정보',
// 		content: '클린카드(청소년카드, 법인카드)로 롯데월드를 이용할 수 있나요?',
// 		 date:  '2024-04-03'
// 	},
//     {
// 	 	no: 6,
// 		title: '탑승예약제/싱글라이더',
//  		content: '싱글라이더가 무엇인가요?', 
// 		date:  '2024-04-04'
// 	},
//     {
// 		 no: 7,
// 		title: '장애인 탑승예약제',
//  		content: '장애인 탑승예약제가 뭐예요?',
// 		 date:  '2024-04-05'
// 	},
//     { 
// 		no: 8,
// 		title: '기타',
//  		content: '매직패스 프리미엄 티켓은 무엇인가요?',
// 		 date:  '2024-04-06'
// 	},
//     { 
// 		no: 9,
// 		title: '기타',
//  		content: "민속박물관은 어떤 곳인가요?",
// 		 date:  '2024-04-07'
// 	},
//     { 
// 		no: 10,
// 		title: '이용정보',
//  		content: '롯데월드에서 사용 가능한 상품권은 무엇이 있나요? '
// 		, date:  '2024-04-08'
// 	},
//     {
// 	 	no: 11, 
// 		title: '연간이용',
// 		content: '재가입시 혜택은 없나요?'
// 		, date:  '2024-04-08'
// 	},
//     {
// 	 	no: 12,
// 		title: '이용정보',
// 		content: '홈페이지 로그인이 되지 않아요',
// 		 date:  '2024-04-09'
// 	},
//     {
// 	 	no: 13,
// 		title: '이용정보',
//  		content: '비가 올 때도 운영 하나요?',
// 		 date:  '2024-04-10'
// 	},
//     {
// 	 	no: 14,
// 		title: '이용정보',
//  		content: '신체장애를 갖고 있는 고객을 위한 특별혜택이 있나요?',
// 		 date:  '2024-04-10'
// 	},
//     {
// 	 	no: 15,
// 		title: '연간이용',
// 		content: '연간카드는 꼭 본인만 쓸수있나요?',
// 		date:  '2024-04-11'
// 	},
//     {
// 	 	no: 16,
// 		title: '연간이용',
// 		content: '연간이용권은 입장 제한일이 없나요?',
//  		date:  '2024-04-11'
// 	},
//     {
// 	 	no: 17,
// 		title: '장애인 탑승예약제',
// 		content: '동반자 나이제한이 있나요?',
// 		 date:  '2024-04-11'
// 	},
//     {
// 		no: 18,
// 		title: '장애인 탑승예약제',
// 		content: '동반자를 3명으로 한정한 이유는 뭔가요?',
// 		date:  '2024-04-12'
// 	},
//     {
// 	 	no: 19,
// 	  	title: '기타',
// 	   	content: '종합이용권을 구입하면 아이스링크 할인을 받을 수 있나요？',
// 	    date:  '2024-04-12'
// 	},
//     {
// 	 	no: 20,
// 	  	title: '기타',
// 	   	content: '민속박물관도 종합이용권으로 이용가능하나요？',
// 	    date:  '2024-04-12'
// 	},
//     {
// 	 	no: 21,
// 	  	title: '기타',
// 	   	content: '전통 혼례를 할 수 있다고 하던데요. 어떻게 이용하나요?',
// 	    date:  '2024-04-13'
// 	}
//   ];
  
//   QnaSchema.insertMany(qnadatas)
//   .then(() => {
//     console.log('등록');
//   })
//   .catch((err) => {
//     console.error('등록에러', err);
//   });

app.use(bodyParser.json())
app.use(cors())
app.use('/qnalist', router)  
app.listen(port, ()=>{
	console.log(`서버 오픈 ${port}`);
})


