import Signup from '../schemas/signupSchema.js';

const findByPhone = async (req, res) => {
  const { phonenumber } = req.body;
  try {
    const user = await Signup.findOne({ phonenumber });
    if (user) {
      res.status(200).json({ id: user.id });
    } else {
      res.status(404).send('User not found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export { findByPhone };
