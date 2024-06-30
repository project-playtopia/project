import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connect from "./connect.js";
import yearCostRouter from './yearcost_router.js';
import YearCostBenefitSchema from './yearCostBenefitSchema.js';


const port = 8000;
const app = express();
connect();

app.use(bodyParser.json());
app.use(cors());
app.use('/yearcost', yearCostRouter);
app.listen(port, ()=>{
	console.log(`server start on ${port}`);
});

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


