import User from '../signUp/signupSchema.js'; 

export const deleteUser = async (req, res) => {
  try {
    console.log(req.params.id)
    console.log(req)
    await User.deleteOne({ id: req.params.id });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Error deleting user' });
  }
};

