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

// const benefitInfoUpdate = await BenefitInfoSchema.findOne({ref_id: "661cab5770f2928aa8a761cc"}).populate("contents");
// console.log(benefitInfoUpdate);
// await BenefitInfoSchema.updateOne(benefitInfoUpdate, {description: "* 본인 40% 및 동반 3인 20~30%",});

// const benefitUpdate = await BenefitSchema.findOne({_id: "6620b40363a5cfa7de482366"});
// console.log(benefitUpdate);
// await BenefitSchema.updateOne(benefitUpdate, {start_at: "2024-05-01", end_at: "2024-05-31"});

// const benefitInfoInserted = await BenefitInfoSchema.create(
// 	{
// 		ref_id: '6620b1bff1604fe85d8e3d59',
// 		title: "KT 멤버십(기본제휴)",
// 		start_at: "2024-05-01",
// 		end_at: "2024-05-31",
// 		description: "* KT멤버십 회원 본인 40% + 동반 3인 30%",
// 		contents : [
// 			[			
// 				{
// 					title: '1일권 어른',
// 					original_price: 62000,
// 					discounted_price: 37200,
// 					companion: 43400,
// 				},
// 				{
// 					title: '1일권 청소년',
// 					original_price: 54000,
// 					discounted_price: 32400,
// 					companion: 37800,
// 				},
// 				{
// 					title: '1일권 어린이',
// 					original_price: 47000,
// 					discounted_price: 28200,
// 					companion: 32900,
// 				},
// 			],
// 			[
// 				{
// 					title: '야간권 어른',
// 					original_price: 50000,
// 					discounted_price: 30000,
// 					companion: 35000,
// 				},
// 				{
// 					title: '야간권 청소년',
// 					original_price: 43000,
// 					discounted_price: 25800,
// 					companion: 30100,
// 				},
// 				{
// 					title: '야간권 어린이',
// 					original_price: 36000,
// 					discounted_price: 21600,
// 					companion: 25200,
// 				},
// 			],
// 		]
// 	}
// )

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