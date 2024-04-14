import express from 'express';
import bcrypt from 'bcryptjs';
import connect from './mongodbConnection.js'; 
import Signup from './signupModel';
import cors from 'cors'
import bodyParser from 'body-parser'

connect();
const app = express();

app.use(bodyParser.json()); 
app.use(cors())

app.post('/signUp', async (req, res) => {
  try {
    const { id, password, phonenumber } = req.body;
    const existingUser = await Signup.findOne({ id });
    if (existingUser) {
      return res.status(400).send('이미 사용중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new Signup({
      id,
      password: hashedPassword,
      phonenumber
    });
    await user.save();
    res.status(201).send('회원가입 성공');
  } catch (error) {
    console.error(error);
    res.status(500).send('서버 에러');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행중입니다.`);
});
