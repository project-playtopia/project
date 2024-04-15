import express from 'express';
import connect from './connect.js'; 
import router from './router.js';
import cors from 'cors'
import bodyParser from 'body-parser'

connect();
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.use(cors())
app.use('/signUp', router)
 

app.listen(port,()=>{
  console.log(`server is on ${port}`)
})

