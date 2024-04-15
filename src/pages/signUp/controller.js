import Signup from './signupSchema.js'; 

const signUp = async (req, res) => {
  try {
    const user = {
      id : req.body.id,
      password : req.body.password,
      phonenumber : req.body.phonenumber
    };
    
    console.log(user)

    const existingUser = await Signup.findOne({ id: user.id });
    if (existingUser) {
      return res.status(400).send('이미 사용중인 아이디입니다.');
    }

    await Signup.create(user);
    res.status(201).send('회원가입 성공');
  } catch (error) {
    res.status(500).send('서버 에러');
  }
};

export { signUp };
