import express from 'express';
import connect from './connect.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import BenefitSchema from './benefit_schema.js';
import benefitRouter from './benefit_router.js';
import benefitExplainRouter from '../benefitexplain/benefitExplain_router.js';
import BenefitInfoSchema from '../benefitexplain/benefit_explain_shema.js';

const port = 8000;
const app = express();
connect();

app.use(bodyParser.json())
app.use(cors())
app.use('/benefit', benefitRouter);
app.use('/benefitExplain', benefitExplainRouter);
app.listen(port, ()=>{
	console.log(`server start on ${port}`);
})

// const benefitInfoInserted = await BenefitInfoSchema.create(
// 	{
// 		ref_id: '661b8b01e2d89c8c164e28e3',
// 		contents : [
// 			[			
// 				{
// 					title: '1일권 어른',
// 					original_price: 62000,
// 					discounted_price: 34100,
// 					companion: 34100,
// 				},
// 				{
// 					title: '1일권 청소년',
// 					original_price: 54000,
// 					discounted_price: 34100,
// 					companion: 29700,
// 				},
// 				{
// 					title: '1일권 어린이',
// 					original_price: 47000,
// 					discounted_price: 34100,
// 					companion: 25850,
// 				},
// 			],
// 			[
// 				{
// 					title: '야간권 어른',
// 					original_price: 50000,
// 					discounted_price: 27500,
// 					companion: 27500,
// 				},
// 				{
// 					title: '야간권 청소년',
// 					original_price: 43000,
// 					discounted_price: 27500,
// 					companion: 23650,
// 				},
// 				{
// 					title: '야간권 어린이',
// 					original_price: 36000,
// 					discounted_price: 27500,
// 					companion: 19800,
// 				},
// 			],
// 		]
// 	}
// )

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