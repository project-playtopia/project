import { Schema, model } from "mongoose";

const signupSchema = new Schema({
  id:{type : String, require : true},
  password:{type:String, require:true},
  phonenumber : {type:Number,require:true}
})

export default model("Signup", signupSchema);