import SignUp from '../signUp/signupSchema.js';

const changePassword = async (req, res) => {
  try {
    const { id, oldPassword, newPassword } = req.body;

    const user = await SignUp.findOne({ id });
    if (!user) {
      return res.status(404).json({ message: '해당 아이디를 찾을 수 없습니다.' });
    }
    
    if (user.password !== oldPassword) {
      return res.status(401).json({ message: '기존 비밀번호가 일치하지 않습니다.' });
    }

    // 새 비밀번호로 업데이트
    user.password = newPassword;
    await user.save();

    return res.status(200).json({ message: '비밀번호가 변경되었습니다.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: '서버 오류' });
  }
};

export { changePassword };
