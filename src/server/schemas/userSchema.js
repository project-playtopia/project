
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  id: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

const User = model("User", userSchema);

export const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    await newUser.save();
    console.log("User created successfully");
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export default User;
