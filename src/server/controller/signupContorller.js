import Signup from '../schemas/signupSchema.js'; 

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
      return res.status(400).json('이미 사용중인 아이디입니다.');
    }

    await Signup.create(user);
    res.status(201).json('회원가입 성공');
  } catch (error) {
    res.status(500).json('서버 에러');
  }
};

export { signUp };