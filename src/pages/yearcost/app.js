import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connect from "./connect.js";
import yearCostRouter from './yearcost_router.js';
import YearCostBenefitSchema from './yearCostBenefitSchema.js';
import yearCostBenefitExplainRouter from '../yearcostBenefitExplain/yearcostBenefitExplain_router.js';
import YearcostBenefitExplainSchema from '../yearcostBenefitExplain/yearcostBenefitExplain_schema.js';


const port = 8000;
const app = express();
connect();

app.use(bodyParser.json());
app.use(cors());
app.use('/yearcost', yearCostRouter);
app.use('yearcostBenefit/explain', yearCostBenefitExplainRouter);
app.listen(port, ()=>{
	console.log(`server start on ${port}`);
});

// const explainInserted = await YearcostBenefitExplainSchema.create(
// 	{
// 		ref_id: "662f526f3cc7410bc53860f1",
// 		contents : [
// 			{
// 				title: "그린권 어른",
// 				original_price: "250,000",
// 				discounted_price: "200,000",
// 			},
// 			{
// 				title: "그린권 어린이",
// 				original_price: "180,000",
// 				discounted_price: "144,000",
// 			},
// 			{
// 				title: "그린권 시니어",
// 				original_price: "170,000",
// 				discounted_price: "136,000",
// 			},
// 		],
// 		description: "본인 및 동반 2인까지 할인 대상"
// 	},
// 	{
// 		ref_id: "662f526f3cc7410bc53860ee",
// 		contents : [
// 			{
// 				title: "어른",
// 				original_price: "380,000",
// 				discounted_price: "296,000",
// 			},
// 			{
// 				title: "어린이",
// 				original_price: "310,000",
// 				discounted_price: "240,000",
// 			},
// 		],
// 		description: "어드벤처 연간이용권(그린권) + 아쿠아리움 연간이용권(마린 마스터)",
// 	},
// 	{
// 		ref_id: "662f526f3cc7410bc53860f2",
// 		contents : [
// 			{
// 				title: "그린권 어른",
// 				original_price: "250,000",
// 				discounted_price: "200,000",
// 			},
// 			{
// 				title: "그린권 어린이",
// 				original_price: "180,000",
// 				discounted_price: "144,000",
// 			},
// 			{
// 				title: "그린권 시니어",
// 				original_price: "170,000",
// 				discounted_price: "136,000",
// 			},
// 			{
// 				title: "그린권 베이비",
// 				original_price: "110,000",
// 				discounted_price: "88,000",
// 			},
// 		],
// 		description: "본인 및 동반 3인 할인",
// 	},
// 	{
// 		ref_id: "662f526f3cc7410bc53860f2",
// 		contents : [
// 			{
// 				title: "그린권 어른",
// 				original_price: "250,000",
// 				discounted_price: "200,000",
// 			},
// 			{
// 				title: "그린권 어린이",
// 				original_price: "180,000",
// 				discounted_price: "144,000",
// 			},
// 			{
// 				title: "그린권 시니어",
// 				original_price: "170,000",
// 				discounted_price: "136,000",
// 			},
// 			{
// 				title: "그린권 베이비",
// 				original_price: "110,000",
// 				discounted_price: "88,000",
// 			},
// 		],
// 		description: "본인 및 동반 3인 할인",
// 	},
// 	{
// 		ref_id: "662f526f3cc7410bc53860f3",
// 		contents : [
// 			{
// 				title: "그린권 어른",
// 				original_price: "250,000",
// 				discounted_price: "200,000",
// 			},
// 			{
// 				title: "그린권 어린이",
// 				original_price: "180,000",
// 				discounted_price: "144,000",
// 			},
// 			{
// 				title: "그린권 시니어",
// 				original_price: "170,000",
// 				discounted_price: "136,000",
// 			},
// 			{
// 				title: "그린권 베이비",
// 				original_price: "110,000",
// 				discounted_price: "88,000",
// 			},
// 		],
// 		description: "자녀 2인 이상 가족 우대",
// 	},
// 	{
// 		ref_id: "662f526f3cc7410bc53860f4",
// 		contents : [
// 			{
// 				title: "그린권 어른",
// 				original_price: "250,000",
// 				discounted_price: "200,000",
// 			},
// 			{
// 				title: "그린권 어린이",
// 				original_price: "180,000",
// 				discounted_price: "144,000",
// 			},
// 			{
// 				title: "그린권 시니어",
// 				original_price: "170,000",
// 				discounted_price: "136,000",
// 			},
// 		],
// 		description: "당일 생일이신 손님 + 동반 2인",
// 	},
// );

// const shemaInserted = await YearCostBenefitSchema.create(
// 	{
// 		title: "연간이용 패키지권 우대",
// 		company: "lotteworld",
// 		start_at: "2024-04-01",
// 		end_at: "2024-04-30",
// 		img: "https://adventure.lotteworld.com/image/2024/3/202403280308112670.jpg"
// 	},
// 	{
// 		title: "롯데월드 임직원 추천 우대",
// 		company: "lotteworld",
// 		start_at: "2024-04-01",
// 		end_at: "2024-04-30",
// 		img:"https://adventure.lotteworld.com/image/2024/3/202403280256369530.jpg"
// 	},
// 	{	
// 		title: "그룹사 임직원 우대",
// 		company: "lotteworld",
// 		start_at: "2024-04-01",
// 		end_at: "2024-04-30",
// 		img:"https://adventure.lotteworld.com/image/2024/3/202403280235406270.jpg"
// 	},
// 	{
// 		title: "장애인 우대",
// 		company: "lotteworld",
// 		start_at: "2024-04-01",
// 		end_at: "2024-04-30",
// 		img: "https://adventure.lotteworld.com/image/2024/3/202403280234025020.jpg"
// 	},
// 	{
// 		title: "인근 지역주민 우대",
// 		company: "lotteworld",
// 		start_at: "2024-04-01",
// 		end_at: "2024-04-30",
// 		img:"https://adventure.lotteworld.com/image/2024/3/202403280306222200.jpg"
// 	},
// 	{		
// 		title: "다자녀 우대",
// 		company: "lotteworld",
// 		start_at: "2024-04-01",
// 		end_at: "2024-04-30",
// 		img:"https://adventure.lotteworld.com/image/2024/3/202403280304288600.jpg"
// 	},
// 	{	
// 		title: "생일자 우대",
// 		company: "lotteworld",
// 		start_at: "2024-04-01",
// 		end_at: "2024-04-30",
// 		img: "https://adventure.lotteworld.com/image/2024/3/202403280231098450.jpg"
// 	},
// 	{
// 		title: "신규가입",
// 		company: "lotteworld",
// 		start_at: "2024-04-01",
// 		end_at: "2024-04-30",
// 		img: "https://adventure.lotteworld.com/image/2024/3/202403280229108290.jpg"
// 	}
// )


