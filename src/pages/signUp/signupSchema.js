import { Schema, model } from "mongoose";

const signupSchema = new Schema({
  id:{type : String, unique : true, required : true},
  password:{type:String, required:true},
  phonenumber : {type:String,required:true}
})

export default model("Signup", signupSchema);