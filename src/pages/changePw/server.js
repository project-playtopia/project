import express from 'express';
import connect from './connect.js'; 
import router from './router.js';
import cors from 'cors'
import bodyParser from 'body-parser'

connect();
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(express.urlencoded({extended : false}));
app.use(cors({
  origin : 'http://localhost:3000',
  method : ['GET', 'POST', 'DELETE', 'PUT'],
  credentials : true,
}));

app.use('/api', router)
 

app.listen(port,()=>{
  console.log(`server is on ${port}`)
})

