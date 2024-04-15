import { Schema, model } from "mongoose";

const signupSchema = new Schema({
  id:{type : String, unique : true, require : true},
  password:{type:String, require:true},
  phonenumber : {type:String,require:true}
})

export default model("Signup", signupSchema);