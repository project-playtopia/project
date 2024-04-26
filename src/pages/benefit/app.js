import express from 'express';
import connect from './connect.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import BenefitSchema from './benefit_schema.js';
import benefitRouter from './benefit_router.js';

const port = 8000;
const app = express();
connect();

// const benfitInserted = await BenefitSchema.create(
// 	{	
// 		title: "세기말 풋사과 보습학원 패키지",
// 		company: "lotteworld",
// 		start_at: '2024-04-01',
// 		end_at: '2024-04-30',
// 		price: 53900,
// 		benefit_type: 'normal',
// 	},
// 	{
// 		title: '학생이라면? 롯데월드!',
// 		company: "lotteworld",
// 		start_at: '2024-04-01',
// 		end_at: '2024-04-30',
// 		price: 38500,
// 		benefit_type: 'normal'
// 	},
// 	{
// 		title: '케이뱅크 봄나들이 이벤트',
// 		company: 'lotteworld',
// 		start_at: '2024-04-01',
// 		end_at: '2024-06-30',
// 		price: 31000,
// 		benefit_type: 'membership',
// 	},
// 	{
// 		title: 'SKT 멤버십(기본제휴)',
// 		company: 'lotteworld',
// 		start_at: '2024-04-01',
// 		end_at: '2024-04-30',
// 		price: 37200,
// 		benefit_type: 'membership',
// 	},
// 	{
// 		title: '카카오뱅크X롯데월드 26일 저금 도전!',
// 		company: 'lotteworld',
// 		start_at: '2024-03-08',
// 		end_at: '2024=04-30',
// 		price: 38000,
// 		benefit_type: 'card',
// 	},
// 	{
// 		title: '제휴카드 프로모션',
// 		company: 'lotteworld',
// 		start_at: '2024-04-01',
// 		end_at: '2024-04-30',
// 		price: 27900,
// 		benefit_type: 'card',
// 	},
// 	{
// 		title: '생일축하 파크이용권 40% 할인',
// 		company: 'seoulland',
// 		start_at: '2024-04-01',
// 		end_at: '2024-04-30',
// 		price: 31200,
// 		benefit_type: 'normal',
// 	},
// 	{
// 		title: '대중교통 이용시 28,000원',
// 		company: 'seoulland',
// 		start_at: '2024-04-01',
// 		end_at: '2024-04-30',
// 		price: 28000,
// 		benefit_type: 'normal',
// 	},
// 	{
// 		title: 'KB Pay 결제 시 실적에 상관없이 더블 할인 1+1!',
// 		company: 'seoulland',
// 		start_at: '2024-03-01',
// 		end_at: '2024-05-06',
// 		price: 24000,
// 		benefit_type: 'card'
// 	}
// );


app.use(bodyParser.json())
app.use(cors())
app.use('/benefit', benefitRouter)
app.listen(port, ()=>{
	console.log(`server start on ${port}`);
})

// const benefitModify = await BenefitSchema.findOne({_id: '661cab5770f2928aa8a761d1'});
// await BenefitSchema.updateOne(benefitModify, {
// 	img: 'https://seoulland.co.kr/_File/operate/saleProgram//listImgFile_1682499760_0.webp'
// });


// const benfitInserted = await BenefitSchema.create(
	// {
	// 	title: '픽시매직 교복 패키지',
	// 	company: 'lotteworld',
	// 	start_at: '2024-04-01',
	// 	end_at: '2024-04-30',
	// 	price: 53000,
	// 	benefit_type: 'normal',	
	// 	img: 'https://adventure.lotteworld.com/image/2024/3/202403260512067230_231.jpg',
	// },
// 	{
// 		title: '롯데카드 제휴실적에 상관없이 40%할인!',
// 		company: 'seoulland',
// 		start_at: '2024-03-04',
// 		end_at: '2024-04-30',
// 		price: 31200,
// 		benefit_type: 'card',
// 		img: 'https://seoulland.co.kr/_File/operate/saleProgram//listImgFile_1653554002_0.webp',
// 	},
// 	{
// 		title: '기아멤버스 전 회원 최대 71% 혜택! (포인트 차감 조건)',
// 		company: 'seoulland',
// 		start_at: '2024-04-01',
// 		end_at: '2024-05-31',
// 		price: 15000,
// 		benefit_type: 'membership',
// 		img: 'https://seoulland.co.kr/_File/operate/saleProgram//listImgFile_1692345851_0.webp'
// 	}
// );