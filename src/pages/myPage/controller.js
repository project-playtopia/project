import Signup from '../signUp/signupSchema.js'; 

export const deleteUser = async (req, res) => {
  try {
    await Signup.deleteOne({ id: req.body.userId });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Error deleting user' });
  }
};