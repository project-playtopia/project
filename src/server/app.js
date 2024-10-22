import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import connect from './connect/connect.js';

// routes
import attractionRouter from './routes/attractionRouter.js';

import benefitRouter from './routes/benefitRouter.js';
import benefitInfoRouter from './routes/benfitInfoRouter.js';

import changePwRouter from './routes/changePwRouter.js';

import courseRouter from './routes/courseRouter.js';

import faqRouter from './routes/faqRouter.js';
import faqExplainRouter from './routes/faqExplainRouter.js';

import fnbRouter from './routes/fnbRouter.js';
import fnbExplainRouter from './routes/fnbExplainRouter.js';

import giftshopExplainRouter from './routes/giftshopExplainRouter.js';
import giftshopRouter from './routes/giftshopRouter.js';
import guidemapRouter from './routes/guidemapRouter.js';

import LostnFoundListRouter from './routes/lostnfoundListRouter.js';
import LostnFoundExplainRouter from './routes/lostnfoundExplainRouter.js';

import qnaRouter from './routes/qnaRouter.js';
import qnaExplainRouter from './routes/qnaExplainRouter.js';

import yearCostRouter from './routes/yearcostRouter.js';
import yearcostBenefitExplainRouter from './routes/yearcostbenefitExplainRouter.js';

import signInRouter from './routes/signInRouter.js';
import signUpRouter from './routes/signupRouter.js';

import giftshopSchema from './schemas/giftshopSchema.js';
import courseSchema from './schemas/courseSchema.js';
import giftshopExplainSchema from './schemas/giftshopExplainSchema.js';
import faqSchema from './schemas/faqSchema.js';
import faqExplainSchema from './schemas/faqExplainSchema.js';
import guidemapSchema from './schemas/guidemapSchema.js';
import LostnFoundExplainSchema from './schemas/LostnFoundExplainSchema.js';
import LostnFoundSchema from './schemas/LostnFoundSchema.js';
import qnaExplainSchema from './schemas/qnaExplainSchema.js';
import qnaSchema from './schemas/qnaSchema.js';
import yearcostBenefitSchema from './schemas/yearcostBenefitSchema.js';
import yearcostBenefitExplainSchema from './schemas/yearcostBenefitExplainSchema.js';
import performanceRouter from './routes/performanceRouter.js';
import performanceSchema from './schemas/performanceSchema.js';
import signupSchema from './schemas/signupSchema.js';

const PORT = 8000;
const app = express();
connect();

app.use(bodyParser.json());
app.use(express.urlencoded({extended : false}));
app.use(cors({
  origin: 'https://projectplaytopia.vercel.app',
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true,
}));

app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://projectplaytopia.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.sendStatus(204);
});


app.use('/attraction', attractionRouter);
app.use('/api', changePwRouter);

app.use('/benefit', benefitRouter);
app.use('/benefitExplain', benefitInfoRouter);
app.use('/course', courseRouter);
app.use('/faqlist', faqRouter);
app.use('/faqexplain', faqExplainRouter);
app.use('/fnb', fnbRouter);
app.use('/fnbExplain', fnbExplainRouter);

app.use('/giftshop', giftshopRouter);
app.use('/giftshopExplain', giftshopExplainRouter);
app.use('/guide', guidemapRouter);
app.use('/getuser', signInRouter);
app.use('/register', signUpRouter);

app.use('/lostnfoundlist', LostnFoundListRouter);
app.use('/lostnfoundexplain', LostnFoundExplainRouter);

app.use('/performance', performanceRouter);

app.use('/qnalist', qnaRouter);
app.use('/qnaexplain', qnaExplainRouter); 

app.use('/yearcost', yearCostRouter);
app.use('/yearcostBenefitExplain', yearcostBenefitExplainRouter);

app.listen(PORT, ()=>{
	console.log(`server start on ${PORT}`);
});
