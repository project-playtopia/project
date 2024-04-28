import connect from './connect.js';
import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser';
import router from './router.js';
import FaqSchema from './FaqSchema.js';


const port = 8001;
const app = express();
connect();

// const faqdatas = [
//     {
//  		no: 1,
//  		title: '종합이용안내',
//  		content: '제가 키우는 동물을 에버랜드에 기증하고 싶은데요.',
//   		date:  '2024-04-01' 
// 	},
//     {
// 	 	no: 2,
// 	  	title: '종합이용안내',
// 	  	 content: '에버랜드 상품권이 있는데 어디에서 사용할 수 있나요?',
// 	   	 date:  '2024-04-01'
// 	},
//      {
// 	 	no: 3,
// 	  	title: '종합이용안내',
// 	  	 content: '어트랙션 "대기중"이 무슨 뜻인가요?', 
// 	  	 date:  '2024-04-02'
// 	},
//     { 
// 		no: 4,
// 		title: '종합이용안내',
// 		content: '콤비권이나 2일 이용권도 온라인 예약이 가능한가요?',
// 		date:  '2024-04-03'
// 	},
//     {
// 	 	no: 5,
// 		title: '종합이용안내',
// 		content: '스노우 버스터(눈썰매장)에 외부썰매 반입이 가능한가요?',
// 		 date:  '2024-04-03'
// 	},
//     {
// 	 	no: 6,
// 		title: '정기권',
//  		content: '정기권 구입 시 반드시 솜사탕 회원 가입을 해야하나요?', 
// 		date:  '2024-04-04'
// 	},
//     {
// 		 no: 7,
// 		title: '정기권',
//  		content: '정기권 구입 후 모바일 앱에 등록하는 방법을 알려주세요.',
// 		 date:  '2024-04-05'
// 	},
//     { 
// 		no: 8,
// 		title: '정기권',
//  		content: '기존(23년 11월 7일까지) 정기권 소지자인데, 재구입 시 리워즈 혜택을 못받게 되나요?',
// 		 date:  '2024-04-06'
// 	},
//     { 
// 		no: 9,
// 		title: '정기권',
//  		content: '정기권 재구입 할인이 있나요?',
// 		 date:  '2024-04-07'
// 	},
//     { 
// 		no: 10,
// 		title: '정기권',
//  		content: '정기권 연차는 어떻게 계산되나요? '
// 		, date:  '2024-04-08'
// 	},
//     {
// 	 	no: 11, 
// 		title: '홈브리지',
// 		content: '홈브리지(캐빈)주소가 어떻게 되나요? 네비게이션에 뭐라고 검색하나요?'
// 		, date:  '2024-04-08'
// 	},
//     {
// 	 	no: 12,
// 		title: '홈브리지',
// 		content: '객실 내에서 취사 가능한가요?',
// 		 date:  '2024-04-09'
// 	},
//     {
// 	 	no: 13,
// 		title: '홈브리지',
//  		content: '대중 교통 이용해서 홈브리지 까지는 어떻게 가야 하나요?',
// 		 date:  '2024-04-10'
// 	},
//     {
// 	 	no: 14,
// 		title: '홈브리지',
//  		content: '홈브리지는 인터넷 당일 취소가 가능한가요?',
// 		 date:  '2024-04-10'
// 	},
//     {
// 	 	no: 15,
// 		title: '홈브리지',
// 		content: '홈브리지 객실에서 인터넷 사용이 가능한가요?',
// 		date:  '2024-04-11'
// 	},
//     {
// 	 	no: 16,
// 		title: '홈브리지',
// 		content: '홈브리지 주차는 어떻게 하나요?',
//  		date:  '2024-04-11'
// 	},
//     {
// 	 	no: 17,
// 		title: '솜사탕멤버십',
// 		content: '솜사탕 프로그램은 무엇인가요?',
// 		 date:  '2024-04-11'
// 	},
//     {
// 		no: 18,
// 		title: '솜사탕멤버십',
// 		content: '솜사탕 멤버십 가입은 어떻게 하나요?',
// 		date:  '2024-04-12'
// 	},
//     {
// 	 	no: 19,
// 	  	title: '솜사탕멤버십',
// 	   	content: '솜사탕 프로그램의 주요혜택은 무엇인가요?',
// 	    date:  '2024-04-12'
// 	},
//     {
// 	 	no: 20,
// 	  	title: '솜사탕멤버십',
// 	   	content: '솜사탕 멤버십에서 솜은 무엇인가요?',
// 	    date:  '2024-04-12'
// 	},
//     {
// 	 	no: 21,
// 	  	title: '솜사탕멤버십',
// 	   	content: '솜사탕 멤버십의 회원등급 산정 기준은 어떻게 되나요?',
// 	    date:  '2024-04-13'
// 	}
//   ];
  
//   FaqSchema.insertMany(faqdatas)
//   .then(() => {
//     console.log('등록');
//   })
//   .catch((err) => {
//     console.error('등록에러', err);
//   });
  

app.use(bodyParser.json())
app.use(cors())
app.use('/faqlist', router)  
app.listen(port, ()=>{
	console.log(`서버 오픈 ${port}`);
})


