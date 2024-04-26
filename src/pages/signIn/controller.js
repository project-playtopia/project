import User from './userSchema.js'; 

const signIn = async (req, res) => {
  try {
    const data = {
      id: req.body.id,
      password: req.body.password
    };

    const user = await User.findOne({ id: data.id }); 
    if (!user) {
      return res.status(404).json({ message: '해당 아이디를 찾을 수 없습니다.' });
    }
    if (user.password !== data.password) {
      return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });
    }

    return res.status(200).json({ message: '로그인 성공', user });
  } 
  catch (error) {
    console.error(error);
    return res.status(500).json({ message: '서버 오류' });
  }
};

export { signIn };

